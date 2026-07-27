const SEED = [
  {id:"0356", name:"Black Monastery", cluster:"Thetford Portal", type:"blackzone", gx:-188.22, gz:83.70},
  {id:"2355", name:"Citadel of Ash", cluster:"Thetford Portal", type:"blackzone", gx:-222.58, gz:200.60},
  {id:"0346", name:"Deathwisp Sink", cluster:"Thetford Portal", type:"blackzone", gx:-207.47, gz:99.84},
  {id:"1334", name:"Driftwood Glen", cluster:"Thetford Portal", type:"blackzone", gx:-248.10, gz:80.12},
  {id:"1348", name:"Driftwood Hollow", cluster:"Thetford Portal", type:"blackzone", gx:-205.80, gz:76.62},
  {id:"1321", name:"Driftwood Vale", cluster:"Thetford Portal", type:"blackzone", gx:-221.18, gz:83.10},
  {id:"0308", name:"Drownfield Course", cluster:"Thetford Portal", type:"blackzone", gx:-248.72, gz:199.73},
  {id:"0310", name:"Drownfield Mire", cluster:"Thetford Portal", type:"blackzone", gx:-226.40, gz:179.35},
  {id:"0340", name:"Drownfield Quag", cluster:"Thetford Portal", type:"blackzone", gx:-208.67, gz:162.00},
  {id:"0332", name:"Drownfield Rut", cluster:"Thetford Portal", type:"blackzone", gx:-201.71, gz:148.30},
  {id:"0355", name:"Drownfield Sink", cluster:"Thetford Portal", type:"blackzone", gx:-186.51, gz:139.90},
  {id:"0328", name:"Drownfield Wetland", cluster:"Thetford Portal", type:"blackzone", gx:-258.75, gz:183.14},
  {id:"2328", name:"Drytop Pillars", cluster:"Thetford Portal", type:"blackzone", gx:-297.21, gz:201.50},
  {id:"2327", name:"Drytop Riverbed", cluster:"Thetford Portal", type:"blackzone", gx:-312.53, gz:203.43},
  {id:"4340", name:"Everwinter Expanse", cluster:"Thetford Portal", type:"blackzone", gx:-239.52, gz:219.43},
  {id:"4310", name:"Everwinter Shores", cluster:"Thetford Portal", type:"blackzone", gx:-252.37, gz:221.87},
  {id:"4347", name:"Frostseep Crevasse", cluster:"Thetford Portal", type:"blackzone", gx:-285.81, gz:102.33},
  {id:"4320", name:"Frostseep Ravine", cluster:"Thetford Portal", type:"blackzone", gx:-289.07, gz:78.90},
  {id:"3306", name:"Murdergulch Cross", cluster:"Thetford Portal", type:"blackzone", gx:-228.10, gz:116.82},
  {id:"3354", name:"Murdergulch Divide", cluster:"Thetford Portal", type:"blackzone", gx:-214.48, gz:124.50},
  {id:"3307", name:"Murdergulch Gap", cluster:"Thetford Portal", type:"blackzone", gx:-193.48, gz:118.60},
  {id:"3355", name:"Murdergulch Ravine", cluster:"Thetford Portal", type:"blackzone", gx:-173.60, gz:105.72},
  {id:"3342", name:"Murdergulch Trail", cluster:"Thetford Portal", type:"blackzone", gx:-225.91, gz:101.30},
  {id:"2326", name:"Northstrand Beach", cluster:"Thetford Portal", type:"blackzone", gx:-287.41, gz:276.20},
  {id:"2305", name:"Northstrand Dunes", cluster:"Thetford Portal", type:"blackzone", gx:-301.81, gz:275.80},
  {id:"0353", name:"Scuttlesink Marsh", cluster:"Thetford Portal", type:"blackzone", gx:-251.88, gz:261.50},
  {id:"0324", name:"Scuttlesink Mouth", cluster:"Thetford Portal", type:"blackzone", gx:-267.08, gz:277.60},
  {id:"0306", name:"Scuttlesink Pools", cluster:"Thetford Portal", type:"blackzone", gx:-265.08, gz:263.70},
  {id:"3326", name:"Shaleheath Hills", cluster:"Thetford Portal", type:"blackzone", gx:-259.69, gz:238.82},
  {id:"3338", name:"Shaleheath Steep", cluster:"Thetford Portal", type:"blackzone", gx:-245.31, gz:235.82},
  {id:"1342", name:"Timberscar Copse", cluster:"Thetford Portal", type:"blackzone", gx:-287.19, gz:181.21},
  {id:"1309", name:"Timberscar Dell", cluster:"Thetford Portal", type:"blackzone", gx:-267.00, gz:160.42},
  {id:"1325", name:"Timbertop Dale", cluster:"Thetford Portal", type:"blackzone", gx:-283.80, gz:255.42},
  {id:"1353", name:"Timbertop Escarp", cluster:"Thetford Portal", type:"blackzone", gx:-284.57, gz:242.00},
  {id:"1338", name:"Timbertop Wood", cluster:"Thetford Portal", type:"blackzone", gx:-300.77, gz:255.40},
  {id:"4317", name:"Whitepeak Ascent", cluster:"Thetford Portal", type:"blackzone", gx:-228.30, gz:138.91},
  {id:"4348", name:"Whitepeak Spring", cluster:"Thetford Portal", type:"blackzone", gx:-246.60, gz:146.52},
  {id:"4357", name:"Whitepeak Tundra", cluster:"Thetford Portal", type:"blackzone", gx:-231.12, gz:161.12},
  {id:"0317", name:"Widemoor Delta", cluster:"Thetford Portal", type:"blackzone", gx:-343.07, gz:123.60},
  {id:"0330", name:"Widemoor End", cluster:"Thetford Portal", type:"blackzone", gx:-294.15, gz:165.73},
  {id:"0316", name:"Widemoor Estuary", cluster:"Thetford Portal", type:"blackzone", gx:-324.51, gz:131.98},
  {id:"0348", name:"Widemoor Fen", cluster:"Thetford Portal", type:"blackzone", gx:-312.18, gz:83.40},
  {id:"0334", name:"Widemoor Flats", cluster:"Thetford Portal", type:"blackzone", gx:-315.01, gz:97.20},
  {id:"0327", name:"Widemoor Hills", cluster:"Thetford Portal", type:"blackzone", gx:-315.03, gz:186.04},
  {id:"0312", name:"Widemoor Pool", cluster:"Thetford Portal", type:"blackzone", gx:-310.11, gz:174.10},
  {id:"0309", name:"Widemoor Shore", cluster:"Thetford Portal", type:"blackzone", gx:-335.24, gz:182.35},
  {id:"0333", name:"Widemoor Woods", cluster:"Thetford Portal", type:"blackzone", gx:-301.58, gz:124.00},
  {id:"0344", name:"Willowshade Hills", cluster:"Thetford Portal", type:"blackzone", gx:-272.60, gz:118.22},
  {id:"0320", name:"Willowshade Icemarsh", cluster:"Thetford Portal", type:"blackzone", gx:-269.07, gz:76.20},
  {id:"0319", name:"Willowshade Lake", cluster:"Thetford Portal", type:"blackzone", gx:-248.31, gz:97.20},
  {id:"0318", name:"Willowshade Mire", cluster:"Thetford Portal", type:"blackzone", gx:-266.01, gz:91.10},
  {id:"0331", name:"Willowshade Pools", cluster:"Thetford Portal", type:"blackzone", gx:-272.35, gz:145.37},
  {id:"0345", name:"Willowshade Sink", cluster:"Thetford Portal", type:"blackzone", gx:-251.48, gz:120.70},
  {id:"0314", name:"Willowshade Wetlands", cluster:"Thetford Portal", type:"blackzone", gx:-292.17, gz:138.00},
  {id:"0301", name:"Thetford Portal", cluster:"Thetford Portal", type:"portal", gx:-327.48, gz:150.22},

  {id:"4358", name:"Avalanche Incline", cluster:"Martlock Portal", type:"blackzone", gx:-211.75, gz:50.54},
  {id:"4314", name:"Avalanche Ravine", cluster:"Martlock Portal", type:"blackzone", gx:-234.29, gz:51.59},
  {id:"3316", name:"Battlebrae Flatland", cluster:"Martlock Portal", type:"blackzone", gx:-146.47, gz:-25.10},
  {id:"2333", name:"Bleachskull Desert", cluster:"Martlock Portal", type:"blackzone", gx:-230.31, gz:-19.50},
  {id:"2314", name:"Bleachskull Steppe", cluster:"Martlock Portal", type:"blackzone", gx:-253.90, gz:-17.88},
  {id:"3331", name:"Braemore Lowland", cluster:"Martlock Portal", type:"blackzone", gx:-304.27, gz:32.90},
  {id:"3309", name:"Braemore Upland", cluster:"Martlock Portal", type:"blackzone", gx:-321.67, gz:19.10},
  {id:"0359", name:"Deathreach Priory", cluster:"Martlock Portal", type:"blackzone", gx:-151.50, gz:-40.98},
  {id:"0347", name:"Deathwisp Bog", cluster:"Martlock Portal", type:"blackzone", gx:-167.30, gz:74.82},
  {id:"4316", name:"Frostbite Chasm", cluster:"Martlock Portal", type:"blackzone", gx:-284.74, gz:-38.77},
  {id:"4335", name:"Frostbite Mountain", cluster:"Martlock Portal", type:"blackzone", gx:-273.21, gz:-39.90},
  {id:"3323", name:"Gravemound Brim", cluster:"Martlock Portal", type:"blackzone", gx:-194.37, gz:-105.70},
  {id:"3352", name:"Gravemound Cliffs", cluster:"Martlock Portal", type:"blackzone", gx:-181.18, gz:-108.10},
  {id:"3324", name:"Gravemound Hills", cluster:"Martlock Portal", type:"blackzone", gx:-178.91, gz:-79.10},
  {id:"3351", name:"Gravemound Knoll", cluster:"Martlock Portal", type:"blackzone", gx:-161.27, gz:-66.20},
  {id:"3337", name:"Gravemound Slope", cluster:"Martlock Portal", type:"blackzone", gx:-194.11, gz:-78.30},
  {id:"1352", name:"Greenhollow Copse", cluster:"Martlock Portal", type:"blackzone", gx:-192.41, gz:-56.50},
  {id:"1324", name:"Greenhollow Vale", cluster:"Martlock Portal", type:"blackzone", gx:-187.48, gz:-41.90},
  {id:"3319", name:"Highstone Grassland", cluster:"Martlock Portal", type:"blackzone", gx:-209.10, gz:-25.88},
  {id:"3357", name:"Highstone Loch", cluster:"Martlock Portal", type:"blackzone", gx:-180.60, gz:-18.78},
  {id:"3311", name:"Highstone Meadow", cluster:"Martlock Portal", type:"blackzone", gx:-202.48, gz:20.00},
  {id:"3346", name:"Highstone Mound", cluster:"Martlock Portal", type:"blackzone", gx:-243.60, gz:11.82},
  {id:"3315", name:"Highstone Plains", cluster:"Martlock Portal", type:"blackzone", gx:-196.30, gz:4.32},
  {id:"3347", name:"Highstone Plateau", cluster:"Martlock Portal", type:"blackzone", gx:-227.47, gz:0.80},
  {id:"0337", name:"Mudfoot Mounds", cluster:"Martlock Portal", type:"blackzone", gx:-216.17, gz:-100.30},
  {id:"0323", name:"Mudfoot Sump", cluster:"Martlock Portal", type:"blackzone", gx:-210.70, gz:-82.68},
  {id:"2331", name:"Parchsand Cliffs", cluster:"Martlock Portal", type:"blackzone", gx:-169.31, gz:9.70},
  {id:"2359", name:"Parchsand Drought", cluster:"Martlock Portal", type:"blackzone", gx:-154.59, gz:0.21},
  {id:"3343", name:"Razorrock Chasm", cluster:"Martlock Portal", type:"blackzone", gx:-152.57, gz:40.70},
  {id:"3332", name:"Razorrock Edge", cluster:"Martlock Portal", type:"blackzone", gx:-175.66, gz:38.87},
  {id:"3308", name:"Razorrock Passage", cluster:"Martlock Portal", type:"blackzone", gx:-187.60, gz:62.41},
  {id:"3310", name:"Razorrock Valley", cluster:"Martlock Portal", type:"blackzone", gx:-150.68, gz:24.70},
  {id:"3344", name:"Razorrock Verge", cluster:"Martlock Portal", type:"blackzone", gx:-195.31, gz:35.00},
  {id:"2358", name:"Sandmount Ascent", cluster:"Martlock Portal", type:"blackzone", gx:-310.68, gz:-3.50},
  {id:"2349", name:"Sandmount Desert", cluster:"Martlock Portal", type:"blackzone", gx:-306.30, gz:-58.28},
  {id:"2318", name:"Sandmount Esker", cluster:"Martlock Portal", type:"blackzone", gx:-309.34, gz:-42.39},
  {id:"2312", name:"Sandmount Strand", cluster:"Martlock Portal", type:"blackzone", gx:-298.47, gz:2.00},
  {id:"0350", name:"Twinchannel Narrows", cluster:"Martlock Portal", type:"blackzone", gx:-271.72, gz:0.65},
  {id:"0357", name:"Unhallowed Cloister", cluster:"Martlock Portal", type:"blackzone", gx:-269.72, gz:16.51},
  {id:"1351", name:"Westweald Shore", cluster:"Martlock Portal", type:"blackzone", gx:-291.95, gz:-18.00},
  {id:"1323", name:"Westweald Thicket", cluster:"Martlock Portal", type:"blackzone", gx:-269.87, gz:-20.91},
  {id:"3318", name:"Windgrass Border", cluster:"Martlock Portal", type:"blackzone", gx:-251.80, gz:-39.08},
  {id:"3334", name:"Windgrass Coast", cluster:"Martlock Portal", type:"blackzone", gx:-288.68, gz:-62.30},
  {id:"3333", name:"Windgrass Fields", cluster:"Martlock Portal", type:"blackzone", gx:-231.80, gz:-35.88},
  {id:"3320", name:"Windgrass Gully", cluster:"Martlock Portal", type:"blackzone", gx:-275.71, gz:-60.00},
  {id:"3322", name:"Windgrass Precipice", cluster:"Martlock Portal", type:"blackzone", gx:-281.81, gz:-74.20},
  {id:"3321", name:"Windgrass Rill", cluster:"Martlock Portal", type:"blackzone", gx:-232.80, gz:-52.88},
  {id:"3350", name:"Windgrass Terrace", cluster:"Martlock Portal", type:"blackzone", gx:-212.48, gz:-55.40},
  {id:"3301", name:"Martlock Portal", cluster:"Martlock Portal", type:"portal", gx:-250.09, gz:-61.56},

  {id:"3348", name:"Battlebrae Grassland", cluster:"Bridgewatch Portal", type:"blackzone", gx:-104.11, gz:-0.10},
  {id:"3313", name:"Battlebrae Lake", cluster:"Bridgewatch Portal", type:"blackzone", gx:-88.70, gz:-3.18},
  {id:"3349", name:"Battlebrae Meadow", cluster:"Bridgewatch Portal", type:"blackzone", gx:-129.65, gz:-22.56},
  {id:"3317", name:"Battlebrae Peaks", cluster:"Bridgewatch Portal", type:"blackzone", gx:-93.01, gz:-16.90},
  {id:"3312", name:"Battlebrae Plain", cluster:"Bridgewatch Portal", type:"blackzone", gx:-127.20, gz:-4.38},
  {id:"2347", name:"Dryvein Confluence", cluster:"Bridgewatch Portal", type:"blackzone", gx:-60.87, gz:4.30},
  {id:"2315", name:"Dryvein Cross", cluster:"Bridgewatch Portal", type:"blackzone", gx:-54.72, gz:-22.90},
  {id:"2345", name:"Dryvein End", cluster:"Bridgewatch Portal", type:"blackzone", gx:-51.31, gz:21.80},
  {id:"2334", name:"Dryvein Oasis", cluster:"Bridgewatch Portal", type:"blackzone", gx:-67.90, gz:-38.28},
  {id:"2319", name:"Dryvein Plain", cluster:"Bridgewatch Portal", type:"blackzone", gx:-42.88, gz:-39.90},
  {id:"2313", name:"Dryvein Riverbed", cluster:"Bridgewatch Portal", type:"blackzone", gx:-37.01, gz:1.40},
  {id:"2332", name:"Dryvein Steppe", cluster:"Bridgewatch Portal", type:"blackzone", gx:-11.88, gz:15.80},
  {id:"2325", name:"Farshore Bay", cluster:"Bridgewatch Portal", type:"blackzone", gx:-57.10, gz:-104.26},
  {id:"2353", name:"Farshore Cape", cluster:"Bridgewatch Portal", type:"blackzone", gx:-91.21, gz:-103.30},
  {id:"2351", name:"Farshore Drylands", cluster:"Bridgewatch Portal", type:"blackzone", gx:-115.11, gz:-75.60},
  {id:"2320", name:"Farshore Esker", cluster:"Bridgewatch Portal", type:"blackzone", gx:-110.56, gz:-59.36},
  {id:"2336", name:"Farshore Heath", cluster:"Bridgewatch Portal", type:"blackzone", gx:-94.78, gz:-61.70},
  {id:"2338", name:"Farshore Lagoon", cluster:"Bridgewatch Portal", type:"blackzone", gx:-90.08, gz:-83.80},
  {id:"4336", name:"Frostspring Passage", cluster:"Bridgewatch Portal", type:"blackzone", gx:10.20, gz:-34.68},
  {id:"4351", name:"Frostspring Volcano", cluster:"Bridgewatch Portal", type:"blackzone", gx:7.59, gz:-17.04},
  {id:"0336", name:"Longfen Arms", cluster:"Bridgewatch Portal", type:"blackzone", gx:-129.71, gz:-83.40},
  {id:"0322", name:"Longfen Marsh", cluster:"Bridgewatch Portal", type:"blackzone", gx:-131.28, gz:-58.90},
  {id:"0352", name:"Longfen Veins", cluster:"Bridgewatch Portal", type:"blackzone", gx:-131.30, gz:-43.58},
  {id:"3345", name:"Razorrock Bank", cluster:"Bridgewatch Portal", type:"blackzone", gx:-131.37, gz:24.10},
  {id:"3356", name:"Razorrock Gulch", cluster:"Bridgewatch Portal", type:"blackzone", gx:-122.97, gz:37.70},
  {id:"3330", name:"Razorrock Ravine", cluster:"Bridgewatch Portal", type:"blackzone", gx:-109.58, gz:38.50},
  {id:"3359", name:"Redtree Enclave", cluster:"Bridgewatch Portal", type:"blackzone", gx:-130.78, gz:-97.50},
  {id:"2323", name:"Sandrift Coast", cluster:"Bridgewatch Portal", type:"blackzone", gx:-3.77, gz:-67.69},
  {id:"2350", name:"Sandrift Dunes", cluster:"Bridgewatch Portal", type:"blackzone", gx:-47.45, gz:-57.50},
  {id:"2337", name:"Sandrift Expanse", cluster:"Bridgewatch Portal", type:"blackzone", gx:-3.50, gz:-54.07},
  {id:"2352", name:"Sandrift Fringe", cluster:"Bridgewatch Portal", type:"blackzone", gx:16.78, gz:-66.40},
  {id:"2322", name:"Sandrift Prairie", cluster:"Bridgewatch Portal", type:"blackzone", gx:-54.91, gz:-83.70},
  {id:"2324", name:"Sandrift Shore", cluster:"Bridgewatch Portal", type:"blackzone", gx:1.23, gz:-81.40},
  {id:"2321", name:"Sandrift Steppe", cluster:"Bridgewatch Portal", type:"blackzone", gx:-29.60, gz:-52.88},
  {id:"1337", name:"Southgrove Copse", cluster:"Bridgewatch Portal", type:"blackzone", gx:29.02, gz:-53.10},
  {id:"1314", name:"Southgrove Escarp", cluster:"Bridgewatch Portal", type:"blackzone", gx:46.39, gz:-60.50},
  {id:"1350", name:"Southgrove Thicket", cluster:"Bridgewatch Portal", type:"blackzone", gx:28.79, gz:-40.70},
  {id:"0321", name:"Springsump Basin", cluster:"Bridgewatch Portal", type:"blackzone", gx:-19.17, gz:-13.00},
  {id:"0351", name:"Springsump Melt", cluster:"Bridgewatch Portal", type:"blackzone", gx:-21.08, gz:-24.40},
  {id:"0335", name:"Springsump Wetland", cluster:"Bridgewatch Portal", type:"blackzone", gx:-35.88, gz:-18.68},
  {id:"3325", name:"Stonelake Fields", cluster:"Bridgewatch Portal", type:"blackzone", gx:-70.57, gz:-76.00},
  {id:"3336", name:"Stonelake Hillock", cluster:"Bridgewatch Portal", type:"blackzone", gx:-74.37, gz:-58.80},
  {id:"2330", name:"Sunfang Approach", cluster:"Bridgewatch Portal", type:"blackzone", gx:-79.67, gz:26.60},
  {id:"2343", name:"Sunfang Cliffs", cluster:"Bridgewatch Portal", type:"blackzone", gx:-131.78, gz:57.20},
  {id:"2357", name:"Sunfang Dawn", cluster:"Bridgewatch Portal", type:"blackzone", gx:-105.77, gz:18.60},
  {id:"2310", name:"Sunfang Ravine", cluster:"Bridgewatch Portal", type:"blackzone", gx:-76.77, gz:52.30},
  {id:"2344", name:"Sunfang Wasteland", cluster:"Bridgewatch Portal", type:"blackzone", gx:-103.47, gz:61.10},
  {id:"2317", name:"Sunstrand Delta", cluster:"Bridgewatch Portal", type:"blackzone", gx:69.63, gz:-21.81},
  {id:"2335", name:"Sunstrand Dunes", cluster:"Bridgewatch Portal", type:"blackzone", gx:71.97, gz:-36.01},
  {id:"2348", name:"Sunstrand Quicksands", cluster:"Bridgewatch Portal", type:"blackzone", gx:45.69, gz:-38.90},
  {id:"2316", name:"Sunstrand Shoal", cluster:"Bridgewatch Portal", type:"blackzone", gx:30.82, gz:-22.23},
  {id:"4359", name:"Whitewall Pass", cluster:"Bridgewatch Portal", type:"blackzone", gx:-107.96, gz:-34.80},
  {id:"4352", name:"Whitewall Ridge", cluster:"Bridgewatch Portal", type:"blackzone", gx:-92.41, gz:-41.60},
  {id:"4300", name:"Arthur's Rest", cluster:"Bridgewatch Portal", type:"blackzone", gx:-111.00, gz:-18.58},
  {id:"2301", name:"Bridgewatch Portal", cluster:"Bridgewatch Portal", type:"portal", gx:-30.55, gz:-75.97},

  {id:"2360", name:"Daemonium Keep", cluster:"Lymhurst Portal", type:"blackzone", gx:5.92, gz:16.30},
  {id:"2341", name:"Drybasin Oasis", cluster:"Lymhurst Portal", type:"blackzone", gx:11.22, gz:200.80},
  {id:"2308", name:"Drybasin Riverbed", cluster:"Lymhurst Portal", type:"blackzone", gx:11.29, gz:220.60},
  {id:"1356", name:"Eye of the Forest", cluster:"Lymhurst Portal", type:"blackzone", gx:-9.40, gz:175.32},
  {id:"4333", name:"Firesink Caldera", cluster:"Lymhurst Portal", type:"blackzone", gx:3.95, gz:52.86},
  {id:"4349", name:"Firesink Trench", cluster:"Lymhurst Portal", type:"blackzone", gx:5.45, gz:41.12},
  {id:"4319", name:"Flammog Fork", cluster:"Lymhurst Portal", type:"blackzone", gx:-30.41, gz:141.10},
  {id:"4330", name:"Flammog Valley", cluster:"Lymhurst Portal", type:"blackzone", gx:-23.10, gz:154.82},
  {id:"3305", name:"Flatrock Cliffs", cluster:"Lymhurst Portal", type:"blackzone", gx:54.73, gz:194.40},
  {id:"3328", name:"Flatrock Plateau", cluster:"Lymhurst Portal", type:"blackzone", gx:51.23, gz:177.40},
  {id:"1310", name:"Giantweald Copse", cluster:"Lymhurst Portal", type:"blackzone", gx:1.39, gz:158.30},
  {id:"1308", name:"Giantweald Dale", cluster:"Lymhurst Portal", type:"blackzone", gx:33.50, gz:163.32},
  {id:"1341", name:"Giantweald Edge", cluster:"Lymhurst Portal", type:"blackzone", gx:29.33, gz:192.80},
  {id:"1344", name:"Giantweald Glade", cluster:"Lymhurst Portal", type:"blackzone", gx:8.62, gz:139.20},
  {id:"1331", name:"Giantweald Roots", cluster:"Lymhurst Portal", type:"blackzone", gx:-6.21, gz:141.20},
  {id:"1328", name:"Giantweald Woods", cluster:"Lymhurst Portal", type:"blackzone", gx:17.00, gz:171.12},
  {id:"4332", name:"Glacierbreak Summit", cluster:"Lymhurst Portal", type:"blackzone", gx:118.19, gz:99.20},
  {id:"1355", name:"Greenshore Bay", cluster:"Lymhurst Portal", type:"blackzone", gx:71.13, gz:183.50},
  {id:"1307", name:"Greenshore Peninsula", cluster:"Lymhurst Portal", type:"blackzone", gx:74.59, gz:170.90},
  {id:"1333", name:"Hightree Borderlands", cluster:"Lymhurst Portal", type:"blackzone", gx:6.63, gz:74.10},
  {id:"1336", name:"Hightree Cliffs", cluster:"Lymhurst Portal", type:"blackzone", gx:102.60, gz:62.92},
  {id:"1317", name:"Hightree Dale", cluster:"Lymhurst Portal", type:"blackzone", gx:73.52, gz:101.90},
  {id:"1322", name:"Hightree Enclave", cluster:"Lymhurst Portal", type:"blackzone", gx:75.50, gz:53.22},
  {id:"1320", name:"Hightree Glade", cluster:"Lymhurst Portal", type:"blackzone", gx:84.62, gz:75.50},
  {id:"1347", name:"Hightree Hillock", cluster:"Lymhurst Portal", type:"blackzone", gx:20.03, gz:77.52},
  {id:"1345", name:"Hightree Isle", cluster:"Lymhurst Portal", type:"blackzone", gx:88.14, gz:106.94},
  {id:"1316", name:"Hightree Lake", cluster:"Lymhurst Portal", type:"blackzone", gx:21.60, gz:101.82},
  {id:"1335", name:"Hightree Levee", cluster:"Lymhurst Portal", type:"blackzone", gx:51.13, gz:62.10},
  {id:"1332", name:"Hightree Pass", cluster:"Lymhurst Portal", type:"blackzone", gx:33.03, gz:121.80},
  {id:"1313", name:"Hightree Steep", cluster:"Lymhurst Portal", type:"blackzone", gx:46.83, gz:117.50},
  {id:"1319", name:"Hightree Strand", cluster:"Lymhurst Portal", type:"blackzone", gx:46.63, gz:78.00},
  {id:"4345", name:"Munten Fell", cluster:"Lymhurst Portal", type:"blackzone", gx:50.90, gz:157.72},
  {id:"4315", name:"Munten Rise", cluster:"Lymhurst Portal", type:"blackzone", gx:53.09, gz:144.40},
  {id:"4331", name:"Munten Tundra", cluster:"Lymhurst Portal", type:"blackzone", gx:31.30, gz:138.92},
  {id:"1318", name:"Rivercopse Crossing", cluster:"Lymhurst Portal", type:"blackzone", gx:-43.84, gz:79.22},
  {id:"1346", name:"Rivercopse Curve", cluster:"Lymhurst Portal", type:"blackzone", gx:-27.47, gz:78.50},
  {id:"1359", name:"Rivercopse Fount", cluster:"Lymhurst Portal", type:"blackzone", gx:-45.71, gz:101.20},
  {id:"1349", name:"Rivercopse Path", cluster:"Lymhurst Portal", type:"blackzone", gx:-49.18, gz:60.20},
  {id:"0315", name:"Skullmarsh Lower", cluster:"Lymhurst Portal", type:"blackzone", gx:114.59, gz:119.80},
  {id:"0343", name:"Skullmarsh Upper", cluster:"Lymhurst Portal", type:"blackzone", gx:110.69, gz:137.40},
  {id:"2309", name:"Slakesands Canyon", cluster:"Lymhurst Portal", type:"blackzone", gx:93.55, gz:161.80},
  {id:"2342", name:"Slakesands Mesa", cluster:"Lymhurst Portal", type:"blackzone", gx:85.73, gz:154.93},
  {id:"3335", name:"Stonemouth Bay", cluster:"Lymhurst Portal", type:"blackzone", gx:27.03, gz:18.22},
  {id:"3314", name:"Stonemouth Northbluff", cluster:"Lymhurst Portal", type:"blackzone", gx:52.32, gz:18.30},
  {id:"3358", name:"Stonemouth Southbluff", cluster:"Lymhurst Portal", type:"blackzone", gx:53.55, gz:-4.81},
  {id:"0358", name:"Sunkenbough Spring", cluster:"Lymhurst Portal", type:"blackzone", gx:-10.88, gz:41.40},
  {id:"0349", name:"Sunkenbough Woods", cluster:"Lymhurst Portal", type:"blackzone", gx:-16.45, gz:62.04},
  {id:"2346", name:"Thirstwater Gully", cluster:"Lymhurst Portal", type:"blackzone", gx:32.49, gz:41.60},
  {id:"2311", name:"Thirstwater Steppe", cluster:"Lymhurst Portal", type:"blackzone", gx:48.93, gz:38.60},
  {id:"2329", name:"Thirstwater Waste", cluster:"Lymhurst Portal", type:"blackzone", gx:33.89, gz:56.60},
  {id:"3340", name:"Thunderrock Ascent", cluster:"Lymhurst Portal", type:"blackzone", gx:-69.90, gz:114.02},
  {id:"3353", name:"Thunderrock Draw", cluster:"Lymhurst Portal", type:"blackzone", gx:-51.70, gz:134.12},
  {id:"3329", name:"Thunderrock Rapids", cluster:"Lymhurst Portal", type:"blackzone", gx:-10.45, gz:99.30},
  {id:"3341", name:"Thunderrock Upland", cluster:"Lymhurst Portal", type:"blackzone", gx:-22.90, gz:112.02},
  {id:"2356", name:"Wailing Bulwark", cluster:"Lymhurst Portal", type:"blackzone", gx:-72.38, gz:76.00},
  {id:"1330", name:"Watchwood Bluffs", cluster:"Lymhurst Portal", type:"blackzone", gx:89.49, gz:138.30},
  {id:"1315", name:"Watchwood Grove", cluster:"Lymhurst Portal", type:"blackzone", gx:88.33, gz:125.40},
  {id:"1329", name:"Watchwood Lakeside", cluster:"Lymhurst Portal", type:"blackzone", gx:69.80, gz:149.72},
  {id:"1311", name:"Watchwood Precipice", cluster:"Lymhurst Portal", type:"blackzone", gx:66.79, gz:137.60},
  {id:"0305", name:"Wetgrave Bog", cluster:"Lymhurst Portal", type:"blackzone", gx:30.82, gz:236.90},
  {id:"0342", name:"Wetgrave Marsh", cluster:"Lymhurst Portal", type:"blackzone", gx:30.98, gz:217.12},
  {id:"4350", name:"Whitecliff Expanse", cluster:"Lymhurst Portal", type:"blackzone", gx:86.99, gz:37.30},
  {id:"4334", name:"Whitecliff Peak", cluster:"Lymhurst Portal", type:"blackzone", gx:71.19, gz:34.00},
  {id:"1012", name:"Merlyn's Rest", cluster:"Lymhurst Portal", type:"blackzone", gx:17.05, gz:151.68},
  {id:"1301", name:"Lymhurst Portal", cluster:"Lymhurst Portal", type:"portal", gx:56.92, gz:100.10},

  {id:"1305", name:"Brambleshore Hinterlands", cluster:"Fort Sterling Portal", type:"blackzone", gx:-247.50, gz:277.02},
  {id:"1358", name:"Darkbough Snag", cluster:"Fort Sterling Portal", type:"blackzone", gx:-88.27, gz:138.50},
  {id:"1312", name:"Deadpine Forest", cluster:"Fort Sterling Portal", type:"blackzone", gx:-169.67, gz:140.80},
  {id:"1343", name:"Deepwood Copse", cluster:"Fort Sterling Portal", type:"blackzone", gx:-112.90, gz:193.02},
  {id:"1306", name:"Deepwood Dell", cluster:"Fort Sterling Portal", type:"blackzone", gx:-104.97, gz:232.10},
  {id:"1327", name:"Deepwood Gorge", cluster:"Fort Sterling Portal", type:"blackzone", gx:-120.11, gz:211.70},
  {id:"1340", name:"Deepwood Pines", cluster:"Fort Sterling Portal", type:"blackzone", gx:-87.78, gz:222.00},
  {id:"0313", name:"Drownfield Fen", cluster:"Fort Sterling Portal", type:"blackzone", gx:-193.12, gz:162.86},
  {id:"0329", name:"Drownfield Slough", cluster:"Fort Sterling Portal", type:"blackzone", gx:-204.02, gz:179.25},
  {id:"1357", name:"Eldersleep", cluster:"Fort Sterling Portal", type:"blackzone", gx:-110.39, gz:182.22},
  {id:"4307", name:"Everwinter Crossing", cluster:"Fort Sterling Portal", type:"blackzone", gx:-184.50, gz:240.32},
  {id:"4341", name:"Everwinter Gap", cluster:"Fort Sterling Portal", type:"blackzone", gx:-188.47, gz:206.80},
  {id:"4325", name:"Everwinter Gorge", cluster:"Fort Sterling Portal", type:"blackzone", gx:-188.20, gz:226.02},
  {id:"4353", name:"Everwinter Incline", cluster:"Fort Sterling Portal", type:"blackzone", gx:-225.17, gz:225.20},
  {id:"4337", name:"Everwinter Passage", cluster:"Fort Sterling Portal", type:"blackzone", gx:-217.27, gz:262.10},
  {id:"4322", name:"Everwinter Peak", cluster:"Fort Sterling Portal", type:"blackzone", gx:-219.48, gz:243.80},
  {id:"4323", name:"Everwinter Plain", cluster:"Fort Sterling Portal", type:"blackzone", gx:-202.40, gz:237.12},
  {id:"4321", name:"Everwinter Reach", cluster:"Fort Sterling Portal", type:"blackzone", gx:-223.57, gz:283.10},
  {id:"4354", name:"Flammog Desolation", cluster:"Fort Sterling Portal", type:"blackzone", gx:-37.11, gz:177.40},
  {id:"4339", name:"Floatshoal Bight", cluster:"Fort Sterling Portal", type:"blackzone", gx:-32.81, gz:241.60},
  {id:"4327", name:"Floatshoal Fissure", cluster:"Fort Sterling Portal", type:"blackzone", gx:-55.55, gz:220.57},
  {id:"4313", name:"Floatshoal Floe", cluster:"Fort Sterling Portal", type:"blackzone", gx:-51.41, gz:201.22},
  {id:"4324", name:"Frostpeak Ascent", cluster:"Fort Sterling Portal", type:"blackzone", gx:-58.18, gz:280.30},
  {id:"4306", name:"Frostpeak Vista", cluster:"Fort Sterling Portal", type:"blackzone", gx:-67.47, gz:294.67},
  {id:"4329", name:"Glacierfall Canyon", cluster:"Fort Sterling Portal", type:"blackzone", gx:-148.98, gz:174.10},
  {id:"4343", name:"Glacierfall Cross", cluster:"Fort Sterling Portal", type:"blackzone", gx:-151.30, gz:192.92},
  {id:"4356", name:"Glacierfall Fissure", cluster:"Fort Sterling Portal", type:"blackzone", gx:-131.90, gz:155.82},
  {id:"4355", name:"Glacierfall Pass", cluster:"Fort Sterling Portal", type:"blackzone", gx:-168.37, gz:171.70},
  {id:"4312", name:"Glacierfall Passage", cluster:"Fort Sterling Portal", type:"blackzone", gx:-144.11, gz:212.10},
  {id:"4344", name:"Glacierfall Valley", cluster:"Fort Sterling Portal", type:"blackzone", gx:-136.18, gz:191.20},
  {id:"4342", name:"Iceburn Cliffs", cluster:"Fort Sterling Portal", type:"blackzone", gx:-90.78, gz:201.50},
  {id:"4318", name:"Iceburn Firth", cluster:"Fort Sterling Portal", type:"blackzone", gx:-102.01, gz:151.30},
  {id:"4328", name:"Iceburn Peaks", cluster:"Fort Sterling Portal", type:"blackzone", gx:-87.38, gz:181.00},
  {id:"4346", name:"Iceburn Tundra", cluster:"Fort Sterling Portal", type:"blackzone", gx:-91.27, gz:164.90},
  {id:"0307", name:"Meltwater Bog", cluster:"Fort Sterling Portal", type:"blackzone", gx:-167.20, gz:231.92},
  {id:"0354", name:"Meltwater Channel", cluster:"Fort Sterling Portal", type:"blackzone", gx:-165.97, gz:217.50},
  {id:"0325", name:"Meltwater Delta", cluster:"Fort Sterling Portal", type:"blackzone", gx:-168.78, gz:259.10},
  {id:"0338", name:"Meltwater Sump", cluster:"Fort Sterling Portal", type:"blackzone", gx:-188.51, gz:257.10},
  {id:"0326", name:"Runnelvein Bog", cluster:"Fort Sterling Portal", type:"blackzone", gx:-63.98, gz:186.10},
  {id:"0341", name:"Runnelvein Sink", cluster:"Fort Sterling Portal", type:"blackzone", gx:-59.71, gz:154.80},
  {id:"0311", name:"Runnelvein Slough", cluster:"Fort Sterling Portal", type:"blackzone", gx:-66.80, gz:168.12},
  {id:"3327", name:"Skylake Bridge", cluster:"Fort Sterling Portal", type:"blackzone", gx:-13.68, gz:219.10},
  {id:"3339", name:"Skylake Hinterlands", cluster:"Fort Sterling Portal", type:"blackzone", gx:-9.78, gz:204.80},
  {id:"2307", name:"Skysand Plateau", cluster:"Fort Sterling Portal", type:"blackzone", gx:-210.37, gz:218.30},
  {id:"2340", name:"Skysand Ridge", cluster:"Fort Sterling Portal", type:"blackzone", gx:-205.50, gz:200.32},
  {id:"2339", name:"Swiftsands Basin", cluster:"Fort Sterling Portal", type:"blackzone", gx:9.13, gz:265.00},
  {id:"2354", name:"Swiftsands Chaparral", cluster:"Fort Sterling Portal", type:"blackzone", gx:18.60, gz:253.62},
  {id:"2306", name:"Swiftsands Plain", cluster:"Fort Sterling Portal", type:"blackzone", gx:22.99, gz:266.80},
  {id:"1354", name:"Timberslope Bridge", cluster:"Fort Sterling Portal", type:"blackzone", gx:-8.80, gz:237.72},
  {id:"1326", name:"Timberslope Dell", cluster:"Fort Sterling Portal", type:"blackzone", gx:-25.67, gz:260.10},
  {id:"1339", name:"Timberslope Grove", cluster:"Fort Sterling Portal", type:"blackzone", gx:-14.17, gz:254.20},
  {id:"0339", name:"Wetgrave Swale", cluster:"Fort Sterling Portal", type:"blackzone", gx:13.29, gz:239.40},
  {id:"4311", name:"Whitebank Cross", cluster:"Fort Sterling Portal", type:"blackzone", gx:-130.20, gz:225.52},
  {id:"4305", name:"Whitebank Descent", cluster:"Fort Sterling Portal", type:"blackzone", gx:-155.88, gz:266.30},
  {id:"4338", name:"Whitebank Ridge", cluster:"Fort Sterling Portal", type:"blackzone", gx:-150.81, gz:249.40},
  {id:"4309", name:"Whitebank Shore", cluster:"Fort Sterling Portal", type:"blackzone", gx:-110.28, gz:254.10},
  {id:"4308", name:"Whitebank Stream", cluster:"Fort Sterling Portal", type:"blackzone", gx:-139.28, gz:247.60},
  {id:"4326", name:"Whitebank Wall", cluster:"Fort Sterling Portal", type:"blackzone", gx:-147.17, gz:227.60},
  {id:"0008", name:"Morgana's Rest", cluster:"Fort Sterling Portal", type:"blackzone", gx:-187.79, gz:181.22},
  {id:"4301", name:"Fort Sterling Portal", cluster:"Fort Sterling Portal", type:"portal", gx:-115.46, gz:269.84},
];

let state = { zones: {} };
let selectedId = null;
let activeTab = "All";
let searchTerm = "";
let pendingLinkedRoads = []; // roadlink chips being built in the currently-open log-connection form

// ---- pan/zoom state ----
let zoomLevel = 1;
let panX = 0, panY = 0;
let lastFitKey = null;
const MIN_ZOOM = 1, MAX_ZOOM = 14;
const LABEL_ZOOM_THRESHOLD = 3;      // below this, hide names -> clean dots
const BZ_SIZE = 6, PORTAL_SIZE = 5.2; // world-unit diamond sizes
const VIEW_W = 900, VIEW_H = 620;

let dragging = false;      // true once mouse has moved enough to count as a drag
let pointerDown = false;
let dragStartClientX = 0, dragStartClientY = 0;
let dragStartPanX = 0, dragStartPanY = 0;

const worldCache = {};

function freshZone(z){
  return {
    id:z.id, name:z.name, cluster:z.cluster, type:z.type, gx:z.gx, gz:z.gz,
    territory:{owner:"", status:"empty", lastUpdated:null},
    hideouts:[],
    connections:[],
    legendId:null
  };
}

async function loadData(){
  let loaded = false;
  try{
    const raw = localStorage.getItem('gankmap-data');
    if(raw){
      const parsed = JSON.parse(raw);
      if(parsed && typeof parsed === 'object' && parsed.zones && typeof parsed.zones === 'object'){
        state = parsed;
        loaded = true;
      }
    }
  }catch(e){
    console.error('PORTAL GANK: saved data was corrupt, reseeding.', e);
  }
  if(!loaded){
    state = { zones:{} };
  }
  if(!Array.isArray(state.legend)) state.legend = [];
  if(!state.customPoints || typeof state.customPoints !== 'object') state.customPoints = {};
  Object.keys(state.customPoints).forEach(id=>{
    const p = state.customPoints[id];
    if(!p || typeof p !== 'object' || typeof p.wx !== 'number' || typeof p.wy !== 'number'){ delete state.customPoints[id]; return; }
    if(!Array.isArray(p.hideouts)) p.hideouts = [];
    if(p.legendId === undefined) p.legendId = null;
    if(!p.name) p.name = 'Unnamed ROA HO';
  });

  // Defensively normalize every saved zone in case older/broken data is missing fields.
  Object.keys(state.zones).forEach(id=>{
    const z = state.zones[id];
    if(!z || typeof z !== 'object'){ delete state.zones[id]; return; }
    if(!z.territory || typeof z.territory !== 'object'){ z.territory = {owner:"", status:"empty", lastUpdated:null}; }
    if(!Array.isArray(z.hideouts)) z.hideouts = [];
    if(!Array.isArray(z.connections)) z.connections = [];
    if(z.legendId === undefined) z.legendId = null;
  });

  // ensure any new seed zones not yet in saved state get added (first-run / update merges)
  let changed = !loaded;
  SEED.forEach(z=>{
    if(!state.zones[z.id]){ state.zones[z.id] = freshZone(z); changed = true; }
  });
  // Add Zone feature is gone — purge any leftover manually-added zones (and any
  // stray roads/connections pointing at them) so old broken entries don't linger.
  const seedIds = new Set(SEED.map(z=>z.id));
  Object.keys(state.zones).forEach(id=>{
    if(!seedIds.has(id)){
      delete state.zones[id];
      changed = true;
    }
  });
  Object.values(state.zones).forEach(z=>{
    const before = z.connections.length;
    // keep zone->zone branches (must point at a real seed zone or a live ROA HO
    // point) and roadlink branches (which don't target a zone at all).
    z.connections = z.connections.filter(c=> c && (
      c.type==='roadlink' ||
      seedIds.has(c.targetZoneId) ||
      (typeof c.targetZoneId==='string' && c.targetZoneId.startsWith('custom_') && state.customPoints[c.targetZoneId.slice(7)])
    ));
    if(z.connections.length !== before) changed = true;
  });
  if(selectedId && !seedIds.has(selectedId) && !(selectedId.startsWith('custom_') && state.customPoints[selectedId.slice(7)])) selectedId = null;
  if(changed) await saveData();
}

async function saveData(){
  try{
    localStorage.setItem('gankmap-data', JSON.stringify(state));
  }catch(e){ console.error('save failed', e); }
}

function zonesArr(){ return Object.values(state.zones); }
function customPointsArr(){ return Object.values(state.customPoints); }

const ROA_HO_TAB = "ROA HO";

function clustersList(){
  const set = new Set(zonesArr().map(z=>z.cluster));
  return ["All", ...Array.from(set).sort(), ROA_HO_TAB];
}

function relTime(ts){
  if(!ts) return null;
  const diff = Date.now() - ts;
  const h = diff/3600000;
  if(h < 1) return {label: Math.max(1,Math.round(diff/60000))+"m ago", cls: "fresh"};
  if(h < 2) return {label: h.toFixed(1)+"h ago", cls:"fresh"};
  if(h < 6) return {label: Math.round(h)+"h ago", cls:"aging"};
  return {label: h<48 ? Math.round(h)+"h ago" : Math.round(h/24)+"d ago", cls:"stale"};
}

function transform(gx, gz){
  const a = -45 * Math.PI/180;
  const mx = gz*Math.cos(a) + gx*Math.sin(a);
  const my = -gz*Math.sin(a) + gx*Math.cos(a);
  return [mx, my];
}

function worldPos(z){
  if(!worldCache[z.id]) worldCache[z.id] = transform(z.gx, z.gz);
  return worldCache[z.id];
}

// ---- map color legend ----
const LEGEND_DEFAULT_COLORS = ["#d9a441","#5fb583","#c15a4a","#5a8fc1","#b168c9","#5bb3b0","#c9a05a","#e07a9b"];

function renderLegend(){
  const box = document.getElementById('legendList');
  if(!box) return;
  if(state.legend.length === 0){
    box.innerHTML = '<div class="legend-empty">No legend colors yet.</div>';
    return;
  }
  box.innerHTML = state.legend.map(entry=>`
    <div class="legend-row" data-lid="${entry.id}">
      <input type="color" class="legend-swatch" value="${entry.color}" title="Change color">
      <input type="text" class="legend-label" value="${entry.label}" placeholder="Category name...">
      <button type="button" class="icon-btn x" data-action="del-legend" title="Remove">✕</button>
    </div>
  `).join('');

  box.querySelectorAll('.legend-row').forEach(row=>{
    const lid = row.getAttribute('data-lid');
    const entry = state.legend.find(l=>l.id===lid);
    row.querySelector('.legend-swatch').onchange = async (e)=>{
      entry.color = e.target.value;
      await saveData(); renderMap(); renderPanel();
    };
    row.querySelector('.legend-label').onchange = async (e)=>{
      entry.label = e.target.value.trim() || 'Unnamed';
      await saveData(); renderPanel();
    };
    row.querySelector('[data-action="del-legend"]').onclick = async ()=>{
      state.legend = state.legend.filter(l=>l.id!==lid);
      zonesArr().forEach(z=>{ if(z.legendId===lid) z.legendId = null; });
      customPointsArr().forEach(p=>{ if(p.legendId===lid) p.legendId = null; });
      await saveData(); renderAll();
    };
  });
}

function addLegendEntry(){
  const usedColors = state.legend.map(l=>l.color);
  const nextColor = LEGEND_DEFAULT_COLORS.find(c=> !usedColors.includes(c)) || '#d9a441';
  state.legend.push({id:'lg_'+Date.now()+'_'+Math.random().toString(36).slice(2,6), color:nextColor, label:'New category'});
  saveData();
  renderLegend();
  renderPanel();
}

function renderTabs(){
  const tabs = document.getElementById('tabs');
  tabs.innerHTML = "";
  clustersList().forEach(c=>{
    const el = document.createElement('div');
    el.className = 'tab' + (c===activeTab ? ' active':'');
    el.textContent = c;
    el.onclick = ()=>{ activeTab = c; renderAll(); };
    tabs.appendChild(el);
  });
}

function visibleZones(){
  return zonesArr().filter(z=>{
    if(activeTab !== "All" && z.cluster !== activeTab) return false;
    if(searchTerm && !z.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });
}

function visibleCustomPoints(){
  return customPointsArr().filter(p=>{
    if(searchTerm && !p.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });
}

// Fits pan/zoom so the currently visible+mapped zones (or ROA HO points) comfortably fill the viewBox.
function fitView(){
  const pts = activeTab === ROA_HO_TAB
    ? visibleCustomPoints().map(p=>[p.wx, p.wy])
    : visibleZones().filter(z=> z.gx !== null && z.gx !== undefined).map(z=>worldPos(z));
  if(pts.length === 0){ zoomLevel = MIN_ZOOM; panX = 0; panY = 0; return; }
  const xs = pts.map(p=>p[0]), ys = pts.map(p=>p[1]);
  const minX=Math.min(...xs), maxX=Math.max(...xs), minY=Math.min(...ys), maxY=Math.max(...ys);
  const dataW = Math.max(maxX-minX, 1), dataH = Math.max(maxY-minY, 1);
  const pad = 90;
  const scaleX = (VIEW_W - pad*2)/dataW;
  const scaleY = (VIEW_H - pad*2)/dataH;
  zoomLevel = Math.min(scaleX, scaleY, MAX_ZOOM);
  zoomLevel = Math.max(zoomLevel, MIN_ZOOM);
  const cx = (minX+maxX)/2, cy = (minY+maxY)/2;
  panX = VIEW_W/2 - cx*zoomLevel;
  panY = VIEW_H/2 - cy*zoomLevel;
}

function renderMap(){
  const svg = document.getElementById('svg');
  document.getElementById('mapzone').classList.toggle('add-mode', activeTab === ROA_HO_TAB);
  const key = activeTab; // only auto-refit on tab change — typing a search shouldn't yank the camera around
  if(key !== lastFitKey){ fitView(); lastFitKey = key; }

  svg.innerHTML = "";

  if(activeTab === ROA_HO_TAB){
    renderCustomPointsMap(svg);
    return;
  }

  const mapped = visibleZones().filter(z=> z.gx !== null && z.gx !== undefined);
  if(mapped.length === 0){
    svg.innerHTML = '<text x="450" y="300" text-anchor="middle" fill="#5b616a" font-family="IBM Plex Mono" font-size="13">No mapped zones match this view</text>';
    return;
  }

  const viewport = document.createElementNS("http://www.w3.org/2000/svg","g");
  viewport.setAttribute("transform", `translate(${panX},${panY}) scale(${zoomLevel})`);
  svg.appendChild(viewport);

  mapped.forEach(z=>{
    const [wx, wy] = worldPos(z);
    const g = document.createElementNS("http://www.w3.org/2000/svg","g");
    g.setAttribute("class", "node " + (z.type==='portal'?'portal ':'') + 'status-'+z.territory.status + (z.hideouts.some(h=>h.status!=='destroyed')?' has-ho':'') + (z.id===selectedId?' selected':''));
    g.setAttribute("transform", `translate(${wx},${wy})`);
    const size = z.type==='portal' ? PORTAL_SIZE : BZ_SIZE;
    const legendEntry = z.legendId ? state.legend.find(l=>l.id===z.legendId) : null;
    const diamondStyle = legendEntry ? `style="stroke:${legendEntry.color};fill:${legendEntry.color}26;"` : '';

    let inner = `
      <polygon class="diamond" vector-effect="non-scaling-stroke" ${diamondStyle} points="0,-${size} ${size},0 0,${size} -${size},0"></polygon>
      <circle class="ho-dot" cx="${size-1.6}" cy="-${size-1.6}" r="1.6"></circle>
    `;
    if(zoomLevel >= LABEL_ZOOM_THRESHOLD){
      const labelY = size*zoomLevel + 16;
      inner += `<g transform="scale(${1/zoomLevel})"><text y="${labelY}">${z.name}</text></g>`;
    }
    g.innerHTML = inner;

    g.addEventListener('click', ()=>{ if(dragging) return; selectedId = z.id; renderAll(); });
    g.addEventListener('mouseenter', (ev)=> showTooltip(z, ev));
    g.addEventListener('mousemove', (ev)=> positionTooltip(ev));
    g.addEventListener('mouseleave', hideTooltip);

    viewport.appendChild(g);
  });
}

// ROA HO tab: user-placed custom points, not tied to any real seed zone.
// Clicking empty canvas here (not an existing point, not a drag) prompts for
// a name and drops a new marker at that spot.
function renderCustomPointsMap(svg){
  const points = visibleCustomPoints();

  const viewport = document.createElementNS("http://www.w3.org/2000/svg","g");
  viewport.setAttribute("transform", `translate(${panX},${panY}) scale(${zoomLevel})`);
  svg.appendChild(viewport);

  if(points.length === 0){
    const msg = document.createElementNS("http://www.w3.org/2000/svg","text");
    msg.setAttribute("x","450"); msg.setAttribute("y","300"); msg.setAttribute("text-anchor","middle");
    msg.setAttribute("fill","#5b616a"); msg.setAttribute("font-family","IBM Plex Mono"); msg.setAttribute("font-size","13");
    msg.textContent = "Click anywhere on the map to drop a ROA HO point";
    svg.appendChild(msg);
  }

  points.forEach(p=>{
    const g = document.createElementNS("http://www.w3.org/2000/svg","g");
    g.setAttribute("class", "node roa-ho-point" + (p.hideouts.some(h=>h.status!=='destroyed')?' has-ho':'') + (('custom_'+p.id)===selectedId?' selected':''));
    g.setAttribute("transform", `translate(${p.wx},${p.wy})`);
    const size = BZ_SIZE;
    const legendEntry = p.legendId ? state.legend.find(l=>l.id===p.legendId) : null;
    const diamondStyle = legendEntry ? `style="stroke:${legendEntry.color};fill:${legendEntry.color}26;"` : '';

    let inner = `
      <polygon class="diamond" vector-effect="non-scaling-stroke" ${diamondStyle} points="0,-${size} ${size},0 0,${size} -${size},0"></polygon>
      <circle class="ho-dot" cx="${size-1.6}" cy="-${size-1.6}" r="1.6"></circle>
    `;
    if(zoomLevel >= LABEL_ZOOM_THRESHOLD){
      const labelY = size*zoomLevel + 16;
      inner += `<g transform="scale(${1/zoomLevel})"><text y="${labelY}">${p.name}</text></g>`;
    }
    g.innerHTML = inner;

    g.addEventListener('click', (ev)=>{ ev.stopPropagation(); if(dragging) return; selectedId = 'custom_'+p.id; renderAll(); });
    g.addEventListener('mouseenter', (ev)=> showCustomPointTooltip(p, ev));
    g.addEventListener('mousemove', (ev)=> positionTooltip(ev));
    g.addEventListener('mouseleave', hideTooltip);

    viewport.appendChild(g);
  });
}

function handleMapClickToAddPoint(ev){
  if(activeTab !== ROA_HO_TAB || dragging) return;
  const [sx, sy] = svgPointFromClient(ev.clientX, ev.clientY);
  const wx = (sx - panX)/zoomLevel;
  const wy = (sy - panY)/zoomLevel;
  showAddRoaHoPointModal(wx, wy);
}

// ---- tooltip ----
// ---- ROA HO custom points: add modal + tooltip ----
function showAddRoaHoPointModal(wx, wy){
  const existing = document.getElementById('addRoaHoBg');
  if(existing) existing.remove();

  const html = `<div class="modal-bg" id="addRoaHoBg">
    <div class="modal">
      <h3>New ROA HO Point</h3>
      <input type="text" id="addRoaHoNameInput" placeholder="Name this point..." maxlength="60">
      <div class="row">
        <button class="btn" id="addRoaHoCancel">Cancel</button>
        <button class="btn primary" id="addRoaHoSave">Add point</button>
      </div>
    </div>
  </div>`;
  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap.firstElementChild);

  const bg = document.getElementById('addRoaHoBg');
  const close = ()=> bg.remove();
  const input = document.getElementById('addRoaHoNameInput');
  input.focus();

  const save = async ()=>{
    const name = input.value.trim();
    if(!name){ input.focus(); return; }
    const id = 'p_'+Date.now()+'_'+Math.random().toString(36).slice(2,6);
    state.customPoints[id] = { id, name, wx, wy, hideouts:[], legendId:null, createdAt:Date.now() };
    await saveData();
    selectedId = 'custom_'+id;
    close();
    renderAll();
  };

  document.getElementById('addRoaHoCancel').onclick = close;
  document.getElementById('addRoaHoSave').onclick = save;
  bg.onclick = (e)=>{ if(e.target === bg) close(); };
  input.onkeydown = (e)=>{ if(e.key==='Enter'){ e.preventDefault(); save(); } if(e.key==='Escape'){ close(); } };
}

function showCustomPointTooltip(p, ev){
  const tooltip = document.getElementById('tooltip');
  let html = `<div class="tt-name">${p.name}</div>
    <div class="tt-cluster">ROA HO Point</div>`;

  const legendEntry = p.legendId ? state.legend.find(l=>l.id===p.legendId) : null;
  if(legendEntry){
    html += `<div class="tt-row"><span class="legend-dot" style="background:${legendEntry.color}"></span> ${legendEntry.label}</div>`;
  }

  const shownHos = p.hideouts.filter(h=>h.status!=='destroyed');
  if(shownHos.length){
    const rows = shownHos.map(h=> `<div class="tt-ho">${h.owner ? h.owner : '<span style="color:var(--muted2)">unnamed</span>'} ${hoStatusTag(h.status)}</div>`).join('');
    html += `<div class="tt-row">ROA HO:</div><div class="tt-ho-list">${rows}</div>`;
  } else {
    html += `<div class="tt-row">ROA HO: <span style="color:var(--muted2)">none</span></div>`;
  }

  tooltip.innerHTML = html;
  tooltip.style.display = 'block';
  positionTooltip(ev);
}

function showTooltip(z, ev){
  const tooltip = document.getElementById('tooltip');
  let html = `<div class="tt-name">${z.name}</div>
    <div class="tt-cluster">${z.cluster} &middot; ${z.type==='portal'?'Avalon Portal':'Black Zone'}</div>`;

  const legendEntry = z.legendId ? state.legend.find(l=>l.id===z.legendId) : null;
  if(legendEntry){
    html += `<div class="tt-row"><span class="legend-dot" style="background:${legendEntry.color}"></span> ${legendEntry.label}</div>`;
  }

  if(z.type === 'blackzone'){
    const owner = z.territory.owner ? `<b>${z.territory.owner}</b>` : '<span style="color:var(--muted2)">unclaimed</span>';
    html += `<div class="tt-row">Owner: ${owner}</div>`;
    const shownHos = z.hideouts.filter(h=>h.status!=='destroyed');
    if(shownHos.length){
      const rows = shownHos.map(h=> `<div class="tt-ho">${h.owner ? h.owner : '<span style="color:var(--muted2)">unnamed</span>'} ${hoStatusTag(h.status)}</div>`).join('');
      html += `<div class="tt-row">Hideouts:</div><div class="tt-ho-list">${rows}</div>`;
    } else {
      html += `<div class="tt-row">Hideouts: <span style="color:var(--muted2)">none</span></div>`;
    }
    if(z.connections.length){
      const latest = [...z.connections].sort((a,b)=>b.loggedAt-a.loggedAt)[0];
      const rt = relTime(latest.loggedAt);
      html += `<div class="tt-row">Last road: <b>${latest.roadName}</b> (${rt.label})</div>`;
    }
  } else {
    const shownHos = z.hideouts.filter(h=>h.status!=='destroyed');
    if(shownHos.length){
      const rows = shownHos.map(h=> `<div class="tt-ho">${h.owner ? h.owner : '<span style="color:var(--muted2)">unnamed</span>'} ${hoStatusTag(h.status)}</div>`).join('');
      html += `<div class="tt-row">ROA HO:</div><div class="tt-ho-list">${rows}</div>`;
    } else {
      html += `<div class="tt-row">ROA HO: <span style="color:var(--muted2)">none</span></div>`;
    }
    html += `<div class="tt-row">Click to log Avalon road sightings</div>`;
  }

  tooltip.innerHTML = html;
  tooltip.style.display = 'block';
  positionTooltip(ev);
}

function positionTooltip(ev){
  const tooltip = document.getElementById('tooltip');
  const wrapRect = document.getElementById('mapzone').getBoundingClientRect();
  let left = ev.clientX - wrapRect.left + 16;
  let top = ev.clientY - wrapRect.top + 16;
  // keep it on-screen roughly
  if(left + 230 > wrapRect.width) left = ev.clientX - wrapRect.left - 236;
  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
}

function hideTooltip(){
  document.getElementById('tooltip').style.display = 'none';
}

// ---- pan / zoom interaction ----
function svgPointFromClient(clientX, clientY){
  const svg = document.getElementById('svg');
  const rect = svg.getBoundingClientRect();
  const vb = svg.viewBox.baseVal;
  const x = vb.x + (clientX - rect.left)/rect.width * vb.width;
  const y = vb.y + (clientY - rect.top)/rect.height * vb.height;
  return [x, y];
}

function zoomAtScreenPoint(sx, sy, factor){
  const wx = (sx - panX)/zoomLevel;
  const wy = (sy - panY)/zoomLevel;
  let newZoom = zoomLevel * factor;
  newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, newZoom));
  panX = sx - wx*newZoom;
  panY = sy - wy*newZoom;
  zoomLevel = newZoom;
  renderMap();
}

function setupMapInteraction(){
  const svg = document.getElementById('svg');
  const mapzone = document.getElementById('mapzone');

  svg.addEventListener('click', handleMapClickToAddPoint);

  svg.addEventListener('wheel', (e)=>{
    e.preventDefault();
    const [sx, sy] = svgPointFromClient(e.clientX, e.clientY);
    const factor = e.deltaY > 0 ? 0.88 : 1.12;
    zoomAtScreenPoint(sx, sy, factor);
  }, {passive:false});

  svg.addEventListener('mousedown', (e)=>{
    pointerDown = true;
    dragging = false;
    dragStartClientX = e.clientX;
    dragStartClientY = e.clientY;
    dragStartPanX = panX;
    dragStartPanY = panY;
  });

  window.addEventListener('mousemove', (e)=>{
    if(!pointerDown) return;
    const dx = e.clientX - dragStartClientX;
    const dy = e.clientY - dragStartClientY;
    if(Math.abs(dx) > 3 || Math.abs(dy) > 3) dragging = true;
    if(dragging){
      const rect = svg.getBoundingClientRect();
      const vb = svg.viewBox.baseVal;
      panX = dragStartPanX + dx * (vb.width/rect.width);
      panY = dragStartPanY + dy * (vb.height/rect.height);
      mapzone.classList.add('dragging');
      hideTooltip();
      renderMap();
    }
  });

  window.addEventListener('mouseup', ()=>{
    pointerDown = false;
    mapzone.classList.remove('dragging');
    setTimeout(()=>{ dragging = false; }, 0);
  });

  document.getElementById('zoomInBtn').onclick = ()=> zoomAtScreenPoint(VIEW_W/2, VIEW_H/2, 1.3);
  document.getElementById('zoomOutBtn').onclick = ()=> zoomAtScreenPoint(VIEW_W/2, VIEW_H/2, 1/1.3);
  document.getElementById('fitBtn').onclick = ()=>{ fitView(); renderMap(); };

  setupFullscreen();
}

// ---- fullscreen toggle ----
function isFullscreen(){
  return !!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
}

function setupFullscreen(){
  const mapzone = document.getElementById('mapzone');
  const btn = document.getElementById('fullscreenBtn');
  if(!btn) return;

  btn.onclick = ()=>{
    if(!isFullscreen()){
      const req = mapzone.requestFullscreen || mapzone.webkitRequestFullscreen || mapzone.msRequestFullscreen;
      if(req){
        req.call(mapzone);
      } else {
        // fallback for browsers without Fullscreen API support
        mapzone.classList.add('pseudo-fullscreen');
        document.body.classList.add('fs-lock');
        btn.classList.add('active');
        btn.title = 'Exit fullscreen';
      }
    } else {
      const exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
      if(exit) exit.call(document);
    }
  };

  const onChange = ()=>{
    const fs = isFullscreen() || mapzone.classList.contains('pseudo-fullscreen');
    btn.classList.toggle('active', fs);
    btn.title = fs ? 'Exit fullscreen' : 'Fullscreen';
    // give the SVG viewport a beat to resize, then re-fit
    setTimeout(()=>{ fitView(); renderMap(); }, 60);
  };
  document.addEventListener('fullscreenchange', onChange);
  document.addEventListener('webkitfullscreenchange', onChange);
  document.addEventListener('MSFullscreenChange', onChange);

  // Esc closes the CSS-only pseudo-fullscreen fallback
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && mapzone.classList.contains('pseudo-fullscreen')){
      mapzone.classList.remove('pseudo-fullscreen');
      document.body.classList.remove('fs-lock');
      btn.classList.remove('active');
      btn.title = 'Fullscreen';
      setTimeout(()=>{ fitView(); renderMap(); }, 60);
    }
  });
}

// Lightweight popup card for a "Recently Mapped" entry — shows the essentials
// (territory, hideouts, this road's branches) without swapping out the whole
// right-hand panel. "Open full zone panel" still jumps there if wanted.
// ---- guild summary (all guilds, all territories/hideouts at a glance) ----
function computeGuildSummary(){
  const map = {};
  const touch = (name)=>{
    if(!map[name]) map[name] = {name, territories:0, active:0, inactive:0, public:0};
    return map[name];
  };
  zonesArr().forEach(z=>{
    if(z.type !== 'blackzone') return;
    if(z.territory.owner) touch(z.territory.owner).territories++;
    z.hideouts.forEach(h=>{
      if(!h.owner || h.status==='destroyed') return;
      const entry = touch(h.owner);
      if(h.status==='active') entry.active++;
      else if(h.status==='inactive') entry.inactive++;
      else if(h.status==='public') entry.public++;
    });
  });
  return Object.values(map).sort((a,b)=>
    (b.territories+b.active+b.inactive+b.public) - (a.territories+a.active+a.inactive+a.public)
    || a.name.localeCompare(b.name)
  );
}

// ---- ROA HO summary (portal hideouts only, kept separate from the blackzone Guild Summary) ----
function computeRoaHoSummary(){
  const map = {};
  const touch = (name)=>{
    if(!map[name]) map[name] = {name, active:0, inactive:0, public:0};
    return map[name];
  };
  const tally = (hideouts)=>{
    hideouts.forEach(h=>{
      if(!h.owner || h.status==='destroyed') return;
      const entry = touch(h.owner);
      if(h.status==='active') entry.active++;
      else if(h.status==='inactive') entry.inactive++;
      else if(h.status==='public') entry.public++;
    });
  };
  zonesArr().forEach(z=>{ if(z.type === 'portal') tally(z.hideouts); });
  customPointsArr().forEach(p=> tally(p.hideouts));
  return Object.values(map).sort((a,b)=>
    (b.active+b.inactive+b.public) - (a.active+a.inactive+a.public) || a.name.localeCompare(b.name)
  );
}

function showRoaHoSummary(){
  const existing = document.getElementById('roaHoSummaryBg');
  if(existing) existing.remove();
  const data = computeRoaHoSummary();
  const dataAZ = [...data].sort((a,b)=> a.name.localeCompare(b.name));
  let sortMode = 'rank';
  let filterTerm = '';

  function buildRows(){
    const source = sortMode === 'az' ? dataAZ : data;
    const filtered = filterTerm ? source.filter(g=> g.name.toLowerCase().includes(filterTerm)) : source;
    if(filtered.length === 0){
      return `<div class="gs-empty">${data.length===0 ? 'No ROA HO logged yet.' : 'No guild matches your search.'}</div>`;
    }
    return filtered.map(g=>`
        <div class="gs-row" data-guild="${g.name.replace(/"/g,'&quot;')}">
          <div class="gs-col gs-col-guild gs-name">${g.name}</div>
          <div class="gs-col gs-col-num gs-active">${g.active}</div>
          <div class="gs-col gs-col-num gs-public">${g.public}</div>
          <div class="gs-col gs-col-num gs-inactive">${g.inactive}</div>
        </div>`).join('');
  }

  function wireRows(){
    bg.querySelectorAll('.gs-row').forEach(row=>{
      row.onclick = ()=>{
        close();
        const gs = document.getElementById('guildSearch');
        if(gs){ gs.value = row.getAttribute('data-guild'); renderGuildResults(gs.value); gs.focus(); }
      };
    });
  }

  const html = `<div class="modal-bg" id="roaHoSummaryBg">
    <div class="modal mapped-popup guild-summary-modal">
      <div class="mp-head">
        <div class="mp-head-text">
          <div class="mp-zone-name">ROA HO Summary</div>
          <div class="mp-zone-cluster">Hideouts logged at the PORTAL GANK points</div>
        </div>
        <button class="icon-btn x" id="roaHoSummaryClose">✕</button>
      </div>
      <div class="gs-controls">
        <input type="text" id="rhsSearchInput" placeholder="Search guild...">
        <div class="gs-sort-toggle">
          <button type="button" class="gs-sort-btn active" data-sort="rank">Rank</button>
          <button type="button" class="gs-sort-btn" data-sort="az">A–Z</button>
        </div>
      </div>
      <div class="gs-head-row">
        <div class="gs-col gs-col-guild">Guild</div>
        <div class="gs-col gs-col-num">Active HO</div>
        <div class="gs-col gs-col-num">Public HO</div>
        <div class="gs-col gs-col-num">Inactive HO</div>
      </div>
      <div class="mp-body">
        <div id="rhsTableBody">${buildRows()}</div>
      </div>
    </div>
  </div>`;

  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap.firstElementChild);

  const bg = document.getElementById('roaHoSummaryBg');
  const close = ()=> bg.remove();
  document.getElementById('roaHoSummaryClose').onclick = close;
  bg.onclick = (e)=>{ if(e.target === bg) close(); };
  wireRows();

  document.getElementById('rhsSearchInput').oninput = (e)=>{
    filterTerm = e.target.value.trim().toLowerCase();
    document.getElementById('rhsTableBody').innerHTML = buildRows();
    wireRows();
  };
  bg.querySelectorAll('.gs-sort-btn').forEach(btn=>{
    btn.onclick = ()=>{
      sortMode = btn.getAttribute('data-sort');
      bg.querySelectorAll('.gs-sort-btn').forEach(b=> b.classList.toggle('active', b===btn));
      document.getElementById('rhsTableBody').innerHTML = buildRows();
      wireRows();
    };
  });

  document.addEventListener('keydown', function escClose(e){
    if(e.key === 'Escape'){ close(); document.removeEventListener('keydown', escClose); }
  });
}

function showGuildSummary(){
  const existing = document.getElementById('guildSummaryBg');
  if(existing) existing.remove();
  const data = computeGuildSummary(); // sorted by holdings (rank) by default
  const dataAZ = [...data].sort((a,b)=> a.name.localeCompare(b.name));
  let sortMode = 'rank'; // 'rank' | 'az'
  let filterTerm = '';

  function buildRows(){
    const source = sortMode === 'az' ? dataAZ : data;
    const filtered = filterTerm
      ? source.filter(g=> g.name.toLowerCase().includes(filterTerm))
      : source;
    if(filtered.length === 0){
      return `<div class="gs-empty">${data.length===0 ? 'No guild data logged yet.' : 'No guild matches your search.'}</div>`;
    }
    return filtered.map(g=>`
        <div class="gs-row" data-guild="${g.name.replace(/"/g,'&quot;')}">
          <div class="gs-col gs-col-guild gs-name">${g.name}</div>
          <div class="gs-col gs-col-num">${g.territories}</div>
          <div class="gs-col gs-col-num gs-active">${g.active}</div>
          <div class="gs-col gs-col-num gs-public">${g.public}</div>
          <div class="gs-col gs-col-num gs-inactive">${g.inactive}</div>
        </div>`).join('');
  }

  function wireRows(){
    bg.querySelectorAll('.gs-row').forEach(row=>{
      row.onclick = ()=>{
        close();
        const gs = document.getElementById('guildSearch');
        if(gs){ gs.value = row.getAttribute('data-guild'); renderGuildResults(gs.value); gs.focus(); }
      };
    });
  }

  const html = `<div class="modal-bg" id="guildSummaryBg">
    <div class="modal mapped-popup guild-summary-modal">
      <div class="mp-head">
        <div class="mp-head-text">
          <div class="mp-zone-name">Guild Summary</div>
          <div class="mp-zone-cluster">Territories &amp; hideouts, every mapped zone</div>
        </div>
        <button class="icon-btn x" id="guildSummaryClose">✕</button>
      </div>
      <div class="gs-controls">
        <input type="text" id="gsSearchInput" placeholder="Search guild...">
        <div class="gs-sort-toggle">
          <button type="button" class="gs-sort-btn active" data-sort="rank">Rank</button>
          <button type="button" class="gs-sort-btn" data-sort="az">A–Z</button>
        </div>
      </div>
      <div class="gs-head-row">
        <div class="gs-col gs-col-guild">Guild</div>
        <div class="gs-col gs-col-num">Territory</div>
        <div class="gs-col gs-col-num">Active HO</div>
        <div class="gs-col gs-col-num">Public HO</div>
        <div class="gs-col gs-col-num">Inactive HO</div>
      </div>
      <div class="mp-body">
        <div id="gsTableBody">${buildRows()}</div>
      </div>
    </div>
  </div>`;

  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap.firstElementChild);

  const bg = document.getElementById('guildSummaryBg');
  const close = ()=> bg.remove();
  document.getElementById('guildSummaryClose').onclick = close;
  bg.onclick = (e)=>{ if(e.target === bg) close(); };
  wireRows();

  document.getElementById('gsSearchInput').oninput = (e)=>{
    filterTerm = e.target.value.trim().toLowerCase();
    document.getElementById('gsTableBody').innerHTML = buildRows();
    wireRows();
  };
  bg.querySelectorAll('.gs-sort-btn').forEach(btn=>{
    btn.onclick = ()=>{
      sortMode = btn.getAttribute('data-sort');
      bg.querySelectorAll('.gs-sort-btn').forEach(b=> b.classList.toggle('active', b===btn));
      document.getElementById('gsTableBody').innerHTML = buildRows();
      wireRows();
    };
  });

  document.addEventListener('keydown', function escClose(e){
    if(e.key === 'Escape'){ close(); document.removeEventListener('keydown', escClose); }
  });
}

function showMappedPopup(zone, roadName){
  const existing = document.getElementById('mappedPopupBg');
  if(existing) existing.remove();

  const matches = zone.connections.filter(c=> !c.satellite && c.roadName === roadName);
  const zoneBranches = matches.filter(c=>c.type==='branch');
  const roadLinks = matches.filter(c=>c.type==='roadlink');
  const rt = relTime(Math.max(...matches.map(c=>c.loggedAt)));

  let html = `<div class="modal-bg" id="mappedPopupBg">
    <div class="modal mapped-popup">
      <div class="mp-head">
        <div>
          <div class="mp-zone-name">${zone.name}</div>
          <div class="mp-zone-cluster">${zone.cluster} &middot; Black Zone</div>
        </div>
        <button class="icon-btn x" id="mappedPopupClose">✕</button>
      </div>
      <div class="mp-road-line">Road: <span class="mp-road-name">${roadName}</span><span class="mp-time ${rt.cls}">${rt.label}</span></div>
      <div class="mp-body">
  `;

  if(zoneBranches.length || roadLinks.length){
    html += `<div class="mp-section-title">This road's branches</div>`;
    zoneBranches.forEach(c=>{
      const target = resolveBranchTarget(c.targetZoneId);
      if(!target) return;
      html += `<div class="conn-target-item">
        <div class="conn-target-row">
          <div class="conn-target" data-nav="${target.id}">→ ${target.isPoint ? 'ROA HO' : 'Black Zone'}: <b>${target.name}</b></div>
          <button class="icon-btn x mini" data-action="mp-del" data-connid="${c.id}" title="Remove this branch">✕</button>
        </div>
        ${territoryHoBlock(target)}
      </div>`;
    });
    roadLinks.forEach(c=>{
      const network = findRoadNetwork(c.linkedRoadName, null);
      html += `<div class="conn-target-item roadlink-item">
        <div class="conn-target-row">
          <div class="conn-target roadlink-label">↝ Another ROA: <b>${c.linkedRoadName}</b></div>
          <button class="icon-btn x mini" data-action="mp-del" data-connid="${c.id}" title="Remove this link">✕</button>
        </div>`;
      if(network.length === 0){
        html += `<div class="conn-meta"><span style="color:var(--muted2)">No blackzone branches logged there yet.</span></div>`;
      } else {
        const seenTargetIds = new Set();
        const branchZones = [];
        network.forEach(entry=> entry.branches.forEach(bc=>{
          if(!seenTargetIds.has(bc.targetZoneId)){ seenTargetIds.add(bc.targetZoneId); branchZones.push(bc.targetZoneId); }
        }));
        if(branchZones.length === 0){
          html += `<div class="conn-meta"><span style="color:var(--muted2)">No blackzone branches logged there yet.</span></div>`;
        }
        branchZones.forEach(tid=>{
          const target = resolveBranchTarget(tid);
          if(!target) return;
          html += `<div class="roadlink-bz">
            <div class="roadlink-nav" data-nav="${target.id}">→ ${target.isPoint ? 'ROA HO' : 'Black Zone'}: <b>${target.name}</b></div>
            ${territoryHoBlock(target)}
          </div>`;
        });
      }
      html += `</div>`;
    });
  } else {
    html += `<div style="color:var(--muted2);font-size:12px;">No branches logged for this road yet.</div>`;
  }

  html += `</div>
      <button class="btn primary mp-open-btn" id="mappedPopupOpen">Open full zone panel</button>
    </div>
  </div>`;

  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap.firstElementChild);

  const bg = document.getElementById('mappedPopupBg');
  const close = ()=> bg.remove();
  document.getElementById('mappedPopupClose').onclick = close;
  bg.onclick = (e)=>{ if(e.target === bg) close(); };
  document.getElementById('mappedPopupOpen').onclick = ()=>{ close(); selectedId = zone.id; renderAll(); };
  bg.querySelectorAll('[data-nav]').forEach(el=>{
    el.onclick = ()=>{ close(); navigateToTarget(el.getAttribute('data-nav')); };
  });
  bg.querySelectorAll('[data-action="mp-del"]').forEach(btn=>{
    btn.onclick = async (e)=>{
      e.stopPropagation();
      const cid = btn.getAttribute('data-connid');
      zone.connections = zone.connections.filter(c=> c.id!==cid && c.parentLinkId!==cid);
      await saveData();
      renderAll();
      // still something left for this road at this zone? re-open the popup refreshed; otherwise just close.
      const stillHere = zone.connections.some(c=> !c.satellite && c.roadName===roadName);
      if(stillHere) showMappedPopup(zone, roadName); else close();
    };
  });
  document.addEventListener('keydown', function escClose(e){
    if(e.key === 'Escape'){ close(); document.removeEventListener('keydown', escClose); }
  });
}

function renderUnmapped(){
  const list = document.getElementById('unmappedList');
  // "Unmapped" used to list zones without coordinates — that's always empty
  // now (every seed zone has coordinates), so this repurposes the same slot
  // into a "Recently Mapped" activity feed: every logged road, newest first,
  // shown as Zone · Road name, click to jump straight to that zone.
  const entries = [];
  visibleZones().forEach(z=>{
    if(z.type !== 'blackzone') return;
    const groups = {};
    z.connections.forEach(c=>{
      if(c.satellite) return; // satellite branches belong to a linked road, not their own log entry
      const gid = c.groupId || c.id;
      if(!groups[gid]) groups[gid] = {roadName:c.roadName, loggedAt:c.loggedAt};
      else groups[gid].loggedAt = Math.max(groups[gid].loggedAt, c.loggedAt);
    });
    Object.values(groups).forEach(g=> entries.push({zone:z, roadName:g.roadName, loggedAt:g.loggedAt}));
  });
  entries.sort((a,b)=> b.loggedAt - a.loggedAt);

  if(entries.length===0){ list.innerHTML = '<div style="color:var(--muted2);font-size:11.5px;">No roads logged yet.</div>'; return; }
  list.innerHTML = "";
  entries.slice(0,50).forEach(e=>{
    const row = document.createElement('div');
    row.className = 'row mapped-row' + (e.zone.id===selectedId?' selected':'');
    const rt = relTime(e.loggedAt);
    row.innerHTML = `<div class="mapped-zone">${e.zone.name}</div>
      <div class="mapped-road-row"><span class="mapped-road">${e.roadName}</span><span class="mapped-time ${rt.cls}">${rt.label}</span></div>`;
    row.onclick = ()=> showMappedPopup(e.zone, e.roadName);
    list.appendChild(row);
  });
}

function navigateToTarget(id){
  selectedId = id;
  if(id && id.startsWith('custom_')) activeTab = ROA_HO_TAB;
  renderAll();
}

function blackzoneOptions(excludeId){
  return zonesArr().filter(z=>z.type==='blackzone' && z.id!==excludeId)
    .map(z=>({id:z.id, name:z.name, cluster:z.cluster, isPoint:false}))
    .sort((a,b)=>a.name.localeCompare(b.name));
}
function roaHoOptions(excludeId){
  return customPointsArr().filter(p=> ('custom_'+p.id)!==excludeId)
    .map(p=>({id:'custom_'+p.id, name:p.name, cluster:'ROA HO', isPoint:true}))
    .sort((a,b)=>a.name.localeCompare(b.name));
}

// Normalizes a connection's target — either a real blackzone or a ROA HO custom
// point — into one common shape so rendering code doesn't need to care which.
function resolveBranchTarget(targetId){
  if(typeof targetId === 'string' && targetId.startsWith('custom_')){
    const p = state.customPoints[targetId.slice('custom_'.length)];
    if(!p) return null;
    return { isPoint:true, id:targetId, name:p.name, cluster:'ROA HO', territory:null, hideouts:p.hideouts };
  }
  const z = state.zones[targetId];
  if(!z) return null;
  return { isPoint:false, id:targetId, name:z.name, cluster:z.cluster, territory:z.territory, hideouts:z.hideouts };
}

// ---- guild search (feature 1) ----
function guildMatches(term){
  const t = term.trim().toLowerCase();
  if(!t) return [];
  const results = [];
  zonesArr().forEach(z=>{
    if(z.type !== 'blackzone') return;
    if(z.territory.owner && z.territory.owner.toLowerCase().includes(t)){
      results.push({zone:z, kind:'territory', guild:z.territory.owner});
    }
    z.hideouts.forEach(h=>{
      if(h.owner && h.owner.toLowerCase().includes(t)){
        results.push({zone:z, kind:'hideout', guild:h.owner, hoStatus:h.status});
      }
    });
  });
  results.sort((a,b)=> a.guild.localeCompare(b.guild));
  return results;
}

function renderGuildResults(term){
  const box = document.getElementById('guildResults');
  if(!box) return;
  const t = term.trim();
  if(!t){ box.style.display = 'none'; box.innerHTML = ''; return; }
  const matches = guildMatches(t);
  if(matches.length === 0){
    box.innerHTML = '<div class="gr-empty">No guilds match "'+t.replace(/</g,'&lt;')+'"</div>';
    box.style.display = 'block';
    return;
  }
  box.innerHTML = matches.map(m=>{
    const tag = m.kind==='territory' ? '<span class="gr-type territory">Territory</span>'
      : `<span class="gr-type hideout ${m.hoStatus==='destroyed'?'destroyed':''}">${m.hoStatus==='active'?'Hideout':'Hideout (destroyed)'}</span>`;
    return `<div class="gr-row" data-zid="${m.zone.id}">
        <div class="gr-main">
          <span class="gr-guild">${m.guild}</span>
          <span class="gr-zone">${m.zone.name} <span class="gr-cluster">&middot; ${m.zone.cluster}</span></span>
        </div>
        ${tag}
      </div>`;
  }).join('');
  box.querySelectorAll('.gr-row').forEach(row=>{
    row.onclick = ()=>{
      selectedId = row.getAttribute('data-zid');
      box.style.display = 'none';
      const gs = document.getElementById('guildSearch');
      if(gs) gs.value = '';
      renderAll();
    };
  });
  box.style.display = 'block';
}

// ---- road-link lookup (feature 2 helper) ----
// A road can be logged (with its own blackzone branches, and even its own
// further road-links) at any number of zones under the same road name. Given
// a road name, this resolves every place that name shows up and pulls out
// the REAL blackzone branches + onward road-links logged under it there —
// not just "which zone mentioned it" — so e.g. Road A -> Road B -> BlackzoneX
// actually surfaces BlackzoneX under Road B, wherever Road B was logged.
// shared renderer: Territory and HO/s always on their own separate lines,
// used both for direct blackzone branches and for blackzones found under a
// linked road, so the format is identical everywhere.
const HO_STATUS_META = {
  active:    {label:'Active',    color:'var(--green)'},
  inactive:  {label:'Inactive',  color:'var(--muted2)'},
  public:    {label:'Public',    color:'#5a8fc1'},
  destroyed: {label:'Destroyed', color:'var(--red)'}
};
function hoStatusTag(status){
  const meta = HO_STATUS_META[status] || HO_STATUS_META.inactive;
  return `<span class="ho-tag" style="color:${meta.color};border-color:${meta.color};">${meta.label}</span>`;
}

function territoryHoBlock(bz){
  const shownHos = bz.hideouts.filter(h=>h.status!=='destroyed');
  const hoInner = shownHos.length
    ? '<div class="ho-list">'+shownHos.map(h=>`<div>${h.owner||'unnamed'} ${hoStatusTag(h.status)}</div>`).join('')+'</div>'
    : ' <span style="color:var(--muted2)">none logged</span>';
  const territoryRow = bz.territory
    ? `<div class="th-row"><b>Territory:</b> ${bz.territory.owner || '<span style="color:var(--muted2)">unclaimed</span>'}</div>`
    : '';
  return `<div class="th-block conn-meta">
    ${territoryRow}
    <div class="th-row"><b>HO:</b>${hoInner}</div>
  </div>`;
}

// If this zone already has a logged road with the same name (case-insensitive),
// reuse its groupId so new branches/links merge into that same card instead of
// splitting into a separate one every time someone logs another sighting.
function findExistingGroupId(z, roadName){
  const t = roadName.trim().toLowerCase();
  const seen = {};
  for(const c of z.connections){
    if(c.satellite) continue; // satellite groups belong to a linked road, not the anchor road
    const gid = c.groupId || c.id;
    if(!(gid in seen)) seen[gid] = c.roadName;
  }
  for(const gid in seen){
    if(seen[gid] && seen[gid].trim().toLowerCase() === t) return gid;
  }
  return null;
}

function findRoadNetwork(roadName, excludeZoneId){
  const t = (roadName||'').trim().toLowerCase();
  if(!t) return [];
  const byZone = {};
  zonesArr().forEach(z=>{
    if(z.id === excludeZoneId) return;
    z.connections.forEach(c=>{
      if(!c.roadName || c.roadName.trim().toLowerCase() !== t) return;
      if(!byZone[z.id]) byZone[z.id] = {zone:z, branches:[], roadlinks:[]};
      if(c.type === 'branch') byZone[z.id].branches.push(c);
      else if(c.type === 'roadlink') byZone[z.id].roadlinks.push(c);
      // type 'direct' just confirms the road was seen at this zone; no extra data
    });
  });
  return Object.values(byZone);
}

function renderHideoutSection(z, label, idPrefix){
  let html = `<div class="section-title">${label}</div><div id="${idPrefix}List">`;
  z.hideouts.forEach(h=>{
    html += `<div class="ho-row ${h.status==='destroyed'?'destroyed':''}" data-hoid="${h.id}">
      <input type="text" value="${h.owner}" placeholder="guild name" ${h.status==='destroyed'?'disabled':''}>
      <select class="ho-status-select ho-status-${h.status}" data-action="ho-status">
        <option value="active" ${h.status==='active'?'selected':''}>Active</option>
        <option value="inactive" ${h.status==='inactive'?'selected':''}>Inactive</option>
        <option value="public" ${h.status==='public'?'selected':''}>Public</option>
        <option value="destroyed" ${h.status==='destroyed'?'selected':''}>Destroyed</option>
      </select>
      <button class="icon-btn x" data-action="del-ho" title="Remove">✕</button>
    </div>`;
  });
  html += `</div><button class="small-add" id="addHoBtn">+ Add ${label==='ROA HO' ? 'ROA HO' : 'hideout'}</button>`;
  return html;
}

function renderCustomPointPanel(p){
  const panel = document.getElementById('panel');
  let html = `
    <div class="panel-head">
      <input type="text" id="customPointNameInput" class="cp-name-input" value="${p.name.replace(/"/g,'&quot;')}" placeholder="Point name...">
      <div class="cluster">ROA HO Point</div>
    </div>
    <div class="panel-scroll">
  `;

  html += `<div class="field-row">
      <label>Legend</label>
      <select id="legendPicker" style="flex:1;background:var(--panel2);border:1px solid var(--line);color:var(--text);padding:6px 9px;border-radius:3px;font-size:13px;">
        <option value="">— none —</option>
        ${state.legend.map(l=>`<option value="${l.id}" ${p.legendId===l.id?'selected':''}>${l.label}</option>`).join('')}
      </select>
      ${p.legendId && state.legend.find(l=>l.id===p.legendId) ? `<span class="legend-dot" style="background:${state.legend.find(l=>l.id===p.legendId).color}"></span>` : ''}
    </div>`;

  html += renderHideoutSection(p, 'ROA HO', 'ho');

  html += `<div class="section-title">Danger zone</div>
    <button class="small-add" id="deleteCustomPointBtn" style="border-color:var(--red);color:var(--red);">✕ Delete this point</button>`;

  html += `</div>`;
  panel.innerHTML = html;

  document.getElementById('customPointNameInput').onchange = async (e)=>{
    p.name = e.target.value.trim() || 'Unnamed ROA HO';
    await saveData(); renderAll();
  };
  const legendPicker = document.getElementById('legendPicker');
  legendPicker.onchange = async ()=>{
    p.legendId = legendPicker.value || null;
    await saveData(); renderAll();
  };
  const addHoBtn = document.getElementById('addHoBtn');
  if(addHoBtn) addHoBtn.onclick = async ()=>{
    p.hideouts.push({id:'ho_'+Date.now(), owner:'', status:'active', lastUpdated:Date.now()});
    await saveData(); renderAll();
  };
  document.querySelectorAll('[data-hoid]').forEach(row=>{
    const hoid = row.getAttribute('data-hoid');
    const h = p.hideouts.find(x=>x.id===hoid);
    const input = row.querySelector('input');
    input.onchange = async ()=>{ h.owner = input.value.trim(); h.lastUpdated = Date.now(); await saveData(); };
    row.querySelector('[data-action="ho-status"]').onchange = async (e)=>{
      h.status = e.target.value;
      h.lastUpdated = Date.now(); await saveData(); renderAll();
    };
    row.querySelector('[data-action="del-ho"]').onclick = async ()=>{
      p.hideouts = p.hideouts.filter(x=>x.id!==hoid);
      await saveData(); renderAll();
    };
  });
  document.getElementById('deleteCustomPointBtn').onclick = async ()=>{
    const ok = confirm(`Delete "${p.name}"? This removes the point and everything logged on it. This can't be undone.`);
    if(!ok) return;
    delete state.customPoints[p.id];
    selectedId = null;
    await saveData(); renderAll();
  };
}

function renderPanel(){
  const panel = document.getElementById('panel');
  pendingLinkedRoads = [];

  if(selectedId && selectedId.startsWith('custom_')){
    const pid = selectedId.slice('custom_'.length);
    if(state.customPoints[pid]){
      renderCustomPointPanel(state.customPoints[pid]);
      return;
    }
  }

  if(!selectedId || !state.zones[selectedId]){
    panel.innerHTML = '<div class="panel-empty">Click a zone on the map<br>to open its record.</div>';
    return;
  }
  const z = state.zones[selectedId];

  let html = `
    <div class="panel-head">
      <div class="name">${z.name}</div>
      <div class="cluster">${z.cluster} &middot; ${z.type==='portal'?'Avalon Portal':'Black Zone'}</div>
    </div>
    <div class="panel-scroll">
  `;

  html += `<div class="field-row">
      <label>Legend</label>
      <select id="legendPicker" style="flex:1;background:var(--panel2);border:1px solid var(--line);color:var(--text);padding:6px 9px;border-radius:3px;font-size:13px;">
        <option value="">— none —</option>
        ${state.legend.map(l=>`<option value="${l.id}" ${z.legendId===l.id?'selected':''}>${l.label}</option>`).join('')}
      </select>
      ${z.legendId && state.legend.find(l=>l.id===z.legendId) ? `<span class="legend-dot" style="background:${state.legend.find(l=>l.id===z.legendId).color}"></span>` : ''}
    </div>`;

  if(z.type === 'blackzone'){
    html += `<div class="section-title">Territory</div>
      <div class="field-row">
        <label>Owner</label>
        <input type="text" id="ownerInput" value="${z.territory.owner||''}" placeholder="unclaimed">
        <span class="badge ${z.territory.status}">${z.territory.status==='needsReview'?'review':z.territory.status}</span>
      </div>
    `;
    html += renderHideoutSection(z, 'Hideouts', 'ho');
  } else {
    html += `<div class="section-title">Portal</div>
      <div style="font-size:12.5px;color:var(--muted);line-height:1.6;margin-bottom:14px;">
        Watch point. Log Avalon road sightings below as scouts call them in.
      </div>`;
    html += renderHideoutSection(z, 'ROA HO', 'ho');
  }

  html += `<div class="section-title">ROA Connections</div><div id="connList">`;
  // group connections logged together (same road, possibly multiple black-zone
  // branches and/or links onward to other roads)
  const groups = {};
  z.connections.forEach(c=>{
    const gid = c.groupId || c.id;
    (groups[gid] = groups[gid] || []).push(c);
  });
  const groupList = Object.values(groups)
    .filter(group=> !group.every(c=>c.satellite)) // satellite groups render nested under their parent roadlink, not as their own card
    .sort((a,b)=>
      Math.max(...b.map(c=>c.loggedAt)) - Math.max(...a.map(c=>c.loggedAt))
    );
  if(groupList.length===0){
    html += `<div style="color:var(--muted2);font-size:12px;">No roads logged yet.</div>`;
  }
  groupList.forEach(group=>{
    const first = group[0];
    const rt = relTime(Math.max(...group.map(c=>c.loggedAt)));
    const zoneBranches = group.filter(c=> c.type === 'branch');
    const roadLinks = group.filter(c=> c.type === 'roadlink');
    const parts = [];
    if(zoneBranches.length) parts.push(zoneBranches.length+' blackzone'+(zoneBranches.length>1?'s':''));
    if(roadLinks.length) parts.push(roadLinks.length+' linked ROA'+(roadLinks.length>1?'s':''));
    const summaryText = parts.length ? parts.join(' &middot; ') : 'mapped here only';

    html += `<div class="conn-summary-row" data-road="${first.roadName.replace(/"/g,'&quot;')}">
      <div class="conn-summary-main">
        <span class="conn-summary-road">${first.roadName}</span>
        <span class="conn-summary-meta">${summaryText}</span>
      </div>
      <span class="conn-summary-time ${rt.cls}">${rt.label}</span>
    </div>`;
  });
  html += `</div>`;

  html += `<div class="add-conn-form">
    <input type="text" id="roadNameInput" placeholder="Road name (e.g. Ashen-Thorn-Veil)">
    <div class="target-hint">Check any black zone(s) this road branches to. Leave all unchecked if it's only mapped here.</div>
    <input type="text" id="targetSearchInput" placeholder="Search black zones...">
    <div class="target-check-list" id="targetCheckList">
      ${blackzoneOptions(z.id).map(o=>`<label class="check-row" data-searchname="${o.name.toLowerCase()} ${o.cluster.toLowerCase()}">
          <input type="checkbox" value="${o.id}">
          <span>${o.name}</span>
          <span class="check-cluster">${o.cluster}</span>
        </label>`).join('')}
    </div>
    <div class="target-hint" style="margin-top:10px;">Check any <b>ROA HO point(s)</b> this road branches to.</div>
    <input type="text" id="roaHoTargetSearchInput" placeholder="Search ROA HO points...">
    <div class="target-check-list" id="roaHoTargetCheckList">
      ${roaHoOptions(z.id).length === 0
        ? '<div style="color:var(--muted2);font-size:11.5px;padding:6px 4px;">No ROA HO points placed yet — add some from the ROA HO tab.</div>'
        : roaHoOptions(z.id).map(o=>`<label class="check-row" data-searchname="${o.name.toLowerCase()} ${o.cluster.toLowerCase()}">
          <input type="checkbox" value="${o.id}">
          <span>${o.name}</span>
          <span class="check-cluster">${o.cluster}</span>
        </label>`).join('')}
    </div>
    <div class="target-hint" style="margin-top:10px;">Or note that this road continues into a <b>separate ROA</b> (not a black zone). Give it a name, and you can pick its blackzone branches right here too.</div>
    <div class="linked-road-add">
      <input type="text" id="linkedRoadInput" placeholder="Name of the connecting road...">
      <button class="btn" id="addLinkedRoadBtn" type="button">+ Add</button>
    </div>
    <div class="linked-road-blocks" id="linkedRoadChips"></div>
    <button class="btn primary" style="width:100%;margin-top:8px;" id="logConnBtn">Log connection</button>
  </div>`;

  html += `</div>`;
  panel.innerHTML = html;
  wirePanelEvents(z);
}

// pendingLinkedRoads items: {name, targets: [zoneId, ...]}
function renderLinkedRoadBlocks(currentZoneId){
  const box = document.getElementById('linkedRoadChips');
  if(!box) return;
  if(pendingLinkedRoads.length === 0){ box.innerHTML = ''; return; }
  box.innerHTML = pendingLinkedRoads.map((lr, i)=>{
    const count = lr.targets.length;
    const bzOpts = blackzoneOptions(currentZoneId);
    const roaOpts = roaHoOptions(currentZoneId);
    return `<div class="lrb" data-idx="${i}">
      <div class="lrb-head">
        <span class="lrb-name">↝ ${lr.name}</span>
        <span class="lrb-count">${count ? count+' target'+(count>1?'s':'') : 'no targets picked'}</span>
        <button type="button" class="icon-btn x lrb-remove" data-idx="${i}" title="Remove this linked road">✕</button>
      </div>
      <div class="lrb-hint">Which black zone(s) does "${lr.name}" branch to? Optional.</div>
      <input type="text" class="lrb-search" data-idx="${i}" data-kind="bz" placeholder="Search black zones...">
      <div class="lrb-checklist" data-idx="${i}" data-kind="bz">
        ${bzOpts.map(o=>`<label class="check-row" data-searchname="${o.name.toLowerCase()} ${o.cluster.toLowerCase()}">
            <input type="checkbox" value="${o.id}" ${lr.targets.includes(o.id)?'checked':''}>
            <span>${o.name}</span>
            <span class="check-cluster">${o.cluster}</span>
          </label>`).join('')}
      </div>
      <div class="lrb-hint">Which ROA HO point(s) does "${lr.name}" branch to? Optional.</div>
      <input type="text" class="lrb-search" data-idx="${i}" data-kind="roaho" placeholder="Search ROA HO points...">
      <div class="lrb-checklist" data-idx="${i}" data-kind="roaho">
        ${roaOpts.length === 0
          ? '<div style="color:var(--muted2);font-size:11px;padding:6px 4px;">No ROA HO points placed yet.</div>'
          : roaOpts.map(o=>`<label class="check-row" data-searchname="${o.name.toLowerCase()} ${o.cluster.toLowerCase()}">
            <input type="checkbox" value="${o.id}" ${lr.targets.includes(o.id)?'checked':''}>
            <span>${o.name}</span>
            <span class="check-cluster">${o.cluster}</span>
          </label>`).join('')}
      </div>
    </div>`;
  }).join('');

  box.querySelectorAll('.lrb-remove').forEach(btn=>{
    btn.onclick = ()=>{
      pendingLinkedRoads.splice(parseInt(btn.getAttribute('data-idx'),10), 1);
      renderLinkedRoadBlocks(currentZoneId);
    };
  });
  box.querySelectorAll('.lrb-checklist').forEach(list=>{
    const idx = parseInt(list.getAttribute('data-idx'),10);
    list.querySelectorAll('input[type=checkbox]').forEach(cb=>{
      cb.onchange = ()=>{
        const lr = pendingLinkedRoads[idx];
        if(!lr) return;
        if(cb.checked){ if(!lr.targets.includes(cb.value)) lr.targets.push(cb.value); }
        else { lr.targets = lr.targets.filter(id=>id!==cb.value); }
        // just refresh the count label, no need to rebuild checkboxes (keeps focus/scroll stable)
        const head = list.closest('.lrb').querySelector('.lrb-count');
        head.textContent = lr.targets.length ? lr.targets.length+' target'+(lr.targets.length>1?'s':'') : 'no targets picked';
      };
    });
  });
  box.querySelectorAll('.lrb-search').forEach(input=>{
    input.oninput = ()=>{
      const t = input.value.trim().toLowerCase();
      const idx = input.getAttribute('data-idx');
      const kind = input.getAttribute('data-kind');
      box.querySelector(`.lrb-checklist[data-idx="${idx}"][data-kind="${kind}"]`).querySelectorAll('.check-row').forEach(row=>{
        const hay = row.getAttribute('data-searchname') || '';
        row.style.display = (!t || hay.includes(t)) ? '' : 'none';
      });
    };
  });
}

function wirePanelEvents(z){
  const legendPicker = document.getElementById('legendPicker');
  if(legendPicker){
    legendPicker.onchange = async ()=>{
      z.legendId = legendPicker.value || null;
      await saveData(); renderAll();
    };
  }
  const ownerInput = document.getElementById('ownerInput');
  if(ownerInput){
    ownerInput.onchange = async ()=>{
      z.territory.owner = ownerInput.value.trim();
      z.territory.status = z.territory.owner ? 'confirmed' : 'empty';
      z.territory.lastUpdated = Date.now();
      await saveData(); renderAll();
    };
  }
  const addHoBtn = document.getElementById('addHoBtn');
  if(addHoBtn) addHoBtn.onclick = async ()=>{
    z.hideouts.push({id:'ho_'+Date.now(), owner:'', status:'active', lastUpdated:Date.now()});
    await saveData(); renderAll();
  };
  document.querySelectorAll('[data-hoid]').forEach(row=>{
    const hoid = row.getAttribute('data-hoid');
    const h = z.hideouts.find(x=>x.id===hoid);
    const input = row.querySelector('input');
    input.onchange = async ()=>{ h.owner = input.value.trim(); h.lastUpdated = Date.now(); await saveData(); };
    row.querySelector('[data-action="ho-status"]').onchange = async (e)=>{
      h.status = e.target.value;
      h.lastUpdated = Date.now(); await saveData(); renderAll();
    };
    row.querySelector('[data-action="del-ho"]').onclick = async ()=>{
      z.hideouts = z.hideouts.filter(x=>x.id!==hoid);
      await saveData(); renderAll();
    };
  });
  document.querySelectorAll('.conn-summary-row').forEach(row=>{
    row.onclick = ()=> showMappedPopup(z, row.getAttribute('data-road'));
  });
  document.querySelectorAll('[data-nav]').forEach(el=>{
    el.onclick = ()=> navigateToTarget(el.getAttribute('data-nav'));
  });

  // feature 3: searchable checklist — filter rows in place (display toggle),
  // never re-render them, so checked state is preserved while typing.
  const targetSearchInput = document.getElementById('targetSearchInput');
  if(targetSearchInput){
    targetSearchInput.oninput = ()=>{
      const t = targetSearchInput.value.trim().toLowerCase();
      document.querySelectorAll('#targetCheckList .check-row').forEach(row=>{
        const hay = row.getAttribute('data-searchname') || '';
        row.style.display = (!t || hay.includes(t)) ? '' : 'none';
      });
    };
  }
  const roaHoTargetSearchInput = document.getElementById('roaHoTargetSearchInput');
  if(roaHoTargetSearchInput){
    roaHoTargetSearchInput.oninput = ()=>{
      const t = roaHoTargetSearchInput.value.trim().toLowerCase();
      document.querySelectorAll('#roaHoTargetCheckList .check-row').forEach(row=>{
        const hay = row.getAttribute('data-searchname') || '';
        row.style.display = (!t || hay.includes(t)) ? '' : 'none';
      });
    };
  }

  // feature 2: build the list of "linked road" blocks before submitting
  const addLinkedRoadBtn = document.getElementById('addLinkedRoadBtn');
  const linkedRoadInput = document.getElementById('linkedRoadInput');
  if(addLinkedRoadBtn && linkedRoadInput){
    const addLinked = ()=>{
      const val = linkedRoadInput.value.trim();
      if(!val) return;
      if(!pendingLinkedRoads.some(r=>r.name.toLowerCase()===val.toLowerCase())){
        pendingLinkedRoads.push({name: val, targets: []});
        renderLinkedRoadBlocks(z.id);
      }
      linkedRoadInput.value = '';
      linkedRoadInput.focus();
    };
    addLinkedRoadBtn.onclick = addLinked;
    linkedRoadInput.onkeydown = (e)=>{ if(e.key==='Enter'){ e.preventDefault(); addLinked(); } };
  }

  document.getElementById('logConnBtn').onclick = async ()=>{
    const roadName = document.getElementById('roadNameInput').value.trim();
    if(!roadName){ alert('Enter a road name first.'); return; }
    const checked = Array.from(document.querySelectorAll('#targetCheckList input:checked, #roaHoTargetCheckList input:checked')).map(cb=>cb.value);
    const linkedRoads = pendingLinkedRoads.slice();
    const loggedAt = Date.now();
    const groupId = findExistingGroupId(z, roadName) || ('g_'+loggedAt+'_'+Math.random().toString(36).slice(2,7));
    if(checked.length === 0 && linkedRoads.length === 0){
      // No branch or linked road picked - this just records that the road exists here.
      z.connections.push({
        id:'c_'+loggedAt+'_self',
        groupId,
        type:'direct',
        roadName,
        loggedAt,
        targetZoneId: z.id
      });
    } else {
      checked.forEach(targetId=>{
        z.connections.push({
          id:'c_'+loggedAt+'_'+targetId,
          groupId,
          type:'branch',
          roadName,
          loggedAt,
          targetZoneId: targetId
        });
      });
      linkedRoads.forEach((lr, i)=>{
        const linkId = 'c_'+loggedAt+'_link'+i;
        z.connections.push({
          id: linkId,
          groupId,
          type:'roadlink',
          roadName,
          loggedAt,
          linkedRoadName: lr.name
        });
        // If the person already knows which blackzones this linked road hits,
        // log that road's own branches right here too (own sub-group, own
        // road name) so it shows up immediately instead of waiting for
        // someone to log it separately at another zone.
        if(lr.targets && lr.targets.length){
          const subGroupId = 'g_'+loggedAt+'_sub'+i;
          lr.targets.forEach(targetId=>{
            z.connections.push({
              id:'c_'+loggedAt+'_sub'+i+'_'+targetId,
              groupId: subGroupId,
              type:'branch',
              roadName: lr.name,
              loggedAt,
              targetZoneId: targetId,
              satellite: true, // shown nested under its parent roadlink, not as its own card
              parentLinkId: linkId
            });
          });
        }
      });
    }
    pendingLinkedRoads = [];
    await saveData();
    renderAll();
  };
}

function renderAll(){
  renderTabs();
  renderLegend();
  renderMap();
  renderUnmapped();
  renderPanel();
}

document.getElementById('search').oninput = (e)=>{ searchTerm = e.target.value; renderAll(); };

const guildSearchEl = document.getElementById('guildSearch');
if(guildSearchEl){
  guildSearchEl.oninput = (e)=> renderGuildResults(e.target.value);
  document.addEventListener('click', (e)=>{
    const box = document.getElementById('guildResults');
    if(box && box.style.display !== 'none' && !box.contains(e.target) && e.target !== guildSearchEl){
      box.style.display = 'none';
    }
  });
}

const addLegendBtn = document.getElementById('addLegendBtn');
if(addLegendBtn) addLegendBtn.onclick = addLegendEntry;

// ---- export / import (backup + share data between devices/guilds) ----
function normalizeImportedState(incoming){
  if(!Array.isArray(incoming.legend)) incoming.legend = [];
  if(!incoming.customPoints || typeof incoming.customPoints !== 'object') incoming.customPoints = {};
  Object.keys(incoming.customPoints).forEach(id=>{
    const p = incoming.customPoints[id];
    if(!p || typeof p !== 'object' || typeof p.wx !== 'number' || typeof p.wy !== 'number'){ delete incoming.customPoints[id]; return; }
    if(!Array.isArray(p.hideouts)) p.hideouts = [];
    if(p.legendId === undefined) p.legendId = null;
    if(!p.name) p.name = 'Unnamed ROA HO';
  });
  const seedIds = new Set(SEED.map(z=>z.id));
  Object.keys(incoming.zones).forEach(id=>{
    const z = incoming.zones[id];
    if(!z || typeof z !== 'object'){ delete incoming.zones[id]; return; }
    if(!z.territory || typeof z.territory !== 'object'){ z.territory = {owner:"", status:"empty", lastUpdated:null}; }
    if(!Array.isArray(z.hideouts)) z.hideouts = [];
    if(!Array.isArray(z.connections)) z.connections = [];
    if(z.legendId === undefined) z.legendId = null;
  });
  SEED.forEach(z=>{ if(!incoming.zones[z.id]) incoming.zones[z.id] = freshZone(z); });
  Object.keys(incoming.zones).forEach(id=>{ if(!seedIds.has(id)) delete incoming.zones[id]; });
  Object.values(incoming.zones).forEach(z=>{
    z.connections = z.connections.filter(c=> c && (
      c.type==='roadlink' ||
      seedIds.has(c.targetZoneId) ||
      (typeof c.targetZoneId==='string' && c.targetZoneId.startsWith('custom_') && incoming.customPoints[c.targetZoneId.slice(7)])
    ));
  });
  return incoming;
}

function exportData(){
  const payload = { app:'portal-watch', version:1, exportedAt:Date.now(), state };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `portalwatch-backup-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function importDataFromFile(file){
  let parsed;
  try{
    parsed = JSON.parse(await file.text());
  }catch(e){
    alert("Could not read that file — make sure it's a valid PORTAL GANK export (.json).");
    return;
  }
  const incoming = parsed && parsed.state ? parsed.state : parsed; // accept a raw state export too
  if(!incoming || typeof incoming !== 'object' || !incoming.zones || typeof incoming.zones !== 'object'){
    alert("That file doesn't look like a PORTAL GANK export.");
    return;
  }
  const ok = confirm('Importing will REPLACE all current data on this device with the contents of this file. This cannot be undone. Continue?');
  if(!ok) return;
  state = normalizeImportedState(incoming);
  selectedId = null;
  await saveData();
  renderAll();
  alert('Import complete.');
}

const navMenuBtn = document.getElementById('navMenuBtn');
const navMenuDropdown = document.getElementById('navMenuDropdown');
if(navMenuBtn && navMenuDropdown){
  navMenuBtn.onclick = (e)=>{
    e.stopPropagation();
    navMenuDropdown.classList.toggle('open');
  };
  navMenuDropdown.querySelectorAll('.nav-menu-item').forEach(item=>{
    item.addEventListener('click', ()=> navMenuDropdown.classList.remove('open'));
  });
  document.addEventListener('click', (e)=>{
    if(navMenuDropdown.classList.contains('open') && !navMenuDropdown.contains(e.target) && e.target !== navMenuBtn){
      navMenuDropdown.classList.remove('open');
    }
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') navMenuDropdown.classList.remove('open');
  });
}

document.getElementById('guildSummaryBtn').onclick = showGuildSummary;
document.getElementById('roaHoSummaryBtn').onclick = showRoaHoSummary;
document.getElementById('exportBtn').onclick = exportData;
const importBtn = document.getElementById('importBtn');
const importFileInput = document.getElementById('importFileInput');
importBtn.onclick = ()=> importFileInput.click();
importFileInput.onchange = (e)=>{
  const file = e.target.files[0];
  if(file) importDataFromFile(file);
  importFileInput.value = ''; // allow re-selecting the same file again later
};

document.getElementById('seasonResetBtn').onclick = async ()=>{
  const ok = confirm("Season reset: flags every claimed territory as needing review. Hideouts are untouched — those only change when destroyed. Continue?");
  if(!ok) return;
  zonesArr().forEach(z=>{
    if(z.type==='blackzone' && z.territory.owner){
      z.territory.status = 'needsReview';
    }
  });
  await saveData();
  renderAll();
};

(async ()=>{
  await loadData();
  setupMapInteraction();
  renderAll();
})();
