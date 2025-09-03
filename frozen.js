// Sample product data for Frozen section
const products = [
    { id: 1, name: "O' TASTY BBQ PORK BAO (24 OZ)", category: 'bao', price: 9.99, image: 'frozenimages/O\' TASTY BBQ PORK BAO (24 OZ).jpg', description: '24 OZ pack' },
    { id: 2, name: 'KIMBO BABY SPRING SHRIMP ROLL (3.58OZ)', category: 'roll', price: 5.99, image: 'frozenimages/KIMBO BABY SPRING SHRIMP ROLL(3.58OZ).jpg', description: '3.58 OZ pack' },
    { id: 3, name: 'KIMBO FZ VEGETABLE SPRING ROLL (500 GM)', category: 'roll', price: 6.99, image: 'frozenimages/KIMBO FZ VEGETABLE SPRING ROLL (500 GM).jpg', description: '500 GM pack' },
    { id: 4, name: 'KIMBO SHRIMP DUMPLING (500 GM)', category: 'dumpling', price: 8.99, image: 'frozenimages/KIMBO SHRIMP DUMPLING (500 GM).jpg', description: '500 GM pack' },
    { id: 5, name: 'CHUON VIETNAM CRISPY SHRIMP PANCAKES (15.9 0Z)', category: 'pancake', price: 11.99, image: 'frozenimages/CHUON CHUON VIETNAM CRISPY SHRIMP PANCAKES (15.9 0Z).jpg', description: '15.9 OZ pack' },
    { id: 6, name: 'KIMBO MIX DIMSUM CHIEN FRY (18.35 OZ)', category: 'dumpling', price: 7.99, image: 'frozenimages/KIMBO MIX DIMSUM CHIEN FRY (18.35 OZ).jpg', description: '18.35 OZ pack' },
    { id: 7, name: 'WEI-CHUAN RADISH CAKE (35.27 OZ)', category: 'cake', price: 8.99, image: 'frozenimages/WEI-CHUAN RADISH CAKE (35.27 OZ).jpg', description: '35.27 OZ pack' },
    { id: 8, name: 'WEI-CHUAN TARO CAKE(34.92OZ)', category: 'cake', price: 9.99, image: 'frozenimages/WEI-CHUAN  TARO CAKE(34.92OZ).jpg', description: '34.92 OZ pack' },
    { id: 9, name: 'MARTIN CHICKEN LUMPIA SHANGHAI EGG RC(320Z)', category: 'roll', price: 17.99, image: 'frozenimages/MARTIN CHICKEN LUMPIA SHANGHAI EGG RC(320Z).jpg', description: '32 OZ pack' },
    { id: 10, name: 'CHIMEI GWA PAO (300 GM)', category: 'bao', price: 4.99, image: 'frozenimages/CHIMEI GWA PAO (300 GM).jpg', description: '300 GM pack' },
    { id: 11, name: 'LSK RABBIT-SHAPED BUN(360 GM)', category: 'bun', price: 3.99, image: 'frozenimages/LSK RABBIT-SHAPED BUN(360 GM).jpg', description: '360 GM pack' },
    { id: 12, name: 'CHIMEI CHOCALATE 2 COLOR BUN(16.94 OZ)', category: 'bun', price: 5.99, image: 'frozenimages/CHIMEI CHOCALATE 2 COLOR BUN(16.94 OZ).jpg', description: '16.94 OZ pack' },
    { id: 13, name: 'CHIMEI TARO 2 COLOR BUN(16.94OZ)', category: 'bun', price: 5.99, image: 'frozenimages/CHIMEI TARO 2 COLOR BUN(16.94OZ).jpg', description: '16.94 OZ pack' },
    { id: 14, name: "GODO'S PORK FILLING BOLA SIOPAO(1.3 LB)", category: 'siopao', price: 11.99, image: 'frozenimages/GODO\'S PORK FILLING BOLA SIOPAO(1.3 LB).jpg', description: '1.3 LB pack' },
    { id: 15, name: 'GODOS PORK FILLING SIOPAO(1.3LB)', category: 'siopao', price: 10.99, image: 'frozenimages/GODOS PORK FILLING SIOPAO(1.3LB).jpg', description: '1.3 LB pack' },
    { id: 16, name: 'WEI-CHUANPORK & GREEN ONION STEAMED BUN(24 OZ)', category: 'bun', price: 8.99, image: 'frozenimages/WEI-CHUANPORK & GREEN ONION STEAMED BUN(24 OZ).jpg', description: '24 OZ pack' },
    { id: 17, name: 'GOLDEN SABA TURONITOS UBE ROLL/PURPLE(1LB)', category: 'roll', price: 5.99, image: 'frozenimages/GOLDEN SABA TURONITOS UBE ROLL(1LB).jpg', description: '1 LB pack' },
    { id: 18, name: 'GOLDEN SABA TURONITOS JACKFRUIT ROLL(454 GM)', category: 'roll', price: 5.99, image: 'frozenimages/GOLDEN SABA TURONITOS JACKFRUIT ROLL(454 GM).jpg', description: '454 GM pack' },
    { id: 19, name: 'WEI-CHUAN BROWN SUGAR BUN(18.4OZ)', category: 'bun', price: 7.99, image: 'frozenimages/WEI-CHUAN BROWN SUGAR BUN(18.4OZ).jpg', description: '18.4 OZ pack' },
    { id: 20, name: 'TARO CAKE(30 OZ)', category: 'cake', price: 3.99, image: 'frozenimages/TARO CAKE(30 OZ).jpg', description: '30 OZ pack' },
    { id: 21, name: 'LSK FRZ RADISH CAKE(35.27)', category: 'cake', price: 4.99, image: 'frozenimages/LSK FRZ RADISH CAKE(35.27).jpg', description: '35.27 pack' },
{ id: 22, name: 'SURASANG SWEET RED BEAN BUN/BUCK WHEAT(27OZ)', category: 'bun', price: 11.99, image: 'frozenimages/SURASANG SWEET RED BEAN BUN Or BUCK WHEAT(27OZ).jpg', description: '27 OZ pack' },
{ id: 23, name: 'SURASANG SWEET RED BEAN BUN/ ASSORTED(24.7OZ)', category: 'bun', price: 11.99, image: 'frozenimages/SURASANG SWEET RED BEAN BUN Or ASSORTED(24.7OZ).jpg', description: '24.7 OZ pack' },
{ id: 24, name: 'LSK GLUTINOUS RICE DUMPLING(16.9OZ)', category: 'dumpling', price: 5.99, image: 'frozenimages/LSK GLUTINOUS RICE DUMPLING(16.9OZ).jpg', description: '16.9 OZ pack' },
{ id: 25, name: 'SYNEAR PIGGY CUSTARD BUN(300GM)', category: 'bun', price: 5.99, image: 'frozenimages/SYNEAR PIGGY CUSTARD BUN(300GM).jpg', description: '300 GM pack' },
{ id: 26, name: 'SYNEAR PIGGY REDBEANBUN (300GM)', category: 'bun', price: 5.99, image: 'frozenimages/SYNEAR PIGGY REDBEANBUN(300GM).jpg', description: '300GM pack' },
{ id: 27, name: 'WEI-CHUAN MIXED VEG SPRING ROLL (35OZ)', category: 'roll', price: 7.99, image: 'frozenimages/WEI-CHUAN MIXED VEG SPRING ROLL(35OZ).jpg', description: '35OZ pack' },
{ id: 28, name: 'GODOS CHICKEN SIOPAO (28.8OZ)', category: 'bun', price: 10.99, image: 'frozenimages/GODOS CHICKEN SIOPAO(28.8OZ).jpg', description: '28.8OZ pack' },
{ id: 29, name: 'WEI-CHUAN BBQ CHICKEN BUN (23OZ)', category: 'bun', price: 8.99, image: 'frozenimages/WEI-CHUAN BBQ CHICKEN BUN(23OZ).jpg', description: '23OZ pack' },
{ id: 30, name: 'MANILA STEAMED CHICKEN SIOBAO (28.5OZ)', category: 'bun', price: 8.99, image: 'frozenimages/MANILA\'S STEAMED  CHICKEN SIOBAO(28.5 OZ).jpg', description: '28.5OZ pack' },
{ id: 31, name: 'MANILA ROAST PORK SIOBAO (28.05OZ)', category: 'bun', price: 8.99, image: 'frozenimages/MANILA\'S ROAST PORK STEAMED SIOBAO(28.05 OZ).jpg', description: '28.05OZ pack' },
{ id: 32, name: 'WANG VEG SPRING ROLL (24OZ)', category: 'roll', price: 7.99, image: 'frozenimages/WANG COOKED VEG SPRING ROLL (24OZ).jpg', description: '24OZ pack' },
{ id: 33, name: 'WANG SHRIMP SPRING ROLL (1.5LB)', category: 'roll', price: 11.99, image: 'frozenimages/WANG  SHRIMP SPRING ROLL(1.5LB).jpg', description: '1.5LB pack' },
{ id: 34, name: 'MASAGANA CHICKEN SHRIMP UMPIA (1.75LB)', category: 'roll', price: 17.99, image: 'frozenimages/MASAGANA CHICKEN with SHRIMP UMPIA SHANGU(1.75LB).jpg', description: '1.75LB pack' },
{ id: 35, name: 'TROPICA SEAFOOD LUMPIA SHANGHAI (2.5LB)', category: 'roll', price: 19.99, image: 'frozenimages/TROPICA SEAFOOD LUMPIA SHANGHAI(2.5 LB).jpg', description: '2.5LB pack' },
{ id: 36, name: 'TASTY FACTORY CHICKEN PAWS (12OZ)', category: 'frozen-foods', price: 8.99, image: 'frozenimages/TASTY FACTORY SEASONED CHICKEN PAWS(12 OZ).jpg', description: '12OZ pack' },
{ id: 37, name: 'WANG SQUID SPRING ROLL (24OZ)', category: 'roll', price: 11.99, image: 'frozenimages/WANG SQUID SPRING ROLL(24 OZ).jpg', description: '24OZ pack' },
{ id: 38, name: 'WU FANG ZAI RED GLUTENS RICE PUDDING (7.05OZ)', category: 'cake', price: 2.49, image: 'frozenimages/WU FANG ZAI 8FLAV.RED GLUTENS RICE PUDDING(7.05 OZ).jpg', description: '7.05OZ pack' },
{ id: 39, name: 'TASTY FACTORY BROWN SUGAR BUN (16OZ)', category: 'bun', price: 9.99, image: 'frozenimages/TASTY FACTORY BROWN SUGAR CREAMY BUN(16OZ).jpg', description: '16OZ pack' },
{ id: 40, name: 'GOLDILOCKS CHICKEN SIOPAO (20OZ)', category: 'bun', price: 11.99, image: 'frozenimages/GOLDILOCKS CHICKEN SIOPAO Or STEAMED CHICKEN(20 OZ).png', description: '20OZ pack' },
{ id: 41, name: 'TASTY FACTORY CHICKEN BUN CURRY (16OZ)', category: 'bun', price: 10.99, image: 'frozenimages/TASTY FACTORY CHICKEN BUN or CURRY SAUCE(16 OZ).png', description: '16OZ pack' },
{ id: 42, name: 'SPRING ROLL SOYBEAN SKIN (17.6OZ)', category: 'roll', price: 11.99, image: 'frozenimages/SPRING ROLL SOYBEAN SKIN(17.6OZ).jpg', description: '17.6OZ pack' },
{ id: 43, name: 'LSK BEAN CURD SHEET (16OZ)', category: 'frozen-foods', price: 11.99, image: 'frozenimages/LSK BEAN CURD SHEET(16 OZ).jpg', description: '16OZ pack' },
{ id: 44, name: 'SHANGHAI CHICKEN LUMPIA (28OZ)', category: 'roll', price: 17.99, image: 'frozenimages/SHANGHAI CHICKEN LUMPIA(28OZ).jpg', description: '28OZ pack' },
{ id: 45, name: 'MASAGANA PORK LUMPIA SHANGHAI (1.75OZ)', category: 'roll', price: 17.99, image: 'frozenimages/MASAGANA PORK WITH SHRIMP LUMPIA SHANGHAI(1.75LB).jpg', description: '1.75OZ pack' },
{ id: 46, name: 'GOLDILOCKS PORK SHU-MAI DUMPLING (16OZ)', category: 'dumpling', price: 9.99, image: 'frozenimages/GOLDILOCKS SHU-MAI STEAMED PORK DUMPLING(16 0Z).jpg', description: '16OZ pack' },
{ id: 47, name: 'KIMBO LEEK SEAFOOD DUMPLING (500GM)', category: 'dumpling', price: 7.99, image: 'frozenimages/KIMBO LEEK & SEAFOOD DUMPLING(500GM).jpg', description: '500GM pack' },
{ id: 48, name: 'WEI-CHUAN VEG SPRING ROLL (2.2LB)', category: 'roll', price: 7.99, image: 'frozenimages/WEI-CHUAN VEG SPRING ROLL(2.2LB).jpg', description: '2.2LB pack' },
{ id: 49, name: 'MASAGANA PORK SHRIMP LUMPIA (1.75LB)', category: 'roll', price: 17.99, image: 'frozenimages/MASAGANA PORK WITH SHRIMP LUMPIA SHANGHAI(1.75LB).jpg', description: '1.75LB pack' },
    { id: 50, name: 'PEKING BUNS CHICKEN TERYAKI (682GM)', category: 'bun', price: 7.99, image: 'frozenimages/PEKING BUNS WITH CHICKEN & TERYAKI SAUCE(682GM).jpg', description: '682GM pack' },
    { id: 51, name: 'SAIGON BANANA SAMOSA (17.63OZ)', category: 'roll', price: 5.99, image: 'frozenimages/SAIGON CHUOI SAMOSA BANANA DELIGHT SAMOSA(17.63 OZ).jpg', description: '17.63OZ pack' },
    { id: 52, name: 'KIMBO SHRIMP ROLL CAKE (15.87OZ)', category: 'cake', price: 7.99, image: 'frozenimages/KIMBO FZ SHRIMP ROLL CAKE(15 .87OZ).jpg', description: '15.87OZ pack' },
    { id: 53, name: 'KIMBO LEEK DUMPLINGS (17.62OZ)', category: 'dumpling', price: 7.99, image: 'frozenimages/KIMBO LEEK DUMPLINGS (17.62OZ).jpg', description: '17.62OZ pack' },
    { id: 54, name: 'LIKOFU VEG GLUTINOUS DUMPI (270GM)', category: 'dumpling', price: 3.99, image: 'frozenimages/LIKOFU VEGETAVIAN GLUTNOUS RICE DUMPI (270 GM).jpg', description: '270GM pack' },
    { id: 55, name: 'OTASTY BBQ PORK SIOPAO (852GM)', category: 'bun', price: 9.99, image: 'frozenimages/OTASTY ASADO SIOPAO BBQ PORK BUN(852 GM).jpg', description: '852GM pack' },
    { id: 56, name: 'GOLDEN SABA TURON BANANA ROLL (1LB)', category: 'roll', price: 5.99, image: 'frozenimages/GOLDEN SABA TURON BANANA ROLL WITH JECKFRUIT(1 LB).jpg', description: '1LB pack' },
    { id: 57, name: 'KIMBO SHRIMP SHAO MAI (17.62OZ)', category: 'dumpling', price: 7.99, image: 'frozenimages/KIMBO SHRIMP SHAO MAI (17.62 OZ).jpg', description: '17.62OZ pack' },
    { id: 58, name: 'GARLIC CRAWFISH RICE NOODLE (6.52OZ)', category: 'noodles', price: 7.99, image: 'frozenimages/GARLIC CRAWFISH RICE NOODLE (6.52 OZ).jpg', description: '6.52OZ pack' },
    { id: 59, name: 'KIMBO SPRING ROLL CRAB SHRIMP (500GM)', category: 'roll', price: 8.99, image: 'frozenimages/KIMBO FZ SPRING ROLL WITH CRAB & SHRIMP(500 GM).jpg', description: '500GM pack' },
    { id: 60, name: 'LEE\'S PORK SHRIMP EGG ROLL (30OZ)', category: 'roll', price: 24.99, image: 'frozenimages/LEE\'S PORK & SHRIMP EGG ROLL(30 OZ).jpg', description: '30OZ pack' },
    { id: 61, name: 'LSK BANH CUON TOM SHRIMP ROLL (21.16OZ)', category: 'roll', price: 7.99, image: 'frozenimages/BANH CUON TOM RICE ROLL WITH SHRIMP(21.16 OZ).jpg', description: '21.16OZ pack' },
    { id: 62, name: 'TASTY FACTORY SHRIMP DUMPLING (9.6OZ)', category: 'dumpling', price: 10.99, image: 'frozenimages/TASTY FACTORY SHRIMP DUMPLING (9.6 OZ).png', description: '9.6OZ pack' },
    { id: 63, name: 'WEI-CHUAN GLUTINOUS DUMPLING (16.9OZ)', category: 'dumpling', price: 7.99, image: 'frozenimages/WEI-CHUAN GLUTINOUS RICE DUMPLING(16.9 OZ).jpg', description: '16.9OZ pack' },
    { id: 64, name: 'VISSAN SHRIMP NET SPRING ROLL (300GM)', category: 'roll', price: 8.99, image: 'frozenimages/VISSAN SHIRMP ROLL.jpg', description: '300GM pack' },
    { id: 65, name: 'VISSAN CHA GIO HAI SAN (500GM)', category: 'roll', price: 8.99, image: 'frozenimages/VISSAN CHA GIO HAI SAN(500 GM).jpg', description: '500GM pack' },
    { id: 66, name: 'FZ MUNG BEAN BANH BAO MINI (10.05OZ)', category: 'bun', price: 5.99, image: 'frozenimages/FZ MUNG BEAN BUN COCONUT TREE BANH BAO MINI(10.05 OZ).jpg', description: '10.05OZ pack' },
    { id: 67, name: '13 SPICES CRAWFISH RICE NOODLE (6.52OZ)', category: 'noodles', price: 7.99, image: 'frozenimages/13 SPICES CRAWFISH RICE NOODLE(6.52OZ).jpg', description: '6.52OZ pack' },
    { id: 68, name: 'SK SWEET BEANS PASTE BUNS (13.5OZ)', category: 'bun', price: 6.99, image: 'frozenimages/SK SWEET BEANS PASTE BUNS(13.5OZ).jpg', description: '13.5OZ pack' },
    { id: 69, name: 'BIBIGO BUNGO SWEET CUSTARD WAFFLE (300GM)', category: 'cake', price: 6.99, image: 'frozenimages/BIBIGO BUNGO PANG SWEET CUSTARD CREAM EAFFLE(300GM).jpg', description: '300GM pack' },
    { id: 70, name: 'SURASANG JUMBO LEEK DUMPLING (28.02OZ)', category: 'dumpling', price: 12.99, image: 'frozenimages/SURASANG JUMBO LEEK VEGETABLE DUMPLING(28.02 OZ).jpg', description: '28.02OZ pack' },
    { id: 71, name: 'LSK SWEET STEAMED BREAD (15.51OZ)', category: 'bread', price: 3.99, image: 'frozenimages/LSK SWEET STEAMED BREAD(15.51 OZ).jpg', description: '15.51OZ pack' },
    { id: 72, name: 'LAM SHENG KEE VEG RICE MUSHROOM BUN (14.8OZ)', category: 'bun', price: 5.99, image: 'frozenimages/LAM SHENG KEE VEGETARIAN RICE MUSHROOM BUN(14.8 OZ).jpg', description: '14.8OZ pack' },
    { id: 73, name: 'RABBIT CUSTARD BUN (10.58OZ)', category: 'bun', price: 5.99, image: 'frozenimages/RABBIT CUSTARD BUN(10.58 OZ).jpg', description: '10.58OZ pack' },
    { id: 74, name: 'LKK PICKLED BAMBOO WONTON (15OZ)', category: 'dumpling', price: 5.99, image: 'frozenimages/LKK PICKLED BAMBOO WONTON(15 OZ).jpg', description: '15OZ pack' },
    { id: 75, name: 'CHIMEI SESAME PASTE BUN (650GM)', category: 'bun', price: 4.99, image: 'frozenimages/CHIMEI SESAME PASTE BUN(650 GM).jpg', description: '650GM pack' },
    { id: 76, name: 'KIMBO SWEET OAT BUN (300GM)', category: 'bun', price: 4.99, image: 'frozenimages/KIMBO LAVA SWEET OAT BUN(300 GM).jpg', description: '300GM pack' },
    { id: 77, name: 'YUAN MILK STEAMED BUN (24.34OZ)', category: 'bun', price: 5.99, image: 'frozenimages/YUAN XIANG REN MILK STEAMED BUN(24.34OZ).jpg', description: '24.34OZ pack' },
    { id: 78, name: 'BAO BUN SHEPHERD BAMBOO (480GM)', category: 'bun', price: 4.99, image: 'frozenimages/BAO BUN SHEPHERD’S PURSE& BAMBOO SHOO(480 GM).jpg', description: '480GM pack' },
    { id: 79, name: 'LSK STEAMED BREAD (15.51OZ)', category: 'bread', price: 3.99, image: 'frozenimages/LSK STEAMED BREAD(15.51 OZ).jpg', description: '15.51OZ pack' },
        { id: 80, name: 'HOMEI SWEET CAKE BUN (480GM)', category: 'cake', price: 5.99, image: 'frozenimages/HOMEI MALAY SWEET CAKE BUN(480 GM).jpg', description: '480 GM pack' },
        { id: 81, name: 'WEI-CHUAN TARO BUN (13.7OZ)', category: 'bun', price: 4.99, image: 'frozenimages/WEI-CHUAN TARO BUN(13.7 OZ).jpg', description: '13.7 OZ pack' },
        { id: 82, name: 'WEI-CHUAN TURNIP BUN (10.05OZ)', category: 'bun', price: 3.99, image: 'frozenimages/WEI-CHUAN TURNIP STRIP BUN(10.05OZ).jpg', description: '10.05 OZ pack' },
        { id: 83, name: 'WEI-CHUAN MUSHROOM BUN (10.5OZ)', category: 'bun', price: 3.99, image: 'frozenimages/WEI-CHUAN MUSHROOM BAMBOO SHOOT BUN(10.5 OZ).jpg', description: '10.5 OZ pack' },
        { id: 84, name: 'WANG CHEESE PANCAKE (180GM)', category: 'pancake', price: 4.99, image: 'frozenimages/WANG MOZZARELLA CHEESE PANCAKE(180 GM).jpg', description: '180 GM pack' },
        { id: 85, name: 'ASSI SWEET RICE PANCAKE (10.5OZ)', category: 'pancake', price: 4.99, image: 'frozenimages/ASSI SWEETRICEPANCAKE(10.5OZ).jpg', description: '10.5 OZ pack' },
        { id: 86, name: 'WEI-CHUAN SPINACH BUN (24OZ)', category: 'bun', price: 8.99, image: 'frozenimages/WEI-CHUAN PORK&CHINESESPINACHSTEAMED(24 OZ).jpg', description: '24 OZ pack' },
        { id: 87, name: 'HK STYLE CHASHU (23OZ)', category: 'bun', price: 8.99, image: 'frozenimages/HONGKONGSTYLECHASHU(23OZ).jpg', description: '23 OZ pack' },
        { id: 88, name: 'WANG CHEESE BREAD (11.64OZ)', category: 'bread', price: 8.99, image: 'frozenimages/WANGJALAPENOFLAV.BRAZILIANCHEESEBREAD(11.64OZ).jpg', description: '11.64 OZ pack' },
        { id: 89, name: 'SK REDBEAN WAFFLE CAKE (15.8OZ)', category: 'cake', price: 4.99, image: 'frozenimages/SK WITH REDBEANPASTETAIYAKIJAPANWAFFLECAKE(15.8OZ).jpg', description: '15.8 OZ pack' },
        { id: 90, name: 'WEI-CHUAN CURD BUN (10.5OZ)', category: 'bun', price: 3.99, image: 'frozenimages/WEI-CHUANBEANCURDBUN(10.5OZ).jpg', description: '10.5 OZ pack' },
        { id: 91, name: 'WANZAI OATMEAL HONEY BUN (300GM)', category: 'bun', price: 2.99, image: 'frozenimages/WANZAIMATOUOATMEALHONEYBUN(300GM).jpg', description: '300 GM pack' },
        { id: 92, name: 'SYNEAR VEG BUN (9.52OZ)', category: 'bun', price: 3.99, image: 'frozenimages/SYNEARMEIGANCAIPRESERVEDVEGBUN(9.52OZ).jpg', description: '9.52 OZ pack' },
        { id: 93, name: 'HOMEI PLAIN BUN (480GM)', category: 'bun', price: 2.99, image: 'frozenimages/HOMEIPLAINBUN(480GM).jpg', description: '480 GM pack' },
        { id: 94, name: 'YUANXIANG STEAMED BUN (29.63OZ)', category: 'bun', price: 5.99, image: 'frozenimages/YUANXIANGRENSHANDONGSTEAMEDBUN(29.63OZ).jpg', description: '29.63 OZ pack' },
        { id: 95, name: 'PEKING SCALLION ROLLS (12PC)', category: 'roll', price: 7.99, image: 'frozenimages/PEKINGMANDARINROLLSWITHSCALLION(12PC).jpg', description: '12 PC pack' },
        { id: 96, name: 'CHAN STEAMED BUN (20OZ)', category: 'bun', price: 9.99, image: 'frozenimages/CHAN&CHANSTEAMBUN(20OZ).jpg', description: '20 OZ pack' },
        { id: 97, name: 'CHAN PORK BUN W/ PURSE (26OZ)', category: 'bun', price: 9.99, image: 'frozenimages/CHAN&CHANPORKBUNWITHSHEPHERD’SPURSE(26OZ).jpg', description: '26 OZ pack' },
        { id: 98, name: 'CHAN HANGZHOU PORK (26OZ)', category: 'bun', price: 9.99, image: 'frozenimages/CHAN&CHANHANGZHOUSTYLESSTEAMEDPORK(26OZ).jpg', description: '26 OZ pack' },
        { id: 99, name: 'CHAN FUZHOU PORK BUN (26OZ)', category: 'bun', price: 9.99, image: 'frozenimages/CHAN&CHANFUZHOUPORKBUN(26OZ).jpg', description: '26 OZ pack' },
            { id: 100, name: 'SAMLIP Honey Pancake', category: 'pancake', price: 4.99, image: 'frozenimages/SAMLIPHONEYSTUFFEDPANCAKE (18OZ).jpg', description: '18OZ pack' },
            { id: 101, name: 'SAMLIP Veg Buns', category: 'bun', price: 3.49, image: 'frozenimages/SAMLIPVEGSTEAMEDBUNS(9OZ).jpg', description: '9OZ pack' },
            { id: 102, name: 'WEI-CHUAN Veg Buns', category: 'bun', price: 3.99, image: 'frozenimages/WEI-CHUANVEGMUSHROOMBUN(10.5OZ).jpg', description: '10.5OZ pack' },
            { id: 103, name: 'LIDING Red Bean Cake', category: 'pancake', price: 5.99, image: 'frozenimages/LIDINGHONGDOUBING(480GM).jpg', description: '480GM pack' },
            { id: 104, name: 'WEI-CHUAN Sesame Buns', category: 'bun', price: 3.99, image: 'frozenimages/WEI-CHUANSESAMEPASTEBUN(360GM).jpg', description: '360GM pack' },
            { id: 105, name: 'SYNEAR Red Bean Buns', category: 'bun', price: 3.99, image: 'frozenimages/SYNEARREDBEANBUNPEACHSHAPE (360GM).jpg', description: '360GM pack' },
            { id: 106, name: 'LAOLAO Shandong Buns', category: 'bun', price: 5.99, image: 'frozenimages/LAOLAOSHANDONGBUNTAIIWAN(14.81OZ).jpg', description: '14.81OZ pack' },
            { id: 107, name: 'Egg Custard Buns', category: 'bun', price: 6.99, image: 'frozenimages/EGGCUSTARDSTEAMBUN(33.86OZ).jpg', description: '33.86OZ pack' },
            { id: 108, name: 'Cornflav Rice Cake', category: 'cake', price: 4.99, image: 'frozenimages/CORNFLAV.CAT-PAWSHAPERICECAKE(10.58GM).jpg', description: '10.58GM pack' },
            { id: 109, name: 'Peking Steamed Cake', category: 'cake', price: 7.99, image: 'frozenimages/PEKING CHEFHONSTEAMEDCAKEFORDUCK(15OZ).jpg', description: '15OZ pack' },
            { id: 110, name: 'SYNEAR Egg Buns', category: 'bun', price: 3.99, image: 'frozenimages/SYNEARSHEPHERD’SPORSEEGGBUN(9.52OZ).jpg', description: '9.52OZ pack' },
            { id: 111, name: 'SAIGON Steamed Buns', category: 'bun', price: 4.99, image: 'frozenimages/SAIGONSHAPEDSTEAMED BUNS(7.05OZ).jpg', description: '7.05OZ pack' },
            { id: 112, name: 'SAIGON Steamed Bun', category: 'bun', price: 4.99, image: 'frozenimages/SAIGONSHAPEDSTEAMEDBUN(7.05OZ).jpg', description: '7.05OZ pack' },
            { id: 113, name: 'WEI-CHUAN Corn Bun', category: 'bun', price: 2.99, image: 'frozenimages/WEI-CHUANSTEAMBUNW.CORNFLOUR(12.7OZ).jpg', description: '12.7OZ pack' },
            { id: 114, name: 'WEI-CHUAN Mini Buns', category: 'bun', price: 2.99, image: 'frozenimages/WEI-CHUANSTEAMEDMINIBUN(12.7OZ).jpg', description: '12.7OZ pack' },
            { id: 115, name: 'KSF Cabbage Pork Bun', category: 'bun', price: 3.99, image: 'frozenimages/KSFCABBAGE&PORKSTEAMEDBUN(10OZ).jpg', description: '10OZ pack' },
            { id: 116, name: 'KSF Cha Shu Bow', category: 'bun', price: 3.99, image: 'frozenimages/KSF CHA SHU BOW BAKE.jpg', description: 'Pack' },
            { id: 117, name: 'WEI-CHUAN Steam Roll', category: 'roll', price: 2.99, image: 'frozenimages/WEI-CHUANSTEAMEDROLL(11.3OZ).jpg', description: '11.3OZ pack' },
            { id: 118, name: 'CHIMEI Mustard Buns', category: 'bun', price: 5.99, image: 'frozenimages/CHIMEIPRE-MUSTARDBUN (390GM).jpg', description: '390GM pack' },
            { id: 119, name: 'WEI-CHUAN Lotus Leaf Bun', category: 'bun', price: 6.99, image: 'frozenimages/WEI -CHUAN LOTUSLEAFBUN(23OZ).jpg', description: '23OZ pack' },
            { id: 120, name: 'HAETAE Mozzarella Corndog', category: 'bun', price: 9.99, image: 'frozenimages/HAETAEMOZZARELLACORNDOGS(14.01OZ).jpg', description: '14.01OZ pack' },
            { id: 121, name: 'KIMBO Custard Buns', category: 'bun', price: 4.99, image: 'frozenimages/KIMBOTAIWANCUSTARDBUN (650GM).jpg', description: '650GM pack' },
            { id: 122, name: 'KIMBO Sesame Buns', category: 'bun', price: 4.99, image: 'frozenimages/KIMBOTAIWANSESAMEBUN(650GM).jpg', description: '650GM pack' },
            { id: 123, name: 'WANG Rice Cake Green Tea', category: 'cake', price: 9.99, image: 'frozenimages/WANGSWEETRICECAKEGREENTEA(16.93OZ).jpg', description: '16.93OZ pack' },
            { id: 124, name: 'SAONGWON Sweet Pancake', category: 'pancake', price: 5.99, image: 'frozenimages/SAONGWONORIGINALSEEDHOTTEOKSWEETPANCAKE(14.01OZ).jpg', description: '14.01OZ pack' },
            { id: 125, name: 'HONGKONG Bun', category: 'bun', price: 5.99, image: 'frozenimages/HONGKONGWANCHAILOTUSLEAFBUN(660GM).jpg', description: '660GM pack' },
            { id: 126, name: 'CHIMEI Mantou', category: 'bun', price: 5.99, image: 'frozenimages/CHIMEIWHOLEWHEAT&WALNUTMANTOU(11.47OZ).jpg', description: '11.47OZ pack' },
                { id: 127, name: 'CHIMEI Bun', category: 'bun', price: 7.99, image: 'frozenimages/CHIMEIMALAISWEETBUN(480GM).jpg', description: '480GM pack' },
                { id: 128, name: 'KSF Pork Bun', category: 'bun', price: 3.99, image: 'frozenimages/KSFSTEAMEDPORKBUN(10OZ).jpg', description: '10OZ pack' },
                { id: 129, name: 'KANGSHIFU Bun', category: 'bun', price: 3.99, image: 'frozenimages/KANGSHIFUREDBEANPASTEBUN(9PC).jpg', description: '9PC pack' },
                { id: 130, name: 'KSF Egg CreamBun', category: 'bun', price: 3.99, image: 'frozenimages/KSFSTEAMEDBUNWITHEGGCREAMSAUCE(9PC).jpg', description: '9PC pack' },
                { id: 131, name: 'LONGAN Bun', category: 'bun', price: 5.99, image: 'frozenimages/LONGANBROWNSUGARBUN(600GM).jpg', description: '600GM pack' },
                { id: 132, name: 'WANG Corndog', category: 'corndog', price: 9.99, image: 'frozenimages/WANGCORNDOG.jpg', description: '12.7OZ pack' },
                { id: 133, name: 'KIMBO RedBean Bun', category: 'bun', price: 4.99, image: 'frozenimages/KIMBOREDBEANBUN(650GM).jpg', description: '650GM pack' },
                { id: 134, name: 'SK Pizza Bun', category: 'bun', price: 6.99, image: 'frozenimages/SKBUNSPIZZAWITHBACON.jpg', description: '13.5OZ pack' },
                { id: 135, name: 'SK Curry Bun', category: 'bun', price: 6.99, image: 'frozenimages/SKCURRYCHICKENBUN (13.5OZ).jpg', description: '13.5OZ pack' },
                { id: 136, name: 'KIMBO Custard Tart', category: 'tart', price: 2.99, image: 'frozenimages/KIMBOFZHKEGGCUSTARDTART(6.35OZ).jpg', description: '6.35OZ pack' },
                { id: 137, name: 'CHEFHON Veg Bun', category: 'bun', price: 3.99, image: 'frozenimages/CHEFHONSTEAMEDVEGBUNS(10OZ).jpg', description: '10OZ pack' },
                { id: 138, name: 'WEI-CHUAN SweetPotato Bun', category: 'bun', price: 3.99, image: 'frozenimages/WEI-CHUANSWEETPOTATOBUN(360GM).jpg', description: '360GM pack' },
                { id: 139, name: 'KSF Roast Pork Bun', category: 'bun', price: 3.99, image: 'frozenimages/KSF BUNS WITH ROAST PORK FILLING(10OZ).jpg', description: '10OZ pack' },
                { id: 140, name: 'GOJIBERRY Bun', category: 'bun', price: 5.99, image: 'frozenimages/GOJIBERRYLONGANBUN(600GM).jpg', description: '600GM pack' },
                { id: 141, name: 'SURASANG Squid Bun', category: 'bun', price: 5.99, image: 'frozenimages/SURASANGSPICYSQUIDBUN(13.95OZ).jpg', description: '13.95OZ pack' },
                { id: 142, name: 'ASSI RedBean Bun', category: 'bun', price: 4.99, image: 'frozenimages/ASSICOOKEDREDBEANBUN(12.69OZ).jpg', description: '12.69OZ pack' },
                { id: 143, name: 'WANG SweetRice Pancake', category: 'pancake', price: 10.99, image: 'frozenimages/WANGFRIEDSWEETRICEPANCAKE(16.93OZ).jpg', description: '16.93OZ pack' },
                { id: 144, name: 'WEI-CHUAN Mushroom Spinach Bun', category: 'bun', price: 3.99, image: 'frozenimages/WEI-CHUANMUSHROOM&SPINACHBUN(10.05GM).jpg', description: '10.05GM pack' },
                { id: 145, name: 'LIKOFU Stream Cake', category: 'cake', price: 4.99, image: 'frozenimages/LIKOFUFINESTREAMCAKE(360GM).jpg', description: '360GM pack' },
                { id: 146, name: 'LSK BeanPaste Bun', category: 'bun', price: 3.99, image: 'frozenimages/LSKFROZENBEANPASTEBUN(520GM).jpg', description: '520GM pack' },
                { id: 147, name: 'LIKOFU Phoenix Bun', category: 'bun', price: 5.99, image: 'frozenimages/LIKOFUPHOENIXBUN(360GM).jpg', description: '360GM pack' },
                { id: 148, name: 'LSK Creamy Bun', category: 'bun', price: 3.99, image: 'frozenimages/LSKCREAMYBUN(18.3OZ).jpg', description: '18.3OZ pack' },
                { id: 149, name: 'LSK Peach Bun', category: 'bun', price: 3.99, image: 'frozenimages/LSKPEACHSHAPEDBUN(14.82OZ).jpg', description: '14.82OZ pack' },
                { id: 150, name: 'PEKING Steamed Roll', category: 'roll', price: 7.99, image: 'frozenimages/PEKING STEAMEDROLLWITHSCALLION&ROAST(682GM).jpg', description: '682GM pack' }
              
        

      
      
  

];

// Function to display products with description and price
function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="description">${product.description}</p>
            
        `;
        productList.appendChild(productDiv);
    });
}

// Initial display of all products
displayProducts(products);

// Price Label Update
function updatePriceLabel(value) {
    document.getElementById('price-label').textContent = `$${value}`;
}

// Filter Functionality
document.getElementById('price-range').addEventListener('input', function() {
    filterProducts();
});

document.getElementById('category-filter').addEventListener('change', function() {
    filterProducts();
});

// Filtering products by price and category
function filterProducts() {
    const priceLimit = parseFloat(document.getElementById('price-range').value);
    const selectedCategory = document.getElementById('category-filter').value;

    const filteredProducts = products.filter(product => {
        const priceMatch = product.price <= priceLimit;
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        return priceMatch && categoryMatch;
    });

    displayProducts(filteredProducts); // Display filtered products
}
