#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <sys/uio.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/stat.h>

#define MAX_NUM 1000

// global data structures to hold everything organized
int trip_length_minutes;
char *entrypoints[MAX_NUM] = {0};
char *junctions[MAX_NUM] = {0};
char *junct_lat[MAX_NUM];
float junct_lat_float[MAX_NUM];
char *junct_lon[MAX_NUM];
float junct_lon_float[MAX_NUM];
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

void die(char *message)
{
    fprintf(stderr, "%s", message);
    exit(-1);
}

char *pullstring(char **s)
{
    char *toreturn;
    if (**s == '"')
    {
        (*s)++;
        toreturn = *s;
        while (**s && **s != '"') (*s)++;
        if (**s != '"') die("parse error1\n");
        *(*s)++ = '\0';
        if (**s != ',' && **s != '\0') die("parse error2\n");
        (*s)++;
    }
    else
    {
        toreturn = *s;
        while (**s && **s != ',') (*s)++;
        if (**s != ',' && **s != '\0') die("parse error2\n");
        *(*s)++ = '\0';
    }
    while (*toreturn == ' ') toreturn++;
    while (toreturn[strlen(toreturn)-1] == ' ') toreturn[strlen(toreturn)-1] = '\0';
    return toreturn;
}

int main(int argc, char **argv)
{
    if (argc != 3) die("usage: createjavascript data.csv Lake\\ coordinates.csv\n");
    
    struct stat st;
    ssize_t bytes_read;

    int fdes = open(argv[1], O_RDONLY);
    if (fdes==-1) die("file not found\n");
    if (fstat(fdes, &st)==-1) die("file not found\n");
    // read the file into memory
    char *b = (char *) calloc(st.st_size+1, 1); // add a byte to null-terminate
    if (!b)  die("no memory\n"); // no memory available. bail
    while ((bytes_read = read(fdes,b+strlen(b),st.st_size-strlen(b))) > 0);
    if (bytes_read < 0 || strlen(b) != st.st_size)  die("read error\n"); // file too big to fit in memory. bail
    close(fdes);
    
    fdes = open(argv[2], O_RDONLY);
    if (fdes==-1) die("file not found\n");
    if (fstat(fdes, &st)==-1)die("file not found\n");
    // read the file into memory
    char *c = (char *) calloc(st.st_size+1, 1); // add a byte to null-terminate
    if (!c) die("no memory\n"); // no memory available. bail
    while ((bytes_read = read(fdes,c+strlen(c),st.st_size-strlen(c))) > 0);
    if (bytes_read < 0 || strlen(c) != st.st_size) die("read error\n"); // file too big to fit in memory. bail
    close(fdes);
    
    
    // skip over the first line
    char *s = b;
    char *nl = strchr(s,'\n');
    if (!nl) die("no first line.\n");
    s = nl+1;
    
    printf("var map = [\n");
    // scan out the data
    int num_segments = 0;
    while (strlen(s))
    {
        char *nl = strchr(s,'\n');
        if (nl) *nl++ = '\0';
        
        char *e = pullstring(&s);
        char *j1 = pullstring(&s);
        char *j2 = pullstring(&s);
        char *td = pullstring(&s);
        char *pd = pullstring(&s);
        char *np = pullstring(&s);
        char *notes = pullstring(&s);
        
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
    printf("];\n\n");
    
    float ls_lat_num = 0.0;
    float ls_lat_sum_x = 0.0;
    float ls_lat_sum_y = 0.0;
    float ls_lat_sum_x_squared = 0.0;
    float ls_lat_sum_y_squared = 0.0;
    float ls_lat_sum_x_times_y = 0.0;
    
    float ls_lon_num = 0.0;
    float ls_lon_sum_x = 0.0;
    float ls_lon_sum_y = 0.0;
    float ls_lon_sum_x_squared = 0.0;
    float ls_lon_sum_y_squared = 0.0;
    float ls_lon_sum_x_times_y = 0.0;
    
    s = c;
    while (strlen(s))
    {
        char *nl = strchr(s,'\n');
        if (nl) *nl++ = '\0';
        
        char *e = pullstring(&s);
        char *lat = pullstring(&s);
        char *lon = pullstring(&s);
        char *pix_x = pullstring(&s);
        char *pix_y = pullstring(&s);
        
        int idx = 0;
        while (junctions[idx] && strcmp(e,junctions[idx]))
            idx++;
        if (junctions[idx] != NULL)
        {
            junct_lat[idx] = lat;
            junct_lon[idx] = lon;
            junct_lat_float[idx] = strtof(lat, NULL) - 45;  // normalize to improve accuracy
            junct_lon_float[idx] = strtof(lon, NULL) + 78;
            
            if (strcmp(pix_x,"") && strcmp(pix_x,"0"))
            {
                float pix_x_float = strtof(pix_x, NULL);
                float pix_y_float = strtof(pix_y, NULL);
                
                ls_lat_num++;
                ls_lat_sum_x += junct_lat_float[idx];
                ls_lat_sum_y += pix_x_float;
                ls_lat_sum_x_squared += junct_lat_float[idx] * junct_lat_float[idx];
                ls_lat_sum_x_times_y += junct_lat_float[idx] * pix_x_float;
                
                ls_lon_num++;
                ls_lon_sum_x += junct_lon_float[idx];
                ls_lon_sum_y += pix_y_float;
                ls_lon_sum_x_squared += junct_lon_float[idx] * junct_lon_float[idx];
                ls_lon_sum_x_times_y += junct_lon_float[idx] * pix_y_float;
            }
        }

        s += strlen(s);
        if (nl) s = nl;
    }
    
    float ls_denom_lat = ls_lat_sum_x_squared - ls_lat_sum_x * ls_lat_sum_x / ls_lat_num;
    float ls_slope_lat = (ls_lat_sum_x_times_y - ls_lat_sum_x * ls_lat_sum_y / ls_lat_num) / ls_denom_lat;
    float ls_inter_lat = (ls_lat_sum_y * ls_lat_sum_x_squared - ls_lat_sum_x * ls_lat_sum_x_times_y) / ls_lat_num / ls_denom_lat;
    
    float ls_denom_lon = ls_lon_sum_x_squared - ls_lon_sum_x * ls_lon_sum_x / ls_lon_num;
    float ls_slope_lon = (ls_lon_sum_x_times_y - ls_lon_sum_x * ls_lon_sum_y / ls_lon_num) / ls_denom_lon;
    float ls_inter_lon = (ls_lon_sum_y * ls_lon_sum_x_squared - ls_lon_sum_x * ls_lon_sum_x_times_y) / ls_lon_num / ls_denom_lon;
    
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
    printf("];\n\n");
    printf("var num_entries = %3d;\n\n", num_entries);
    printf("var entrypoints = [\"%s\"", entrypoints[0]);
    for (i = 1; entrypoints[i]; i++)
        printf(", \"%s\"", entrypoints[i]);
    printf("];\n\n");
    printf("var junctions = [\n");
    for (i = 0; junctions[i]; i++)
        printf("{ name: \"%s\", x: %s, y: %s, pix_x: %g, pix_y: %g},\n", junctions[i], junct_lat[i], junct_lon[i], junct_lat_float[i] * ls_slope_lat + ls_inter_lat, junct_lon_float[i] * ls_slope_lon + ls_inter_lon);
    printf("];\n\n");
}