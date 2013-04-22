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
{ name: "A13", y: 45.561, x: -78.438, pix_x: 1282.66, pix_y: 191.177},
{ name: "9", y: 45.525, x: -78.414, pix_x: 1444.2, pix_y: 344.585},
{ name: "Big Porcupine (north)", y: 45.462, x: -78.615, pix_x: 91.478, pix_y: 613.054},
{ name: "Big Porcupine (middle)", y: 45.454, x: -78.609, pix_x: 131.836, pix_y: 647.16},
{ name: "Ragged", y: 45.482, x: -78.648, pix_x: -130.646, pix_y: 527.84},
{ name: "Big Porcupine (south)", y: 45.447, x: -78.604, pix_x: 165.519, pix_y: 676.99},
{ name: "Bonnechere (south)", y: 45.454, x: -78.585, pix_x: 293.372, pix_y: 647.16},
{ name: "McGarvey (east)", y: 45.434, x: -78.558, pix_x: 475.086, pix_y: 732.39},
{ name: "Cradle", y: 45.471, x: -78.582, pix_x: 313.551, pix_y: 574.706},
{ name: "Cache (south)", y: 45.539, x: -78.585, pix_x: 293.372, pix_y: 284.926},
{ name: "Head", y: 45.52, x: -78.566, pix_x: 421.224, pix_y: 365.897},
{ name: "Cache (north)", y: 45.551, x: -78.593, pix_x: 239.509, pix_y: 233.8},
{ name: "Claude", y: 45.478, x: -78.679, pix_x: -339.266, pix_y: 544.876},
{ name: "Smoke (south)", y: 45.506, x: -78.672, pix_x: -292.13, pix_y: 425.557},
{ name: "Pardee", y: 45.492, x: -78.537, pix_x: 616.391, pix_y: 485.217},
{ name: "Kenneth", y: 45.511, x: -78.56, pix_x: 461.633, pix_y: 404.245},
{ name: "Lawrence", y: 45.491, x: -78.534, pix_x: 636.622, pix_y: 489.476},
{ name: "Little Coon", y: 45.433, x: -78.592, pix_x: 246.236, pix_y: 736.649},
{ name: "Whatnot", y: 45.424, x: -78.58, pix_x: 327.003, pix_y: 774.998},
{ name: "Ma-Da-Was-Ka", y: 45.325, x: -78.394, pix_x: 1578.83, pix_y: 1196.88},
{ name: "Lake of Two Rivers", y: 45.577, x: -78.48, pix_x: 999.999, pix_y: 122.999},
{ name: "McGarvey (west)", y: 45.427, x: -78.471, pix_x: 1060.59, pix_y: 762.22},
{ name: "Tanamakoon", y: 45.54, x: -78.618, pix_x: 71.2988, pix_y: 280.667},
{ name: "Smoke (middle)", y: 45.524, x: -78.689, pix_x: -406.581, pix_y: 348.861},
{ name: "Smoke (north)", y: 45.53, x: -78.698, pix_x: -467.119, pix_y: 323.29},
{ name: "Galeairy (west)", y: 45.478, x: -78.299, pix_x: 2218.14, pix_y: 544.876},
{ name: "Aubrey (north)", y: 45.489, x: -78.343, pix_x: 1922.02, pix_y: 498.01},
{ name: "Rock (north)", y: 45.515, x: -78.403, pix_x: 1518.24, pix_y: 387.209},
{ name: "Aubrey (south)", y: 45.475, x: -78.341, pix_x: 1935.48, pix_y: 557.67},
{ name: "Pen (middle)", y: 45.461, x: -78.384, pix_x: 1646.09, pix_y: 617.33},
{ name: "Joe", y: 45.588, x: -78.721, pix_x: -621.928, pix_y: 76.1162},
{ name: "Baby Joe", y: 45.623, x: -78.682, pix_x: -359.445, pix_y: -73.0332},
{ name: "Livingstone", y: 45.37, x: -78.722, pix_x: -628.654, pix_y: 1005.12},
{ name: "Bear", y: 45.336, x: -78.708, pix_x: -534.434, pix_y: 1150.01},
{ name: "Ka-Wa-Ga-Ma (A16)", y: 45.331, x: -78.707, pix_x: -527.707, pix_y: 1171.3},
{ name: "Rockaway", y: 45.392, x: -78.629, pix_x: -2.74268, pix_y: 911.37},
{ name: "Big Trout (middle)", y: 45.761, x: -78.612, pix_x: 111.657, pix_y: -661.113},
{ name: "Big Trout (east)", y: 45.773, x: -78.578, pix_x: 340.456, pix_y: -712.239},
{ name: "Otter Slide", y: 45.703, x: -78.605, pix_x: 158.741, pix_y: -413.939},
{ name: "Big Trout (west)", y: 45.769, x: -78.646, pix_x: -117.193, pix_y: -695.202},
{ name: "Grassy Bay", y: 45.709, x: -78.687, pix_x: -393.077, pix_y: -439.51},
{ name: "Hay Creek", y: 45.382, x: -78.241, pix_x: 2608.52, pix_y: 953.977},
{ name: "Branch", y: 45.237, x: -78.226, pix_x: 2709.47, pix_y: 1571.89},
{ name: "Burnt Island (west)", y: 45.649, x: -78.648, pix_x: -130.646, pix_y: -183.818},
{ name: "Burnt Island (east)", y: 45.66, x: -78.616, pix_x: 84.7515, pix_y: -230.701},
{ name: "Byers", y: 45.23, x: -78.197, pix_x: 2904.64, pix_y: 1601.72},
{ name: "Canoe (5)", y: 45.536, x: -78.708, pix_x: -534.434, pix_y: 297.719},
{ name: "Canoe (north)", y: 45.565, x: -78.721, pix_x: -621.928, pix_y: 174.14},
{ name: "Canoe (south)", y: 45.534, x: -78.723, pix_x: -635.38, pix_y: 306.237},
{ name: "Cauliflower", y: 45.389, x: -78.252, pix_x: 2534.48, pix_y: 924.147},
{ name: "South Ma-Da-Was-Ka River", y: 45.367, x: -78.32, pix_x: 2076.83, pix_y: 1017.9},
{ name: "Pen (south)", y: 45.44, x: -78.372, pix_x: 1726.86, pix_y: 706.82},
{ name: "Clydegale", y: 45.414, x: -78.354, pix_x: 1848.03, pix_y: 817.605},
{ name: "Hollow River", y: 45.391, x: -78.586, pix_x: 286.645, pix_y: 915.629},
{ name: "Dividing", y: 45.409, x: -78.598, pix_x: 205.877, pix_y: 838.916},
{ name: "Redstone (GR5)", y: 45.164, x: -78.5, pix_x: 865.421, pix_y: 1882.96},
{ name: "Eagle", y: 45.141, x: -78.494, pix_x: 905.779, pix_y: 1980.99},
{ name: "Little Canoe", y: 45.382, x: -78.392, pix_x: 1592.28, pix_y: 953.977},
{ name: "East Galipo", y: 45.376, x: -78.423, pix_x: 1383.66, pix_y: 979.548},
{ name: "Rence", y: 45.421, x: -78.461, pix_x: 1127.9, pix_y: 787.775},
{ name: "Florence", y: 45.442, x: -78.474, pix_x: 1040.41, pix_y: 698.285},
{ name: "Fork", y: 45.567, x: -78.35, pix_x: 1874.94, pix_y: 165.606},
{ name: "10", y: 45.587, x: -78.37, pix_x: 1740.31, pix_y: 80.3752},
{ name: "Pinetree", y: 45.547, x: -78.324, pix_x: 2049.93, pix_y: 250.837},
{ name: "Fraser", y: 45.538, x: -78.333, pix_x: 1989.34, pix_y: 289.201},
{ name: "Galeairy (A19)", y: 45.498, x: -78.259, pix_x: 2487.35, pix_y: 459.646},
{ name: "Galeairy (Whitney)", y: 45.489, x: -78.243, pix_x: 2595.07, pix_y: 498.01},
{ name: "Galeairy (east)", y: 45.484, x: -78.251, pix_x: 2541.21, pix_y: 519.306},
{ name: "Galeairy (Farm Bay)", y: 45.466, x: -78.298, pix_x: 2224.92, pix_y: 596.018},
{ name: "Farm Bay", y: 45.472, x: -78.321, pix_x: 2070.11, pix_y: 570.447},
{ name: "Pen (north)", y: 45.474, x: -78.392, pix_x: 1592.28, pix_y: 561.929},
{ name: "Gem", y: 45.48, x: -78.372, pix_x: 1726.86, pix_y: 536.358},
{ name: "Ka-Wa-Ga-Ma (Echo Island)", y: 45.316, x: -78.724, pix_x: -642.106, pix_y: 1235.22},
{ name: "Havelock", y: 45.284, x: -78.64, pix_x: -76.7837, pix_y: 1371.6},
{ name: "Hay", y: 45.383, x: -78.165, pix_x: 3119.99, pix_y: 949.718},
{ name: "Littledoe (west)", y: 45.625, x: -78.714, pix_x: -574.792, pix_y: -81.5515},
{ name: "Ka-Wa-Ga-Ma (west)", y: 45.295, x: -78.752, pix_x: -830.547, pix_y: 1324.73},
{ name: "Ka-Wa-Ga-Ma (Tyrell Island)", y: 45.268, x: -78.8, pix_x: -1153.62, pix_y: 1439.77},
{ name: "Ka-Wa-Ga-Ma (F3)", y: 45.248, x: -78.796, pix_x: -1126.66, pix_y: 1525},
{ name: "Ka-Wa-Ga-Ma (F4)", y: 45.268, x: -78.809, pix_x: -1214.16, pix_y: 1439.77},
{ name: "Ka-Wa-Ga-Ma (H1)", y: 45.311, x: -78.822, pix_x: -1301.65, pix_y: 1256.54},
{ name: "Ka-Wa-Ga-Ma (H2)", y: 45.291, x: -78.731, pix_x: -689.243, pix_y: 1341.77},
{ name: "Ka-Wa-Ga-Ma (H3)", y: 45.304, x: -78.774, pix_x: -978.63, pix_y: 1286.36},
{ name: "Kennisis (east)", y: 45.226, x: -78.608, pix_x: 138.562, pix_y: 1618.75},
{ name: "Kennisis (middle)", y: 45.208, x: -78.654, pix_x: -171.004, pix_y: 1695.47},
{ name: "Little Redstone", y: 45.214, x: -78.56, pix_x: 461.633, pix_y: 1669.89},
{ name: "Kennisis (F15)", y: 45.216, x: -78.663, pix_x: -231.593, pix_y: 1661.38},
{ name: "Kennisis (south)", y: 45.195, x: -78.645, pix_x: -110.416, pix_y: 1750.87},
{ name: "Kingscote (north)", y: 45.217, x: -78.222, pix_x: 2736.38, pix_y: 1657.12},
{ name: "Upper Minnow", y: 45.227, x: -78.228, pix_x: 2696.02, pix_y: 1614.49},
{ name: "Kingscote (south)", y: 45.19, x: -78.231, pix_x: 2675.79, pix_y: 1772.18},
{ name: "Lake la Muir (west)", y: 45.816, x: -78.62, pix_x: 57.7949, pix_y: -895.493},
{ name: "Louisa (west)", y: 45.464, x: -78.505, pix_x: 831.789, pix_y: 604.536},
{ name: "Littledoe (east)", y: 45.624, x: -78.696, pix_x: -453.666, pix_y: -77.2925},
{ name: "Loader", y: 45.422, x: -78.567, pix_x: 414.498, pix_y: 783.516},
{ name: "Longer", y: 45.789, x: -78.662, pix_x: -224.867, pix_y: -780.433},
{ name: "Ship-Pa-Gew", y: 45.779, x: -78.697, pix_x: -460.392, pix_y: -737.809},
{ name: "Louisa (east)", y: 45.476, x: -78.454, pix_x: 1174.99, pix_y: 553.395},
{ name: "Louisa (south)", y: 45.454, x: -78.497, pix_x: 885.6, pix_y: 647.16},
{ name: "McCoy", y: 45.198, x: -78.138, pix_x: 3301.7, pix_y: 1738.07},
{ name: "North Grace", y: 45.442, x: -78.511, pix_x: 791.379, pix_y: 698.285},
{ name: "McIntosh Marsh", y: 45.7, x: -78.706, pix_x: -520.981, pix_y: -401.162},
{ name: "Minkey", y: 45.405, x: -78.612, pix_x: 111.657, pix_y: 855.969},
{ name: "Dagger", y: 45.397, x: -78.645, pix_x: -110.416, pix_y: 890.058},
{ name: "Moffat Pond", y: 45.215, x: -78.122, pix_x: 3409.37, pix_y: 1665.64},
{ name: "Rock (south)", y: 45.494, x: -78.408, pix_x: 1484.61, pix_y: 476.698},
{ name: "Percy", y: 45.203, x: -78.352, pix_x: 1861.49, pix_y: 1716.78},
{ name: "KM Marker 50", y: 45.577, x: -78.299, pix_x: 2218.14, pix_y: 122.999},
{ name: "Provoking", y: 45.558, x: -78.496, pix_x: 892.326, pix_y: 203.97},
{ name: "Redstone", y: 45.177, x: -78.529, pix_x: 670.253, pix_y: 1827.58},
{ name: "Redstone (GR6)", y: 45.164, x: -78.551, pix_x: 522.171, pix_y: 1882.96},
{ name: "South Galipo", y: 45.371, x: -78.451, pix_x: 1195.22, pix_y: 1000.86},
{ name: "Scorch", y: 45.242, x: -78.189, pix_x: 2958.45, pix_y: 1550.57},
{ name: "Park", y: 45.412, x: -78.861, pix_x: -1564.13, pix_y: 826.139},
{ name: "Stringer", y: 45.427, x: -78.513, pix_x: 777.927, pix_y: 762.22},
{ name: "Sunbeam", y: 45.661, x: -78.692, pix_x: -426.76, pix_y: -234.96},
{ name: "Tom Thomson", y: 45.631, x: -78.731, pix_x: -689.243, pix_y: -107.122},
{ name: "Sylvia", y: 45.526, x: -78.342, pix_x: 1928.75, pix_y: 340.326},
{ name: "Upper Redstone", y: 45.351, x: -78.442, pix_x: 1255.76, pix_y: 1086.07},
];

