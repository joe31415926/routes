#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <sys/uio.h>
#include <unistd.h>

#define BUFFER_SIZE 100000
#define MAX_NUM 1000

// global data structures to hold everything organized
int trip_length_minutes;
char *entrypoints[MAX_NUM] = {0};
char *junctions[MAX_NUM] = {0};
int segments[MAX_NUM][5] = {0};
int route[MAX_NUM][3] = {0};

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
    
    printf("var map = [\n");
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
        
        while (*j1 == ' ') j1++;    // remove spaces at the beginning
        while (*j2 == ' ') j2++;
        while (j1[strlen(j1)-1]==' ') j1[strlen(j1)-1]='\0'; // and end
        while (j2[strlen(j2)-1]==' ') j2[strlen(j2)-1]='\0';
        
        float total_distance_kilometers = strtof(td, NULL);
        float portage_distance_meters = strtof(pd, NULL);
        float number_of_portages = strtof(np, NULL);
        
        
        segments[num_segments][0] = -1;
        if (strcmp(e,"0"))
            segments[num_segments][0] = list_id(e, entrypoints);
        segments[num_segments][1] = list_id(j1, junctions);
        segments[num_segments][2] = list_id(j2, junctions);
        printf("{ entry_idx: %4d, junctA_idx: %3d, junctB_idx: %3d, tot_dist_km: %5.2f, port_dist_m: %5.0f, num_port: %2.0f}, // %s -> %s\n", segments[num_segments][0], segments[num_segments][1], segments[num_segments][2], total_distance_kilometers, portage_distance_meters, number_of_portages, j1, j2);

        num_segments++;
        
        s += strlen(s);
        if (nl) s = nl;
    }
    printf("]\n\n");
    int i;
    printf("var segments = [\n");
    int num_entries = 0;
    for (i = 0; i < num_segments; i++)
        if (segments[i][0] != -1)
        {
            num_entries++;
            printf("{ available: 1, from_junct_idx: %3d, to_junct_idx: %3d, map_idx: %3d, time_minutes: 0},\n", segments[i][1], segments[i][2], i);
        }
    for (i = 0; i < num_segments; i++)
    {
        if (segments[i][0] == -1)
        {
            printf("{ available: 1, from_junct_idx: %3d, to_junct_idx: %3d, map_idx: %3d, time_minutes: 0},\n", segments[i][1], segments[i][2], i);
        }
        printf("{ available: 1, from_junct_idx: %3d, to_junct_idx: %3d, map_idx: %3d, time_minutes: 0},\n", segments[i][2], segments[i][1], i);
    }
    printf("]\n\n");
    printf("var num_entries = %3d\n\n", num_entries);
    printf("var entrypoints = [\"%s\"", entrypoints[0]);
    for (i = 1; entrypoints[i]; i++)
        printf(", \"%s\"", entrypoints[i]);
    printf("]\n\n");
    printf("var junctions = [\"%s\"", junctions[0]);
    for (i = 1; junctions[i]; i++)
        printf(", \"%s\"", junctions[i]);
    printf("]\n\n");
}