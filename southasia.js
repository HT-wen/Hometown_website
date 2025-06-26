// Sample product data with images, prices, and descriptions
const products = [
    { id: 1, name: 'CENTURY MOMO MASALA (100GM )', category: 'masalas_spicemixes', price: 2.79, description: 'Per each', image: 'southasianimages/centurymomomasala.png' },
    { id: 2, name: 'CENTURY SEKUWA MASALA (50 GM)', category: 'masalas_spicemixes', price: 1.99, description: 'Per each', image: 'southasianimages/centurysekuwamasala.png' },
    { id: 3, name: 'CENTURY CHOWMEN MASALA (50 GM)', category: 'masalas_spicemixes', price: 1.79, description: 'Per each', image: 'southasianimages/centurychowmenmasala.png' },
    { id: 4, name: 'CENTURY CHICKEN MASALA (50 GM)', category: 'masalas_spicemixes', price: 1.99, description: 'Per each', image: 'southasianimages/centurychickenmasala.png' },
    { id: 5, name: 'CENTURY MEAT MASALA (50 GM)', category: 'masalas_spicemixes', price: 1.99, description: 'Per each', image: 'southasianimages/centurymeatmasala.png' },
    { id: 6, name: 'CENTURY SABJI MASALA (50GM)', category: 'masalas_spicemixes', price: 1.99, description: 'Per each', image: 'southasianimages/centurysabjimasala.png' },
    { id: 7, name: 'HIMALAYA DLIGHT THUKPA MASALA (50GM)', category: 'masalas_spicemixes', price: 1.89, description: 'Per each', image: 'southasianimages/himalayadlightthukpamasala.png' },
    { id: 8, name: 'NATIONAL CHAT MASALA (100GM)', category: 'masalas_spicemixes', price: 1.99, description: 'Per each', image: 'southasianimages/nationalchatmasala.png' },
    { id: 9, name: 'NATIONAL CHICKEN BIRIYANI MASALA (39 GM)', category: 'masalas_spicemixes', price: 1.79, description: 'Per each', image: 'southasianimages/nationalchickenbiriyanimasala.png' },
    { id: 10, name: 'NATIONAL CHICKEN TIKKA MASALA (44GM)', category: 'masalas_spicemixes', price: 1.79, description: 'Per each', image: 'southasianimages/nationalchickentikkamasala.png' },
    { id: 11, name: 'NATIONAL QUORMA (43GM)', category: 'masalas_spicemixes', price: 1.79, description: 'Per each', image: 'southasianimages/nationalquorma.png' },
    { id: 12, name: 'NATIONAL PUNJABI CHANA   (90GM)', category: 'masalas_spicemixes', price: 1.79, description: 'Per each', image: 'southasianimages/nationalpunjabichana.png' },
    { id: 13, name: 'NATIONAL FISH MASALA (40 GM)', category: 'masalas_spicemixes', price: 1.79, description: 'Per each', image: 'southasianimages/nationalfishmasala.png' },
    { id: 14, name: 'NATIONAL BUTTER CHICKEN (47 GM)', category: 'masalas_spicemixes', price: 1.79, description: 'Per each', image: 'southasianimages/nationalbutterchicken.png' },
    { id: 15, name: 'EASTERN EGG MASALA(165 GM)', category: 'masalas_spicemixes', price: 2.49, description: 'Per each', image: 'southasianimages/easterneggmasala.png' },
    { id: 16, name: 'EASTERN  KABAB MASALA (100 GM)', category: 'masalas_spicemixes', price: 1.99, description: 'Per each', image: 'southasianimages/easternkababmasala.png' },
    { id: 17, name: 'EASTERN  VEGETABLE  MASALA (100GM)', category: 'masalas_spicemixes', price: 1.99, description: 'Per each', image: 'southasianimages/easternvegetablemasala.png' },
    { id: 18, name: 'NATIONAL CHICKEN TANDOORI MIX (41 GM)', category: 'masalas_spicemixes', price: 1.79, description: 'Per each', image: 'southasianimages/nationalchickentandoorimix.png' },
    { id: 19, name: 'EASTERN SAMBAR POWDER (100 GM)', category: 'masalas_spicemixes', price: 1.99, description: 'Per each', image: 'southasianimages/easternsambarpowder.png' },
    { id: 20, name: 'NATIONAL KASTHURI METHI(50 GM)', category: 'masalas_spicemixes', price: 1.50, description: 'Per each', image: 'southasianimages/nationalkasthurimethi.png' },
    { id: 21, name: 'PRIYA FISH MASALA POWDER (100G)', category: 'masalas_spicemixes', price: 1.99, description: 'Per each', image: 'southasianimages/priyafishmasalapowder.png' },
    { id: 22, name: 'EASTERN CHICKEN MASALA (100 GM)', category: 'masalas_spicemixes', price: 2.50, description: 'Per each', image: 'southasianimages/easternchickenmasala.png' },
    { id: 23, name: 'EASTERN  MUTTON  MASALA (100GM)', category: 'masalas_spicemixes', price: 2.50, description: 'Per each', image: 'southasianimages/easternmuttonmasala.png' },
    { id: 24, name: 'REAL AJWAIN SEEDS (200GM)', category: 'masalas_spicemixes', price: 3.49, description: 'Per each', image: 'southasianimages/realajwainseeds.png' },
    { id: 25, name: 'SWAD TURMERIC (400GM )', category: 'masalas_spicemixes', price: 3.99, description: 'Per each', image: 'southasianimages/swadturmeric.png' },
    { id: 26, name: 'SWAD CARDAMON SEED (100 GM)', category: 'masalas_spicemixes', price: 5.99, description: 'Per each', image: 'southasianimages/swadcardamonseed.png' },
    { id: 27, name: 'BLACKL PEPPER WHOLE (200GM)', category: 'masalas_spicemixes', price: 5.50, description: 'Per each', image: 'southasianimages/blacklpepperwhole.png' },
    { id: 28, name: 'REAL BLACK PEPPER (200GM)', category: 'masalas_spicemixes', price: 4.99, description: 'Per each', image: 'southasianimages/realblackpepper.png' },
    { id: 29, name: 'HIMALAYAN PEANUT POWDER (200GM)', category: 'masalas_spicemixes', price: 2.50, description: 'Per each', image: 'southasianimages/himalayanpeanutpowder.png' },
    { id: 30, name: 'HIMALAYAN DELIGHT  YELLOW MUSTARD POWDER (200GM)', category: 'masalas_spicemixes', price: 2.19, description: 'Per each', image: 'southasianimages/himalayandelightyellowmustardpowder.png' },
    { id: 31, name: 'SWAD CORIANDER SEEDS (200GM)', category: 'lentils_pulses', price: 2.50, description: 'Per each', image: 'southasianimages/swadcorianderseeds.png' },
    { id: 32, name: 'HIMALAYAN DELIGHT PEEPLI (100GM)', category: 'lentils_pulses', price: 3.50, description: 'Per each', image: 'southasianimages/himalayandelightpeepli.png' },
    { id: 33, name: 'HIMALAYAN DELIGHT KABAB CHINI (100GM)', category: 'lentils_pulses', price: 5.99, description: 'Per each', image: 'southasianimages/himalayandelightkababchini.png' },
    { id: 34, name: 'KASHMIRI CHILLI WHOLE SWAD (200GM)', category: 'masalas_spicemixes', price: 5.50, description: 'Per each', image: 'southasianimages/kashmirichilliwholeswad.png' },
    { id: 35, name: 'DECCAN SONA MANSOORI RICE (20 LB)', category: 'riceproducts', price: 24.00, description: 'Per each', image: 'southasianimages/deccansonamansooririce.png' },
    { id: 36, name: 'DECCAN SONA MASOORI (10 LBS)', category: 'riceproducts', price: 13.99, description: 'Per each', image: 'southasianimages/deccansonamasoori.png' },
    { id: 37, name: 'SWAD BESAN (2 LB)', category: '3. flours_grains', price: 2.99, description: 'Per each', image: 'southasianimages/swadbesan.png' },
    { id: 38, name: 'LAXMI GINGER GARLIC PASTE (24 OZ)', category: 'pickles_pastes', price: 5.99, description: 'Per each', image: 'southasianimages/laxmigingergarlicpaste.png' },
    { id: 39, name: 'SWAD GINGER GARLIC PASTE (680 GM)', category: 'pickles_pastes', price: 8.99, description: 'Per each', image: 'southasianimages/swadgingergarlicpaste.png' },
    { id: 40, name: 'NATIONAL GINGER GARLIC(750 GM)', category: 'pickles_pastes', price: 4.99, description: 'Per each', image: 'southasianimages/nationalgingergarlic.png' },
    { id: 41, name: 'NATIONAL GINGER GARLIC (300GM)', category: 'pickles_pastes', price: 3.99, description: 'Per each', image: 'southasianimages/nationalgingergarlic.png' },
    { id: 42, name: 'SWAD JASMINE RICE (1.8 KG)', category: 'riceproducts', price: 5.99, description: 'Per each', image: 'southasianimages/swadjasminerice.png' },
    { id: 43, name: 'SWAD KICHIDI MIX (4 LB)', category: 'masalas_spicemixes', price: 7.99, description: 'Per each', image: 'southasianimages/swadkichidimix.png' },
    { id: 44, name: 'SWARNA ATTA (10 LB)', category: 'flours_grains', price: 9.99, description: 'Per each', image: 'southasianimages/swarnaatta.png' },
    { id: 45, name: 'SWAD BASMATI RICE (10 LB)', category: 'riceproducts', price: 12.50, description: 'Per each', image: 'southasianimages/swadbasmatirice.png' },
    { id: 46, name: 'SWAD MULTI GRAIN CHAPATHI (4 LB)', category: 'rte_meals', price: 4.29, description: 'Per each', image: 'southasianimages/swadmultigrainchapathi.png' },
    { id: 47, name: 'SWAD BLACK EYED PEAS (2 LB)', category: 'flours_grains', price: 3.50, description: 'Per each', image: 'southasianimages/swadblackeyedpeas.png' },
    { id: 48, name: 'HIMALAYAN DELIGHT  RED CHIURA (NEPALI POHA) (908 GM)', category: 'southasian', price: 4.50, description: 'Per each', image: 'southasianimages/himalayandelightredchiura.png' },
    { id: 49, name: 'SWAD HOT MANGO PICKLE (500GM)', category: 'southasian', price: 3.99, description: 'Per each', image: 'southasianimages/swadhotmangopickle.png' },
    { id: 50, name: 'SWAD GREEN CHILI PICKLE(450 GM)', category: 'southasian', price: 3.99, description: 'Per each', image: 'southasianimages/swadgreenchilipickle.png' },
    { id: 51, name: 'PRAN NAGA PICKLE (400 GM)', category: 'southasian', price: 4.99, description: 'Per each', image: 'southasianimages/prannagapickle.png' },
    { id: 52, name: 'HIMALAYAN DELIGHT TIMUR CHHOP WITH SHRIMP (7.05 OZ)', category: 'southasian', price: 8.99, description: 'Per each', image: 'southasianimages/himalayandelighttimurchhopwithshrimp.png' },
    { id: 53, name: 'SCHEZWAN CHUTNEY CHINGSS SECRET (250 GM)', category: 'southasian', price: 1.99, description: 'Per each', image: 'southasianimages/schezwanchutneychingsssecret.png' },
    { id: 54, name: 'HIMALAYAN DELIGHT WHITE CHIURA NEPAL POHA (908 GM )', category: 'southasian', price: 4.50, description: 'Per each', image: 'southasianimages/himalayandelightwhitechiuranepalpoha.png' },
    { id: 55, name: 'FALAK BASMATHI RICE SELLA EX( 10 LB)', category: 'southasian', price: 19.00, description: 'Per each', image: 'southasianimages/falakbasmathiricesellaex.png' },
    { id: 56, name: 'SWAD MULTI GRAIN FLOUR ( 20 LB)', category: 'southasian', price: 18.00, description: 'Per each', image: 'southasianimages/swadmultigrainflour.png' },
    { id: 57, name: 'HIMALAYAN DELIGHT  TAMARIND POWDER (100 GM )', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/himalayandelighttamarindpowder.png' },
    { id: 58, name: 'HIMALAYAN DELIGHT  BLACK SALT ROCK ( 200 GM )', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/himalayandelightblacksaltrock.png' },
    { id: 59, name: 'SWAD CARDAMON SEEDS (100  GM)', category: 'southasian', price: 5.99, description: 'Per each', image: 'southasianimages/swadcardamonseeds.png' },
    { id: 60, name: 'SWAD GARAM MASALA (400 GM )', category: 'southasian', price: 6.99, description: 'Per each', image: 'southasianimages/swadgarammasala.png' },
    { id: 61, name: 'SWAD GARAM MASALA (800 GM)', category: 'southasian', price: 11.99, description: 'Per each', image: 'southasianimages/swadgarammasala.png' },
    { id: 62, name: 'SWAD TURMERIC POWDER (800 GM)', category: 'southasian', price: 6.99, description: 'Per each', image: 'southasianimages/swadturmericpowder.png' },
    { id: 63, name: 'SWAD DILL SEEDS (200 GM)', category: 'southasian', price: 3.50, description: 'Per each', image: 'southasianimages/swaddillseeds.png' },
    { id: 64, name: 'SWAD  MADREAS CURRY POWDER (200 GM)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/swadmadreascurrypowder.png' },
    { id: 65, name: 'SWAD CARDAMOM BLACK (100 GM)', category: 'southasian', price: 6.99, description: 'Per each', image: 'southasianimages/swadcardamomblack.png' },
    { id: 66, name: 'SWAD WHOLE GARAM MASALA (200 GM)', category: 'southasian', price: 3.50, description: 'Per each', image: 'southasianimages/swadwholegarammasala.png' },
    { id: 67, name: 'HIMALAYAN DELIGHT ANCHOVIES (DRY SPRATS) (400 GM)', category: 'southasian', price: 7.99, description: 'Per each', image: 'southasianimages/himalayandelightanchovies.png' },
    { id: 68, name: 'SWAD BAY LEAVES (1 OZ)', category: 'southasian', price: 1.99, description: 'Per each', image: 'southasianimages/swadbayleaves.png' },
    { id: 69, name: 'LAXMI FENNEL SEEDS (350 GM)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/laxmifennelseeds.png' },
    { id: 70, name: 'LAXMI  GARAM MASALA (350 GM)', category: 'southasian', price: 5.99, description: 'Per each', image: 'southasianimages/laxmigarammasala.png' },
    { id: 71, name: 'LAXMI  TURMERIC POWDER (400 GM)', category: 'southasian', price: 3.29, description: 'Per each', image: 'southasianimages/laxmiturmericpowder.png' },
    { id: 72, name: 'SWAD TANDOORI MASALA (250 GM)', category: 'southasian', price: 4.99, description: 'Per each', image: 'southasianimages/swadtandoorimasala.png' },
    { id: 73, name: 'SWAD TANDOORI PASTE (212 GM)', category: 'southasian', price: 4.99, description: 'Per each', image: 'southasianimages/swadtandooripaste.png' },
    { id: 74, name: 'SWAD IDLI RAVA (2 LB)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/swadidlirava.png' },
    { id: 75, name: 'SWAD KASHMIRI CHILI POWDER (200 GM)', category: 'southasian', price: 5.50, description: 'Per each', image: 'southasianimages/swadkashmirichilipowder.png' },
    { id: 76, name: 'SWAD PAPRIKA (400 GM)', category: 'southasian', price: 3.99, description: 'Per each', image: 'southasianimages/swadpaprika.png' },
    { id: 77, name: 'HIMALAYAN DELIGHT SALT ROCK (200GM)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/himalayandelightsaltrock.png' },
    { id: 78, name: 'VITAL PINK SALT HIMALAYAN (800 GM)', category: 'southasian', price: 3.50, description: 'Per each', image: 'southasianimages/vitalpinksalthimalayan.png' },
    { id: 79, name: 'HIMALAYAN DELIGHT INDIAN SUGAR (2 LB)', category: 'southasian', price: 4.50, description: 'Per each', image: 'southasianimages/himalayandelightindiansugar.png' },
    { id: 80, name: 'TATA IODIZED SALT (1 KG )', category: 'southasian', price: 1.50, description: 'Per each', image: 'southasianimages/tataiodizedsalt.png' },
    { id: 81, name: 'HIMALAYAN DELIGHT BYADGI CHILLI WHOLE (200 GM )', category: 'southasian', price: 3.99, description: 'Per each', image: 'southasianimages/himalayandelightbyadgichilliwhole.png' },
    { id: 82, name: 'HIMALAYAN DELIGHT DAGAD PHOOL (1.75 OZ)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/himalayandelightdagadphool.png' },
    { id: 83, name: 'HIMALAYAN DELIGHT DRY CURRY LEAVES (50 GM )', category: 'southasian', price: 3.50, description: 'Per each', image: 'southasianimages/himalayandelightdrycurryleaves.png' },
    { id: 84, name: 'VITAL FRIED ONION (400 GM)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/vitalfriedonion.png' },
    { id: 85, name: 'SWAD MIXED VEG PICKLE ( 500 GM)', category: 'southasian', price: 3.99, description: 'Per each', image: 'southasianimages/swadmixedvegpickle.png' },
    { id: 86, name: 'BASMATHI  RICE  EXTREME FALAK (10 LB)', category: 'southasian', price: 19.00, description: 'Per each', image: 'southasianimages/basmathiriceextremefalak.png' },
    { id: 87, name: 'SWAD 9 BEAN MIX (2 LB)', category: 'southasian', price: 3.99, description: 'Per each', image: 'southasianimages/swad9beanmix.png' },
    { id: 88, name: 'JIMBU  NEPAL HIMALAYAN DELIGHT (50 GM)', category: 'southasian', price: 3.50, description: 'Per each', image: 'southasianimages/jimbunepalhimalayandelight.png' },
    { id: 89, name: 'HIMALAYAN DELIGHT DRY LEMON GRASS TEA (100 GM)', category: 'southasian', price: 1.99, description: 'Per each', image: 'southasianimages/himalayandelightdrylemongrasstea.png' },
    { id: 90, name: 'SWAD WHOLE BIRIYANI MASALA (100GM)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/swadwholebiriyanimasala.png' },
    { id: 91, name: 'PRIYA DRUMSTICK PICKLE (300GM)', category: 'southasian', price: 3.29, description: 'Per each', image: 'southasianimages/priyadrumstickpickle.png' },
    { id: 92, name: 'CUT MANGO PICKLE W/ GARLIC (300 GM)', category: 'southasian', price: 3.29, description: 'Per each', image: 'southasianimages/cutmangopicklewgarlic.png' },
    { id: 93, name: 'CLASSIC GREEN SAUCE  HOI MOMO SAUCE (235 ML)', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/classicgreensaucehoimomosauce.png' },
    { id: 94, name: 'LAXMI RED CHILI CRUSHED (250GM)', category: 'southasian', price: 3.99, description: 'Per each', image: 'southasianimages/laxmiredchilicrushed.png' },
    { id: 95, name: 'LAXMI RED CHILI POWDER (350 GM)', category: 'southasian', price: 3.99, description: 'Per each', image: 'southasianimages/laxmiredchilipowder.png' },
    { id: 96, name: 'LAXMI WHOLE FENUGRREK WHOLE (520 GM)', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/laxmiwholefenugrrekwhole.png' },
    { id: 97, name: 'LAXMI CORIANDER POWDER (400GM)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/laxmicorianderpowder.png' },
    { id: 98, name: 'LAXMI CUMIN POWDER (400 GM)', category: 'southasian', price: 4.69, description: 'Per each', image: 'southasianimages/laxmicuminpowder.png' },
    { id: 99, name: 'SWAD KASOORI METHI (100 GM)', category: 'southasian', price: 2.99, description: 'Per ea', image: 'southasianimages/swadkasoorimethi.png' },
    { id: 100, name: 'PRAN PUFFED RICE (400 GM)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/pranpuffedrice.png' },
    { id: 101, name: 'SWAD MOONG WADI (400 GM)', category: 'southasian', price: 5.50, description: 'Per each', image: 'southasianimages/swadmoongwadi.png' },
    { id: 102, name: 'SWAD SOYA CHUNKS (400 GM)', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/swadsoyachunks.png' },
    { id: 103, name: 'VITAL TEA KASHMIRI TEA PINK (250 GM)', category: 'southasian', price: 4.99, description: 'Per each', image: 'southasianimages/vitalteakashmiriteapink.png' },
    { id: 104, name: 'VITAL TEA GREEN TEA  (250 GM)', category: 'southasian', price: 4.99, description: 'Per each', image: 'southasianimages/vitalteagreentea.png' },
    { id: 105, name: 'VITAL TEA PESHAWARI / AFGHANI KAHWA GREEN TEA / GRUNER TEE LOOSE GREEN TEA LEAVES  (220 GM)', category: 'southasian', price: 6.99, description: 'Per each', image: 'southasianimages/vitalteapeshawariafghanikahwagreenteagrunerteeloosegreentealeaves.png' },
    { id: 106, name: 'INSTANT BRU COFFEE (200 GM )', category: 'southasian', price: 6.99, description: 'Per each', image: 'southasianimages/instantbrucoffee.png' },
    { id: 107, name: 'BROOKE  BOND RED LABEL TEA (450 GM)', category: 'southasian', price: 6.50, description: 'Per each', image: 'southasianimages/brookebondredlabeltea.png' },
    { id: 108, name: 'SWAD TEA MASALA (100 GM )', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/swadteamasala.png' },
    { id: 109, name: 'HIMALAYAN DELIGHT NEPALI SOYA WADI (200 GM )', category: 'southasian', price: 2.29, description: 'Per each', image: 'southasianimages/himalayandelightnepalisoyawadi.png' },
    { id: 110, name: 'SWAD DESI CHORI (2 LB)', category: 'southasian', price: 3.99, description: 'Per each', image: 'southasianimages/swaddesichori.png' },
    { id: 111, name: 'MAGGIE 2 MINUTE NOODLES (560 GM )', category: 'southasian', price: 5.99, description: 'Per each', image: 'southasianimages/maggie2minutenoodles.png' },
    { id: 112, name: 'CHINGS SECRET SINGAPORE CURRY NOODLES (240 GM )', category: 'southasian', price: 1.50, description: 'Per each', image: 'southasianimages/chingssecretsingaporecurrynoodles.png' },
    { id: 113, name: 'CHINGSS   MANCHURIAN NOODLES (240 GM )', category: 'southasian', price: 1.50, description: 'Per each', image: 'southasianimages/chingssmanchuriannoodles.png' },
    { id: 114, name: 'CHINGS HOT GARLIC NOODLES (240 GM )', category: 'southasian', price: 1.50, description: 'Per each', image: 'southasianimages/chingshotgarlicnoodles.png' },
    { id: 115, name: 'CHINGS SECRET JUST SOAK CHOWMEIN (140 GM )', category: 'southasian', price: 1.50, description: 'Per each', image: 'southasianimages/chingssecretjustsoakchowmein.png' },
    { id: 116, name: 'CHINGS VEG HAKKA NOODLES (150 GM )', category: 'southasian', price: 1.50, description: 'Per each', image: 'southasianimages/chingsveghakkanoodles.png' },
    { id: 117, name: 'CHINGS EGG  HAKKA NOODLES (150 GM)', category: 'southasian', price: 1.50, description: 'Per each', image: 'southasianimages/chingsegghakkanoodles.png' },
    { id: 118, name: 'SWAD SWEET MAKHANA (200 GM )', category: 'southasian', price: 1.50, description: 'Per each', image: 'southasianimages/swadsweetmakhana.png' },
    { id: 119, name: 'HIMALAYAN GREEN MUKHWAS DELIGHT (200 GM )', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/himalayangreenmukhwasdelight.png' },
    { id: 120, name: 'BHAKTI POOJA NUTS TUKDA (200 GM )', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/bhaktipoojanutstukda.png' },
    { id: 121, name: 'CHUNA RAJA CHUNA (200 GM )', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/chunarajachuna.png' },
    { id: 122, name: 'KWIK MEAL PANI PURI KA PANI (CLASSIC) ( 591 ML)', category: 'southasian', price: 5.50, description: 'Per each', image: 'southasianimages/kwikmealpanipurikapani.png' },
    { id: 123, name: 'SWAD TOMATO KETCHUP (500 GM )', category: 'southasian', price: 3.50, description: 'Per each', image: 'southasianimages/swadtomatoketchup.png' },
    { id: 124, name: 'SWAD CHUTNEY COCUNUT (212 GM )', category: 'southasian', price: 4.99, description: 'Per each', image: 'southasianimages/swadchutneycocunut.png' },
    { id: 125, name: 'SWAD PANIPURI CONCENTRATE (310 GM)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/swadpanipuriconcentrate.png' },
    { id: 126, name: 'SWAD CORIANDER CHUTNEY (680 GM)', category: 'southasian', price: 9.99, description: 'Per each', image: 'southasianimages/swadcorianderchutney.png' },
    { id: 127, name: 'SWAD MINT  CHUTNEY (680 GM )', category: 'southasian', price: 9.99, description: 'Per each', image: 'southasianimages/swadmintchutney.png' },
    { id: 128, name: 'LAXMI TAMARIND DATE CHUTNEY (8 OZ)', category: 'southasian', price: 4.50, description: 'Per each', image: 'southasianimages/laxmitamarinddatechutney.png' },
    { id: 129, name: 'LAXMI TAMARIND CONCENTRATE (14 OZ)', category: 'southasian', price: 5.99, description: 'Per each', image: 'southasianimages/laxmitamarindconcentrate.png' },
    { id: 130, name: 'LAXMI PUNJABI BUTTER MASALA SAUCE (12.5 OZ)', category: 'southasian', price: 5.50, description: 'Per each', image: 'southasianimages/laxmipunjabibuttermasalasauce.png' },
    { id: 131, name: 'LAXMI GOAN VINDALOO CURRY (12.05OZ)', category: 'southasian', price: 5.50, description: 'Per each', image: 'southasianimages/laxmigoanvindaloocurry.png' },
    { id: 132, name: 'LAXMI TIKKA MASALA SAUCE SPICE PASTE (12.5 OZ)', category: 'southasian', price: 5.50, description: 'Per each', image: 'southasianimages/laxmitikkamasalasaucespicepaste.png' },
    { id: 133, name: 'LAXMI ALPHONSO MANGO PULP (850 GM)', category: 'southasian', price: 4.39, description: 'Per each', image: 'southasianimages/laxmialphonsomangopulp.png' },
    { id: 134, name: 'RATNA ALPHONSO MANGO PULP (850 GM )', category: 'southasian', price: 5.99, description: 'Per each', image: 'southasianimages/ratnaalphonsomangopulp.png' },
    { id: 135, name: 'CHINGS  SECRET TOMATO SOUP (55 GM )', category: 'southasian', price: 1.19, description: 'Per each', image: 'southasianimages/chingssecrettomatosoup.png' },
    { id: 136, name: 'NATIONAL VANILLA CUSTARD POWDER (300 GM)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/nationalvanillacustardpowder.png' },
    { id: 137, name: 'NATIONAL STRAWBERRY JELLY (300 GM )', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/nationalstrawberryjelly.png' },
    { id: 138, name: 'GITS SINCE 1963 VERMICELLI KHEER (100 GM )', category: 'southasian', price: 2.29, description: 'Per each', image: 'southasianimages/gitssince1963vermicellikheer.png' },
    { id: 139, name: 'GITS BAMATHI RICE KHEER (100 GM)', category: 'southasian', price: 2.29, description: 'Per each', image: 'southasianimages/gitsbamathiricekheer.png' },
    { id: 140, name: 'PRIYA  RAVA DOSA (200 GM )', category: 'southasian', price: 1.99, description: 'Per each', image: 'southasianimages/priyaravadosa.png' },
    { id: 141, name: 'PRIYA  UTAPPAM MIX (175 GM)', category: 'southasian', price: 2.39, description: 'Per each', image: 'southasianimages/priyautappammix.png' },
    { id: 142, name: 'PRIYA  DOSA MIX(200 GM )', category: 'southasian', price: 1.99, description: 'Per each', image: 'southasianimages/priyadosamix.png' },
    { id: 143, name: 'LINSEED OIL FLAX SEED OIL (100 ML )', category: 'southasian', price: 3.50, description: 'Per each', image: 'southasianimages/linseedoilflaxseedoil.png' },
    { id: 144, name: 'SWAD CASHEW HALVES & PIECES (400 GM)', category: 'southasian', price: 6.50, description: 'Per each', image: 'southasianimages/swadcashewhalves&pieces.png' },
    { id: 145, name: 'SWAD DRY DATES (400 GM )', category: 'southasian', price: 3.50, description: 'Per each', image: 'southasianimages/swaddrydates.png' },
    { id: 146, name: 'SWAD GREEN PISTACHIOS(400GM)', category: 'southasian', price: 14.99, description: 'Per each', image: 'southasianimages/swadgreenpistachios.png' },
    { id: 147, name: 'DECCAN IDLY RICE (20 LBS)', category: 'southasian', price: 18.00, description: 'Per each', image: 'southasianimages/deccanidlyrice.png' },
    { id: 148, name: 'DECCAN IDLY RICE (10 LB)', category: 'southasian', price: 11.00, description: 'Per each', image: 'southasianimages/deccanidlyrice.png' },
    { id: 149, name: 'SWAD PISTACHIO WHITE (400 GM )', category: 'southasian', price: 8.99, description: 'Per each', image: 'southasianimages/swadpistachiowhite.png' },
    { id: 150, name: 'SWAD PINEAPPLE RINGS (200 GM )', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/swadpineapplerings.png' },
    { id: 151, name: 'SWAD  KIWI SLICES (7 OZ)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/swadkiwislices.png' },
    { id: 152, name: 'ROYAL CHEF SECRET (20 LBS)', category: 'southasian', price: 29.00, description: 'Per each', image: 'southasianimages/royalchefsecret.png' },
    { id: 153, name: 'ROYAL BASMATHI RICE (20 LB)', category: 'southasian', price: 26.00, description: 'Per each', image: 'southasianimages/royalbasmathirice.png' },
    { id: 154, name: 'SWAD LAR BEANSGE LIMA (2 LB )', category: 'southasian', price: 4.99, description: 'Per each', image: 'southasianimages/swadlarbeansgelima.png' },
    { id: 155, name: 'SWAD KABULI CHANA (GARBANZO) (2L B)', category: 'southasian', price: 3.50, description: 'Per each', image: 'southasianimages/swadkabulichana.png' },
    { id: 156, name: 'HALDIRAMS RTE DAL MAKHANI (300 GM)', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/haldiramsrtedalmakhani.png' },
    { id: 157, name: 'HALDIRAMS  RAJMA RASEELA (300 GM )', category: 'southasian', price: 2.29, description: 'Per each', image: 'southasianimages/haldiramsrajmaraseela.png' },
    { id: 158, name: 'HALDIRAMS  RTE  PALAK PANEER (300 GM )', category: 'southasian', price: 3.50, description: 'Per each', image: 'southasianimages/haldiramsrtepalakpaneer.png' },
    { id: 159, name: 'HALDIRAMS  RTE  DAL PALAK (300 GM )', category: 'southasian', price: 2.29, description: 'Per each', image: 'southasianimages/haldiramsrtedalpalak.png' },
    { id: 160, name: 'HALDIRAMS  DAL MAKHANI (300 GM )', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/haldiramsdalmakhani.png' },
    { id: 161, name: 'HALDIRAMS  RTE CHOLEY (300 GM)', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/haldiramsrtecholey.png' },
    { id: 162, name: 'HALDIRAMS  RTE ALOO MUTTER (300 GM )', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/haldiramsrtealoomutter.png' },
    { id: 163, name: 'HALDIRAMS  RTE KADHI PAKODA (300 GM)', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/haldiramsrtekadhipakoda.png' },
    { id: 164, name: 'HALDIRAMS  RTE  BIRYANI (200 GM )', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/haldiramsrtebiryani.png' },
    { id: 165, name: 'HALDIRAMS  RTE  MUTTER PANEER (300 GM )', category: 'southasian', price: 3.50, description: 'Per each', image: 'southasianimages/haldiramsrtemutterpaneer.png' },
    { id: 166, name: 'HALDIRAMS RATE VEGETABLE PULAO (200 GM)', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/haldiramsratevegetablepulao.png' },
    { id: 167, name: 'HALDIRAMS RTE DAL TADKA (300 GM )', category: 'southasian', price: 2.29, description: 'Per each', image: 'southasianimages/haldiramsrtedaltadka.png' },
    { id: 168, name: 'HALDIRAMS RTE PAO BHAJI (300 GM)', category: 'southasian', price: 2.50, description: 'Per each', image: 'southasianimages/haldiramsrtepaobhaji.png' },
    { id: 169, name: 'ROYAL HYDERABADI BIRIYANI KIT (327 GM)', category: 'southasian', price: 5.99, description: 'Per each', image: 'southasianimages/royalhyderabadibiriyanikit.png' },
    { id: 170, name: 'TEZ MUSTARD OIL (4.74 LIT )', category: 'southasian', price: 29.99, description: 'Per each', image: 'southasianimages/tezmustardoil.png' },
    { id: 171, name: 'SAFFY SUNFLOWER OIL (1 LIT)', category: 'southasian', price: 4.50, description: 'Per each', image: 'southasianimages/saffysunfloweroil.png' },
    { id: 172, name: 'SWAD CANOLA OIL  (32 FL OZ)', category: 'southasian', price: 3.99, description: 'Per each', image: 'southasianimages/swadcanolaoil.png' },
    { id: 173, name: 'SWAD  SUNFLOWER OIL (32 OZ)', category: 'southasian', price: 4.50, description: 'Per each', image: 'southasianimages/swadsunfloweroil.png' },
    { id: 174, name: 'SWAD CORN OIL (32 OZ)', category: 'southasian', price: 4.50, description: 'Per each', image: 'southasianimages/swadcornoil.png' },
    { id: 175, name: 'DABUR MUSTARD  OIL INDIAN (500 ML )', category: 'southasian', price: 5.99, description: 'Per each', image: 'southasianimages/daburmustardoilindian.png' },
    { id: 176, name: 'SESAME OIL SWAD GINGELLY OIL (500 ML )', category: 'southasian', price: 4.99, description: 'Per each', image: 'southasianimages/sesameoilswadgingellyoil.png' },
    { id: 177, name: 'SWAD CASTOR OIL (250 ML)', category: 'southasian', price: 2.99, description: 'Per each', image: 'southasianimages/swadcastoroil.png' },
    { id: 178, name: 'SWAD GHEE (236 ML)', category: 'southasian', price: 7.99, description: 'Per each', image: 'southasianimages/swadghee.png' },
    { id: 179, name: 'AMUL PURE GHEE (500 ML )', category: 'southasian', price: 9.99, description: 'Per each', image: 'southasianimages/amulpureghee.png' },
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
