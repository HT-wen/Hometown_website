// Sample product data for Alcohol section
const products = [
    { id: 1, name: 'Schmitt Sohne Riesling', category: 'wine', price: 11.99, image: 'alcoholimages/SchmittSohneRiesling.png', description: '750ml bottle' },
    { id: 2, name: 'Relax Riesling', category: 'wine', price: 11.99, image: 'alcoholimages/RelaxRiesling.png', description: '750ml bottle' },
    { id: 3, name: 'Y3 Cabernet Sauvignon Jax', category: 'wine', price: 19.99, image: 'alcoholimages/Y3CabernetSauvignonJax.png', description: '750ml bottle' },
    { id: 4, name: 'Leese Fitch Chardonnay', category: 'wine', price: 13.99, image: 'alcoholimages/LeeseFitchChardonnay.png', description: '750ml bottle' },
    { id: 5, name: 'Leese Fitch Cabernet Sauvignon', category: 'wine', price: 13.99, image: 'alcoholimages/LeeseFitchCabernetSauvignon.png', description: '750ml bottle' },
    { id: 6, name: 'Francis Coppola Pinot Noir', category: 'wine', price: 9.99, image: 'alcoholimages/FrancisCoppolaPinotNoir.png', description: '750ml bottle' },
    { id: 7, name: 'Francis Coppola Cabernet Sauvignon', category: 'wine', price: 16.99, image: 'alcoholimages/FrancisCoppolaCabernetSauvignon.png', description: '750ml bottle' },
    { id: 8, name: 'Luxe Rose Gift Box Luc Belaire', category: 'wine', price: 35.00, image: 'alcoholimages/LuxeRoseGiftBoxLucBelaire.png', description: '750ml bottle' },
    { id: 9, name: 'Ely Chardonnay', category: 'wine', price: 13.99, image: 'alcoholimages/ElyChardonnay.png', description: '750ml bottle' },
    { id: 10, name: 'Pinot Noir Liberated', category: 'wine', price: 26.99, image: 'alcoholimages/PinotNoirLiberated.png', description: '750ml bottle' },
    { id: 11, name: 'Roco Gravel Road Pinot Noir', category: 'wine', price: 21.99, image: 'alcoholimages/RocoGravelRoadPinotNoir.png', description: '750ml bottle' },
    { id: 12, name: 'J Cuvee 20', category: 'wine', price: 29.99, image: 'alcoholimages/JCuvee20.png', description: '750ml bottle' },
    { id: 13, name: 'Chateau Ste Michelle Riesling', category: 'wine', price: 11.99, image: 'alcoholimages/ChateauSteMichelleRiesling.png', description: '750ml bottle' },
    { id: 14, name: 'Gotas De Mar Albariño', category: 'wine', price: 16.99, image: 'alcoholimages/GotasDeMarAlbariño.png', description: '750ml bottle' },
    { id: 15, name: 'Diora Pinot Noir', category: 'wine', price: 19.99, image: 'alcoholimages/DioraPinotNoir.png', description: '750ml bottle' },
    { id: 16, name: 'Diora Chardonnay', category: 'wine', price: 18.99, image: 'alcoholimages/DioraChardonnay.png', description: '750ml bottle' },
    { id: 17, name: 'Pacific Rim Riesling', category: 'wine', price: 11.99, image: 'alcoholimages/PacificRimRiesling.png', description: '750ml bottle' },
    { id: 18, name: 'Movendo Moscato', category: 'wine', price: 12.99, image: 'alcoholimages/MovendoMoscato.png', description: '750ml bottle' },
    { id: 19, name: 'Sauvignon Blanc 2022 LA Cetto', category: 'wine', price: 11.99, image: 'alcoholimages/SauvignonBlanc2022LACetto.png', description: '750ml bottle' },
    { id: 20, name: 'Sauvignon Blanc 2020 LA Cetto', category: 'wine', price: 11.99, image: 'alcoholimages/SauvignonBlanc2020LACetto.png', description: '750ml bottle' },
    { id: 21, name: 'Riff Pinot Grigio Progetto Lageder', category: 'wine', price: 12.99, image: 'alcoholimages/RiffPinotGrigioProgettoLageder.png', description: '750ml bottle' },
    { id: 22, name: 'Sterling Vintner\'s Collection Sauvignon Blanc', category: 'wine', price: 14.99, image: 'alcoholimages/SterlingVintnersCollectionSauvignonBlanc.png', description: '750ml bottle' },
    { id: 23, name: 'Mark West Pinot Noir', category: 'wine', price: 11.99, image: 'alcoholimages/MarkWestPinotNoir.png', description: '750ml bottle' },
    { id: 24, name: 'Black Stallion Estate Winery Chardonnay', category: 'wine', price: 18.99, image: 'alcoholimages/BlackStallionEstateWineryChardonnay.png', description: '750ml bottle' },
    { id: 25, name: 'Firesteed Riesling Wine', category: 'wine', price: 12.99, image: 'alcoholimages/FiresteedRieslingWine.png', description: '750ml bottle' },
    { id: 26, name: 'Uppercut Napa County Chardonnay 2013', category: 'wine', price: 13.99, image: 'alcoholimages/UppercutNapaCountyChardonnay2013.png', description: '750ml bottle' },
    { id: 27, name: '14 Hands Chardonnay', category: 'wine', price: 9.99, image: 'alcoholimages/14HandsChardonnay.png', description: '750ml bottle' },
    { id: 28, name: 'Alaris Trapiche Malbec', category: 'wine', price: 8.99, image: 'alcoholimages/AlarisTrapicheMalbec.png', description: '750ml bottle' },
    { id: 29, name: 'Cupcake Pinot Noir', category: 'wine', price: 12.99, image: 'alcoholimages/CupcakePinotNoir.png', description: '750ml bottle' },
    { id: 30, name: 'Blueberry Moscato Island Grove', category: 'wine', price: 14.99, image: 'alcoholimages/BlueberryMoscatoIslandGrove.png', description: '750ml bottle' },
    { id: 31, name: 'Sho Chiku Bai Sho Ginjo Nigori Sake', category: 'sake', price: 21.99, image: 'alcoholimages/ShoChikuBaiShoGinjoNigoriSake.png', description: '720ml bottle' },
    { id: 32, name: 'Sho Chiku Bai Sho Junmai Ginjo Sake', category: 'sake', price: 21.99, image: 'alcoholimages/ShoChikuBaiShoJunmaiGinjoSake.png', description: '720ml bottle' },
    { id: 33, name: 'Fre Chardonnay (Alcohol-Removed Wine)', category: 'wine', price: 10.50, image: 'alcoholimages/FreChardonnayAlcoholRemovedWine.png', description: '750ml bottle' },
    { id: 34, name: 'Cono Sur Bicicleta Cabernet Sauvignon', category: 'wine', price: 12.99, image: 'alcoholimages/ConoSurBicicletaCabernetSauvignon.png', description: '750ml bottle' },
    { id: 35, name: 'Rodney Strong Chardonnay', category: 'wine', price: 0, image: 'alcoholimages/RodneyStrongChardonnay.png', description: '750ml bottle' },
    { id: 36, name: 'Cono Sur Bicycle Pinot Noir Bottle Chile', category: 'wine', price: 14.99, image: 'alcoholimages/ConoSurBicyclePinotNoirBottleChile.png', description: '750ml bottle' },
    { id: 37, name: 'Murphy-Goode California Pinot Noir', category: 'wine', price: 16.99, image: 'alcoholimages/MurphyGoodeCaliforniaPinotNoir.png', description: '750ml bottle' },
    { id: 38, name: 'Murphy Goode Cabernet Sauvignon', category: 'wine', price: 0, image: 'alcoholimages/MurphyGoodeCabernetSauvignon.png', description: '750ml bottle' },
    { id: 39, name: 'Stella Rosa Platinum', category: 'wine', price: 14.99, image: 'alcoholimages/StellaRosaPlatinum.png', description: '750ml bottle' },
    { id: 40, name: 'Stella Rosa Green Apple', category: 'wine', price: 13.99, image: 'alcoholimages/StellaRosaGreenApple.png', description: '750ml bottle' },
    { id: 41, name: 'Stella Rosa Watermelon', category: 'wine', price: 13.99, image: 'alcoholimages/StellaRosaWatermelon.png', description: '750ml bottle' },
    { id: 42, name: 'Stella Rosa Pineapple', category: 'wine', price: 13.99, image: 'alcoholimages/StellaRosaPineapple.png', description: '750ml bottle' },
    { id: 43, name: 'Stella Rosa Berry', category: 'wine', price: 13.99, image: 'alcoholimages/StellaRosaBerry.png', description: '750ml bottle' },
    { id: 44, name: 'Stella Rosa Red Berry', category: 'wine', price: 14.99, image: 'alcoholimages/StellaRosaRedBerry.png', description: '750ml bottle' },
    { id: 45, name: 'Jax Y3 Pinot Noir', category: 'wine', price: 22.99, image: 'alcoholimages/JaxY3PinotNoir.png', description: '750ml bottle' },
    { id: 46, name: 'Tyku Sake', category: 'sake', price: 0, image: 'alcoholimages/TykuSake.png', description: '720ml bottle' },
    { id: 47, name: 'Choya Umeshu', category: 'wine', price: 19.99, image: 'alcoholimages/ChoyaUmeshu.png', description: '750ml bottle' },
    { id: 48, name: 'Choya Umeshu', category: 'wine', price: 15.99, image: 'alcoholimages/ChoyaUmeshu500.png', description: '500ml bottle' },
    { id: 49, name: 'Awa Yuri Sparkling Sake', category: 'sake', price: 9.99, image: 'alcoholimages/AwaYuriSparklingSake.png', description: '300ml bottle' },
    { id: 50, name: 'Mio Sparkling Sake', category: 'sake', price: 10.99, image: 'alcoholimages/MioSparklingSake.png', description: '300ml bottle' },
    { id: 51, name: 'Mio Crisp Sparkling Sake', category: 'sake', price: 10.99, image: 'alcoholimages/MioCrispSparklingSake.png', description: '300ml bottle' },
    { id: 52, name: 'Sho Chiku Bai Rei Junmai Daiginjo Sake', category: 'sake', price: 0, image: 'alcoholimages/ShoChikuBaiReiJunmaiDaiginjoSake.png', description: '300ml bottle' },
    { id: 53, name: 'Horin Junmai Daiginjo', category: 'sake', price: 30.99, image: 'alcoholimages/HorinJunmaiDaiginjo.png', description: '300ml bottle' },
    { id: 54, name: 'Choya Sparkling Wine', category: 'wine', price: 5.99, image: 'alcoholimages/ChoyaSparklingWine.png', description: '187ml bottle' },
    { id: 55, name: 'Yamahai Honjozo Sake', category: 'sake', price: 12.99, image: 'alcoholimages/YamahaiHonjozoSake.png', description: '300ml bottle' },
    { id: 56, name: 'Karatanba Sake Ozeki', category: 'sake', price: 10.50, image: 'alcoholimages/KaratanbaSakeOzeki.png', description: '300ml bottle' },
    { id: 57, name: 'J Pop White Peach Takara', category: 'sake', price: 3.50, image: 'alcoholimages/JPopWhitePeachTakara.png', description: '355ml bottle' },
    { id: 58, name: 'Pure Dawn Ginjo', category: 'sake', price: 11.99, image: 'alcoholimages/PureDawnGinjo.png', description: '300ml bottle' },
    { id: 59, name: 'Pure Snow Nigori', category: 'sake', price: 11.99, image: 'alcoholimages/PureSnowNigori.png', description: '300ml bottle' },
    { id: 60, name: 'Pure Dusk Daiginjo', category: 'sake', price: 13.99, image: 'alcoholimages/PureDuskDaiginjo.png', description: '300ml bottle' },
    { id: 61, name: 'Chokara Extra Dry Sake', category: 'sake', price: 9.99, image: 'alcoholimages/ChokaraExtraDrySake.png', description: '300ml bottle' },
    { id: 62, name: 'Sayuri Nigori Sake', category: 'sake', price: 9.99, image: 'alcoholimages/SayuriNigoriSake.png', description: '300ml bottle' },
    { id: 63, name: 'Junmai Sake Tenbu', category: 'sake', price: 15.99, image: 'alcoholimages/JunmaiSakeTenbu.png', description: '300ml bottle' },
    { id: 64, name: 'Gekkeikan Cap Ace Sake', category: 'sake', price: 7.99, image: 'alcoholimages/GekkeikanCapAceSake.png', description: '180ml bottle' },
    { id: 65, name: 'Gokai Junmai Sake Cup', category: 'sake', price: 7.99, image: 'alcoholimages/GokaiJunmaiSakeCup.png', description: '180ml bottle' },
    { id: 66, name: 'Matsucup Matsuno Kotobuki Cup', category: 'sake', price: 7.99, image: 'alcoholimages/MatsucupMatsunoKotobukiCup.png', description: '180ml bottle' },
    { id: 67, name: 'Night Swim Tozai', category: 'sake', price: 7.50, image: 'alcoholimages/NightSwimTozai.png', description: '180ml bottle' },
    { id: 68, name: 'Snow Maiden Tozai', category: 'sake', price: 7.50, image: 'alcoholimages/SnowMaidenTozai.png', description: '180ml bottle' },
    { id: 69, name: 'Bushido Way Of The Warrior Ginjo Genshu', category: 'sake', price: 7.99, image: 'alcoholimages/BushidoWayOfTheWarriorGinjoGenshu.png', description: '180ml bottle' },
    { id: 70, name: 'Junmai Sake Kibo', category: 'sake', price: 7.50, image: 'alcoholimages/JunmaiSakeKibo.png', description: '180ml bottle' },
    { id: 71, name: 'Junmai Gingo Sake Yomi', category: 'sake', price: 7.50, image: 'alcoholimages/JunmaiGingoSakeYomi.png', description: '250ml bottle' },
    { id: 72, name: 'Chika Sake Cup', category: 'sake', price: 7.99, image: 'alcoholimages/ChikaSakeCup.png', description: '200ml bottle' },
    { id: 73, name: 'Snow Tiger Nigori Sake Yuki Tora', category: 'sake', price: 8.50, image: 'alcoholimages/SnowTigerNigoriSakeYukiTora.png', description: '200ml bottle' },
    { id: 74, name: 'Draft Sake Hakutsuru', category: 'sake', price: 4.99, image: 'alcoholimages/DraftSakeHakutsuru.png', description: '180ml bottle' },
    { id: 75, name: 'Nama Fresh and Light Hakushika', category: 'sake', price: 4.99, image: 'alcoholimages/NamaFreshAndLightHakushika.png', description: '180ml bottle' },
    { id: 76, name: 'Drt Sake Ozeki', category: 'sake', price: 4.99, image: 'alcoholimages/DrtSakeOzeki.png', description: '180ml bottle' },
    { id: 77, name: 'Junmai Gingo Sake Hakushika', category: 'sake', price: 9.99, image: 'alcoholimages/JunmaiGingoSakeHakushika.png', description: '300ml bottle' },
    { id: 78, name: 'Sparkling Flower Sake Hana Awaka', category: 'sake', price: 9.99, image: 'alcoholimages/SparklingFlowerSakeHanaAwaka.png', description: '250ml bottle' },
    { id: 79, name: 'Yuzu Sparkling Sake Hana Awaka', category: 'sake', price: 9.99, image: 'alcoholimages/YuzuSparklingSakeHanaAwaka.png', description: '250ml bottle' },
    { id: 80, name: 'Ozeki Sparkling Hana Awaka Peach', category: 'sake', price: 9.99, image: 'alcoholimages/OzekiSparklingHanaAwakaPeach.png', description: '250ml bottle' },
    { id: 81, name: 'Mix Berry Sparkling Sake Hana Awaka', category: 'sake', price: 9.99, image: 'alcoholimages/MixBerrySparklingSakeHanaAwaka.png', description: '250ml bottle' },
    { id: 82, name: 'Ozeki Nigori Strawberry Nigori Sake', category: 'sake', price: 13.50, image: 'alcoholimages/OzekiNigoriStrawberryNigoriSake.png', description: '300ml bottle' },
    { id: 83, name: 'Ozeki Nigori Pineapple Nigori Sake', category: 'sake', price: 13.50, image: 'alcoholimages/OzekiNigoriPineappleNigoriSake.png', description: '300ml bottle' },
    { id: 84, name: 'Oyster Bay Sauvignon Blanc', category: 'wine', price: 16.99, image: 'alcoholimages/OysterBaySauvignonBlanc.png', description: '750ml bottle' },
    { id: 85, name: 'Merlot Noble Vines', category: 'wine', price: 11.99, image: 'alcoholimages/MerlotNobleVines.png', description: '750ml bottle' },
    { id: 86, name: 'Marquis Red Noble Vines', category: 'wine', price: 11.99, image: 'alcoholimages/MarquisRedNobleVines.png', description: '750ml bottle' },
    { id: 87, name: 'Cabernet Sauvignon Noble Vines', category: 'wine', price: 11.99, image: 'alcoholimages/CabernetSauvignonNobleVines.png', description: '750ml bottle' },
    { id: 88, name: 'Pinot Noir Noble Vines', category: 'wine', price: 11.99, image: 'alcoholimages/PinotNoirNobleVines.png', description: '750ml bottle' },
    { id: 89, name: 'Sauvignon Blanc', category: 'wine', price: 11.99, image: 'alcoholimages/SauvignonBlanc.png', description: '750ml bottle' },
    { id: 90, name: 'Moonstone Asian Pear Sake', category: 'sake', price: 17.99, image: 'alcoholimages/MoonstoneAsianPearSake.png', description: '750ml bottle' },
    { id: 91, name: 'Moonstone Coconut Lemongrass Nigori', category: 'sake', price: 8.99, image: 'alcoholimages/MoonstoneCoconutLemongrassNigori.png', description: '300ml bottle' },
    { id: 92, name: 'Moonstone Plum Sake', category: 'sake', price: 8.99, image: 'alcoholimages/MoonstonePlumSake.png', description: '300ml bottle' },
    { id: 93, name: 'Shirakabegura Junmai Daiginjo', category: 'sake', price: 42.00, image: 'alcoholimages/ShirakabeguraJunmaiDaiginjo.png', description: '750ml bottle' },
    { id: 94, name: 'Nigori Sake Gekkeikan', category: 'sake', price: 17.99, image: 'alcoholimages/NigoriSakeGekkeikan.png', description: '720ml bottle' },
    { id: 95, name: 'Nigori Sake Gekkeikan', category: 'sake', price: 0, image: 'alcoholimages/NigoriSakeGekkeikanExtra.png', description: '???' },
    { id: 96, name: 'Kohaku Cherry Sake', category: 'sake', price: 12.50, image: 'alcoholimages/KohakuCherrySake.png', description: '300ml bottle' },
    { id: 97, name: 'Kohaku Yuzu Sake', category: 'sake', price: 12.50, image: 'alcoholimages/KohakuYuzuSake.png', description: '300ml bottle' },
    { id: 98, name: 'Hannya Tou Spicy Plum Sake', category: 'sake', price: 45.00, image: 'alcoholimages/HannyaTouSpicyPlumSake.png', description: '720ml bottle' },
    { id: 99, name: 'Shirakabegura Kimoto Junmai', category: 'sake', price: 25.99, image: 'alcoholimages/ShirakabeguraKimotoJunmai.png', description: '640ml bottle' },
    { id: 100, name: 'Suzaku Junmai Ginjo', category: 'sake', price: 35.99, image: 'alcoholimages/SuzakuJunmaiGinjo.png', description: '720ml bottle' },
    { id: 101, name: 'Suzaku Junmai Ginjo', category: 'sake', price: 14.99, image: 'alcoholimages/SuzakuJunmaiGinjo300ml.png', description: '300ml bottle' },
    { id: 102, name: 'Nigori Cloudy Sake', category: 'sake', price: 0, image: 'alcoholimages/NigoriCloudySake.png', description: '???' },
    { id: 103, name: 'Snow Beauty Nigori Sake', category: 'sake', price: 10.50, image: 'alcoholimages/SnowBeautyNigoriSake.png', description: '300ml bottle' },
    { id: 104, name: 'Tozai Well Of Wisdom Ginjo Sake', category: 'sake', price: 12.99, image: 'alcoholimages/TozaiWellOfWisdomGinjoSake.png', description: '300ml bottle' },
    { id: 105, name: 'Bride Of The Box Kanbara', category: 'sake', price: 16.99, image: 'alcoholimages/BrideOfTheBoxKanbara.png', description: '300ml bottle' },
    { id: 106, name: 'Demon Slayer Sake Manotsuru', category: 'sake', price: 15.50, image: 'alcoholimages/DemonSlayerSakeManotsuru.png', description: '300ml bottle' },
    { id: 107, name: 'Crane Junmai Sake Manotsuru', category: 'sake', price: 12.99, image: 'alcoholimages/CraneJunmaiSakeManotsuru.png', description: '300ml bottle' },
    { id: 108, name: 'Black & Gold Gekkeikan Sake', category: 'sake', price: 27.99, image: 'alcoholimages/BlackGoldGekkeikanSake.png', description: '750ml bottle' },
    { id: 109, name: 'Plum Wine Gekkeikan', category: 'sake', price: 14.99, image: 'alcoholimages/PlumWineGekkeikan.png', description: '750ml bottle' },
    { id: 110, name: 'Hakushika Tanuki Sake', category: 'sake', price: 16.99, image: 'alcoholimages/HakushikaTanukiSake.png', description: '900ml bottle' },
    { id: 111, name: 'Tong Soju Rice Spirits', category: 'soju', price: 15.99, image: 'alcoholimages/TongSojuRiceSpirits.png', description: '375ml bottle' },
    { id: 112, name: 'Jinsim Soju Hong Sam Ju', category: 'soju', price: 9.99, image: 'alcoholimages/JinsimSojuHongSamJu.png', description: '375ml bottle' },
    { id: 113, name: 'Aupa Red Wine', category: 'wine', price: 11.99, image: 'alcoholimages/AupaRedWine.png', description: '750ml bottle' },
    { id: 114, name: 'Ultraviolet California Cabernet Sauvignon', category: 'wine', price: 16.99, image: 'alcoholimages/UltravioletCaliforniaCabernetSauvignon.png', description: '750ml bottle' },
    { id: 115, name: 'Cabernet Sauvignon Guenoc', category: 'wine', price: 11.99, image: 'alcoholimages/CabernetSauvignonGuenoc.png', description: '750ml bottle' },
    { id: 116, name: 'Pinot Noir Guenoc', category: 'wine', price: 11.99, image: 'alcoholimages/PinotNoirGuenoc.png', description: '750ml bottle' },
    { id: 117, name: 'Merlot Guenoc', category: 'wine', price: 11.99, image: 'alcoholimages/MerlotGuenoc.png', description: '750ml bottle' },
    { id: 118, name: 'Chardonnay Guenoc', category: 'wine', price: 11.99, image: 'alcoholimages/ChardonnayGuenoc.png', description: '750ml bottle' },
    { id: 119, name: 'Pinot Grigio Guenoc', category: 'wine', price: 11.99, image: 'alcoholimages/PinotGrigioGuenoc.png', description: '750ml bottle' },
    { id: 120, name: 'Noble Vines Chardonnay', category: 'wine', price: 10.99, image: 'alcoholimages/NobleVinesChardonnay.png', description: '750ml bottle' },
    { id: 121, name: 'Franciscan Estate Cabernet Sauvignon', category: 'wine', price: 13.99, image: 'alcoholimages/FranciscanEstateCabernetSauvignon.png', description: '750ml bottle' },
    { id: 122, name: 'Three Finger Jack Chardonnay', category: 'wine', price: 16.99, image: 'alcoholimages/ThreeFingerJackChardonnay.png', description: '750ml bottle' },
    { id: 123, name: 'Bright La Pinot Noir Meiomi', category: 'wine', price: 20.99, image: 'alcoholimages/BrightLaPinotNoirMeiomi.png', description: '750ml bottle' },
    { id: 124, name: 'La Pinot Noir Meiomi', category: 'wine', price: 20.99, image: 'alcoholimages/LaPinotNoirMeiomi.png', description: '750ml bottle' },
    { id: 125, name: 'Josh Sauvignon Blanc', category: 'wine', price: 13.99, image: 'alcoholimages/JoshSauvignonBlanc.png', description: '750ml bottle' },
    { id: 126, name: 'Josh Chardonnay', category: 'wine', price: 13.99, image: 'alcoholimages/JoshChardonnay.png', description: '750ml bottle' },
    { id: 127, name: 'Josh Cabernet Sauvignon', category: 'wine', price: 13.99, image: 'alcoholimages/JoshCabernetSauvignon.png', description: '750ml bottle' },
    { id: 128, name: 'Bogle Pinot Noir', category: 'wine', price: 10.99, image: 'alcoholimages/BoglePinotNoir.png', description: '750ml bottle' },
    { id: 129, name: 'Bogle Chardonnay', category: 'wine', price: 10.99, image: 'alcoholimages/BogleChardonnay.png', description: '750ml bottle' },
    { id: 130, name: 'Weon Carignan Red Wine', category: 'wine', price: 12.99, image: 'alcoholimages/WeonCarignanRedWine.png', description: '750ml bottle' },
    { id: 131, name: 'Hana Lychee Sake', category: 'sake', price: 14.99, image: 'alcoholimages/HanaLycheeSake.png', description: '750ml bottle' },
    { id: 132, name: 'Hana Fiji Apple Sake', category: 'sake', price: 14.99, image: 'alcoholimages/HanaFijiAppleSake.png', description: '750ml bottle' },
    { id: 133, name: 'Hana Yuzu Sake', category: 'sake', price: 14.99, image: 'alcoholimages/HanaYuzuSake.png', description: '750ml bottle' },
    { id: 134, name: 'Yuki Nigori White Peach Sake', category: 'sake', price: 11.99, image: 'alcoholimages/YukiNigoriWhitePeachSake.png', description: '375ml bottle' },
    { id: 135, name: 'Yuki Nigori Mango Sake', category: 'sake', price: 11.99, image: 'alcoholimages/YukiNigoriMangoSake.png', description: '375ml bottle' },
    { id: 136, name: 'Yuki Nigori Lychee Sake', category: 'sake', price: 11.99, image: 'alcoholimages/YukiNigoriLycheeSake.png', description: '375ml bottle' },
    { id: 137, name: 'Pure Dawn Ginjo', category: 'sake', price: 33.99, image: 'alcoholimages/PureDawnGinjo.png', description: '720ml bottle' },
    { id: 138, name: 'Pure Dusk Daiginjo', category: 'sake', price: 37.99, image: 'alcoholimages/PureDuskDaiginjo.png', description: '720ml bottle' },
    { id: 139, name: 'Snow Beauty Nigori Hakushika', category: 'sake', price: 26.99, image: 'alcoholimages/SnowBeautyNigoriHakushika.png', description: '720ml bottle' },
    { id: 140, name: 'Junmai Ginjo Kikusui', category: 'sake', price: 0, image: 'alcoholimages/JunmaiGinjoKikusui.png', description: '???' },
    { id: 141, name: 'Kendall Jackson Chardonnay', category: 'wine', price: 12.50, image: 'alcoholimages/KendallJacksonChardonnay.png', description: '750 ml' },
    { id: 142, name: 'Franciscan Estate Sauvignon Blanc', category: 'wine', price: 11.50, image: 'alcoholimages/FranciscanEstateSauvignonBlanc.png', description: '750 ml' },
    { id: 143, name: 'Ultraviolet Sparkling Rose Wine', category: 'wine', price: 12.99, image: 'alcoholimages/UltravioletSparklingRoseWine.png', description: '750 ml' },
    { id: 144, name: 'Kris Pinot Grigio', category: 'wine', price: 11.99, image: 'alcoholimages/KrisPinotGrigio.png', description: '750 ml' },
    { id: 145, name: 'Yellow Tail Chardonnay 1.5L', category: 'wine', price: 12.99, image: 'alcoholimages/YellowTailChardonnay1.5L.png', description: '1.5L' },
    { id: 146, name: 'Yellow Tail Chardonnay 750 ml', category: 'wine', price: 7.99, image: 'alcoholimages/YellowTailChardonnay750ml.png', description: '750 ml' },
    { id: 147, name: 'Yellow Tail Pinot Grigio 1.5L', category: 'wine', price: 12.99, image: 'alcoholimages/YellowTailPinotGrigio1.5L.png', description: '1.5L' },
    { id: 148, name: 'Yellow Tail Pink Moscato 1.5L', category: 'wine', price: 12.99, image: 'alcoholimages/YellowTailPinkMoscato1.5L.png', description: '1.5L' },
    { id: 149, name: 'Yellow Tail Moscato 1.5L', category: 'wine', price: 12.99, image: 'alcoholimages/YellowTailMoscato1.5L.png', description: '1.5L' },
    { id: 150, name: 'Yellow Tail Jammy Red Roo 1.5L', category: 'wine', price: 12.99, image: 'alcoholimages/YellowTailJammyRedRoo1.5L.png', description: '1.5L' },
    { id: 151, name: 'Yellow Tail Cabernet Sauvignon 750 ml', category: 'wine', price: 12.99, image: 'alcoholimages/YellowTailCabernetSauvignon750ml.png', description: '750 ml' },
    { id: 152, name: 'Yellow Tail Cabernet Sauvignon 1.5L', category: 'wine', price: 12.99, image: 'alcoholimages/YellowTailCabernetSauvignon1.5L.png', description: '1.5L' },
    { id: 153, name: 'Yellow Tail Pinot Noir', category: 'wine', price: 12.99, image: 'alcoholimages/YellowTailPinotNoir.png', description: '750 ml' },
    { id: 154, name: 'Yellow Tail Merlot', category: 'wine', price: 12.99, image: 'alcoholimages/YellowTailMerlot.png', description: '750 ml' },
    { id: 155, name: 'Bogle Cabernet Sauvignon', category: 'wine', price: 10.99, image: 'alcoholimages/BogleCabernetSauvignon.png', description: '750 ml' },
    { id: 156, name: 'Kinsen Plum Wine', category: 'wine', price: 10.99, image: 'alcoholimages/KinsenPlumWine.png', description: '750 ml' },
    { id: 157, name: 'Natural Plum Wine Kikkoman', category: 'wine', price: 12.99, image: 'alcoholimages/NaturalPlumWineKikkoman.png', description: '750 ml' },
    { id: 158, name: 'Trouble Red Cloudy Wine Gerard Bertrand', category: 'wine', price: 16.99, image: 'alcoholimages/TroubleRedCloudyWineGerardBertrand.png', description: '750 ml' },
    { id: 159, name: 'Trouble White Cloudy Wine Gerard Bertrand', category: 'wine', price: 16.99, image: 'alcoholimages/TroubleWhiteCloudyWineGerardBertrand.png', description: '750 ml' },
    { id: 160, name: 'Trouble Rose Cloudy Wine Gerard Bertrand', category: 'wine', price: 16.99, image: 'alcoholimages/TroubleRoseCloudyWineGerardBertrand.png', description: '750 ml' },
    { id: 161, name: 'Japanese Orchard Pear Sake Hakushika', category: 'wine', price: 16.99, image: 'alcoholimages/JapaneseOrchardPearSakeHakushika.png', description: '720 ml' },
    { id: 162, name: 'Japanese Orchard White Peach Hakushika', category: 'wine', price: 16.99, image: 'alcoholimages/JapaneseOrchardWhitePeachSakeHakushika.png', description: '720 ml' },
    { id: 163, name: 'Japanese Orchard Citrus Hakushika', category: 'wine', price: 16.99, image: 'alcoholimages/JapaneseOrchardCitrusSakeHakushika.png', description: '720 ml' },
    { id: 164, name: 'Gekkeikan Sake', category: 'wine', price: 16.99, image: 'alcoholimages/GekkeikanSake.png', description: '1.5L' },
    { id: 165, name: 'Light Gekkeikan Sake', category: 'wine', price: 16.99, image: 'alcoholimages/LightGekkeikanSake.png', description: '750 ml' },
    { id: 166, name: 'Premium Junmai Sake Ozeki', category: 'wine', price: 10.99, image: 'alcoholimages/PremiumJunmaiSakeOzeki.png', description: '750 ml' },
    { id: 167, name: 'Hakushika Kuromatsu Junmai Sake', category: 'wine', price: 17.99, image: 'alcoholimages/HakushikaKuromatsuJunmaiSake.png', description: '720 ml' },
    { id: 168, name: 'Gyeongju Beopju Grape Makgeolli', category: 'wine', price: 8.99, image: 'alcoholimages/GyeongjuBeopjuGrapeMakgeolli.png', description: '750 ml' },
    { id: 169, name: 'Melo THC Seltzer Grapefruit', category: 'wine', price: 3.50, image: 'alcoholimages/MeloTHCSeltzerGrapefruit.png', description: '355 ml' },
    { id: 170, name: 'Melo THC Seltzer Strawberry', category: 'wine', price: 3.50, image: 'alcoholimages/MeloTHCSeltzerStrawberry.png', description: '355 ml' },
    { id: 171, name: 'Melo THC Seltzer Wild Berry', category: 'wine', price: 3.50, image: 'alcoholimages/MeloTHCSeltzerWildBerry.png', description: '355 ml' },
    { id: 172, name: 'Weatherford Doux Sparkling Grape Juice 16 MG THC', category: 'wine', price: 6.00, image: 'alcoholimages/WeatherfordDouxSparklingGrapeJuice16MGTHC.png', description: '12 oz' },
    { id: 173, name: 'Sunbird Lemon Lime THC Seltzer', category: 'wine', price: 3.99, image: 'alcoholimages/SunbirdLemonLimeTHCSeltzer.png', description: '12 fl oz' },
    { id: 174, name: 'Electric Lemonade 10mg THC Weatherford', category: 'wine', price: 6.00, image: 'alcoholimages/ElectricLemonade10mgTHCWeatherford.png', description: '12 oz' },
    { id: 175, name: 'Buzzballz Choco Chiller', category: 'alcohol', price: 4.99, image: 'alcoholimages/BuzzballzChocoChiller.png', description: '187 ml can' },
    { id: 176, name: 'Buzzballz Espresso Martini', category: 'alcohol', price: 4.99, image: 'alcoholimages/BuzzballzEspressoMartini.png', description: '187 ml can' },
    { id: 177, name: 'Sho Chiku Bai Organic', category: 'alcohol', price: 9.99, image: 'alcoholimages/ShoChikuBaiOrganic.png', description: '300 ml bottle' },
    { id: 178, name: 'Sho Chiku Bai Premium', category: 'alcohol', price: 9.99, image: 'alcoholimages/ShoChikuBaiPremium.png', description: '300 ml bottle' },
    { id: 179, name: 'Sho Chiku Bai Creme De Sake', category: 'alcohol', price: 9.99, image: 'alcoholimages/ShoChikuBaiCremeDeSake.png', description: '300 ml bottle' },
    { id: 180, name: 'Takara Plum Wine', category: 'alcohol', price: 23.99, image: 'alcoholimages/TakaraPlumWine1.5L.png', description: '1.5L bottle' },
    { id: 181, name: 'Takara Plum Wine', category: 'alcohol', price: 12.99, image: 'alcoholimages/TakaraPlumWine750ml.png', description: '750 ml bottle' },
    { id: 182, name: 'Gang Chu Soju Plum', category: 'alcohol', price: 7.99, image: 'alcoholimages/GangChuSojuPlum.png', description: '355 ml bottle' },
    { id: 183, name: 'Gang Chu Soju Strawberry', category: 'alcohol', price: 7.99, image: 'alcoholimages/GangChuSojuStrawberry.png', description: '355 ml bottle' },
    { id: 184, name: 'Gang Chu Soju Pineapple', category: 'alcohol', price: 7.99, image: 'alcoholimages/GangChuSojuPineapple.png', description: '355 ml bottle' },
    { id: 185, name: 'Gang Chu Soju Peach', category: 'alcohol', price: 7.99, image: 'alcoholimages/GangChuSojuPeach.png', description: '355 ml bottle' },
    { id: 186, name: 'Gang Chu Soju Lychee', category: 'alcohol', price: 7.99, image: 'alcoholimages/GangChuSojuLychee.png', description: '355 ml bottle' },
    { id: 187, name: 'Gang Chu Soju Apple', category: 'alcohol', price: 7.99, image: 'alcoholimages/GangChuSojuApple.png', description: '355 ml bottle' },
    { id: 188, name: 'San Miguel', category: 'beer', price: 13.99, image: 'alcoholimages/SanMiguel.png', description: '6 pack' },
    { id: 189, name: 'Sapporo Beer', category: 'beer', price: 10.99, image: 'alcoholimages/SapporoBeer.png', description: '6 pack' },
    { id: 190, name: 'Sapporo Light Beer', category: 'beer', price: 10.99, image: 'alcoholimages/SapporoLightBeer.png', description: '6 pack' },
    { id: 191, name: 'Red Horse Beer', category: 'beer', price: 12.99, image: 'alcoholimages/RedHorseBeer.png', description: '6 pack' },
    { id: 192, name: 'Lucky Buddha Beer', category: 'beer', price: 13.99, image: 'alcoholimages/LuckyBuddhaBeer.png', description: '6 pack' },
    { id: 193, name: 'Heineken Beer', category: 'beer', price: 11.99, image: 'alcoholimages/HeinekenBeer.png', description: '6 pack' },
    { id: 194, name: 'Carlsberg Beer', category: 'beer', price: 13.99, image: 'alcoholimages/CarlsbergBeer.png', description: '6 pack' },
    { id: 195, name: 'Kirin Ichiban Beer', category: 'beer', price: 11.99, image: 'alcoholimages/KirinIchibanBeer.png', description: '6 pack' },
    { id: 196, name: 'Lager 1664 Beer', category: 'beer', price: 14.99, image: 'alcoholimages/Lager1664Beer.png', description: '6 pack' },
    { id: 197, name: 'Hofbrau Original Beer', category: 'beer', price: 13.99, image: 'alcoholimages/HofbrauOriginalBeer.png', description: '6 pack' },
    { id: 198, name: 'Crabbies Beer', category: 'beer', price: 9.99, image: 'alcoholimages/CrabbiesBeer.png', description: '4 pack' },
    { id: 199, name: 'Corona Extra', category: 'beer', price: 11.99, image: 'alcoholimages/CoronaExtra.png', description: '6 pack' },
    { id: 200, name: 'Corona Light', category: 'beer', price: 11.99, image: 'alcoholimages/CoronaLight.png', description: '6 pack' },
    { id: 201, name: 'Modelo Negra', category: 'beer', price: 11.99, image: 'alcoholimages/ModeloNegra.png', description: '6 pack' },
    { id: 202, name: 'Golden Monkey Victory', category: 'beer', price: 14.99, image: 'alcoholimages/GoldenMonkeyVictory.png', description: '6 pack' },
    { id: 203, name: 'Modelo Especial', category: 'beer', price: 11.99, image: 'alcoholimages/ModeloEspecial.png', description: '6 pack' },
    { id: 204, name: 'Red Stripe Beer', category: 'beer', price: 9.99, image: 'alcoholimages/RedStripeBeer.png', description: '6 pack' },
    { id: 205, name: 'Kingfisher Beer', category: 'beer', price: 12.99, image: 'alcoholimages/KingfisherBeer.png', description: '6 pack' },
    { id: 206, name: 'Mu Cha Cho IPA', category: 'beer', price: 13.99, image: 'alcoholimages/MuChaChoIPA.png', description: '6 pack' },
    { id: 207, name: 'A-OK IPA', category: 'beer', price: 13.99, image: 'alcoholimages/AOKIPA.png', description: '6 pack' },
    { id: 208, name: 'Spring Street IPA', category: 'beer', price: 13.99, image: 'alcoholimages/SpringStreetIPA.png', description: '6 pack' },
    { id: 209, name: 'Pale Ale IPA', category: 'beer', price: 13.99, image: 'alcoholimages/PaleAleIPA.png', description: '6 pack' }
];


function displayProducts(productsToDisplay) {
    console.log(productsToDisplay); // Add this line to debug
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
