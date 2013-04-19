var map = [
{ entry_idx:    0, junctA_idx:   0, junctB_idx:   1, tot_dist_km:  5.00, port_dist_m:     0, num_port:  0}, // A13 -> 9
{ entry_idx:   -1, junctA_idx:   2, junctB_idx:   3, tot_dist_km:  2.70, port_dist_m:     0, num_port:  0}, // Big Porcupine (north) -> Big Porcupine (middle)
{ entry_idx:   -1, junctA_idx:   2, junctB_idx:   3, tot_dist_km:  1.00, port_dist_m:   395, num_port:  1}, // Big Porcupine (north) -> Big Porcupine (middle)
{ entry_idx:   -1, junctA_idx:   4, junctB_idx:   2, tot_dist_km:  3.90, port_dist_m:   590, num_port:  1}, // Ragged -> Big Porcupine (north)
{ entry_idx:   -1, junctA_idx:   3, junctB_idx:   5, tot_dist_km:  1.00, port_dist_m:     0, num_port:  0}, // Big Porcupine (middle) -> Big Porcupine (south)
{ entry_idx:   -1, junctA_idx:   5, junctB_idx:   6, tot_dist_km:  1.80, port_dist_m:   200, num_port:  1}, // Big Porcupine (south) -> Bonnechere (south)
{ entry_idx:   -1, junctA_idx:   7, junctB_idx:   6, tot_dist_km:  4.60, port_dist_m:  1895, num_port:  2}, // McGarvey (east) -> Bonnechere (south)
{ entry_idx:   -1, junctA_idx:   8, junctB_idx:   9, tot_dist_km:  9.80, port_dist_m:  4275, num_port:  8}, // Cradle -> Cache (south)
{ entry_idx:   -1, junctA_idx:  10, junctB_idx:   9, tot_dist_km:  2.70, port_dist_m:  1640, num_port:  1}, // Head -> Cache (south)
{ entry_idx:    1, junctA_idx:  11, junctB_idx:   9, tot_dist_km:  1.90, port_dist_m:     0, num_port:  0}, // Cache (north) -> Cache (south)
{ entry_idx:   -1, junctA_idx:   4, junctB_idx:  12, tot_dist_km:  2.80, port_dist_m:  1065, num_port:  3}, // Ragged -> Claude
{ entry_idx:   -1, junctA_idx:   4, junctB_idx:  12, tot_dist_km:  4.90, port_dist_m:   350, num_port:  1}, // Ragged -> Claude
{ entry_idx:   -1, junctA_idx:  13, junctB_idx:  12, tot_dist_km:  3.40, port_dist_m:  1115, num_port:  3}, // Smoke (south) -> Claude
{ entry_idx:   -1, junctA_idx:   6, junctB_idx:   8, tot_dist_km:  1.80, port_dist_m:    50, num_port:  1}, // Bonnechere (south) -> Cradle
{ entry_idx:   -1, junctA_idx:   6, junctB_idx:   8, tot_dist_km:  2.10, port_dist_m:    40, num_port:  1}, // Bonnechere (south) -> Cradle
{ entry_idx:   -1, junctA_idx:  14, junctB_idx:  10, tot_dist_km:  5.90, port_dist_m:  1035, num_port:  1}, // Pardee -> Head
{ entry_idx:   -1, junctA_idx:  10, junctB_idx:  15, tot_dist_km:  1.90, port_dist_m:   290, num_port:  1}, // Head -> Kenneth
{ entry_idx:   -1, junctA_idx:   6, junctB_idx:  16, tot_dist_km:  6.90, port_dist_m:   950, num_port:  3}, // Bonnechere (south) -> Lawrence
{ entry_idx:   -1, junctA_idx:   8, junctB_idx:  16, tot_dist_km:  5.10, port_dist_m:  1000, num_port:  4}, // Cradle -> Lawrence
{ entry_idx:   -1, junctA_idx:   5, junctB_idx:  17, tot_dist_km:  1.80, port_dist_m:   220, num_port:  1}, // Big Porcupine (south) -> Little Coon
{ entry_idx:   -1, junctA_idx:  17, junctB_idx:  18, tot_dist_km:  1.00, port_dist_m:   930, num_port:  1}, // Little Coon -> Whatnot
{ entry_idx:   -1, junctA_idx:   9, junctB_idx:  19, tot_dist_km:  5.70, port_dist_m:   550, num_port:  2}, // Cache (south) -> Ma-Da-Was-Ka
{ entry_idx:   -1, junctA_idx:  10, junctB_idx:  19, tot_dist_km:  4.40, port_dist_m:   460, num_port:  3}, // Head -> Ma-Da-Was-Ka
{ entry_idx:    2, junctA_idx:  20, junctB_idx:  19, tot_dist_km:  7.40, port_dist_m:   245, num_port:  2}, // Lake of Two Rivers -> Ma-Da-Was-Ka
{ entry_idx:   -1, junctA_idx:  21, junctB_idx:   7, tot_dist_km:  1.30, port_dist_m:     0, num_port:  0}, // McGarvey (west) -> McGarvey (east)
{ entry_idx:   -1, junctA_idx:  18, junctB_idx:  21, tot_dist_km:  1.80, port_dist_m:   140, num_port:  1}, // Whatnot -> McGarvey (west)
{ entry_idx:   -1, junctA_idx:  16, junctB_idx:  14, tot_dist_km:  0.10, port_dist_m:     0, num_port:  0}, // Lawrence -> Pardee
{ entry_idx:   -1, junctA_idx:  13, junctB_idx:   4, tot_dist_km:  3.40, port_dist_m:   240, num_port:  1}, // Smoke (south) -> Ragged
{ entry_idx:   -1, junctA_idx:  22, junctB_idx:  23, tot_dist_km:  6.90, port_dist_m:  1560, num_port:  4}, // Tanamakoon -> Smoke (middle)
{ entry_idx:    3, junctA_idx:  24, junctB_idx:  23, tot_dist_km:  0.90, port_dist_m:     0, num_port:  0}, // Smoke (north) -> Smoke (middle)
{ entry_idx:   -1, junctA_idx:  23, junctB_idx:  13, tot_dist_km:  2.40, port_dist_m:     0, num_port:  0}, // Smoke (middle) -> Smoke (south)
{ entry_idx:    1, junctA_idx:  11, junctB_idx:  22, tot_dist_km:  3.10, port_dist_m:     0, num_port:  0}, // Cache (north) -> Tanamakoon
{ entry_idx:    2, junctA_idx:  20, junctB_idx:   0, tot_dist_km:  5.30, port_dist_m:    50, num_port:  1}, // Lake of Two Rivers -> A13
{ entry_idx:   -1, junctA_idx:  25, junctB_idx:  26, tot_dist_km:  4.20, port_dist_m:     0, num_port:  0}, // Galeairy (west) -> Aubrey (north)
{ entry_idx:   -1, junctA_idx:  27, junctB_idx:  26, tot_dist_km:  5.80, port_dist_m:     0, num_port:  0}, // Rock (north) -> Aubrey (north)
{ entry_idx:   -1, junctA_idx:  26, junctB_idx:  28, tot_dist_km:  1.60, port_dist_m:     0, num_port:  0}, // Aubrey (north) -> Aubrey (south)
{ entry_idx:   -1, junctA_idx:  29, junctB_idx:  28, tot_dist_km:  4.00, port_dist_m:  1760, num_port:  2}, // Pen (middle) -> Aubrey (south)
{ entry_idx:   -1, junctA_idx:  30, junctB_idx:  31, tot_dist_km:  5.90, port_dist_m:   555, num_port:  2}, // Joe -> Baby Joe
{ entry_idx:    4, junctA_idx:  32, junctB_idx:  33, tot_dist_km:  4.60, port_dist_m:   230, num_port:  1}, // Livingstone -> Bear
{ entry_idx:    5, junctA_idx:  34, junctB_idx:  33, tot_dist_km:  0.60, port_dist_m:     0, num_port:  0}, // Ka-Wa-Ga-Ma (A16) -> Bear
{ entry_idx:    6, junctA_idx:  35, junctB_idx:  33, tot_dist_km: 10.00, port_dist_m:  3065, num_port:  2}, // Rockaway -> Bear
{ entry_idx:   -1, junctA_idx:  36, junctB_idx:  37, tot_dist_km:  3.00, port_dist_m:     0, num_port:  0}, // Big Trout (middle) -> Big Trout (east)
{ entry_idx:   -1, junctA_idx:  38, junctB_idx:  36, tot_dist_km:  8.70, port_dist_m:  1710, num_port:  5}, // Otter Slide -> Big Trout (middle)
{ entry_idx:   -1, junctA_idx:  36, junctB_idx:  39, tot_dist_km:  2.60, port_dist_m:     0, num_port:  0}, // Big Trout (middle) -> Big Trout (west)
{ entry_idx:   -1, junctA_idx:  40, junctB_idx:  39, tot_dist_km:  8.10, port_dist_m:     0, num_port:  0}, // Grassy Bay -> Big Trout (west)
{ entry_idx:   -1, junctA_idx:  41, junctB_idx:  42, tot_dist_km: 19.70, port_dist_m:  7465, num_port:  7}, // Hay Creek -> Branch
{ entry_idx:   -1, junctA_idx:  43, junctB_idx:  44, tot_dist_km:  3.30, port_dist_m:     0, num_port:  0}, // Burnt Island (west) -> Burnt Island (east)
{ entry_idx:   -1, junctA_idx:  31, junctB_idx:  43, tot_dist_km:  4.20, port_dist_m:   200, num_port:  1}, // Baby Joe -> Burnt Island (west)
{ entry_idx:   -1, junctA_idx:  42, junctB_idx:  45, tot_dist_km:  2.80, port_dist_m:     0, num_port:  0}, // Branch -> Byers
{ entry_idx:    7, junctA_idx:  46, junctB_idx:  47, tot_dist_km:  3.60, port_dist_m:     0, num_port:  0}, // Canoe (5) -> Canoe (north)
{ entry_idx:    7, junctA_idx:  46, junctB_idx:  48, tot_dist_km:  1.60, port_dist_m:     0, num_port:  0}, // Canoe (5) -> Canoe (south)
{ entry_idx:   -1, junctA_idx:  28, junctB_idx:  49, tot_dist_km: 15.50, port_dist_m:  7960, num_port:  7}, // Aubrey (south) -> Cauliflower
{ entry_idx:   -1, junctA_idx:  50, junctB_idx:  49, tot_dist_km:  7.50, port_dist_m:  5180, num_port:  3}, // South Ma-Da-Was-Ka River -> Cauliflower
{ entry_idx:   -1, junctA_idx:  51, junctB_idx:  52, tot_dist_km:  3.70, port_dist_m:   275, num_port:  1}, // Pen (south) -> Clydegale
{ entry_idx:   -1, junctA_idx:  53, junctB_idx:  54, tot_dist_km:  2.40, port_dist_m:  1040, num_port:  1}, // Hollow River -> Dividing
{ entry_idx:   -1, junctA_idx:  17, junctB_idx:  54, tot_dist_km:  1.54, port_dist_m:  1545, num_port:  1}, // Little Coon -> Dividing
{ entry_idx:   -1, junctA_idx:  18, junctB_idx:  54, tot_dist_km:  1.43, port_dist_m:  1430, num_port:  1}, // Whatnot -> Dividing
{ entry_idx:    8, junctA_idx:  55, junctB_idx:  56, tot_dist_km:  3.90, port_dist_m:  1375, num_port:  4}, // Redstone (GR5) -> Eagle
{ entry_idx:   -1, junctA_idx:  57, junctB_idx:  58, tot_dist_km:  3.16, port_dist_m:  3160, num_port:  1}, // Little Canoe -> East Galipo
{ entry_idx:   -1, junctA_idx:  59, junctB_idx:  60, tot_dist_km:  2.70, port_dist_m:   320, num_port:  1}, // Rence -> Florence
{ entry_idx:   -1, junctA_idx:  27, junctB_idx:  61, tot_dist_km:  9.70, port_dist_m:  2855, num_port:  5}, // Rock (north) -> Fork
{ entry_idx:    9, junctA_idx:  62, junctB_idx:  61, tot_dist_km:  3.70, port_dist_m:     0, num_port:  0}, // 10 -> Fork
{ entry_idx:   -1, junctA_idx:  63, junctB_idx:  64, tot_dist_km:  2.70, port_dist_m:  1825, num_port:  1}, // Pinetree -> Fraser
{ entry_idx:   10, junctA_idx:  65, junctB_idx:  64, tot_dist_km:  8.20, port_dist_m:  2660, num_port:  3}, // Galeairy (A19) -> Fraser
{ entry_idx:   11, junctA_idx:  66, junctB_idx:  67, tot_dist_km:  0.90, port_dist_m:     0, num_port:  0}, // Galeairy (Whitney) -> Galeairy (east)
{ entry_idx:   10, junctA_idx:  65, junctB_idx:  67, tot_dist_km:  1.50, port_dist_m:     0, num_port:  0}, // Galeairy (A19) -> Galeairy (east)
{ entry_idx:   -1, junctA_idx:  25, junctB_idx:  68, tot_dist_km:  1.40, port_dist_m:     0, num_port:  0}, // Galeairy (west) -> Galeairy (Farm Bay)
{ entry_idx:   -1, junctA_idx:  69, junctB_idx:  25, tot_dist_km:  2.50, port_dist_m:   955, num_port:  1}, // Farm Bay -> Galeairy (west)
{ entry_idx:   -1, junctA_idx:  67, junctB_idx:  25, tot_dist_km:  3.90, port_dist_m:     0, num_port:  0}, // Galeairy (east) -> Galeairy (west)
{ entry_idx:   -1, junctA_idx:  70, junctB_idx:  71, tot_dist_km:  1.80, port_dist_m:   615, num_port:  1}, // Pen (north) -> Gem
{ entry_idx:   -1, junctA_idx:  72, junctB_idx:  73, tot_dist_km:  9.80, port_dist_m:  2685, num_port:  5}, // Ka-Wa-Ga-Ma (Echo Island) -> Havelock
{ entry_idx:   -1, junctA_idx:  49, junctB_idx:  41, tot_dist_km:  0.99, port_dist_m:   985, num_port:  1}, // Cauliflower -> Hay Creek
{ entry_idx:   12, junctA_idx:  74, junctB_idx:  41, tot_dist_km:  6.30, port_dist_m:     0, num_port:  0}, // Hay -> Hay Creek
{ entry_idx:   -1, junctA_idx:  47, junctB_idx:  30, tot_dist_km:  2.80, port_dist_m:   260, num_port:  1}, // Canoe (north) -> Joe
{ entry_idx:   -1, junctA_idx:  75, junctB_idx:  30, tot_dist_km:  4.70, port_dist_m:     0, num_port:  0}, // Littledoe (west) -> Joe
{ entry_idx:   -1, junctA_idx:  76, junctB_idx:  72, tot_dist_km:  3.40, port_dist_m:     0, num_port:  0}, // Ka-Wa-Ga-Ma (west) -> Ka-Wa-Ga-Ma (Echo Island)
{ entry_idx:    5, junctA_idx:  34, junctB_idx:  72, tot_dist_km:  2.00, port_dist_m:     0, num_port:  0}, // Ka-Wa-Ga-Ma (A16) -> Ka-Wa-Ga-Ma (Echo Island)
{ entry_idx:   -1, junctA_idx:  76, junctB_idx:  77, tot_dist_km:  4.90, port_dist_m:     0, num_port:  0}, // Ka-Wa-Ga-Ma (west) -> Ka-Wa-Ga-Ma (Tyrell Island)
{ entry_idx:   13, junctA_idx:  78, junctB_idx:  77, tot_dist_km:  2.70, port_dist_m:     0, num_port:  0}, // Ka-Wa-Ga-Ma (F3) -> Ka-Wa-Ga-Ma (Tyrell Island)
{ entry_idx:   14, junctA_idx:  79, junctB_idx:  77, tot_dist_km:  1.00, port_dist_m:     0, num_port:  0}, // Ka-Wa-Ga-Ma (F4) -> Ka-Wa-Ga-Ma (Tyrell Island)
{ entry_idx:   15, junctA_idx:  80, junctB_idx:  76, tot_dist_km:  7.10, port_dist_m:     0, num_port:  0}, // Ka-Wa-Ga-Ma (H1) -> Ka-Wa-Ga-Ma (west)
{ entry_idx:   16, junctA_idx:  81, junctB_idx:  76, tot_dist_km:  1.70, port_dist_m:     0, num_port:  0}, // Ka-Wa-Ga-Ma (H2) -> Ka-Wa-Ga-Ma (west)
{ entry_idx:   17, junctA_idx:  82, junctB_idx:  76, tot_dist_km:  2.40, port_dist_m:     0, num_port:  0}, // Ka-Wa-Ga-Ma (H3) -> Ka-Wa-Ga-Ma (west)
{ entry_idx:   -1, junctA_idx:  73, junctB_idx:  83, tot_dist_km:  7.60, port_dist_m:  2260, num_port:  2}, // Havelock -> Kennisis (east)
{ entry_idx:   -1, junctA_idx:  84, junctB_idx:  83, tot_dist_km:  4.20, port_dist_m:     0, num_port:  0}, // Kennisis (middle) -> Kennisis (east)
{ entry_idx:   18, junctA_idx:  85, junctB_idx:  83, tot_dist_km:  4.50, port_dist_m:  1550, num_port:  1}, // Little Redstone -> Kennisis (east)
{ entry_idx:   19, junctA_idx:  86, junctB_idx:  84, tot_dist_km:  1.20, port_dist_m:     0, num_port:  0}, // Kennisis (F15) -> Kennisis (middle)
{ entry_idx:   -1, junctA_idx:  84, junctB_idx:  87, tot_dist_km:  1.80, port_dist_m:     0, num_port:  0}, // Kennisis (middle) -> Kennisis (south)
{ entry_idx:   -1, junctA_idx:  45, junctB_idx:  88, tot_dist_km:  3.00, port_dist_m:  2130, num_port:  2}, // Byers -> Kingscote (north)
{ entry_idx:   -1, junctA_idx:  89, junctB_idx:  88, tot_dist_km:  1.00, port_dist_m:   700, num_port:  2}, // Upper Minnow -> Kingscote (north)
{ entry_idx:   20, junctA_idx:  90, junctB_idx:  88, tot_dist_km:  3.80, port_dist_m:     0, num_port:  0}, // Kingscote (south) -> Kingscote (north)
{ entry_idx:   -1, junctA_idx:  39, junctB_idx:  91, tot_dist_km:  6.40, port_dist_m:  2590, num_port:  1}, // Big Trout (west) -> Lake la Muir (west)
{ entry_idx:   -1, junctA_idx:  92, junctB_idx:  16, tot_dist_km:  5.60, port_dist_m:   980, num_port:  2}, // Louisa (west) -> Lawrence
{ entry_idx:   -1, junctA_idx:  52, junctB_idx:  57, tot_dist_km:  5.20, port_dist_m:  2035, num_port:  1}, // Clydegale -> Little Canoe
{ entry_idx:   -1, junctA_idx:  31, junctB_idx:  93, tot_dist_km:  1.14, port_dist_m:  1140, num_port:  1}, // Baby Joe -> Littledoe (east)
{ entry_idx:   -1, junctA_idx:  93, junctB_idx:  75, tot_dist_km:  1.40, port_dist_m:     0, num_port:  0}, // Littledoe (east) -> Littledoe (west)
{ entry_idx:   -1, junctA_idx:  53, junctB_idx:  94, tot_dist_km:  5.20, port_dist_m:  1320, num_port:  3}, // Hollow River -> Loader
{ entry_idx:   -1, junctA_idx:  39, junctB_idx:  95, tot_dist_km:  3.20, port_dist_m:   300, num_port:  1}, // Big Trout (west) -> Longer
{ entry_idx:   -1, junctA_idx:  96, junctB_idx:  95, tot_dist_km:  3.70, port_dist_m:  1465, num_port:  1}, // Ship-Pa-Gew -> Longer
{ entry_idx:   -1, junctA_idx:  60, junctB_idx:  97, tot_dist_km:  5.20, port_dist_m:  2880, num_port:  1}, // Florence -> Louisa (east)
{ entry_idx:   -1, junctA_idx:  60, junctB_idx:  98, tot_dist_km:  1.73, port_dist_m:  1725, num_port:  1}, // Florence -> Louisa (south)
{ entry_idx:   -1, junctA_idx:  92, junctB_idx:  98, tot_dist_km:  1.30, port_dist_m:     0, num_port:  0}, // Louisa (west) -> Louisa (south)
{ entry_idx:   -1, junctA_idx:  97, junctB_idx:  92, tot_dist_km:  4.30, port_dist_m:     0, num_port:  0}, // Louisa (east) -> Louisa (west)
{ entry_idx:   -1, junctA_idx:  45, junctB_idx:  99, tot_dist_km:  7.60, port_dist_m:  1340, num_port:  5}, // Byers -> McCoy
{ entry_idx:   -1, junctA_idx: 100, junctB_idx:   7, tot_dist_km:  4.40, port_dist_m:   975, num_port:  2}, // North Grace -> McGarvey (east)
{ entry_idx:   -1, junctA_idx:  94, junctB_idx:  21, tot_dist_km:  1.00, port_dist_m:     0, num_port:  0}, // Loader -> McGarvey (west)
{ entry_idx:   -1, junctA_idx:  40, junctB_idx: 101, tot_dist_km:  2.30, port_dist_m:     0, num_port:  0}, // Grassy Bay -> McIntosh Marsh
{ entry_idx:   -1, junctA_idx:  54, junctB_idx: 102, tot_dist_km:  1.20, port_dist_m:   105, num_port:  1}, // Dividing -> Minkey
{ entry_idx:   21, junctA_idx: 103, junctB_idx: 102, tot_dist_km:  2.90, port_dist_m:   230, num_port:  1}, // Dagger -> Minkey
{ entry_idx:    6, junctA_idx:  35, junctB_idx: 102, tot_dist_km:  2.50, port_dist_m:   965, num_port:  1}, // Rockaway -> Minkey
{ entry_idx:   -1, junctA_idx:  99, junctB_idx: 104, tot_dist_km:  2.80, port_dist_m:     0, num_port:  0}, // McCoy -> Moffat Pond
{ entry_idx:   -1, junctA_idx:  98, junctB_idx: 100, tot_dist_km:  1.46, port_dist_m:  1460, num_port:  1}, // Louisa (south) -> North Grace
{ entry_idx:   -1, junctA_idx:  44, junctB_idx:  38, tot_dist_km:  5.90, port_dist_m:   790, num_port:  1}, // Burnt Island (east) -> Otter Slide
{ entry_idx:   -1, junctA_idx:  70, junctB_idx:  29, tot_dist_km:  1.70, port_dist_m:     0, num_port:  0}, // Pen (north) -> Pen (middle)
{ entry_idx:   -1, junctA_idx: 105, junctB_idx:  70, tot_dist_km:  2.70, port_dist_m:   375, num_port:  1}, // Rock (south) -> Pen (north)
{ entry_idx:   -1, junctA_idx:  29, junctB_idx:  51, tot_dist_km:  2.60, port_dist_m:     0, num_port:  0}, // Pen (middle) -> Pen (south)
{ entry_idx:   -1, junctA_idx:  56, junctB_idx: 106, tot_dist_km: 18.30, port_dist_m:   750, num_port:  1}, // Eagle -> Percy
{ entry_idx:   -1, junctA_idx:  61, junctB_idx:  63, tot_dist_km:  3.70, port_dist_m:  2465, num_port:  2}, // Fork -> Pinetree
{ entry_idx:   22, junctA_idx: 107, junctB_idx:  63, tot_dist_km:  5.10, port_dist_m:  1940, num_port:  1}, // KM Marker 50 -> Pinetree
{ entry_idx:    2, junctA_idx:  20, junctB_idx: 108, tot_dist_km:  2.60, port_dist_m:   960, num_port:  1}, // Lake of Two Rivers -> Provoking
{ entry_idx:   -1, junctA_idx:  85, junctB_idx: 109, tot_dist_km:  4.70, port_dist_m:     0, num_port:  0}, // Little Redstone -> Redstone
{ entry_idx:    8, junctA_idx:  55, junctB_idx: 109, tot_dist_km:  2.40, port_dist_m:     0, num_port:  0}, // Redstone (GR5) -> Redstone
{ entry_idx:   23, junctA_idx: 110, junctB_idx: 109, tot_dist_km:  2.20, port_dist_m:     0, num_port:  0}, // Redstone (GR6) -> Redstone
{ entry_idx:   -1, junctA_idx:  51, junctB_idx:  59, tot_dist_km:  9.80, port_dist_m:  2445, num_port:  2}, // Pen (south) -> Rence
{ entry_idx:   -1, junctA_idx: 111, junctB_idx:  59, tot_dist_km:  8.50, port_dist_m:   510, num_port:  5}, // South Galipo -> Rence
{ entry_idx:   24, junctA_idx:   1, junctB_idx:  27, tot_dist_km:  1.90, port_dist_m:     0, num_port:  0}, // 9 -> Rock (north)
{ entry_idx:   -1, junctA_idx:  97, junctB_idx: 105, tot_dist_km:  4.80, port_dist_m:  3000, num_port:  1}, // Louisa (east) -> Rock (south)
{ entry_idx:   -1, junctA_idx:  27, junctB_idx: 105, tot_dist_km:  2.10, port_dist_m:     0, num_port:  0}, // Rock (north) -> Rock (south)
{ entry_idx:   -1, junctA_idx:  42, junctB_idx: 112, tot_dist_km:  3.60, port_dist_m:  1065, num_port:  1}, // Branch -> Scorch
{ entry_idx:   -1, junctA_idx:  39, junctB_idx:  96, tot_dist_km:  4.40, port_dist_m:  1855, num_port:  2}, // Big Trout (west) -> Ship-Pa-Gew
{ entry_idx:   25, junctA_idx: 113, junctB_idx:  13, tot_dist_km: 18.60, port_dist_m:  6700, num_port:  7}, // Park -> Smoke (south)
{ entry_idx:   -1, junctA_idx:  58, junctB_idx: 111, tot_dist_km:  2.80, port_dist_m:   215, num_port:  1}, // East Galipo -> South Galipo
{ entry_idx:   -1, junctA_idx:  52, junctB_idx:  50, tot_dist_km:  7.60, port_dist_m:  1235, num_port:  2}, // Clydegale -> South Ma-Da-Was-Ka River
{ entry_idx:   -1, junctA_idx:  19, junctB_idx:  50, tot_dist_km: 10.00, port_dist_m:     0, num_port:  0}, // Ma-Da-Was-Ka -> South Ma-Da-Was-Ka River
{ entry_idx:   -1, junctA_idx: 100, junctB_idx: 114, tot_dist_km:  2.20, port_dist_m:   290, num_port:  1}, // North Grace -> Stringer
{ entry_idx:   -1, junctA_idx:  43, junctB_idx: 115, tot_dist_km:  4.40, port_dist_m:  1535, num_port:  4}, // Burnt Island (west) -> Sunbeam
{ entry_idx:   -1, junctA_idx:  93, junctB_idx: 115, tot_dist_km:  4.90, port_dist_m:   525, num_port:  2}, // Littledoe (east) -> Sunbeam
{ entry_idx:   -1, junctA_idx: 101, junctB_idx: 115, tot_dist_km:  5.20, port_dist_m:  3250, num_port:  3}, // McIntosh Marsh -> Sunbeam
{ entry_idx:   -1, junctA_idx: 116, junctB_idx: 115, tot_dist_km:  5.30, port_dist_m:  1545, num_port:  4}, // Tom Thomson -> Sunbeam
{ entry_idx:   -1, junctA_idx:  64, junctB_idx: 117, tot_dist_km:  0.49, port_dist_m:   485, num_port:  1}, // Fraser -> Sylvia
{ entry_idx:   -1, junctA_idx:  75, junctB_idx: 116, tot_dist_km:  2.20, port_dist_m:     0, num_port:  0}, // Littledoe (west) -> Tom Thomson
{ entry_idx:   -1, junctA_idx: 111, junctB_idx: 118, tot_dist_km:  2.90, port_dist_m:   810, num_port:  1}, // South Galipo -> Upper Redstone
];

var segments = [
{ available: 1, from_junct_idx:   0, to_junct_idx:   1, map_idx:   0, time_minutes: 0},
{ available: 1, from_junct_idx:  11, to_junct_idx:   9, map_idx:   9, time_minutes: 0},
{ available: 1, from_junct_idx:  20, to_junct_idx:  19, map_idx:  23, time_minutes: 0},
{ available: 1, from_junct_idx:  24, to_junct_idx:  23, map_idx:  29, time_minutes: 0},
{ available: 1, from_junct_idx:  11, to_junct_idx:  22, map_idx:  31, time_minutes: 0},
{ available: 1, from_junct_idx:  20, to_junct_idx:   0, map_idx:  32, time_minutes: 0},
{ available: 1, from_junct_idx:  32, to_junct_idx:  33, map_idx:  38, time_minutes: 0},
{ available: 1, from_junct_idx:  34, to_junct_idx:  33, map_idx:  39, time_minutes: 0},
{ available: 1, from_junct_idx:  35, to_junct_idx:  33, map_idx:  40, time_minutes: 0},
{ available: 1, from_junct_idx:  46, to_junct_idx:  47, map_idx:  49, time_minutes: 0},
{ available: 1, from_junct_idx:  46, to_junct_idx:  48, map_idx:  50, time_minutes: 0},
{ available: 1, from_junct_idx:  55, to_junct_idx:  56, map_idx:  57, time_minutes: 0},
{ available: 1, from_junct_idx:  62, to_junct_idx:  61, map_idx:  61, time_minutes: 0},
{ available: 1, from_junct_idx:  65, to_junct_idx:  64, map_idx:  63, time_minutes: 0},
{ available: 1, from_junct_idx:  66, to_junct_idx:  67, map_idx:  64, time_minutes: 0},
{ available: 1, from_junct_idx:  65, to_junct_idx:  67, map_idx:  65, time_minutes: 0},
{ available: 1, from_junct_idx:  74, to_junct_idx:  41, map_idx:  72, time_minutes: 0},
{ available: 1, from_junct_idx:  34, to_junct_idx:  72, map_idx:  76, time_minutes: 0},
{ available: 1, from_junct_idx:  78, to_junct_idx:  77, map_idx:  78, time_minutes: 0},
{ available: 1, from_junct_idx:  79, to_junct_idx:  77, map_idx:  79, time_minutes: 0},
{ available: 1, from_junct_idx:  80, to_junct_idx:  76, map_idx:  80, time_minutes: 0},
{ available: 1, from_junct_idx:  81, to_junct_idx:  76, map_idx:  81, time_minutes: 0},
{ available: 1, from_junct_idx:  82, to_junct_idx:  76, map_idx:  82, time_minutes: 0},
{ available: 1, from_junct_idx:  85, to_junct_idx:  83, map_idx:  85, time_minutes: 0},
{ available: 1, from_junct_idx:  86, to_junct_idx:  84, map_idx:  86, time_minutes: 0},
{ available: 1, from_junct_idx:  90, to_junct_idx:  88, map_idx:  90, time_minutes: 0},
{ available: 1, from_junct_idx: 103, to_junct_idx: 102, map_idx: 108, time_minutes: 0},
{ available: 1, from_junct_idx:  35, to_junct_idx: 102, map_idx: 109, time_minutes: 0},
{ available: 1, from_junct_idx: 107, to_junct_idx:  63, map_idx: 118, time_minutes: 0},
{ available: 1, from_junct_idx:  20, to_junct_idx: 108, map_idx: 119, time_minutes: 0},
{ available: 1, from_junct_idx:  55, to_junct_idx: 109, map_idx: 121, time_minutes: 0},
{ available: 1, from_junct_idx: 110, to_junct_idx: 109, map_idx: 122, time_minutes: 0},
{ available: 1, from_junct_idx:   1, to_junct_idx:  27, map_idx: 125, time_minutes: 0},
{ available: 1, from_junct_idx: 113, to_junct_idx:  13, map_idx: 130, time_minutes: 0},
{ available: 1, from_junct_idx:   1, to_junct_idx:   0, map_idx:   0, time_minutes: 0},
{ available: 1, from_junct_idx:   2, to_junct_idx:   3, map_idx:   1, time_minutes: 0},
{ available: 1, from_junct_idx:   3, to_junct_idx:   2, map_idx:   1, time_minutes: 0},
{ available: 1, from_junct_idx:   2, to_junct_idx:   3, map_idx:   2, time_minutes: 0},
{ available: 1, from_junct_idx:   3, to_junct_idx:   2, map_idx:   2, time_minutes: 0},
{ available: 1, from_junct_idx:   4, to_junct_idx:   2, map_idx:   3, time_minutes: 0},
{ available: 1, from_junct_idx:   2, to_junct_idx:   4, map_idx:   3, time_minutes: 0},
{ available: 1, from_junct_idx:   3, to_junct_idx:   5, map_idx:   4, time_minutes: 0},
{ available: 1, from_junct_idx:   5, to_junct_idx:   3, map_idx:   4, time_minutes: 0},
{ available: 1, from_junct_idx:   5, to_junct_idx:   6, map_idx:   5, time_minutes: 0},
{ available: 1, from_junct_idx:   6, to_junct_idx:   5, map_idx:   5, time_minutes: 0},
{ available: 1, from_junct_idx:   7, to_junct_idx:   6, map_idx:   6, time_minutes: 0},
{ available: 1, from_junct_idx:   6, to_junct_idx:   7, map_idx:   6, time_minutes: 0},
{ available: 1, from_junct_idx:   8, to_junct_idx:   9, map_idx:   7, time_minutes: 0},
{ available: 1, from_junct_idx:   9, to_junct_idx:   8, map_idx:   7, time_minutes: 0},
{ available: 1, from_junct_idx:  10, to_junct_idx:   9, map_idx:   8, time_minutes: 0},
{ available: 1, from_junct_idx:   9, to_junct_idx:  10, map_idx:   8, time_minutes: 0},
{ available: 1, from_junct_idx:   9, to_junct_idx:  11, map_idx:   9, time_minutes: 0},
{ available: 1, from_junct_idx:   4, to_junct_idx:  12, map_idx:  10, time_minutes: 0},
{ available: 1, from_junct_idx:  12, to_junct_idx:   4, map_idx:  10, time_minutes: 0},
{ available: 1, from_junct_idx:   4, to_junct_idx:  12, map_idx:  11, time_minutes: 0},
{ available: 1, from_junct_idx:  12, to_junct_idx:   4, map_idx:  11, time_minutes: 0},
{ available: 1, from_junct_idx:  13, to_junct_idx:  12, map_idx:  12, time_minutes: 0},
{ available: 1, from_junct_idx:  12, to_junct_idx:  13, map_idx:  12, time_minutes: 0},
{ available: 1, from_junct_idx:   6, to_junct_idx:   8, map_idx:  13, time_minutes: 0},
{ available: 1, from_junct_idx:   8, to_junct_idx:   6, map_idx:  13, time_minutes: 0},
{ available: 1, from_junct_idx:   6, to_junct_idx:   8, map_idx:  14, time_minutes: 0},
{ available: 1, from_junct_idx:   8, to_junct_idx:   6, map_idx:  14, time_minutes: 0},
{ available: 1, from_junct_idx:  14, to_junct_idx:  10, map_idx:  15, time_minutes: 0},
{ available: 1, from_junct_idx:  10, to_junct_idx:  14, map_idx:  15, time_minutes: 0},
{ available: 1, from_junct_idx:  10, to_junct_idx:  15, map_idx:  16, time_minutes: 0},
{ available: 1, from_junct_idx:  15, to_junct_idx:  10, map_idx:  16, time_minutes: 0},
{ available: 1, from_junct_idx:   6, to_junct_idx:  16, map_idx:  17, time_minutes: 0},
{ available: 1, from_junct_idx:  16, to_junct_idx:   6, map_idx:  17, time_minutes: 0},
{ available: 1, from_junct_idx:   8, to_junct_idx:  16, map_idx:  18, time_minutes: 0},
{ available: 1, from_junct_idx:  16, to_junct_idx:   8, map_idx:  18, time_minutes: 0},
{ available: 1, from_junct_idx:   5, to_junct_idx:  17, map_idx:  19, time_minutes: 0},
{ available: 1, from_junct_idx:  17, to_junct_idx:   5, map_idx:  19, time_minutes: 0},
{ available: 1, from_junct_idx:  17, to_junct_idx:  18, map_idx:  20, time_minutes: 0},
{ available: 1, from_junct_idx:  18, to_junct_idx:  17, map_idx:  20, time_minutes: 0},
{ available: 1, from_junct_idx:   9, to_junct_idx:  19, map_idx:  21, time_minutes: 0},
{ available: 1, from_junct_idx:  19, to_junct_idx:   9, map_idx:  21, time_minutes: 0},
{ available: 1, from_junct_idx:  10, to_junct_idx:  19, map_idx:  22, time_minutes: 0},
{ available: 1, from_junct_idx:  19, to_junct_idx:  10, map_idx:  22, time_minutes: 0},
{ available: 1, from_junct_idx:  19, to_junct_idx:  20, map_idx:  23, time_minutes: 0},
{ available: 1, from_junct_idx:  21, to_junct_idx:   7, map_idx:  24, time_minutes: 0},
{ available: 1, from_junct_idx:   7, to_junct_idx:  21, map_idx:  24, time_minutes: 0},
{ available: 1, from_junct_idx:  18, to_junct_idx:  21, map_idx:  25, time_minutes: 0},
{ available: 1, from_junct_idx:  21, to_junct_idx:  18, map_idx:  25, time_minutes: 0},
{ available: 1, from_junct_idx:  16, to_junct_idx:  14, map_idx:  26, time_minutes: 0},
{ available: 1, from_junct_idx:  14, to_junct_idx:  16, map_idx:  26, time_minutes: 0},
{ available: 1, from_junct_idx:  13, to_junct_idx:   4, map_idx:  27, time_minutes: 0},
{ available: 1, from_junct_idx:   4, to_junct_idx:  13, map_idx:  27, time_minutes: 0},
{ available: 1, from_junct_idx:  22, to_junct_idx:  23, map_idx:  28, time_minutes: 0},
{ available: 1, from_junct_idx:  23, to_junct_idx:  22, map_idx:  28, time_minutes: 0},
{ available: 1, from_junct_idx:  23, to_junct_idx:  24, map_idx:  29, time_minutes: 0},
{ available: 1, from_junct_idx:  23, to_junct_idx:  13, map_idx:  30, time_minutes: 0},
{ available: 1, from_junct_idx:  13, to_junct_idx:  23, map_idx:  30, time_minutes: 0},
{ available: 1, from_junct_idx:  22, to_junct_idx:  11, map_idx:  31, time_minutes: 0},
{ available: 1, from_junct_idx:   0, to_junct_idx:  20, map_idx:  32, time_minutes: 0},
{ available: 1, from_junct_idx:  25, to_junct_idx:  26, map_idx:  33, time_minutes: 0},
{ available: 1, from_junct_idx:  26, to_junct_idx:  25, map_idx:  33, time_minutes: 0},
{ available: 1, from_junct_idx:  27, to_junct_idx:  26, map_idx:  34, time_minutes: 0},
{ available: 1, from_junct_idx:  26, to_junct_idx:  27, map_idx:  34, time_minutes: 0},
{ available: 1, from_junct_idx:  26, to_junct_idx:  28, map_idx:  35, time_minutes: 0},
{ available: 1, from_junct_idx:  28, to_junct_idx:  26, map_idx:  35, time_minutes: 0},
{ available: 1, from_junct_idx:  29, to_junct_idx:  28, map_idx:  36, time_minutes: 0},
{ available: 1, from_junct_idx:  28, to_junct_idx:  29, map_idx:  36, time_minutes: 0},
{ available: 1, from_junct_idx:  30, to_junct_idx:  31, map_idx:  37, time_minutes: 0},
{ available: 1, from_junct_idx:  31, to_junct_idx:  30, map_idx:  37, time_minutes: 0},
{ available: 1, from_junct_idx:  33, to_junct_idx:  32, map_idx:  38, time_minutes: 0},
{ available: 1, from_junct_idx:  33, to_junct_idx:  34, map_idx:  39, time_minutes: 0},
{ available: 1, from_junct_idx:  33, to_junct_idx:  35, map_idx:  40, time_minutes: 0},
{ available: 1, from_junct_idx:  36, to_junct_idx:  37, map_idx:  41, time_minutes: 0},
{ available: 1, from_junct_idx:  37, to_junct_idx:  36, map_idx:  41, time_minutes: 0},
{ available: 1, from_junct_idx:  38, to_junct_idx:  36, map_idx:  42, time_minutes: 0},
{ available: 1, from_junct_idx:  36, to_junct_idx:  38, map_idx:  42, time_minutes: 0},
{ available: 1, from_junct_idx:  36, to_junct_idx:  39, map_idx:  43, time_minutes: 0},
{ available: 1, from_junct_idx:  39, to_junct_idx:  36, map_idx:  43, time_minutes: 0},
{ available: 1, from_junct_idx:  40, to_junct_idx:  39, map_idx:  44, time_minutes: 0},
{ available: 1, from_junct_idx:  39, to_junct_idx:  40, map_idx:  44, time_minutes: 0},
{ available: 1, from_junct_idx:  41, to_junct_idx:  42, map_idx:  45, time_minutes: 0},
{ available: 1, from_junct_idx:  42, to_junct_idx:  41, map_idx:  45, time_minutes: 0},
{ available: 1, from_junct_idx:  43, to_junct_idx:  44, map_idx:  46, time_minutes: 0},
{ available: 1, from_junct_idx:  44, to_junct_idx:  43, map_idx:  46, time_minutes: 0},
{ available: 1, from_junct_idx:  31, to_junct_idx:  43, map_idx:  47, time_minutes: 0},
{ available: 1, from_junct_idx:  43, to_junct_idx:  31, map_idx:  47, time_minutes: 0},
{ available: 1, from_junct_idx:  42, to_junct_idx:  45, map_idx:  48, time_minutes: 0},
{ available: 1, from_junct_idx:  45, to_junct_idx:  42, map_idx:  48, time_minutes: 0},
{ available: 1, from_junct_idx:  47, to_junct_idx:  46, map_idx:  49, time_minutes: 0},
{ available: 1, from_junct_idx:  48, to_junct_idx:  46, map_idx:  50, time_minutes: 0},
{ available: 1, from_junct_idx:  28, to_junct_idx:  49, map_idx:  51, time_minutes: 0},
{ available: 1, from_junct_idx:  49, to_junct_idx:  28, map_idx:  51, time_minutes: 0},
{ available: 1, from_junct_idx:  50, to_junct_idx:  49, map_idx:  52, time_minutes: 0},
{ available: 1, from_junct_idx:  49, to_junct_idx:  50, map_idx:  52, time_minutes: 0},
{ available: 1, from_junct_idx:  51, to_junct_idx:  52, map_idx:  53, time_minutes: 0},
{ available: 1, from_junct_idx:  52, to_junct_idx:  51, map_idx:  53, time_minutes: 0},
{ available: 1, from_junct_idx:  53, to_junct_idx:  54, map_idx:  54, time_minutes: 0},
{ available: 1, from_junct_idx:  54, to_junct_idx:  53, map_idx:  54, time_minutes: 0},
{ available: 1, from_junct_idx:  17, to_junct_idx:  54, map_idx:  55, time_minutes: 0},
{ available: 1, from_junct_idx:  54, to_junct_idx:  17, map_idx:  55, time_minutes: 0},
{ available: 1, from_junct_idx:  18, to_junct_idx:  54, map_idx:  56, time_minutes: 0},
{ available: 1, from_junct_idx:  54, to_junct_idx:  18, map_idx:  56, time_minutes: 0},
{ available: 1, from_junct_idx:  56, to_junct_idx:  55, map_idx:  57, time_minutes: 0},
{ available: 1, from_junct_idx:  57, to_junct_idx:  58, map_idx:  58, time_minutes: 0},
{ available: 1, from_junct_idx:  58, to_junct_idx:  57, map_idx:  58, time_minutes: 0},
{ available: 1, from_junct_idx:  59, to_junct_idx:  60, map_idx:  59, time_minutes: 0},
{ available: 1, from_junct_idx:  60, to_junct_idx:  59, map_idx:  59, time_minutes: 0},
{ available: 1, from_junct_idx:  27, to_junct_idx:  61, map_idx:  60, time_minutes: 0},
{ available: 1, from_junct_idx:  61, to_junct_idx:  27, map_idx:  60, time_minutes: 0},
{ available: 1, from_junct_idx:  61, to_junct_idx:  62, map_idx:  61, time_minutes: 0},
{ available: 1, from_junct_idx:  63, to_junct_idx:  64, map_idx:  62, time_minutes: 0},
{ available: 1, from_junct_idx:  64, to_junct_idx:  63, map_idx:  62, time_minutes: 0},
{ available: 1, from_junct_idx:  64, to_junct_idx:  65, map_idx:  63, time_minutes: 0},
{ available: 1, from_junct_idx:  67, to_junct_idx:  66, map_idx:  64, time_minutes: 0},
{ available: 1, from_junct_idx:  67, to_junct_idx:  65, map_idx:  65, time_minutes: 0},
{ available: 1, from_junct_idx:  25, to_junct_idx:  68, map_idx:  66, time_minutes: 0},
{ available: 1, from_junct_idx:  68, to_junct_idx:  25, map_idx:  66, time_minutes: 0},
{ available: 1, from_junct_idx:  69, to_junct_idx:  25, map_idx:  67, time_minutes: 0},
{ available: 1, from_junct_idx:  25, to_junct_idx:  69, map_idx:  67, time_minutes: 0},
{ available: 1, from_junct_idx:  67, to_junct_idx:  25, map_idx:  68, time_minutes: 0},
{ available: 1, from_junct_idx:  25, to_junct_idx:  67, map_idx:  68, time_minutes: 0},
{ available: 1, from_junct_idx:  70, to_junct_idx:  71, map_idx:  69, time_minutes: 0},
{ available: 1, from_junct_idx:  71, to_junct_idx:  70, map_idx:  69, time_minutes: 0},
{ available: 1, from_junct_idx:  72, to_junct_idx:  73, map_idx:  70, time_minutes: 0},
{ available: 1, from_junct_idx:  73, to_junct_idx:  72, map_idx:  70, time_minutes: 0},
{ available: 1, from_junct_idx:  49, to_junct_idx:  41, map_idx:  71, time_minutes: 0},
{ available: 1, from_junct_idx:  41, to_junct_idx:  49, map_idx:  71, time_minutes: 0},
{ available: 1, from_junct_idx:  41, to_junct_idx:  74, map_idx:  72, time_minutes: 0},
{ available: 1, from_junct_idx:  47, to_junct_idx:  30, map_idx:  73, time_minutes: 0},
{ available: 1, from_junct_idx:  30, to_junct_idx:  47, map_idx:  73, time_minutes: 0},
{ available: 1, from_junct_idx:  75, to_junct_idx:  30, map_idx:  74, time_minutes: 0},
{ available: 1, from_junct_idx:  30, to_junct_idx:  75, map_idx:  74, time_minutes: 0},
{ available: 1, from_junct_idx:  76, to_junct_idx:  72, map_idx:  75, time_minutes: 0},
{ available: 1, from_junct_idx:  72, to_junct_idx:  76, map_idx:  75, time_minutes: 0},
{ available: 1, from_junct_idx:  72, to_junct_idx:  34, map_idx:  76, time_minutes: 0},
{ available: 1, from_junct_idx:  76, to_junct_idx:  77, map_idx:  77, time_minutes: 0},
{ available: 1, from_junct_idx:  77, to_junct_idx:  76, map_idx:  77, time_minutes: 0},
{ available: 1, from_junct_idx:  77, to_junct_idx:  78, map_idx:  78, time_minutes: 0},
{ available: 1, from_junct_idx:  77, to_junct_idx:  79, map_idx:  79, time_minutes: 0},
{ available: 1, from_junct_idx:  76, to_junct_idx:  80, map_idx:  80, time_minutes: 0},
{ available: 1, from_junct_idx:  76, to_junct_idx:  81, map_idx:  81, time_minutes: 0},
{ available: 1, from_junct_idx:  76, to_junct_idx:  82, map_idx:  82, time_minutes: 0},
{ available: 1, from_junct_idx:  73, to_junct_idx:  83, map_idx:  83, time_minutes: 0},
{ available: 1, from_junct_idx:  83, to_junct_idx:  73, map_idx:  83, time_minutes: 0},
{ available: 1, from_junct_idx:  84, to_junct_idx:  83, map_idx:  84, time_minutes: 0},
{ available: 1, from_junct_idx:  83, to_junct_idx:  84, map_idx:  84, time_minutes: 0},
{ available: 1, from_junct_idx:  83, to_junct_idx:  85, map_idx:  85, time_minutes: 0},
{ available: 1, from_junct_idx:  84, to_junct_idx:  86, map_idx:  86, time_minutes: 0},
{ available: 1, from_junct_idx:  84, to_junct_idx:  87, map_idx:  87, time_minutes: 0},
{ available: 1, from_junct_idx:  87, to_junct_idx:  84, map_idx:  87, time_minutes: 0},
{ available: 1, from_junct_idx:  45, to_junct_idx:  88, map_idx:  88, time_minutes: 0},
{ available: 1, from_junct_idx:  88, to_junct_idx:  45, map_idx:  88, time_minutes: 0},
{ available: 1, from_junct_idx:  89, to_junct_idx:  88, map_idx:  89, time_minutes: 0},
{ available: 1, from_junct_idx:  88, to_junct_idx:  89, map_idx:  89, time_minutes: 0},
{ available: 1, from_junct_idx:  88, to_junct_idx:  90, map_idx:  90, time_minutes: 0},
{ available: 1, from_junct_idx:  39, to_junct_idx:  91, map_idx:  91, time_minutes: 0},
{ available: 1, from_junct_idx:  91, to_junct_idx:  39, map_idx:  91, time_minutes: 0},
{ available: 1, from_junct_idx:  92, to_junct_idx:  16, map_idx:  92, time_minutes: 0},
{ available: 1, from_junct_idx:  16, to_junct_idx:  92, map_idx:  92, time_minutes: 0},
{ available: 1, from_junct_idx:  52, to_junct_idx:  57, map_idx:  93, time_minutes: 0},
{ available: 1, from_junct_idx:  57, to_junct_idx:  52, map_idx:  93, time_minutes: 0},
{ available: 1, from_junct_idx:  31, to_junct_idx:  93, map_idx:  94, time_minutes: 0},
{ available: 1, from_junct_idx:  93, to_junct_idx:  31, map_idx:  94, time_minutes: 0},
{ available: 1, from_junct_idx:  93, to_junct_idx:  75, map_idx:  95, time_minutes: 0},
{ available: 1, from_junct_idx:  75, to_junct_idx:  93, map_idx:  95, time_minutes: 0},
{ available: 1, from_junct_idx:  53, to_junct_idx:  94, map_idx:  96, time_minutes: 0},
{ available: 1, from_junct_idx:  94, to_junct_idx:  53, map_idx:  96, time_minutes: 0},
{ available: 1, from_junct_idx:  39, to_junct_idx:  95, map_idx:  97, time_minutes: 0},
{ available: 1, from_junct_idx:  95, to_junct_idx:  39, map_idx:  97, time_minutes: 0},
{ available: 1, from_junct_idx:  96, to_junct_idx:  95, map_idx:  98, time_minutes: 0},
{ available: 1, from_junct_idx:  95, to_junct_idx:  96, map_idx:  98, time_minutes: 0},
{ available: 1, from_junct_idx:  60, to_junct_idx:  97, map_idx:  99, time_minutes: 0},
{ available: 1, from_junct_idx:  97, to_junct_idx:  60, map_idx:  99, time_minutes: 0},
{ available: 1, from_junct_idx:  60, to_junct_idx:  98, map_idx: 100, time_minutes: 0},
{ available: 1, from_junct_idx:  98, to_junct_idx:  60, map_idx: 100, time_minutes: 0},
{ available: 1, from_junct_idx:  92, to_junct_idx:  98, map_idx: 101, time_minutes: 0},
{ available: 1, from_junct_idx:  98, to_junct_idx:  92, map_idx: 101, time_minutes: 0},
{ available: 1, from_junct_idx:  97, to_junct_idx:  92, map_idx: 102, time_minutes: 0},
{ available: 1, from_junct_idx:  92, to_junct_idx:  97, map_idx: 102, time_minutes: 0},
{ available: 1, from_junct_idx:  45, to_junct_idx:  99, map_idx: 103, time_minutes: 0},
{ available: 1, from_junct_idx:  99, to_junct_idx:  45, map_idx: 103, time_minutes: 0},
{ available: 1, from_junct_idx: 100, to_junct_idx:   7, map_idx: 104, time_minutes: 0},
{ available: 1, from_junct_idx:   7, to_junct_idx: 100, map_idx: 104, time_minutes: 0},
{ available: 1, from_junct_idx:  94, to_junct_idx:  21, map_idx: 105, time_minutes: 0},
{ available: 1, from_junct_idx:  21, to_junct_idx:  94, map_idx: 105, time_minutes: 0},
{ available: 1, from_junct_idx:  40, to_junct_idx: 101, map_idx: 106, time_minutes: 0},
{ available: 1, from_junct_idx: 101, to_junct_idx:  40, map_idx: 106, time_minutes: 0},
{ available: 1, from_junct_idx:  54, to_junct_idx: 102, map_idx: 107, time_minutes: 0},
{ available: 1, from_junct_idx: 102, to_junct_idx:  54, map_idx: 107, time_minutes: 0},
{ available: 1, from_junct_idx: 102, to_junct_idx: 103, map_idx: 108, time_minutes: 0},
{ available: 1, from_junct_idx: 102, to_junct_idx:  35, map_idx: 109, time_minutes: 0},
{ available: 1, from_junct_idx:  99, to_junct_idx: 104, map_idx: 110, time_minutes: 0},
{ available: 1, from_junct_idx: 104, to_junct_idx:  99, map_idx: 110, time_minutes: 0},
{ available: 1, from_junct_idx:  98, to_junct_idx: 100, map_idx: 111, time_minutes: 0},
{ available: 1, from_junct_idx: 100, to_junct_idx:  98, map_idx: 111, time_minutes: 0},
{ available: 1, from_junct_idx:  44, to_junct_idx:  38, map_idx: 112, time_minutes: 0},
{ available: 1, from_junct_idx:  38, to_junct_idx:  44, map_idx: 112, time_minutes: 0},
{ available: 1, from_junct_idx:  70, to_junct_idx:  29, map_idx: 113, time_minutes: 0},
{ available: 1, from_junct_idx:  29, to_junct_idx:  70, map_idx: 113, time_minutes: 0},
{ available: 1, from_junct_idx: 105, to_junct_idx:  70, map_idx: 114, time_minutes: 0},
{ available: 1, from_junct_idx:  70, to_junct_idx: 105, map_idx: 114, time_minutes: 0},
{ available: 1, from_junct_idx:  29, to_junct_idx:  51, map_idx: 115, time_minutes: 0},
{ available: 1, from_junct_idx:  51, to_junct_idx:  29, map_idx: 115, time_minutes: 0},
{ available: 1, from_junct_idx:  56, to_junct_idx: 106, map_idx: 116, time_minutes: 0},
{ available: 1, from_junct_idx: 106, to_junct_idx:  56, map_idx: 116, time_minutes: 0},
{ available: 1, from_junct_idx:  61, to_junct_idx:  63, map_idx: 117, time_minutes: 0},
{ available: 1, from_junct_idx:  63, to_junct_idx:  61, map_idx: 117, time_minutes: 0},
{ available: 1, from_junct_idx:  63, to_junct_idx: 107, map_idx: 118, time_minutes: 0},
{ available: 1, from_junct_idx: 108, to_junct_idx:  20, map_idx: 119, time_minutes: 0},
{ available: 1, from_junct_idx:  85, to_junct_idx: 109, map_idx: 120, time_minutes: 0},
{ available: 1, from_junct_idx: 109, to_junct_idx:  85, map_idx: 120, time_minutes: 0},
{ available: 1, from_junct_idx: 109, to_junct_idx:  55, map_idx: 121, time_minutes: 0},
{ available: 1, from_junct_idx: 109, to_junct_idx: 110, map_idx: 122, time_minutes: 0},
{ available: 1, from_junct_idx:  51, to_junct_idx:  59, map_idx: 123, time_minutes: 0},
{ available: 1, from_junct_idx:  59, to_junct_idx:  51, map_idx: 123, time_minutes: 0},
{ available: 1, from_junct_idx: 111, to_junct_idx:  59, map_idx: 124, time_minutes: 0},
{ available: 1, from_junct_idx:  59, to_junct_idx: 111, map_idx: 124, time_minutes: 0},
{ available: 1, from_junct_idx:  27, to_junct_idx:   1, map_idx: 125, time_minutes: 0},
{ available: 1, from_junct_idx:  97, to_junct_idx: 105, map_idx: 126, time_minutes: 0},
{ available: 1, from_junct_idx: 105, to_junct_idx:  97, map_idx: 126, time_minutes: 0},
{ available: 1, from_junct_idx:  27, to_junct_idx: 105, map_idx: 127, time_minutes: 0},
{ available: 1, from_junct_idx: 105, to_junct_idx:  27, map_idx: 127, time_minutes: 0},
{ available: 1, from_junct_idx:  42, to_junct_idx: 112, map_idx: 128, time_minutes: 0},
{ available: 1, from_junct_idx: 112, to_junct_idx:  42, map_idx: 128, time_minutes: 0},
{ available: 1, from_junct_idx:  39, to_junct_idx:  96, map_idx: 129, time_minutes: 0},
{ available: 1, from_junct_idx:  96, to_junct_idx:  39, map_idx: 129, time_minutes: 0},
{ available: 1, from_junct_idx:  13, to_junct_idx: 113, map_idx: 130, time_minutes: 0},
{ available: 1, from_junct_idx:  58, to_junct_idx: 111, map_idx: 131, time_minutes: 0},
{ available: 1, from_junct_idx: 111, to_junct_idx:  58, map_idx: 131, time_minutes: 0},
{ available: 1, from_junct_idx:  52, to_junct_idx:  50, map_idx: 132, time_minutes: 0},
{ available: 1, from_junct_idx:  50, to_junct_idx:  52, map_idx: 132, time_minutes: 0},
{ available: 1, from_junct_idx:  19, to_junct_idx:  50, map_idx: 133, time_minutes: 0},
{ available: 1, from_junct_idx:  50, to_junct_idx:  19, map_idx: 133, time_minutes: 0},
{ available: 1, from_junct_idx: 100, to_junct_idx: 114, map_idx: 134, time_minutes: 0},
{ available: 1, from_junct_idx: 114, to_junct_idx: 100, map_idx: 134, time_minutes: 0},
{ available: 1, from_junct_idx:  43, to_junct_idx: 115, map_idx: 135, time_minutes: 0},
{ available: 1, from_junct_idx: 115, to_junct_idx:  43, map_idx: 135, time_minutes: 0},
{ available: 1, from_junct_idx:  93, to_junct_idx: 115, map_idx: 136, time_minutes: 0},
{ available: 1, from_junct_idx: 115, to_junct_idx:  93, map_idx: 136, time_minutes: 0},
{ available: 1, from_junct_idx: 101, to_junct_idx: 115, map_idx: 137, time_minutes: 0},
{ available: 1, from_junct_idx: 115, to_junct_idx: 101, map_idx: 137, time_minutes: 0},
{ available: 1, from_junct_idx: 116, to_junct_idx: 115, map_idx: 138, time_minutes: 0},
{ available: 1, from_junct_idx: 115, to_junct_idx: 116, map_idx: 138, time_minutes: 0},
{ available: 1, from_junct_idx:  64, to_junct_idx: 117, map_idx: 139, time_minutes: 0},
{ available: 1, from_junct_idx: 117, to_junct_idx:  64, map_idx: 139, time_minutes: 0},
{ available: 1, from_junct_idx:  75, to_junct_idx: 116, map_idx: 140, time_minutes: 0},
{ available: 1, from_junct_idx: 116, to_junct_idx:  75, map_idx: 140, time_minutes: 0},
{ available: 1, from_junct_idx: 111, to_junct_idx: 118, map_idx: 141, time_minutes: 0},
{ available: 1, from_junct_idx: 118, to_junct_idx: 111, map_idx: 141, time_minutes: 0},
];

var num_entries =  34;

var entrypoints = ["A13", "8", "A10", "6", "14", "A16", "A18", "5", "GR5", "10", "A19", "13", "16", "F3", "F4", "H1", "H2", "H3", "GR7", "F15", "15", "A17", "12", "GR6", "9", "A5"];

var junctions = [
{ name: "A13", x: 45.561, y: -78.438, pix_x: 983.932, pix_y: -112.184},
{ name: "9", x: 45.525, y: -78.414, pix_x: 810.523, pix_y: -263.158},
{ name: "Big Porcupine (north)", x: 45.462, y: -78.615, pix_x: 507.055, pix_y: 1001.12},
{ name: "Big Porcupine (middle)", x: 45.454, y: -78.609, pix_x: 468.503, pix_y: 963.402},
{ name: "Ragged", x: 45.482, y: -78.648, pix_x: 603.378, pix_y: 1208.72},
{ name: "Big Porcupine (south)", x: 45.447, y: -78.604, pix_x: 434.784, pix_y: 931.921},
{ name: "Bonnechere (south)", x: 45.454, y: -78.585, pix_x: 468.503, pix_y: 812.427},
{ name: "McGarvey (east)", x: 45.434, y: -78.558, pix_x: 372.161, pix_y: 642.593},
{ name: "Cradle", x: 45.471, y: -78.582, pix_x: 550.402, pix_y: 793.567},
{ name: "Cache (south)", x: 45.539, y: -78.585, pix_x: 877.961, pix_y: 812.427},
{ name: "Head", x: 45.52, y: -78.566, pix_x: 786.434, pix_y: 692.934},
{ name: "Cache (north)", x: 45.551, y: -78.593, pix_x: 935.751, pix_y: 862.768},
{ name: "Claude", x: 45.478, y: -78.679, pix_x: 584.121, pix_y: 1403.7},
{ name: "Smoke (south)", x: 45.506, y: -78.672, pix_x: 718.996, pix_y: 1359.65},
{ name: "Pardee", x: 45.492, y: -78.537, pix_x: 651.558, pix_y: 510.526},
{ name: "Kenneth", x: 45.511, y: -78.56, pix_x: 743.086, pix_y: 655.166},
{ name: "Lawrence", x: 45.491, y: -78.534, pix_x: 646.744, pix_y: 491.618},
{ name: "Little Coon", x: 45.433, y: -78.592, pix_x: 367.347, pix_y: 856.481},
{ name: "Whatnot", x: 45.424, y: -78.58, pix_x: 324, pix_y: 780.994},
{ name: "Ma-Da-Was-Ka", x: 45.325, y: -78.394, pix_x: -152.877, pix_y: -388.986},
{ name: "Lake of Two Rivers", x: 45.577, y: -78.48, pix_x: 1061, pix_y: 151.998},
{ name: "McGarvey (west)", x: 45.427, y: -78.471, pix_x: 338.443, pix_y: 95.3704},
{ name: "Tanamakoon", x: 45.54, y: -78.618, pix_x: 882.775, pix_y: 1019.98},
{ name: "Smoke (middle)", x: 45.524, y: -78.689, pix_x: 805.691, pix_y: 1466.62},
{ name: "Smoke (north)", x: 45.53, y: -78.698, pix_x: 834.595, pix_y: 1523.2},
{ name: "Galeairy (west)", x: 45.478, y: -78.299, pix_x: 584.121, pix_y: -986.502},
{ name: "Aubrey (north)", x: 45.489, y: -78.343, pix_x: 637.097, pix_y: -709.747},
{ name: "Rock (north)", x: 45.515, y: -78.403, pix_x: 762.344, pix_y: -332.359},
{ name: "Aubrey (south)", x: 45.475, y: -78.341, pix_x: 569.66, pix_y: -722.32},
{ name: "Pen (middle)", x: 45.461, y: -78.384, pix_x: 502.222, pix_y: -451.852},
{ name: "Joe", x: 45.588, y: -78.721, pix_x: 1113.99, pix_y: 1667.89},
{ name: "Baby Joe", x: 45.623, y: -78.682, pix_x: 1282.59, pix_y: 1422.56},
{ name: "Livingstone", x: 45.37, y: -78.722, pix_x: 63.8783, pix_y: 1674.17},
{ name: "Bear", x: 45.336, y: -78.708, pix_x: -99.9011, pix_y: 1586.11},
{ name: "Ka-Wa-Ga-Ma (A16)", x: 45.331, y: -78.707, pix_x: -123.973, pix_y: 1579.83},
{ name: "Rockaway", x: 45.392, y: -78.629, pix_x: 169.849, pix_y: 1089.18},
{ name: "Big Trout (middle)", x: 45.761, y: -78.612, pix_x: 1947.33, pix_y: 982.261},
{ name: "Big Trout (east)", x: 45.773, y: -78.578, pix_x: 2005.12, pix_y: 768.421},
{ name: "Otter Slide", x: 45.703, y: -78.605, pix_x: 1667.94, pix_y: 938.255},
{ name: "Big Trout (west)", x: 45.769, y: -78.646, pix_x: 1985.87, pix_y: 1196.15},
{ name: "Grassy Bay", x: 45.709, y: -78.687, pix_x: 1696.84, pix_y: 1454},
{ name: "Hay Creek", x: 45.382, y: -78.241, pix_x: 121.687, pix_y: -1351.36},
{ name: "Branch", x: 45.237, y: -78.226, pix_x: -576.778, pix_y: -1445.71},
{ name: "Burnt Island (west)", x: 45.649, y: -78.648, pix_x: 1407.81, pix_y: 1208.72},
{ name: "Burnt Island (east)", x: 45.66, y: -78.616, pix_x: 1460.81, pix_y: 1007.41},
{ name: "Byers", x: 45.23, y: -78.197, pix_x: -610.497, pix_y: -1628.12},
{ name: "Canoe (5)", x: 45.536, y: -78.708, pix_x: 863.5, pix_y: 1586.11},
{ name: "Canoe (north)", x: 45.565, y: -78.721, pix_x: 1003.19, pix_y: 1667.89},
{ name: "Canoe (south)", x: 45.534, y: -78.723, pix_x: 853.871, pix_y: 1680.46},
{ name: "Cauliflower", x: 45.389, y: -78.252, pix_x: 155.406, pix_y: -1282.16},
{ name: "South Ma-Da-Was-Ka River", x: 45.367, y: -78.32, pix_x: 49.4352, pix_y: -854.435},
{ name: "Pen (south)", x: 45.44, y: -78.372, pix_x: 401.066, pix_y: -527.34},
{ name: "Clydegale", x: 45.414, y: -78.354, pix_x: 275.838, pix_y: -640.594},
{ name: "Hollow River", x: 45.391, y: -78.586, pix_x: 165.035, pix_y: 818.714},
{ name: "Dividing", x: 45.409, y: -78.598, pix_x: 251.748, pix_y: 894.201},
{ name: "Redstone (GR5)", x: 45.164, y: -78.5, pix_x: -928.409, pix_y: 277.778},
{ name: "Eagle", x: 45.141, y: -78.494, pix_x: -1039.21, pix_y: 240.058},
{ name: "Little Canoe", x: 45.382, y: -78.392, pix_x: 121.687, pix_y: -401.56},
{ name: "East Galipo", x: 45.376, y: -78.423, pix_x: 92.7827, pix_y: -206.579},
{ name: "Rence", x: 45.421, y: -78.461, pix_x: 309.557, pix_y: 32.4563},
{ name: "Florence", x: 45.442, y: -78.474, pix_x: 410.713, pix_y: 114.23},
{ name: "Fork", x: 45.567, y: -78.35, pix_x: 1012.84, pix_y: -665.741},
{ name: "10", x: 45.587, y: -78.37, pix_x: 1109.18, pix_y: -539.913},
{ name: "Pinetree", x: 45.547, y: -78.324, pix_x: 916.494, pix_y: -829.289},
{ name: "Fraser", x: 45.538, y: -78.333, pix_x: 873.128, pix_y: -772.661},
{ name: "Galeairy (A19)", x: 45.498, y: -78.259, pix_x: 680.463, pix_y: -1238.11},
{ name: "Galeairy (Whitney)", x: 45.489, y: -78.243, pix_x: 637.097, pix_y: -1338.79},
{ name: "Galeairy (east)", x: 45.484, y: -78.251, pix_x: 613.025, pix_y: -1288.45},
{ name: "Galeairy (Farm Bay)", x: 45.466, y: -78.298, pix_x: 526.312, pix_y: -992.836},
{ name: "Farm Bay", x: 45.472, y: -78.321, pix_x: 555.217, pix_y: -848.148},
{ name: "Pen (north)", x: 45.474, y: -78.392, pix_x: 564.845, pix_y: -401.56},
{ name: "Gem", x: 45.48, y: -78.372, pix_x: 593.75, pix_y: -527.34},
{ name: "Ka-Wa-Ga-Ma (Echo Island)", x: 45.316, y: -78.724, pix_x: -196.225, pix_y: 1686.75},
{ name: "Havelock", x: 45.284, y: -78.64, pix_x: -350.375, pix_y: 1158.38},
{ name: "Hay", x: 45.383, y: -78.165, pix_x: 126.501, pix_y: -1829.39},
{ name: "Littledoe (west)", x: 45.625, y: -78.714, pix_x: 1292.21, pix_y: 1623.83},
{ name: "Ka-Wa-Ga-Ma (west)", x: 45.295, y: -78.752, pix_x: -297.399, pix_y: 1862.87},
{ name: "Ka-Wa-Ga-Ma (Tyrell Island)", x: 45.268, y: -78.8, pix_x: -427.442, pix_y: 2164.82},
{ name: "Ka-Wa-Ga-Ma (F3)", x: 45.248, y: -78.796, pix_x: -523.784, pix_y: 2139.62},
{ name: "Ka-Wa-Ga-Ma (F4)", x: 45.268, y: -78.809, pix_x: -427.442, pix_y: 2221.39},
{ name: "Ka-Wa-Ga-Ma (H1)", x: 45.311, y: -78.822, pix_x: -220.315, pix_y: 2303.17},
{ name: "Ka-Wa-Ga-Ma (H2)", x: 45.291, y: -78.731, pix_x: -316.657, pix_y: 1730.8},
{ name: "Ka-Wa-Ga-Ma (H3)", x: 45.304, y: -78.774, pix_x: -254.034, pix_y: 2001.27},
{ name: "Kennisis (east)", x: 45.226, y: -78.608, pix_x: -629.754, pix_y: 957.115},
{ name: "Kennisis (middle)", x: 45.208, y: -78.654, pix_x: -716.467, pix_y: 1246.44},
{ name: "Little Redstone", x: 45.214, y: -78.56, pix_x: -687.563, pix_y: 655.166},
{ name: "Kennisis (F15)", x: 45.216, y: -78.663, pix_x: -677.934, pix_y: 1303.07},
{ name: "Kennisis (south)", x: 45.195, y: -78.645, pix_x: -779.091, pix_y: 1189.82},
{ name: "Kingscote (north)", x: 45.217, y: -78.222, pix_x: -673.12, pix_y: -1470.86},
{ name: "Upper Minnow", x: 45.227, y: -78.228, pix_x: -624.94, pix_y: -1433.14},
{ name: "Kingscote (south)", x: 45.19, y: -78.231, pix_x: -803.181, pix_y: -1414.23},
{ name: "Lake la Muir (west)", x: 45.816, y: -78.62, pix_x: 2212.27, pix_y: 1032.6},
{ name: "Louisa (west)", x: 45.464, y: -78.505, pix_x: 516.683, pix_y: 309.211},
{ name: "Littledoe (east)", x: 45.624, y: -78.696, pix_x: 1287.4, pix_y: 1510.62},
{ name: "Loader", x: 45.422, y: -78.567, pix_x: 314.371, pix_y: 699.22},
{ name: "Longer", x: 45.789, y: -78.662, pix_x: 2082.21, pix_y: 1296.78},
{ name: "Ship-Pa-Gew", x: 45.779, y: -78.697, pix_x: 2034.03, pix_y: 1516.91},
{ name: "Louisa (east)", x: 45.476, y: -78.454, pix_x: 574.492, pix_y: -11.55},
{ name: "Louisa (south)", x: 45.454, y: -78.497, pix_x: 468.503, pix_y: 258.918},
{ name: "McCoy", x: 45.198, y: -78.138, pix_x: -764.629, pix_y: -1999.22},
{ name: "North Grace", x: 45.442, y: -78.511, pix_x: 410.713, pix_y: 346.979},
{ name: "McIntosh Marsh", x: 45.7, y: -78.706, pix_x: 1653.49, pix_y: 1573.54},
{ name: "Minkey", x: 45.405, y: -78.612, pix_x: 232.472, pix_y: 982.261},
{ name: "Dagger", x: 45.397, y: -78.645, pix_x: 193.939, pix_y: 1189.82},
{ name: "Moffat Pond", x: 45.215, y: -78.122, pix_x: -682.749, pix_y: -2099.85},
{ name: "Rock (south)", x: 45.494, y: -78.408, pix_x: 661.187, pix_y: -300.926},
{ name: "Percy", x: 45.203, y: -78.352, pix_x: -740.557, pix_y: -653.168},
{ name: "KM Marker 50", x: 45.577, y: -78.299, pix_x: 1061, pix_y: -986.502},
{ name: "Provoking", x: 45.558, y: -78.496, pix_x: 969.47, pix_y: 252.631},
{ name: "Redstone", x: 45.177, y: -78.529, pix_x: -865.804, pix_y: 460.185},
{ name: "Redstone (GR6)", x: 45.164, y: -78.551, pix_x: -928.409, pix_y: 598.587},
{ name: "South Galipo", x: 45.371, y: -78.451, pix_x: 68.6926, pix_y: -30.4578},
{ name: "Scorch", x: 45.242, y: -78.189, pix_x: -552.688, pix_y: -1678.41},
{ name: "Park", x: 45.412, y: -78.861, pix_x: 266.191, pix_y: 2548.49},
{ name: "Stringer", x: 45.427, y: -78.513, pix_x: 338.443, pix_y: 359.552},
{ name: "Sunbeam", x: 45.661, y: -78.692, pix_x: 1465.62, pix_y: 1485.48},
{ name: "Tom Thomson", x: 45.631, y: -78.731, pix_x: 1321.12, pix_y: 1730.8},
{ name: "Sylvia", x: 45.526, y: -78.342, pix_x: 815.338, pix_y: -716.034},
{ name: "Upper Redstone", x: 45.351, y: -78.442, pix_x: -27.631, pix_y: -87.0374},
];

