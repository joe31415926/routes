#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <sys/uio.h>
#include <unistd.h>

#define BUFFER_SIZE 100000
#define MAX_NUM 1000

#define TRAVERSED_FROM_1_TO_2 1
#define TRAVERSED_FROM_2_TO_1 2

// global data structures to hold everything organized
int trip_length_minutes;
char *entrypoints[MAX_NUM] = {0};
char *junctions[MAX_NUM] = {0};
int segments[MAX_NUM][5] = {0};
int route[MAX_NUM][3] = {0};

void print_route_if_match(int num_segments, int total_minutes)
{
    int seg;
    int entry = 0;  // is our current junction also an exit point?
    for (seg = 0; segments[seg][1] != segments[seg][2]; seg++)
        if (segments[seg][1] == route[num_segments-1][2] && segments[seg][0] != -1)
            entry = 1;
    
    if (entry && total_minutes > trip_length_minutes - 8 * 60 && total_minutes < trip_length_minutes + 8 * 60)
    {
        int i;
        printf("%6d: ", total_minutes);
        printf("%s, ", entrypoints[segments[route[0][0]][0]]);
        printf("%s, ", junctions[segments[route[0][0]][1]]);
        
        for (i = 0; i < num_segments; i++)
            if (route[i][1] == TRAVERSED_FROM_1_TO_2)
                printf("%s, ", junctions[segments[route[i][0]][2]]);
            else
                printf("%s, ", junctions[segments[route[i][0]][1]]);
        
        printf("%s\n", entrypoints[segments[route[num_segments-1][0]][0]]);
    }
}

void explore(void)
{
    int num_segments = 0;
    int total_minutes = 0;
    while (route[num_segments][1])
        total_minutes += segments[route[num_segments++][0]][4];
    
    if (total_minutes > trip_length_minutes + 8 * 60) return;   // the trip is too long already. Don't explore anymore
    
    print_route_if_match(num_segments, total_minutes);
    
    int seg;
    for (seg = 0; segments[seg][1] != segments[seg][2]; seg++)
    {
        if (seg != route[num_segments-1][0]) // ignore the segment we were just on
        {
            if (segments[seg][1] == route[num_segments-1][2])  // is our current junction at the beginning of this segment?
            {
                if ((segments[seg][3] & TRAVERSED_FROM_1_TO_2) == 0)  // and we haven't traversed this segment forward yet?
                {
                    int save = segments[seg][3];
                    // add the segment, direction and junction to our route
                    route[num_segments][0] = seg;
                    route[num_segments][1] = TRAVERSED_FROM_1_TO_2;
                    route[num_segments][2] = segments[seg][2];
                    // mark the segment on the map as "used" forward
                    segments[seg][3] |= TRAVERSED_FROM_1_TO_2;
                    explore();
                    // reset and continue
                    route[num_segments][0] = route[num_segments][1] = route[num_segments][2] = 0;
                    segments[seg][3] = save;
                }
            }
            if (segments[seg][2] == route[num_segments-1][2])  // is our current junction at the end of this segment?
            {
                if ((segments[seg][3] & TRAVERSED_FROM_2_TO_1) == 0)  // and we haven't traversed this segment backward yet?
                {
                    int save = segments[seg][3];
                    // add the segment, direction and junction to our route
                    route[num_segments][0] = seg;
                    route[num_segments][1] = TRAVERSED_FROM_2_TO_1;
                    route[num_segments][2] = segments[seg][1];
                    // mark the segment on the map as "used" backward
                    segments[seg][3] |= TRAVERSED_FROM_2_TO_1;
                    explore();
                    // reset and continue
                    route[num_segments][0] = route[num_segments][1] = route[num_segments][2] = 0;
                    segments[seg][3] = save;
                }
            }
        }
    }
}

int list_id(char *key, char **list)
{
    int num = 0;
    while (list[num] && strcmp(key,list[num]))
        num++;
    if (!list[num])
        list[num] = key;
    return num;
}

int main(int argc, char **argv)
{
    if (argc != 5)
    {
        fprintf(stderr, "usage: %s trip_length_hours kilometer_per_hour_paddling meters_per_hour_portage load_and_unload_minutes\n", argv[0]);
        fprintf(stderr, "\t%s 35 2.5 120 25.0\n", argv[0]);
        return -1;
    }
    float trip_length_hours = strtof(argv[1], NULL);
    float kilometer_per_hour_paddling = strtof(argv[2], NULL);
    float meters_per_hour_portage = strtof(argv[3], NULL);
    float load_and_unload_minutes = strtof(argv[4], NULL);
    if (trip_length_hours < 0.0 || kilometer_per_hour_paddling < 0.001 || meters_per_hour_portage < 1.0 || load_and_unload_minutes < 0.0)
    {
        fprintf(stderr, "input parameters are out of range\n");
        fprintf(stderr, "usage: %s trip_length_days kilometer_per_hour_paddling meters_per_hour_portage load_and_unload_minutes\n", argv[0]);
        fprintf(stderr, "\t%s 5.5 2.5 120 25.0\n", argv[0]);
        return -1;
    }
    
    trip_length_minutes = trip_length_hours * 60;
    
    // read the file into memory
    char *b = (char *) calloc(BUFFER_SIZE, 1);
    if (!b) return -1; // no memory available. bail
    ssize_t bytes_read;
    while ((bytes_read = read(0,b+strlen(b),BUFFER_SIZE-strlen(b)-1)) > 0)
        b[strlen(b)+bytes_read] = '\0';
    if (bytes_read < 0 || strlen(b) == BUFFER_SIZE-1) return -1; // file too big to fit in memory. bail
    
    // skip over the first line
    char *s = b;
    char *nl = strchr(s,'\n');
    if (!nl) return -1; // no first line. bail
    s = nl+1;
    
    // scan out the data
    int num_segments = 0;
    while (strlen(s))
    {
        char *nl = strchr(s,'\n');
        if (nl) *nl++ = '\0';
        
        char *e = s;
        if (s && (s = strchr(s, '\t'))) *s++ = '\0';
        char *j1 = s;
        if (s && (s = strchr(s, '\t'))) *s++ = '\0';
        char *j2 = s;
        if (s && (s = strchr(s, '\t'))) *s++ = '\0';
        char *td = s;
        if (s && (s = strchr(s, '\t'))) *s++ = '\0';
        char *pd = s;
        if (s && (s = strchr(s, '\t'))) *s++ = '\0';
        char *np = s;
        if (s && (s = strchr(s, '\t'))) *s++ = '\0';
        char *notes = s;
        if (!s) return -1; // not 7 columns on this line
        
        float total_distance_kilometers = strtof(td, NULL);
        float portage_distance_meters = strtof(pd, NULL);
        float number_of_portages = strtof(np, NULL);
        if (total_distance_kilometers < 0.0 || portage_distance_meters < 0.0 || number_of_portages < 0.0 ||
            total_distance_kilometers > 1000.0 || portage_distance_meters > 1000000.0 || number_of_portages > 100.0) return -1; // parameters on this line are out of range. bail

        segments[num_segments][0] = -1;
        if (strcmp(e,"0"))
            segments[num_segments][0] = list_id(e, entrypoints);
        segments[num_segments][1] = list_id(j1, junctions);
        segments[num_segments][2] = list_id(j2, junctions);
        
        float minutes_padding =  (total_distance_kilometers - portage_distance_meters / 1000.0) / kilometer_per_hour_paddling * 60.0;
        float minutes_portaging = portage_distance_meters / meters_per_hour_portage * 60.0;
        float minutes_loading_and_unloading = load_and_unload_minutes * number_of_portages;

        // calculate the total cost (in minutes) for this segment (in either direction)
        segments[num_segments][4] = minutes_padding + minutes_portaging + minutes_loading_and_unloading;
        num_segments++;
        
        s += strlen(s);
        if (nl) s = nl;
    }
    
    
    int (*seg)[5];
    for (seg = segments; seg[1] != seg[2]; seg++)
        if ((*seg)[0] != -1)
        {
            // start from this entry point
            route[0][0] = i;
            route[0][1] = TRAVERSED_FROM_1_TO_2;
            route[0][2] = (*seg)[2];
            // mark the segment on the map as "used"
            (*seg)[3] = TRAVERSED_FROM_1_TO_2;
            explore();
            // reset and continue
            route[0][0] = route[0][1] = route[0][2] = (*seg)[3] = 0;
        }
}