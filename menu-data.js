/**
 * ====================================================================
 * FATİH CAMİ MENÜ - YEMEK VE İÇECEK LİSTESİ (MENU DATA)
 * ====================================================================
 * Bu dosyada menüdeki tüm ürünleri düzenleyebilir,
 * yeni ürün ekleyebilir veya istemediğiniz ürünleri silebilirsiniz.
 *
 * 📌 KATEGORİ KODLARI (category):
 * - "grill"      ➔ Grill (Döner, Dürüm, Izgaralar, Balık/Sucuk Ekmek, Pommes)
 * - "tatli"      ➔ Tatlı (Tatlılar & Tatlı İkramları)
 * - "hamur-isi"  ➔ Hamur İşi (Börek, Pide, Pizza, Mantı vb.)
 * - "icecek"     ➔ İçecek (Sıcak & Soğuk İçecekler)
 * - "salata"     ➔ Salata (Taze & Sağlıklı Salatalar & Mezeler)
 *
 * 📌 ROZET RENKLERİ (badgeClass):
 * - "chef"  ➔ Turuncu (Popüler, Şefin Seçimi vb.)
 * - "vegan" ➔ Yeşil (Organik, Vejetaryen, Fit vb.)
 * - "spicy" ➔ Kırmızı (Özel Lezzet, Acılı vb.)
 * ====================================================================
 */

const menuItems = [
  {
    id: 1,
    category: "grill",
    price: "8.00 €",
    img: "./images/doner-kebab.jpg",
    badgeClass: "chef",
    name: {
      tr: "Döner Ekmek & Dürüm",
      en: "Doner Kebab (Bread or Wrap)",
      de: "Döner Kebab (Brot oder Dürüm)",
    },
    desc: {
      tr: "Özel yaprak et döner, taze çıtır ekmek veya lavaşta. İçindekiler: Domates, soğan, marul, maydanoz ve özel sos.",
      en: "Thinly sliced prime beef doner in crusty bread or wrap. Ingredients: Tomatoes, onions, lettuce, parsley, and special sauce.",
      de: "Feinstes Yaprak-Dönerfleisch im ofenfrischen Brot oder Dürüm. Zutaten: Tomaten, Zwiebeln, Salat, Petersilie und Spezialsauce.",
    },
    badge: {
      tr: "Popüler",
      en: "Popular",
      de: "Beliebt",
    },
    ingredients: {
      tr: ["🍅 Domates", "🧅 Soğan", "🥬 Marul", "🌿 Maydanoz", "🥣 Özel Sos"],
      en: [
        "🍅 Tomatoes",
        "🧅 Onions",
        "🥬 Lettuce",
        "🌿 Parsley",
        "🥣 House Sauce",
      ],
      de: [
        "🍅 Tomaten",
        "🧅 Zwiebeln",
        "🥬 Salat",
        "🌿 Petersilie",
        "🥣 Spezialsauce",
      ],
    },
  },
  {
    id: 2,
    category: "grill",
    price: "8.00 €",
    img: "./images/adana-durum.jpg",
    badgeClass: "spicy",
    name: {
      tr: "Adana Dürüm",
      en: "Adana Kebab Wrap",
      de: "Adana Kebab Dürüm",
    },
    desc: {
      tr: "Közde pişirilmiş zırh kıyması acılı kebap, sıcak ince lavaşta. İçindekiler: Domates, soğan, marul, maydanoz ve özel sos.",
      en: "Charcoal-grilled spicy minced kebab wrapped in warm lavash. Ingredients: Tomatoes, onions, lettuce, parsley, and special sauce.",
      de: "Würziger Hackfleischspieß vom Holzkohlegrill im warmen Fladenbrot. Zutaten: Tomaten, Zwiebeln, Salat, Petersilie und Spezialsauce.",
    },
    badge: {
      tr: "Özel Lezzet",
      en: "Specialty",
      de: "Spezialität",
    },
    ingredients: {
      tr: ["🍅 Domates", "🧅 Soğan", "🥬 Marul", "🌿 Maydanoz", "🥣 Özel Sos"],
      en: [
        "🍅 Tomatoes",
        "🧅 Onions",
        "🥬 Lettuce",
        "🌿 Parsley",
        "🥣 House Sauce",
      ],
      de: [
        "🍅 Tomaten",
        "🧅 Zwiebeln",
        "🥬 Salat",
        "🌿 Petersilie",
        "🥣 Spezialsauce",
      ],
    },
  },
  {
    id: 3,
    category: "grill",
    price: "8.00 €",
    img: "./images/tavuk-sis-durum.jpg",
    badgeClass: "chef",
    name: {
      tr: "Tavuk Şiş Dürüm",
      en: "Chicken Shish Wrap",
      de: "Hähnchenspieß Dürüm",
    },
    desc: {
      tr: "Özel sosla terbiye edilmiş sulu tavuk göğsü şiş, sıcak lavaşta. İçindekiler: Domates, soğan, marul, maydanoz ve özel sos.",
      en: "Tender marinated chicken skewers in flatbread wrap. Ingredients: Tomatoes, onions, lettuce, parsley, and special sauce.",
      de: "Zart marinierte Hähnchenspieße im Fladenbrot-Wrap. Zutaten: Tomaten, Zwiebeln, Salat, Petersilie und Spezialsauce.",
    },
    badge: {
      tr: "Favori",
      en: "Favorite",
      de: "Favorit",
    },
    ingredients: {
      tr: ["🍅 Domates", "🧅 Soğan", "🥬 Marul", "🌿 Maydanoz", "🥣 Özel Sos"],
      en: [
        "🍅 Tomatoes",
        "🧅 Onions",
        "🥬 Lettuce",
        "🌿 Parsley",
        "🥣 House Sauce",
      ],
      de: [
        "🍅 Tomaten",
        "🧅 Zwiebeln",
        "🥬 Salat",
        "🌿 Petersilie",
        "🥣 Spezialsauce",
      ],
    },
  },
  {
    id: 4,
    category: "grill",
    price: "7.00 €",
    img: "./images/balik-ekmek.jpg",
    badgeClass: "chef",
    name: {
      tr: "Balık Ekmek",
      en: "Traditional Fish Sandwich",
      de: "Balık Ekmek (Fischbrötchen)",
    },
    desc: {
      tr: "Izgarada çıtır pişmiş uskumru fileto, yarım çıtır somun ekmekte. İçindekiler: Domates, soğan, marul, maydanoz, özel sos ve limon.",
      en: "Crispy grilled mackerel fillet in crusty bread. Ingredients: Tomatoes, onions, lettuce, parsley, special sauce, and lemon.",
      de: "Frisch gegrilltes Makrelenfilet im Weißbrot. Zutaten: Tomaten, Zwiebeln, Salat, Petersilie, Spezialsauce und Zitrone.",
    },
    badge: {
      tr: "Geleneksel",
      en: "Traditional",
      de: "Traditionell",
    },
    ingredients: {
      tr: [
        "🍅 Domates",
        "🧅 Soğan",
        "🥬 Marul",
        "🌿 Maydanoz",
        "🥣 Özel Sos",
        "🍋 Limon",
      ],
      en: [
        "🍅 Tomatoes",
        "🧅 Onions",
        "🥬 Lettuce",
        "🌿 Parsley",
        "🥣 House Sauce",
        "🍋 Lemon",
      ],
      de: [
        "🍅 Tomaten",
        "🧅 Zwiebeln",
        "🥬 Salat",
        "🌿 Petersilie",
        "🥣 Spezialsauce",
        "🍋 Zitrone",
      ],
    },
  },
  {
    id: 5,
    category: "grill",
    price: "5.00 €",
    img: "./images/sucuk-ekmek.jpg",
    badgeClass: "spicy",
    name: {
      tr: "Sucuk Ekmek",
      en: "Grilled Sucuk Sandwich",
      de: "Sucuk-Sandwich vom Grill",
    },
    desc: {
      tr: "Kömür ateşinde ızgaralanmış bol baharatlı kasap sucuğu, çıtır ekmek arasında ızgara biber ve domates ile.",
      en: "Spiced beef Turkish sucuk sausage grilled over fire, packed in crusty bread with roasted peppers and tomatoes.",
      de: "Würzige türkische Knoblauchwurst frisch vom Grill im knusprigen Brot mit Grillpaprika und Tomaten.",
    },
    badge: {
      tr: "Özel Lezzet",
      en: "Specialty",
      de: "Spezialität",
    },
    ingredients: {
      tr: ["🌭 Kasap Sucuk", "🧅 Soğan", "🫑 Izgara Biber", "🍅 Domates"],
      en: ["🌭 Spicy Sucuk", "🧅 Onions", "🫑 Grilled Pepper", "🍅 Tomato"],
      de: ["🌭 Sucuk-Wurst", "🧅 Zwiebeln", "🫑 Grillpaprika", "🍅 Tomate"],
    },
  },
  {
    id: 6,
    isVegan: true,
    category: "grill",
    price: "3.00 €",
    img: "./images/pommes-frites.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Pommes (Patates Kızartması)",
      en: "Crispy Pommes Frites",
      de: "Knusprige Pommes Frites",
    },
    desc: {
      tr: "Altın sarısı çıtır patates kızartması, özel baharat harmanı, ketçap ve mayonez eşliğinde.",
      en: "Golden crispy skin-on french fries seasoned with house spices, served with ketchup and mayonnaise.",
      de: "Goldgelb und kross gebackene Pommes Frites mit Spezial-Gewürzsalz, Ketchup und Mayonnaise.",
    },
    badge: {
      tr: "Çıtır",
      en: "Crispy",
      de: "Knusprig",
    },
    ingredients: {
      tr: [
        "🍟 Patates Kızartması",
        "🥫 Ketçap",
        "🥣 Mayonez",
        "🧂 Özel Baharat",
      ],
      en: [
        "🍟 French Fries",
        "🥫 Ketchup",
        "🥣 Mayonnaise",
        "🧂 House Seasoning",
      ],
      de: [
        "🍟 Pommes Frites",
        "🥫 Ketchup",
        "🥣 Mayonnaise",
        "🧂 Spezial-Gewürz",
      ],
    },
  },
  {
    id: 7,
    category: "tatli",
    price: "8.50 €",
    img: "./images/baklava.jpg",
    badgeClass: "chef",
    name: {
      tr: "Antep Fıstıklı Baklava",
      en: "Pistachio Baklava",
      de: "Pistazien-Baklava",
    },
    desc: {
      tr: "40 kat çıtır ince yufka, bol Antep boz fıstığı ve doğal pancar şekeri şerbeti ile fırınlanmış geleneksel lezzet.",
      en: "Traditional 40-layer flaky filo pastry packed with prime emerald pistachios and pure sugar syrup.",
      de: "Hauchdünner traditioneller Filoteig mit feinsten Antep-Pistazien und aromatischem Sirup.",
    },
    badge: {
      tr: "Geleneksel",
      en: "Traditional",
      de: "Traditionell",
    },
    ingredients: {
      tr: [
        "🥜 Antep Fıstığı",
        "🧈 Sade Yağ",
        "🍯 Şerbet",
        "🌾 El Açması Yufka",
      ],
      en: ["🥜 Pistachio", "🧈 Clarified Butter", "🍯 Syrup", "🌾 Filo Pastry"],
      de: ["🥜 Pistazie", "🧈 Butterschmalz", "🍯 Sirup", "🌾 Filoteig"],
    },
  },
  {
    id: 8,
    category: "tatli",
    price: "6.50 €",
    img: "./images/yas-pasta.jpg",
    badgeClass: "chef",
    name: {
      tr: "Yaş Pasta Çeşitleri",
      en: "Fresh Gourmet Layer Cakes",
      de: "Frische Sahnetorten-Auswahl",
    },
    desc: {
      tr: "Günlük taze hazırlanan çikolatalı, frambuazlı ve çilekli nefis yaş pasta dilimleri.",
      en: "Daily fresh baked rich Belgian chocolate, strawberry cream, and fruit layer cake slices.",
      de: "Täglich frisch gebackene Schokoladen- und Frucht-Sahnetorten aus feinsten Zutaten.",
    },
    badge: {
      tr: "Günlük Taze",
      en: "Fresh Daily",
      de: "Tagesfrisch",
    },
    ingredients: {
      tr: [
        "🍫 Belçika Çikolatası",
        "🍓 Taze Çilek",
        "🥛 Taze Krema",
        "🎂 Yumuşak Pandispanya",
      ],
      en: [
        "🍫 Belgian Chocolate",
        "🍓 Fresh Strawberry",
        "🥛 Whipped Cream",
        "🎂 Sponge Cake",
      ],
      de: [
        "🍫 Schokolade",
        "🍓 Frische Erdbeere",
        "🥛 Sahne",
        "🎂 Biskuitboden",
      ],
    },
  },
  {
    id: 9,
    category: "tatli",
    price: "6.00 €",
    img: "./images/krep.jpg",
    badgeClass: "chef",
    name: {
      tr: "Çikolatalı & Muzlu Krep",
      en: "Sweet French Crepes",
      de: "Süße Crêpes (Schoko & Banane)",
    },
    desc: {
      tr: "Taze pişmiş Fransız usulü ince krep, akışkan çikolata sosu, muz ve çilek dilimleri, fındık parçaları ile.",
      en: "Fresh thin crepe filled with warm chocolate sauce, sliced banana, strawberries and crushed hazelnuts.",
      de: "Frisch zubereitete Crêpes mit zarter Schokoladensauce, Bananen, Erdbeeren und Haselnüssen.",
    },
    badge: {
      tr: "Popüler",
      en: "Popular",
      de: "Beliebt",
    },
    ingredients: {
      tr: [
        "🥞 İnce Krep",
        "🍫 Sıcak Çikolata",
        "🍌 Taze Muz",
        "🍓 Çilek",
        "🌰 Kavrulmuş Fındık",
      ],
      en: [
        "🥞 Thin Crepe",
        "🍫 Warm Chocolate",
        "🍌 Fresh Banana",
        "🍓 Strawberry",
        "🌰 Roasted Hazelnut",
      ],
      de: [
        "🥞 Crêpe",
        "🍫 Schokoladensauce",
        "🍌 Banane",
        "🍓 Erdbeere",
        "🌰 Haselnüsse",
      ],
    },
  },
  {
    id: 10,
    category: "tatli",
    price: "2.00 €",
    img: "./images/churros-citir.jpg",
    badgeClass: "chef",
    name: {
      tr: "Çıtır İspanyol Churros (3 Adet)",
      en: "Crispy Spanish Churros (3 Pcs)",
      de: "Knusprige Churros (3 Stück)",
    },
    desc: {
      tr: "3 adet sıcacık çıtır çıtır churros çubukları, tarçınlı şeker kaplaması ve yanında sıcak akışkan Nutella çikolata sosu ile.",
      en: "3 freshly fried golden crispy churros rolled in cinnamon sugar, served with warm dipping Nutella chocolate sauce.",
      de: "3 ofenfrische goldbraune Churros in Zimt-Zucker gewälzt, serviert mit flüssiger warmer Nutella-Schokosauce.",
    },
    badge: {
      tr: "3 Adet / 2.00 €",
      en: "3 Pcs / 2.00 €",
      de: "3 Stück / 2.00 €",
    },
    ingredients: {
      tr: ["🥖 3 Adet Çıtır Churros", "🍫 Sıcak Nutella Sos", "✨ Tarçınlı Şeker"],
      en: ["🥖 3 Crispy Churros", "🍫 Warm Nutella Dip", "✨ Cinnamon Sugar"],
      de: ["🥖 3 Knusprige Churros", "🍫 Warme Nutella-Sauce", "✨ Zimt-Zucker"],
    },
  },
  {
    id: 11,
    category: "tatli",
    price: "3.00 €",
    img: "./images/nutellali-pankek.jpg",
    badgeClass: "chef",
    name: {
      tr: "Nutellalı Taze Pankek (1 Adet)",
      en: "Fresh Nutella Pancake (1 Pc)",
      de: "Frischer Nutella-Pancake (1 Stück)",
    },
    desc: {
      tr: "Taze pişmiş altın sarısı yumuşacık pofuduk pankek, bol akışkan Nutella, çilek dilimleri ve pudra şekeri ile.",
      en: "Freshly made thick and fluffy golden pancake served with warm Nutella and fresh berries.",
      de: "Frisch zubereiteter fluffiger Pancake serviert mit reichlich Nutella und frischen Beeren.",
    },
    badge: {
      tr: "Tane / 3.00 €",
      en: "1 Pc / 3.00 €",
      de: "1 Stück / 3.00 €",
    },
    ingredients: {
      tr: ["🥞 Pofuduk Pankek (1 Adet)", "🍫 Bol Nutella", "🍓 Taze Çilek"],
      en: ["🥞 Fluffy Pancake (1 Pc)", "🍫 Rich Nutella", "🍓 Fresh Berry"],
      de: [
        "🥞 Fluffiger Pancake (1 Stück)",
        "🍫 Reichlich Nutella",
        "🍓 Frische Beeren",
      ],
    },
  },
  {
    id: 12,
    category: "hamur-isi",
    price: "6.00 €",
    img: "./images/su-boregi.jpg",
    badgeClass: "chef",
    name: {
      tr: "El Açması Peynirli Su Böreği",
      en: "Handmade Turkish Water Borek",
      de: "Traditioneller Käse-Wasserbörek",
    },
    desc: {
      tr: "Kat kat haşlanmış tereyağlı incecik yufka arasına bol Ezine peyniri ve taze maydanoz.",
      en: "Boiled delicate filo pastry layers stuffed with aged Turkish feta, fresh parsley and melted butter.",
      de: "Hauchdünner geschichteter Teig mit echtem Ezine-Schafskäse, Petersilie und feiner Butter.",
    },
    badge: {
      tr: "Geleneksel",
      en: "Traditional",
      de: "Traditionell",
    },
    ingredients: {
      tr: [
        "🧀 Ezine Peyniri",
        "🧈 Hakiki Tereyağı",
        "🌿 Taze Maydanoz",
        "🌾 El Açması Yufka",
      ],
      en: [
        "🧀 Feta Cheese",
        "🧈 Pure Butter",
        "🌿 Fresh Parsley",
        "🌾 Thin Filo",
      ],
      de: [
        "🧀 Schafskäse",
        "🧈 Reine Butter",
        "🌿 Petersilie",
        "🌾 Teigblätter",
      ],
    },
  },
  {
    id: 13,
    category: "hamur-isi",
    price: "6.50 €",
    img: "./images/tepsi-boregi.jpg",
    badgeClass: "chef",
    name: {
      tr: "Kıymalı Çıtır Tepsi Böreği",
      en: "Crispy Minced Meat Tray Borek",
      de: "Knuspriger Hackfleisch-Börek",
    },
    desc: {
      tr: "Fırından nar gibi kızarmış çıtır yufka katları, baharatlı kıyma ve soğan harcı, susam & çörek otu ile.",
      en: "Oven-baked golden crispy layered filo pastry stuffed with seasoned minced beef, onions and sesame seeds.",
      de: "Ofenfrischer knuspriger Blätterteig mit gewürztem Rinderhackfleisch, Zwiebeln und Sesam.",
    },
    badge: {
      tr: "Fırından Yeni",
      en: "Fresh Baked",
      de: "Ofenfrisch",
    },
    ingredients: {
      tr: [
        "🥩 Baharatlı Kıyma",
        "🧅 Karamelize Soğan",
        "🌾 Çıtır Yufka",
        "✨ Susam & Çörek Otu",
      ],
      en: [
        "🥩 Minced Beef",
        "🧅 Onions",
        "🌾 Crispy Filo",
        "✨ Sesame & Nigella",
      ],
      de: ["🥩 Rinderhack", "🧅 Zwiebeln", "🌾 Knusperteig", "✨ Sesam"],
    },
  },
  {
    id: 14,
    category: "hamur-isi",
    price: "2.50 €",
    img: "./images/pogaca-taze.jpg",
    badgeClass: "chef",
    name: {
      tr: "Sıcak Poğaça Çeşitleri",
      en: "Fresh Baked Turkish Pogaca Buns",
      de: "Ofenfrische Poğaça-Taschen",
    },
    desc: {
      tr: "Yumuşacık mayalı hamur, peynirli, zeytinli veya patatesli seçenekleri ile fırından taze ikram.",
      en: "Fluffy, savory Turkish breakfast pastries with cheese, black olives, or spiced potato filling.",
      de: "Flaumige Hefe-Teigtaschen wahlweise mit Käse, Oliven oder Kartoffelfüllung.",
    },
    badge: {
      tr: "Sıcak Servis",
      en: "Served Warm",
      de: "Warm serviert",
    },
    ingredients: {
      tr: [
        "🧀 Beyaz Peynir / Zeytin",
        "🧈 Tereyağlı Hamur",
        "✨ Çörek Otu",
        "🥚 Yumurta Sarısı",
      ],
      en: [
        "🧀 Cheese / Olives",
        "🧈 Butter Dough",
        "✨ Nigella Seeds",
        "🥚 Egg Glaze",
      ],
      de: [
        "🧀 Käse / Oliven",
        "🧈 Butterhefeteig",
        "✨ Schwarzkümmel",
        "🥚 Eigelb",
      ],
    },
  },
  {
    id: 15,
    category: "hamur-isi",
    price: "3.00 €",
    img: "./images/gozleme.jpg",
    badgeClass: "chef",
    name: {
      tr: "Sacda Taze Gözleme",
      en: "Traditional Sac Griddle Gozleme",
      de: "Traditionelle Gözleme vom Sac",
    },
    desc: {
      tr: "Sac üzerinde taze açılıp tereyağlanan ince yufka; peynirli, patatesli veya ıspanaklı nefis lezzet.",
      en: "Hand-rolled thin Turkish flatbread cooked on a hot griddle, filled with cheese, spinach or spiced potatoes.",
      de: "Hauchdünner Teigfladen auf der heißen Platte gebacken, gefüllt mit Schafskäse, Spinat oder Kartoffeln.",
    },
    badge: {
      tr: "Sacda Pişmiş",
      en: "Griddled",
      de: "Frisch vom Sac",
    },
    ingredients: {
      tr: ["🧀 Peynir / Ispanak / Patates", "🌾 İnce Yufka", "🧈 Köy Tereyağı"],
      en: ["🧀 Cheese / Spinach / Potato", "🌾 Thin Dough", "🧈 Farm Butter"],
      de: ["🧀 Käse / Spinat / Kartoffel", "🌾 Teigfladen", "🧈 Bauernbutter"],
    },
  },
  {
    id: 16,
    isVegan: true,
    category: "icecek",
    price: "2.00 €",
    img: "./images/kola.jpg",
    badgeClass: "chef",
    name: {
      tr: "Coca-Cola (Kutu)",
      en: "Coca-Cola (Can)",
      de: "Coca-Cola (Dose)",
    },
    desc: {
      tr: "Buz gibi soğuk ferahlatıcı orijinal lezzet kutu kola, limon dilimi ve buz ile.",
      en: "Ice cold original refreshing Coca-Cola can, served with ice cubes and a lemon slice.",
      de: "Eiskalte erfrischende Coca-Cola Dose, serviert mit Eiswürfeln und Zitrone.",
    },
    badge: {
      tr: "Soğuk İçecek",
      en: "Cold Drink",
      de: "Kaltgetränk",
    },
    ingredients: {
      tr: ["🧊 Buzlu Servis", "🍋 Limon Dilimi"],
      en: ["🧊 Served with Ice", "🍋 Lemon Slice"],
      de: ["🧊 Mit Eiswürfeln", "🍋 Zitronenscheibe"],
    },
  },
  {
    id: 17,
    isVegan: true,
    category: "icecek",
    price: "2.00 €",
    img: "./images/fanta.jpg",
    badgeClass: "chef",
    name: {
      tr: "Fanta Portakal (Kutu)",
      en: "Fanta Orange (Can)",
      de: "Fanta Orange (Dose)",
    },
    desc: {
      tr: "Güneş gibi parlayan meyveli ferahlık, soğuk kutu Fanta portakal aroması.",
      en: "Fruity and bubbly chilled Fanta orange soda served ice cold.",
      de: "Fruchtig-spritzige Fanta Orange eiskalt serviert.",
    },
    badge: {
      tr: "Meyveli",
      en: "Fruity",
      de: "Fruchtig",
    },
    ingredients: {
      tr: ["🧊 Buzlu Servis", "🍊 Portakal Ferahlığı"],
      en: ["🧊 Served with Ice", "🍊 Orange Refreshment"],
      de: ["🧊 Mit Eiswürfeln", "🍊 Orangengeschmack"],
    },
  },
  {
    id: 18,
    isVegan: true,
    category: "icecek",
    price: "2.00 €",
    img: "./images/sprite.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Uludağ Gazoz (Kutu)",
      en: "Uludağ Gazoz (Can)",
      de: "Uludağ Gazoz (Dose)",
    },
    desc: {
      tr: "Türkiye'nin eşsiz lezzeti, geleneksel Uludağ Gazoz.",
      en: "Crisp lemon-lime flavored sparkling soda served chilled with lemon slice.",
      de: "Erfrischende Zitronen-Limetten-Limonade eiskalt serviert.",
    },
    badge: {
      tr: "Ferahlatıcı",
      en: "Refreshing",
      de: "Erfrischend",
    },
    ingredients: {
      tr: ["🧊 Buzlu Servis", "🍋 Limon Ferahlığı"],
      en: ["🧊 Served with Ice", "🍋 Lemon Refreshment"],
      de: ["🧊 Mit Eiswürfeln", "🍋 Zitronenfrische"],
    },
  },
  {
    id: 19,
    isVegan: true,
    category: "icecek",
    price: "3.00 €",
    img: "./images/salgam.jpg",
    badgeClass: "spicy",
    name: {
      tr: "Geleneksel Şalgam Suyu",
      en: "Traditional Turnip Juice (Shalgam)",
      de: "Traditioneller Şalgam-Saft",
    },
    desc: {
      tr: "Adana usulü fermante mor havuç ve şalgam suyu; isteğe göre acılı veya tatlı ikram.",
      en: "Traditional fermented purple carrot & turnip juice from Adana, savory & refreshing.",
      de: "Traditioneller fermentierter Rübensaft aus Adana, würzig und erfrischend.",
    },
    badge: {
      tr: "Doğal Fermente",
      en: "Traditional",
      de: "Traditionell",
    },
    ingredients: {
      tr: ["🥕 Mor Havuç", "🌾 Doğal Maya", "🌶️ Acılı / Acısız"],
      en: ["🥕 Purple Carrot", "🌾 Natural Culture", "🌶️ Spicy / Mild"],
      de: ["🥕 Lila Karotte", "🌾 Fermentation", "🌶️ Scharf / Mild"],
    },
  },
  {
    id: 20,
    isVegan: true,
    category: "icecek",
    price: "1.00 €",
    img: "./images/su.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Doğal Kaynak Suyu",
      en: "Natural Spring Water",
      de: "Natürliches Quellwasser",
    },
    desc: {
      tr: "Dağ zirvelerinden gelen zengin mineralli, saf ve berrak soğuk kaynak suyu.",
      en: "Pure natural bottled spring water from pristine mountain springs, served chilled.",
      de: "Reines natürliches Quellwasser, kalt und erfrischend serviert.",
    },
    badge: {
      tr: "Doğal",
      en: "Natural",
      de: "Natürlich",
    },
    ingredients: {
      tr: ["💧 Saf Kaynak Suyu", "🧊 İsteğe Göre Soğuk"],
      en: ["💧 Pure Spring Water", "🧊 Chilled"],
      de: ["💧 Reines Quellwasser", "🧊 Gekühlt"],
    },
  },
  {
    id: 21,
    category: "icecek",
    price: "1.50 €",
    img: "./images/ayran.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Köpüklü Yayık Ayranı",
      en: "Traditional Churned Ayran",
      de: "Klassischer Schaum-Ayran",
    },
    desc: {
      tr: "Geleneksel bakır kapta bol köpüklü taze köy yoğurdu ayranı ve kuru nane dokunuşu.",
      en: "Traditional Turkish churned yogurt drink served extra frothy with a pinch of dried mint.",
      de: "Cremig aufgeschäumtes Joghurtgetränk nach traditioneller Rezeptur mit Minze.",
    },
    badge: {
      tr: "Köy Yoğurdu",
      en: "Farm Yogurt",
      de: "Bauernjoghurt",
    },
    ingredients: {
      tr: ["🥛 Doğal Yoğurt", "🧂 Hafif Tuz", "🌿 Kuru Nane"],
      en: ["🥛 Natural Yogurt", "🧂 Light Salt", "🌿 Dried Mint"],
      de: ["🥛 Naturjoghurt", "🧂 Prise Salz", "🌿 Minze"],
    },
  },
  {
    id: 22,
    isVegan: true,
    category: "icecek",
    price: "1.00 €",
    img: "./images/cay.jpg",
    badgeClass: "chef",
    name: {
      tr: "Taze Demleme Türk Çayı",
      en: "Freshly Brewed Turkish Tea",
      de: "Traditioneller Türkischer Schwarztee",
    },
    desc: {
      tr: "Rize Karadeniz yaylalarından toplanan özel harman, taze demlenmiş tavşan kanı çay.",
      en: "Authentic Turkish black tea freshly brewed in double-kettles, served in a traditional tulip glass.",
      de: "Frisch aufgebrühter türkischer Schwarztee serviert im traditionellen Tulpenglas.",
    },
    badge: {
      tr: "Taze Demleme",
      en: "Fresh Brew",
      de: "Frisch gebrüht",
    },
    ingredients: {
      tr: ["🌱 Rize Çay Yaprakları", "🫖 Taze Demleme", "✨ İnce Belli Bardak"],
      en: ["🌱 Black Tea Leaves", "🫖 Fresh Brewed", "✨ Tulip Glass"],
      de: ["🌱 Teeblätter", "🫖 Frisch zubereitet", "✨ Tulpenglas"],
    },
  },
  {
    id: 23,
    isVegan: true,
    category: "icecek",
    price: "2.50 €",
    img: "./images/turk-kahvesi.jpg",
    badgeClass: "chef",
    name: {
      tr: "Bol Köpüklü Türk Kahvesi",
      en: "Traditional Turkish Coffee",
      de: "Traditioneller Türkischer Mokka",
    },
    desc: {
      tr: "Taş değirmende taze çekilmiş çekirdekler, ağır ateşte bol köpüklü pişirilip lokum ile servis edilir.",
      en: "Slow-cooked authentic Turkish coffee with thick rich foam, served with Turkish delight and water.",
      de: "Traditionell langsam zubereiteter Mokka mit samtigem Schaum, serviert mit feinem Lokum.",
    },
    badge: {
      tr: "Közde Pişmiş",
      en: "Authentic",
      de: "Traditionell",
    },
    ingredients: {
      tr: [
        "☕ Taze Çekilmiş Çekirdek",
        "🍬 Yanında Türk Lokumu",
        "💧 Bir Bardak Su",
      ],
      en: ["☕ Fresh Ground Beans", "🍬 Turkish Delight", "💧 Glass of Water"],
      de: ["☕ Frisch gemahlen", "🍬 Türkischer Lokum", "💧 Glas Wasser"],
    },
  },
  {
    id: 24,
    isVegan: true,
    category: "icecek",
    price: "2.50 €",
    img: "./images/filtre-kahve.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Special Filtre Kahve",
      en: "Specialty Filter Coffee",
      de: "Spezial-Filterkaffee",
    },
    desc: {
      tr: "Etiyopya tek köken çekirdeklerden taze öğütülmüş V60 damlama kahve, meyvemsi ve aromatik.",
      en: "Single-origin Ethiopian beans freshly hand-poured with floral and fruity notes.",
      de: "Frisch aufgebrühter V60 Handfilterkaffee aus äthiopischen Bohnen mit feiner Fruchtnote.",
    },
    badge: {
      tr: "Organik Çekirdek",
      en: "Single Origin",
      de: "Bio-Bohnen",
    },
    ingredients: {
      tr: ["☕ Etiyopya Arabica", "💧 Taze Damlama"],
      en: ["☕ Ethiopian Arabica", "💧 Fresh Drip"],
      de: ["☕ Äthiopischer Arabica", "💧 Handfilter"],
    },
  },
  {
    id: 25,
    isVegan: true,
    category: "salata",
    price: "5.50 €",
    img: "./images/kisir.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Geleneksel Ev Kısırı",
      en: "Traditional Turkish Kisir Bulgur Salad",
      de: "Traditioneller Kisir Bulgursalat",
    },
    desc: {
      tr: "İnce bulgur, taze nane, maydanoz, yeşil soğan, nar ekşisi ve sızma zeytinyağı ile hazırlanan geleneksel lezzet.",
      en: "Fine bulgur salad tossed with fresh herbs, scallions, rich pomegranate molasses and extra virgin olive oil.",
      de: "Feiner Bulgursalat mit frischer Minze, Petersilie, Frühlingszwiebeln, Granatapfelsirup und Olivenöl.",
    },
    badge: {
      tr: "Taze & Vegan",
      en: "Fresh & Vegan",
      de: "Frisch & Vegan",
    },
    ingredients: {
      tr: [
        "🌾 İnce Bulgur",
        "🌿 Taze Yeşillikler",
        "🍋 Nar Ekşisi & Limon",
        "🫒 Sızma Zeytinyağı",
      ],
      en: [
        "🌾 Fine Bulgur",
        "🌿 Fresh Garden Herbs",
        "🍋 Pomegranate & Lemon",
        "🫒 Olive Oil",
      ],
      de: [
        "🌾 Feiner Bulgur",
        "🌿 Frische Kräuter",
        "🍋 Granatapfelsirup",
        "🫒 Olivenöl",
      ],
    },
  },
  {
    id: 26,
    isVegan: true,
    category: "salata",
    price: "6.50 €",
    img: "./images/cig-kofte.jpg",
    badgeClass: "spicy",
    name: {
      tr: "Etsiz Çiğ Köfte Tabağı",
      en: "Traditional Cig Kofte (Meatless)",
      de: "Traditionelle Çiğ Köfte (Vegetarisch)",
    },
    desc: {
      tr: "Urfa usulü özel baharatlar, isot, domates salçası ve ceviz ile yoğrulmuş taze çiğ köfte; çıtır marul ve limon ile.",
      en: "Kneaded fine bulgur patties with Urfa isot pepper, walnuts and spices, served with crisp lettuce and lemon.",
      de: "Klassisch gewürzte Bulgurbällchen mit Urfa-Isot, serviert mit knackigem Salat und frischer Zitrone.",
    },
    badge: {
      tr: "Acılı & Klasik",
      en: "Spicy & Classic",
      de: "Pikant & Klassisch",
    },
    ingredients: {
      tr: [
        "🌶️ Urfa İsotu & Baharat",
        "🌾 İnce Bulgur",
        "🥬 Çıtır Marul",
        "🍋 Taze Limon",
      ],
      en: [
        "🌶️ Urfa Isot & Spices",
        "🌾 Fine Bulgur",
        "🥬 Romaine Lettuce",
        "🍋 Fresh Lemon",
      ],
      de: [
        "🌶️ Urfa-Isot & Gewürze",
        "🌾 Bulgur",
        "🥬 Salatblätter",
        "🍋 Zitrone",
      ],
    },
  },
  {
    id: 27,
    category: "salata",
    price: "5.00 €",
    img: "./images/makarna-salatasi.jpg",
    badgeClass: "chef",
    name: {
      tr: "Garnitürlü Makarna Salatası",
      en: "Creamy Vegetable Pasta Salad",
      de: "Cremiger Nudelsalat mit Gemüse",
    },
    desc: {
      tr: "Yumuşacık makarna, tatlı mısır, bezelye, havuç garnitürü, kornişon turşu ve enfes kremalı sos.",
      en: "Tender pasta elbows with sweetcorn, peas, carrots, diced crunchy pickles, and creamy herb dressing.",
      de: "Zarte Nudeln mit feinem Gemüse, Mais, Erbsen, Gewürzgurken und cremiger Sauce.",
    },
    badge: {
      tr: "Çocukların Favorisi",
      en: "Family Favorite",
      de: "Beliebter Klassiker",
    },
    ingredients: {
      tr: [
        "🍝 Dirsek Makarna",
        "🌽 Tatlı Mısır & Bezelye",
        "🥒 Kornişon Turşu",
        "🥣 Kremalı Sos",
      ],
      en: [
        "🍝 Elbow Pasta",
        "🌽 Sweetcorn & Peas",
        "🥒 Crisp Pickles",
        "🥣 Creamy Dressing",
      ],
      de: [
        "🍝 Nudeln",
        "🌽 Mais & Erbsen",
        "🥒 Essiggurken",
        "🥣 Cremige Sauce",
      ],
    },
  },
  {
    id: 28,
    isVegan: true,
    category: "salata",
    price: "5.50 €",
    img: "./images/sehriye-salatasi.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Renkli Arpa Şehriye Salatası",
      en: "Mediterranean Orzo Salad",
      de: "Bunter Orzo-Reisnudelsalat",
    },
    desc: {
      tr: "Fırınlanmış arpa şehriye, köz kırmızı biber, mısır, taze soğan, bol dereotu, zeytinyağı ve limon sosu.",
      en: "Toasted orzo pasta salad tossed with roasted red peppers, sweetcorn, fresh dill, and zesty lemon-olive oil dressing.",
      de: "Geröstete Reisnudeln mit gegrillter Paprika, Mais, viel frischem Dill, Zitrone und Olivenöl.",
    },
    badge: {
      tr: "Hafif & Renkli",
      en: "Light & Zesty",
      de: "Leicht & Aromatisch",
    },
    ingredients: {
      tr: [
        "🌾 Arpa Şehriye",
        "🫑 Köz Kırmızı Biber",
        "🌿 Taze Dereotu",
        "🍋 Limon & Zeytinyağı",
      ],
      en: [
        "🌾 Toasted Orzo",
        "🫑 Roasted Red Pepper",
        "🌿 Fresh Dill",
        "🍋 Lemon & Olive Oil",
      ],
      de: [
        "🌾 Reisnudeln",
        "🫑 Gegrillte Paprika",
        "🌿 Frischer Dill",
        "🍋 Zitrone & Olivenöl",
      ],
    },
  },
  {
    id: 29,
    category: "salata",
    price: "6.50 €",
    img: "./images/patlican-salatasi-yogurtlu.jpg",
    badgeClass: "chef",
    name: {
      tr: "Yoğurtlu Köz Patlıcan Salatası",
      en: "Smoky Eggplant Yogurt Meze (Mutabbal)",
      de: "Gegrillter Auberginensalat mit Joghurt",
    },
    desc: {
      tr: "Meşe odunu közünde pişirilmiş patlıcan, süzme köy yoğurdu, diş sarımsak ve sızma zeytinyağı ile enfes bir meze.",
      en: "Woodfire-roasted smoked eggplant pureed with strained village yogurt, garlic, and rich olive oil.",
      de: "Auf Holzfeuer geröstete Auberginen mit stichfestem Joghurt, frischem Knoblauch und feinstem Olivenöl.",
    },
    badge: {
      tr: "Köz Ateşinde",
      en: "Wood-Fired",
      de: "Holzkohle-Aroma",
    },
    ingredients: {
      tr: [
        "🍆 Közlenmiş Patlıcan",
        "🥛 Süzme Yoğurt",
        "🧄 Taze Sarımsak",
        "🫒 Sızma Zeytinyağı",
      ],
      en: [
        "🍆 Smoked Eggplant",
        "🥛 Strained Yogurt",
        "🧄 Fresh Garlic",
        "🫒 Extra Virgin Olive Oil",
      ],
      de: [
        "🍆 Geröstete Aubergine",
        "🥛 Joghurt",
        "🧄 Knoblauch",
        "🫒 Olivenöl",
      ],
    },
  },
  {
    id: 30,
    isVegan: true,
    category: "salata",
    price: "6.00 €",
    img: "./images/patlican-salatasi.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Zeytinyağlı Köz Patlıcan Salatası (Yoğurtsuz)",
      en: "Roasted Eggplant Salad (Without Yogurt)",
      de: "Gegrillter Auberginensalat (Ohne Joghurt)",
    },
    desc: {
      tr: "Odun ateşinde közlenmiş patlıcan, köz kapya ve yeşil biber, sarımsak, taze maydanoz, limon ve hakiki zeytinyağı.",
      en: "Woodfire smoked whole eggplant chopped with roasted sweet peppers, garlic, fresh parsley, and lemon-olive oil dressing.",
      de: "Rauchig gegrillte Aubergine, gegrillte Paprika, Knoblauch, Petersilie und fruchtiges Olivenöl-Dressing.",
    },
    badge: {
      tr: "Odun Ateşinde",
      en: "Wood-Smoked",
      de: "Raucharoma",
    },
    ingredients: {
      tr: [
        "🍆 Köz Patlıcan",
        "🫑 Köz Kırmızı & Yeşil Biber",
        "🌿 Taze Maydanoz",
        "🍋 Limon & Zeytinyağı",
      ],
      en: [
        "🍆 Smoked Eggplant",
        "🫑 Roasted Sweet Peppers",
        "🌿 Fresh Parsley",
        "🍋 Lemon & Olive Oil",
      ],
      de: [
        "🍆 Aubergine",
        "🫑 Paprikastreifen",
        "🌿 Petersilie",
        "🍋 Zitrone & Olivenöl",
      ],
    },
  },
  {
    id: 31,
    isVegan: true,
    category: "salata",
    price: "5.50 €",
    img: "./images/domates-ezmesi.jpg",
    badgeClass: "spicy",
    name: {
      tr: "Acılı Antep Domates Ezmesi (Meze)",
      en: "Spicy Antep Tomato Meze (Acili Ezme)",
      de: "Pikante Antep-Tomaten-Meze (Acılı Ezme)",
    },
    desc: {
      tr: "Satır kıyması inceliğinde doğranmış tarla domatesi, biber, maydanoz, ceviz, nar ekşisi ve acı pul biberli klasik kebap mezesi.",
      en: "Finely hand-minced ripe field tomatoes, chili peppers, walnuts, pomegranate syrup, and herbs.",
      de: "Feinst gehackte Tomaten, scharfe Chilis, Walnüsse, Petersilie und Granatapfelsirup.",
    },
    badge: {
      tr: "Özel Meze",
      en: "Chef's Meze",
      de: "Spezial-Meze",
    },
    ingredients: {
      tr: [
        "🍅 Tarla Domatesi",
        "🌶️ Acı Pul Biber & İsot",
        "🌰 Dövülmüş Ceviz",
        "🍋 Hakiki Nar Ekşisi",
      ],
      en: [
        "🍅 Fresh Tomatoes",
        "🌶️ Red Chili & Isot",
        "🌰 Crushed Walnuts",
        "🍋 Pomegranate Molasses",
      ],
      de: [
        "🍅 Frische Tomaten",
        "🌶️ Scharfe Chilis",
        "🌰 Walnüsse",
        "🍋 Granatapfelsirup",
      ],
    },
  },
  {
    id: 32,
    isVegan: true,
    category: "salata",
    price: "3.50 €",
    img: "./images/yaprak-sarma.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Zeytinyağlı Yaprak Sarma (10 Adet)",
      en: "Stuffed Grape Leaves - Sarma (10 Pcs)",
      de: "Gefüllte Weinblätter - Sarma (10 Stück)",
    },
    desc: {
      tr: "İncecik taze asma yaprağına sarılı baharatlı pirinç harcı, sızma zeytinyağı ve taze limon dilimleri ile 10 adet nefis sarma.",
      en: "10 tender grape leaves delicately stuffed with seasoned aromatic rice, extra virgin olive oil, and lemon.",
      de: "10 zarte Weinblätter gefüllt mit fein gewürztem Kräuterreis, feinstem Olivenöl und frischer Zitrone.",
    },
    badge: {
      tr: "10 Adet / 3.50 €",
      en: "10 Pcs / 3.50 €",
      de: "10 Stück / 3.50 €",
    },
    ingredients: {
      tr: [
        "🌿 Taze Asma Yaprağı (10 Adet)",
        "🌾 Baharatlı Pirinç",
        "🫒 Sızma Zeytinyağı",
        "🍋 Taze Limon",
      ],
      en: [
        "🌿 Grape Leaves (10 Pcs)",
        "🌾 Seasoned Rice",
        "🫒 Olive Oil",
        "🍋 Fresh Lemon",
      ],
      de: [
        "🌿 Weinblätter (10 Stück)",
        "🌾 Würzreis",
        "🫒 Olivenöl",
        "🍋 Frische Zitrone",
      ],
    },
  },
];

// Node.js ve Browser uyumluluğu için
if (typeof module !== "undefined" && module.exports) {
  module.exports = menuItems;
}
