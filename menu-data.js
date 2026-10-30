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
      tr: "Döner (Ekmek veya Dürüm)",
      en: "Doner Kebab (Bread or Wrap)",
      de: "Döner (im Brot oder im Dürüm)",
    },
    desc: {
      tr: "İnce kesilmiş, sulu ızgara dana döner; çıtır ekmekte veya yumuşak lavaş dürümde taze salata, domates, soğan, maydanoz ve yoğurt sosu ile servis edilir.",
      en: "Thinly sliced, juicy grilled veal served in crispy flatbread or a soft wheat wrap with fresh salad, tomatoes, onions, parsley, and yogurt sauce.",
      de: "Fein geschnittenes, saftig gegrilltes Kalbfleisch, serviert im knusprigen Fladenbrot oder in einem weichen Weizendürüm mit frischem Salat, Tomaten, Zwiebeln, Petersilie und Joghurtsauce.",
    },
    badge: {
      tr: "Popüler",
      en: "Popular",
      de: "Beliebt",
    },
    ingredients: {
      tr: [
        "🥩 Dana Yaprak Döner",
        "🥬 Taze Salata",
        "🍅 Domates",
        "🧅 Soğan",
        "🌿 Maydanoz",
        "🥣 Yoğurt Sosu",
      ],
      en: [
        "🥩 Grilled Veal Doner",
        "🥬 Fresh Salad",
        "🍅 Tomatoes",
        "🧅 Onions",
        "🌿 Parsley",
        "🥣 Yogurt Sauce",
      ],
      de: [
        "🥩 Kalbfleisch",
        "🥬 Frischer Salat",
        "🍅 Tomaten",
        "🧅 Zwiebeln",
        "🌿 Petersilie",
        "🥣 Joghurtsauce",
      ],
    },
    allergens: {
      tr: [
        "🌾 Gluten (Ekmek/Dürüm)",
        "🥛 Süt (Yoğurt sosu)",
        "🥬 Kereviz (Yoğurt sosunda)",
        "🌱 Susam (Baharat karışımında olabilir)",
        "🧴 Hardal (Sosta olabilir)",
      ],
      en: [
        "🌾 Gluten (Bread/Wrap)",
        "🥛 Milk (Yogurt sauce)",
        "🥬 Celery (in yogurt sauce)",
        "🌱 Sesame (possible in spice mix)",
        "🧴 Mustard (possible in sauce)",
      ],
      de: [
        "🌾 Gluten (Brot/Weizendürüm)",
        "🥛 Milch (Joghurtsauce)",
        "🥬 Sellerie (in Joghurtsauce)",
        "🌱 Sesam (in Gewürzmischung möglich)",
        "🧴 Senf (in Soße möglich)",
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
      de: "Adana Dürüm",
    },
    desc: {
      tr: "Izgarada pişirilmiş baharatlı ve sulu Adana kebap; yumuşak lavaş dürümde taze salata, domates, soğan, maydanoz ve sumak baharatı ile sarılır.",
      en: "Spicy, juicy grilled minced meat skewer (Adana), rolled in a soft wheat wrap with fresh salad, tomatoes, onions, parsley, and sumac spice.",
      de: "Würziges, saftiges Hackfleischspieß (Adana) vom Grill, gerollt in einem weichen Weizendürüm mit frischem Salat, Tomaten, Zwiebeln, Petersilie und Sumak Gewürz.",
    },
    badge: {
      tr: "Özel Lezzet",
      en: "Specialty",
      de: "Spezialität",
    },
    ingredients: {
      tr: [
        "🌶️ Adana Kebap",
        "🥬 Taze Salata",
        "🍅 Domates",
        "🧅 Soğan",
        "🌿 Maydanoz",
        "✨ Sumak",
      ],
      en: [
        "🌶️ Adana Kebab",
        "🥬 Fresh Salad",
        "🍅 Tomatoes",
        "🧅 Onions",
        "🌿 Parsley",
        "✨ Sumac",
      ],
      de: [
        "🌶️ Hackfleischspieß (Adana)",
        "🥬 Frischer Salat",
        "🍅 Tomaten",
        "🧅 Zwiebeln",
        "🌿 Petersilie",
        "✨ Sumak Gewürz",
      ],
    },
    allergens: {
      tr: [
        "🌾 Gluten (Lavaş dürüm)",
        "🥬 Kereviz (Baharat karışımında olabilir)",
        "🧴 Hardal (Baharat karışımında olabilir)",
      ],
      en: [
        "🌾 Gluten (Wheat wrap)",
        "🥬 Celery (possible in spice mix)",
        "🧴 Mustard (possible in spice mix)",
      ],
      de: [
        "🌾 Gluten (Weizendürüm)",
        "🥬 Sellerie (in Gewürzmischung möglich)",
        "🧴 Senf (in Gewürzmischung möglich)",
      ],
    },
  },
  {
    id: 38,
    category: "grill",
    price: "8.00 €",
    img: "./images/kuzu-sis.jpg",
    badgeClass: "chef",
    name: {
      tr: "Kuzu Şiş",
      en: "Lamb Shish Sandwich (Kuzu Şiş)",
      de: "Kuzu Şiş",
    },
    desc: {
      tr: "Izgarada pişirilmiş yumuşacık kuzu şiş, çıtır ekmek arasında taze salata, domates, soğan ve maydanoz ile servis edilir.",
      en: "Tender grilled lamb skewers (Kuzu), served in crispy bread with fresh salad, tomatoes, onions, and parsley.",
      de: "Zarte Lammfleischspieße (Kuzu) vom Grill, serviert im knusprigen Brot mit frischem Salat, Tomaten, Zwiebeln und Petersilie.",
    },
    badge: {
      tr: "Şefin Seçimi",
      en: "Chef's Choice",
      de: "Empfehlung",
    },
    ingredients: {
      tr: [
        "🥩 Kuzu Şiş",
        "🥖 Çıtır Ekmek",
        "🥬 Taze Salata",
        "🍅 Domates",
        "🧅 Soğan",
        "🌿 Maydanoz",
      ],
      en: [
        "🥩 Lamb Skewers",
        "🥖 Crispy Bread",
        "🥬 Fresh Salad",
        "🍅 Tomatoes",
        "🧅 Onions",
        "🌿 Parsley",
      ],
      de: [
        "🥩 Lammfleischspieße",
        "🥖 Knuspriges Brot",
        "🥬 Frischer Salat",
        "🍅 Tomaten",
        "🧅 Zwiebeln",
        "🌿 Petersilie",
      ],
    },
    allergens: {
      tr: [
        "🌾 Gluten (Ekmek)",
        "🥬 Kereviz (Marinasyon/sosta olabilir)",
        "🧴 Hardal (Marinasyon/sosta olabilir)",
      ],
      en: [
        "🌾 Gluten (Bread)",
        "🥬 Celery (possible in marinade/sauce)",
        "🧴 Mustard (possible in marinade/sauce)",
      ],
      de: [
        "🌾 Gluten (Brot)",
        "🥬 Sellerie (in Marinade/Soße möglich)",
        "🧴 Senf (in Marinade/Soße möglich)",
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
      tr: "Tavuk Şiş",
      en: "Chicken Shish Sandwich (Tavuk Şiş)",
      de: "Tavuk Şiş",
    },
    desc: {
      tr: "Izgarada pişirilmiş sulu tavuk şiş, çıtır ekmek arasında taze salata, domates, soğan ve maydanoz ile servis edilir.",
      en: "Juicy grilled chicken skewers (Tavuk), served in crispy bread with fresh salad, tomatoes, onions, and parsley.",
      de: "Saftige Hähnchenspieße (Tavuk) vom Grill, serviert im knusprigen Brot mit frischem Salat, Tomaten, Zwiebeln und Petersilie.",
    },
    badge: {
      tr: "Favori",
      en: "Favorite",
      de: "Favorit",
    },
    ingredients: {
      tr: [
        "🍗 Tavuk Şiş",
        "🥖 Çıtır Ekmek",
        "🥬 Taze Salata",
        "🍅 Domates",
        "🧅 Soğan",
        "🌿 Maydanoz",
      ],
      en: [
        "🍗 Chicken Skewers",
        "🥖 Crispy Bread",
        "🥬 Fresh Salad",
        "🍅 Tomatoes",
        "🧅 Onions",
        "🌿 Parsley",
      ],
      de: [
        "🍗 Hähnchenspieße",
        "🥖 Knuspriges Brot",
        "🥬 Frischer Salat",
        "🍅 Tomaten",
        "🧅 Zwiebeln",
        "🌿 Petersilie",
      ],
    },
    allergens: {
      tr: [
        "🌾 Gluten (Ekmek)",
        "🥬 Kereviz (Marinasyon/sosta olabilir)",
        "🧴 Hardal (Marinasyon/sosta olabilir)",
      ],
      en: [
        "🌾 Gluten (Bread)",
        "🥬 Celery (possible in marinade/sauce)",
        "🧴 Mustard (possible in marinade/sauce)",
      ],
      de: [
        "🌾 Gluten (Brot)",
        "🥬 Sellerie (in Marinade/Soße möglich)",
        "🧴 Senf (in Marinade/Soße möglich)",
      ],
    },
  },
  {
    id: 39,
    category: "grill",
    price: "25.00 €",
    img: "./images/karisik-izgara.jpg",
    badgeClass: "chef",
    name: {
      tr: "Karışık Izgara Tabağı",
      en: "Mixed Grill Platter (Karışık Izgara)",
      de: "Gemischter Grillteller (Karışık Izgara)",
    },
    desc: {
      tr: "Adana kebap, kuzu şiş, tavuk şiş ve yaprak dönerden oluşan zengin karışık ızgara tabağı; taze salata, domates, soğan ve ekmek eşliğinde servis edilir.",
      en: "Generous mixed grill platter featuring Adana kebab, lamb shish (Kuzu Şiş), chicken shish (Tavuk Şiş), and grilled veal Doner, served with fresh salad, tomatoes, onions, and bread.",
      de: "Reichhaltiger gemischter Grillteller mit Adana Kebap, Lammspieß (Kuzu Şiş), Hähnchenspieß (Tavuk Şiş) und Kalbsdöner, serviert mit frischem Salat, Tomaten, Zwiebeln und Brot.",
    },
    badge: {
      tr: "Özel Tabak",
      en: "Chef's Platter",
      de: "Grill-Spezial",
    },
    ingredients: {
      tr: [
        "🌶️ Adana Kebap",
        "🥩 Kuzu Şiş",
        "🍗 Tavuk Şiş",
        "🥩 Yaprak Döner",
        "🥬 Taze Salata & Garnitür",
        "🥖 Ekmek",
      ],
      en: [
        "🌶️ Adana Kebab",
        "🥩 Lamb Shish (Kuzu Şiş)",
        "🍗 Chicken Shish (Tavuk Şiş)",
        "🥩 Veal Doner",
        "🥬 Fresh Salad & Sides",
        "🥖 Bread",
      ],
      de: [
        "🌶️ Adana Kebap",
        "🥩 Lammspieß (Kuzu Şiş)",
        "🍗 Hähnchenspieß (Tavuk Şiş)",
        "🥩 Kalbsdöner",
        "🥬 Frischer Salat & Beilagen",
        "🥖 Brot",
      ],
    },
    allergens: {
      tr: [
        "🌾 Gluten (Ekmek/Lavaş)",
        "🥛 Süt (Yoğurt sosu)",
        "🥬 Kereviz (Marinasyon/sosta olabilir)",
        "🌱 Susam (Baharat karışımında olabilir)",
        "🧴 Hardal (Marinasyon/sosta olabilir)",
      ],
      en: [
        "🌾 Gluten (Bread/Wrap)",
        "🥛 Milk (Yogurt sauce)",
        "🥬 Celery (possible in marinade/sauce)",
        "🌱 Sesame (possible in spice mix)",
        "🧴 Mustard (possible in marinade/sauce)",
      ],
      de: [
        "🌾 Gluten (Brot/Weizendürüm)",
        "🥛 Milch (Joghurtsauce)",
        "🥬 Sellerie (in Marinade/Soße möglich)",
        "🌱 Sesam (in Gewürzmischung möglich)",
        "🧴 Senf (in Marinade/Soße möglich)",
      ],
    },
  },
  {
    id: 5,
    category: "grill",
    price: "8.00 €",
    img: "./images/sucuk-ekmek.jpg",
    badgeClass: "spicy",
    name: {
      tr: "Sucuk Ekmek",
      en: "Grilled Sucuk Sandwich",
      de: "Sucuk Ekmek",
    },
    desc: {
      tr: "Izgarada kızartılmış lezzetli dana sucuk, çıtır ekmek arasında karamelize soğan ile servis edilir.",
      en: "Savory grilled beef sausage (Sucuk), served in crispy bread with caramelized onions.",
      de: "Herzhaft gebratene Rindswurst (Sucuk), serviert im knusprigen Brot mit karamellisierten Zwiebeln.",
    },
    badge: {
      tr: "Özel Lezzet",
      en: "Specialty",
      de: "Spezialität",
    },
    ingredients: {
      tr: ["🌭 Dana Sucuk", "🥖 Çıtır Ekmek", "🧅 Karamelize Soğan"],
      en: ["🌭 Beef Sucuk", "🥖 Crispy Bread", "🧅 Caramelized Onions"],
      de: [
        "🌭 Rindswurst (Sucuk)",
        "🥖 Knuspriges Brot",
        "🧅 Karamellisierte Zwiebeln",
      ],
    },
    allergens: {
      tr: ["🌾 Gluten (Ekmek)", "🧴 Hardal (Sucukta)", "🥬 Kereviz (Sucukta)"],
      en: [
        "🌾 Gluten (Bread)",
        "🧴 Mustard (in Sucuk)",
        "🥬 Celery (in Sucuk)",
      ],
      de: [
        "🌾 Gluten (Brot)",
        "🧴 Senf (in der Sucuk)",
        "🥬 Sellerie (in der Sucuk)",
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
      en: "Grilled Fish Sandwich (Balık Ekmek)",
      de: "Balık Ekmek",
    },
    desc: {
      tr: "Izgara balık fileto, çıtır ekmek arasında taze salata, domates, soğan ve maydanoz ile servis edilir.",
      en: "Grilled fish fillet, served in crispy bread with fresh salad, tomatoes, onions, and parsley.",
      de: "Gegrilltes Fischfilet, serviert im knusprigen Brot mit frischem Salat, Tomaten, Zwiebeln und Petersilie.",
    },
    badge: {
      tr: "Geleneksel",
      en: "Traditional",
      de: "Traditionell",
    },
    ingredients: {
      tr: [
        "🐟 Izgara Balık Fileto",
        "🥖 Çıtır Ekmek",
        "🥬 Taze Salata",
        "🍅 Domates",
        "🧅 Soğan",
        "🌿 Maydanoz",
      ],
      en: [
        "🐟 Grilled Fish Fillet",
        "🥖 Crispy Bread",
        "🥬 Fresh Salad",
        "🍅 Tomatoes",
        "🧅 Onions",
        "🌿 Parsley",
      ],
      de: [
        "🐟 Gegrilltes Fischfilet",
        "🥖 Knuspriges Brot",
        "🥬 Frischer Salat",
        "🍅 Tomaten",
        "🧅 Zwiebeln",
        "🌿 Petersilie",
      ],
    },
    allergens: {
      tr: [
        "🌾 Gluten (Ekmek)",
        "🐟 Balık",
        "🥬 Kereviz (Marinasyon/sosta olabilir)",
        "🧴 Hardal (Marinasyon/sosta olabilir)",
      ],
      en: [
        "🌾 Gluten (Bread)",
        "🐟 Fish",
        "🥬 Celery (possible in marinade/sauce)",
        "🧴 Mustard (possible in marinade/sauce)",
      ],
      de: [
        "🌾 Gluten (Brot)",
        "🐟 Fisch",
        "🥬 Sellerie (in Marinade/Soße möglich)",
        "🧴 Senf (in Marinade/Soße möglich)",
      ],
    },
  },
  {
    id: 6,
    isVegan: true,
    category: "grill",
    price: "3.50 €",
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
    allergens: {
      tr: [
        "🥚 Yumurta (Mayonezde olabilir)",
        "🧴 Hardal (Mayonezde/sosta olabilir)",
        "🥬 Kereviz (Ketçap/baharatta olabilir)",
      ],
      en: [
        "🥚 Egg (possible in mayonnaise)",
        "🧴 Mustard (possible in mayonnaise/sauce)",
        "🥬 Celery (possible in ketchup/seasoning)",
      ],
      de: [
        "🥚 Ei (in Mayonnaise möglich)",
        "🧴 Senf (in Mayonnaise/Soße möglich)",
        "🥬 Sellerie (in Ketchup/Gewürz möglich)",
      ],
    },
  },
  {
    id: 7,
    category: "tatli",
    price: "1.50 €",
    img: "./images/baklava.jpg",
    badgeClass: "chef",
    name: {
      tr: "Antep Fıstıklı Baklava (1 Adet)",
      en: "Pistachio Baklava (1 Pc)",
      de: "Pistazien-Baklava (1 Stück)",
    },
    desc: {
      tr: "40 kat çıtır ince yufka, bol Antep boz fıstığı ve doğal şeker şerbeti ile fırınlanmış 1 adet geleneksel baklava.",
      en: "Traditional 40-layer flaky filo pastry packed with prime emerald pistachios and pure sugar syrup (1 piece).",
      de: "Hauchdünner traditioneller Filoteig mit feinsten Antep-Pistazien und aromatischem Sirup (1 Stück).",
    },
    badge: {
      tr: "1 Adet / 1.50 €",
      en: "1 Pc / 1.50 €",
      de: "1 Stück / 1.50 €",
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
    allergens: {
      tr: [
        "🌾 Gluten (El açması buğday yufkası)",
        "🥜 Antep Fıstığı (Sert kabuklu yemiş)",
        "🥛 Süt (Sade yağ / Tereyağı)",
        "🥚 Yumurta (Hamurda eser miktarda olabilir)",
      ],
      en: [
        "🌾 Gluten (Wheat filo pastry)",
        "🥜 Pistachio (Tree nuts)",
        "🥛 Milk (Clarified butter)",
        "🥚 Egg (possible traces in dough)",
      ],
      de: [
        "🌾 Gluten (Weizen-Filoteig)",
        "🥜 Pistazien (Schalenfrüchte)",
        "🥛 Milch (Butterschmalz)",
        "🥚 Ei (Spuren im Teig möglich)",
      ],
    },
  },
  {
    id: 8,
    category: "tatli",
    price: "2.50 €",
    img: "./images/yas-pasta.jpg",
    badgeClass: "chef",
    name: {
      tr: "Yaş Pasta & Kek Dilimi (Kuchen)",
      en: "Cake & Pastry Slice (Kuchen)",
      de: "Kuchen & Torten-Auswahl",
    },
    desc: {
      tr: "Günlük taze hazırlanan çikolatalı, meyveli yaş pasta veya nefis ev yapımı kek dilimi.",
      en: "Daily fresh baked rich Belgian chocolate, strawberry cream, or homemade gourmet cake slices.",
      de: "Täglich frisch gebackene Kuchen und saftige Tortenstücke nach traditioneller Hausfrauenart.",
    },
    badge: {
      tr: "1 Dilim / 2.50 €",
      en: "1 Slice / 2.50 €",
      de: "1 Stück / 2.50 €",
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
    allergens: {
      tr: [
        "🌾 Gluten (Buğday unu)",
        "🥚 Yumurta (Pandispanya/kek)",
        "🥛 Süt (Krema ve çikolata)",
        "🥜 Sert Kabuklu Yemişler (Çeşide göre bulunabilir)",
        "🫘 Soya (Çikolatada lesitin)",
      ],
      en: [
        "🌾 Gluten (Wheat flour)",
        "🥚 Egg (Sponge cake)",
        "🥛 Milk (Cream & chocolate)",
        "🥜 Tree Nuts (possible depending on variety)",
        "🫘 Soy (Lecithin in chocolate)",
      ],
      de: [
        "🌾 Gluten (Weizenmehl)",
        "🥚 Ei (Biskuit/Kuchen)",
        "🥛 Milch (Sahne & Schokolade)",
        "🥜 Schalenfrüchte (je nach Sorte möglich)",
        "🫘 Soja (Lecithin in Schokolade)",
      ],
    },
  },
  /*
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
  */
  /*
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
      tr: [
        "🥖 3 Adet Çıtır Churros",
        "🍫 Sıcak Nutella Sos",
        "✨ Tarçınlı Şeker",
      ],
      en: ["🥖 3 Crispy Churros", "🍫 Warm Nutella Dip", "✨ Cinnamon Sugar"],
      de: [
        "🥖 3 Knusprige Churros",
        "🍫 Warme Nutella-Sauce",
        "✨ Zimt-Zucker",
      ],
    },
  },
  */
  /*
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
  */
  {
    id: 12,
    category: "hamur-isi",
    price: "3.00 €",
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
    allergens: {
      tr: [
        "🌾 Gluten (El açması yufka)",
        "🥛 Süt (Ezine peyniri ve tereyağı)",
        "🥚 Yumurta (Su böreği hamurunda)",
      ],
      en: [
        "🌾 Gluten (Filo pastry)",
        "🥛 Milk (Feta cheese & butter)",
        "🥚 Egg (in water borek dough)",
      ],
      de: [
        "🌾 Gluten (Weizenteigblätter)",
        "🥛 Milch (Schafskäse & Butter)",
        "🥚 Ei (im Wasserbörek-Teig)",
      ],
    },
  },
  /*
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
  */
  /*
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
  */
  /*
  {
    id: 15,
    category: "hamur-isi",
    price: "3.50 €",
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
  */
  {
    id: 16,
    isVegan: true,
    category: "icecek",
    price: "2.50 €",
    img: "./images/kola.jpg",
    badgeClass: "chef",
    name: {
      tr: "Coca-Cola (0,5 l)",
      en: "Coca-Cola (0.5 l)",
      de: "Coca-Cola (0,5 l)",
    },
    desc: {
      tr: "Buz gibi soğuk ferahlatıcı orijinal lezzet Coca-Cola (0,5 l).",
      en: "Ice cold original refreshing Coca-Cola (0.5 l).",
      de: "Eiskalt serviert – erfrischendes Softgetränk (0,5 l).",
    },
    badge: {
      tr: "0,5 l",
      en: "0.5 l",
      de: "0,5 l",
    },
    ingredients: {
      tr: ["🧊 Soğuk Servis (0,5 l)"],
      en: ["🧊 Served Chilled (0.5 l)"],
      de: ["🧊 Gekühlt (0,5 l)"],
    },
  },
  {
    id: 17,
    isVegan: true,
    category: "icecek",
    price: "2.50 €",
    img: "./images/fanta.jpg",
    badgeClass: "chef",
    name: {
      tr: "Fanta Portakal (0,5 l)",
      en: "Fanta Orange (0.5 l)",
      de: "Fanta Orange (0,5 l)",
    },
    desc: {
      tr: "Güneş gibi parlayan meyveli ferahlık, soğuk Fanta portakal (0,5 l).",
      en: "Fruity and bubbly chilled Fanta orange soda (0.5 l).",
      de: "Fruchtig-spritzige Fanta Orange eiskalt serviert (0,5 l).",
    },
    badge: {
      tr: "0,5 l",
      en: "0.5 l",
      de: "0,5 l",
    },
    ingredients: {
      tr: ["🧊 Soğuk Servis (0,5 l)", "🍊 Portakal Ferahlığı"],
      en: ["🧊 Served Chilled (0.5 l)", "🍊 Orange Refreshment"],
      de: ["🧊 Gekühlt (0,5 l)", "🍊 Orangengeschmack"],
    },
  },
  {
    id: 18,
    isVegan: true,
    category: "icecek",
    price: "2.50 €",
    img: "./images/sprite.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Uludağ Gazoz (0,5 l)",
      en: "Uludağ Gazoz (0.5 l)",
      de: "Uludağ Gazoz (0,5 l)",
    },
    desc: {
      tr: "Türkiye'nin eşsiz lezzeti, geleneksel Uludağ Gazoz (0,5 l).",
      en: "Crisp lemon-lime flavored sparkling soda served chilled (0.5 l).",
      de: "Erfrischende Zitronen-Limetten-Limonade eiskalt serviert (0,5 l).",
    },
    badge: {
      tr: "0,5 l",
      en: "0.5 l",
      de: "0,5 l",
    },
    ingredients: {
      tr: ["🧊 Soğuk Servis (0,5 l)", "🍋 Limon Ferahlığı"],
      en: ["🧊 Served Chilled (0.5 l)", "🍋 Lemon Refreshment"],
      de: ["🧊 Gekühlt (0,5 l)", "🍋 Zitronenfrische"],
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
    allergens: {
      tr: ["🌾 Gluten (Geleneksel bulgur fermantasyonu)"],
      en: ["🌾 Gluten (Traditional bulgur fermentation)"],
      de: ["🌾 Gluten (Traditionelle Bulgur-Fermentation)"],
    },
  },
  {
    id: 20,
    isVegan: true,
    category: "icecek",
    price: "1.50 €",
    img: "./images/su.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Su (0,5 l)",
      en: "Water (0.5 l)",
      de: "Wasser (0,5 l)",
    },
    desc: {
      tr: "Dağ zirvelerinden gelen zengin mineralli, saf ve berrak soğuk kaynak suyu (0,5 l).",
      en: "Pure natural bottled spring water from pristine mountain springs, served chilled (0.5 l).",
      de: "Reines natürliches Quellwasser (0,5 l), kalt und erfrischend serviert.",
    },
    badge: {
      tr: "0,5 l",
      en: "0.5 l",
      de: "0,5 l",
    },
    ingredients: {
      tr: ["💧 Saf Kaynak Suyu (0,5 l)", "🧊 İsteğe Göre Soğuk"],
      en: ["💧 Pure Spring Water (0.5 l)", "🧊 Chilled"],
      de: ["💧 Quellwasser (0,5 l)", "🧊 Gekühlt"],
    },
  },
  /*
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
  */
  {
    id: 22,
    isVegan: true,
    category: "icecek",
    price: "1.00 €",
    img: "./images/cay.jpg",
    badgeClass: "chef",
    name: {
      tr: "Çay (Taze Demleme Türk Çayı)",
      en: "Çay (Turkish Tea)",
      de: "Çay (Türkischer Tee)",
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
    allergens: {
      tr: [
        "🌾 Gluten (Yanındaki lokumda nişasta/eser miktar)",
        "🥜 Sert Kabuklu Yemişler (Lokumda iz miktarda olabilir)",
      ],
      en: [
        "🌾 Gluten (Starch/traces in served Turkish delight)",
        "🥜 Tree Nuts (possible traces in Turkish delight)",
      ],
      de: [
        "🌾 Gluten (Stärke/Spuren im servierten Lokum)",
        "🥜 Schalenfrüchte (Spuren im Lokum möglich)",
      ],
    },
  },
  /*
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
  */
  {
    id: 25,
    isVegan: true,
    category: "salata",
    price: "2.00 €",
    img: "./images/kisir.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Ev Kısırı (1 Kepçe)",
      en: "Turkish Kisir Bulgur Salad (1 Scoop)",
      de: "Kisir Bulgursalat (1 Kelle)",
    },
    desc: {
      tr: "İnce bulgur, taze nane, maydanoz, yeşil soğan, nar ekşisi ve sızma zeytinyağı ile hazırlanan geleneksel kısır (1 kepçe).",
      en: "Fine bulgur salad tossed with fresh herbs, scallions, rich pomegranate molasses and extra virgin olive oil (1 scoop).",
      de: "Feiner Bulgursalat mit frischer Minze, Petersilie, Frühlingszwiebeln, Granatapfelsirup und Olivenöl (1 Kelle).",
    },
    badge: {
      tr: "1 Kepçe / 2.00 €",
      en: "1 Scoop / 2.00 €",
      de: "1 Kelle / 2.00 €",
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
    allergens: {
      tr: ["🌾 Gluten (İnce buğday bulguru)"],
      en: ["🌾 Gluten (Fine wheat bulgur)"],
      de: ["🌾 Gluten (Feiner Weizenbulgur)"],
    },
  },
  {
    id: 26,
    isVegan: true,
    category: "salata",
    price: "2.00 €",
    img: "./images/cig-kofte.jpg",
    badgeClass: "spicy",
    name: {
      tr: "Çiğ Köfte (Porsiyon)",
      en: "Traditional Cig Kofte (Portion)",
      de: "Traditionelle Çiğ Köfte (Portion)",
    },
    desc: {
      tr: "Urfa usulü özel baharatlar, isot, domates salçası ve ceviz ile yoğrulmuş taze çiğ köfte porsiyonu; çıtır marul ve limon ile.",
      en: "Kneaded fine bulgur patties with Urfa isot pepper, walnuts and spices, served as a generous portion with crisp lettuce and lemon.",
      de: "Klassisch gewürzte Bulgurbällchen mit Urfa-Isot, serviert als Portion mit knackigem Salat und frischer Zitrone.",
    },
    badge: {
      tr: "Porsiyon / 2.00 €",
      en: "Portion / 2.00 €",
      de: "Portion / 2.00 €",
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
    allergens: {
      tr: ["🌾 Gluten (İnce buğday bulguru)", "🥜 Ceviz (Sert kabuklu yemiş)"],
      en: ["🌾 Gluten (Fine wheat bulgur)", "🥜 Walnuts (Tree nuts)"],
      de: ["🌾 Gluten (Feiner Weizenbulgur)", "🥜 Walnüsse (Schalenfrüchte)"],
    },
  },
  {
    id: 27,
    category: "salata",
    price: "2.00 €",
    img: "./images/makarna-salatasi.jpg",
    badgeClass: "chef",
    name: {
      tr: "Garnitürlü Makarna Salatası (Nudelsalat)",
      en: "Creamy Pasta Salad (Nudelsalat)",
      de: "Cremiger Nudelsalat mit Gemüse",
    },
    desc: {
      tr: "Yumuşacık makarna, tatlı mısır, bezelye, havuç garnitürü, kornişon turşu ve enfes kremalı sos.",
      en: "Tender pasta elbows with sweetcorn, peas, carrots, diced crunchy pickles, and creamy herb dressing.",
      de: "Zarte Nudeln mit feinem Gemüse, Mais, Erbsen, Gewürzgurken und cremiger Sauce.",
    },
    badge: {
      tr: "Porsiyon / 2.00 €",
      en: "Portion / 2.00 €",
      de: "Portion / 2.00 €",
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
    allergens: {
      tr: [
        "🌾 Gluten (Buğday makarnası)",
        "🥚 Yumurta (Kremalı/mayonezli sosta)",
        "🥛 Süt (Kremalı/yoğurtlu sosta)",
        "🧴 Hardal (Sos ve kornişon turşuda)",
      ],
      en: [
        "🌾 Gluten (Wheat pasta)",
        "🥚 Egg (in creamy dressing)",
        "🥛 Milk (in creamy/yogurt dressing)",
        "🧴 Mustard (in dressing & pickles)",
      ],
      de: [
        "🌾 Gluten (Weizennudeln)",
        "🥚 Ei (im Dressing)",
        "🥛 Milch (im Dressing)",
        "🧴 Senf (in Dressing & Gewürzgurken)",
      ],
    },
  },
  {
    id: 28,
    isVegan: true,
    category: "salata",
    price: "2.00 €",
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
    allergens: {
      tr: ["🌾 Gluten (Arpa şehriye / durum buğdayı)"],
      en: ["🌾 Gluten (Orzo durum wheat pasta)"],
      de: ["🌾 Gluten (Orzo-Hartweizennudeln)"],
    },
  },
  {
    id: 29,
    category: "salata",
    price: "2.00 €",
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
    allergens: {
      tr: ["🥛 Süt (Süzme yoğurt)"],
      en: ["🥛 Milk (Strained yogurt)"],
      de: ["🥛 Milch (Joghurt)"],
    },
  },
  // {
  //   id: 30,
  //   isVegan: true,
  //   category: "salata",
  //   price: "2.00 €",
  //   img: "./images/patlican-salatasi.jpg",
  //   badgeClass: "vegan",
  //   name: {
  //     tr: "Zeytinyağlı Köz Patlıcan Salatası (Yoğurtsuz)",
  //     en: "Roasted Eggplant Salad (Without Yogurt)",
  //     de: "Gegrillter Auberginensalat (Ohne Joghurt)",
  //   },
  //   desc: {
  //     tr: "Odun ateşinde közlenmiş patlıcan, köz kapya ve yeşil biber, sarımsak, taze maydanoz, limon ve hakiki zeytinyağı.",
  //     en: "Woodfire smoked whole eggplant chopped with roasted sweet peppers, garlic, fresh parsley, and lemon-olive oil dressing.",
  //     de: "Rauchig gegrillte Aubergine, gegrillte Paprika, Knoblauch, Petersilie und fruchtiges Olivenöl-Dressing.",
  //   },
  //   badge: {
  //     tr: "Odun Ateşinde",
  //     en: "Wood-Smoked",
  //     de: "Raucharoma",
  //   },
  //   ingredients: {
  //     tr: [
  //       "🍆 Köz Patlıcan",
  //       "🫑 Köz Kırmızı & Yeşil Biber",
  //       "🌿 Taze Maydanoz",
  //       "🍋 Limon & Zeytinyağı",
  //     ],
  //     en: [
  //       "🍆 Smoked Eggplant",
  //       "🫑 Roasted Sweet Peppers",
  //       "🌿 Fresh Parsley",
  //       "🍋 Lemon & Olive Oil",
  //     ],
  //     de: [
  //       "🍆 Aubergine",
  //       "🫑 Paprikastreifen",
  //       "🌿 Petersilie",
  //       "🍋 Zitrone & Olivenöl",
  //     ],
  //   },
  // },
  {
    id: 31,
    isVegan: true,
    category: "salata",
    price: "2.00 €",
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
    allergens: {
      tr: ["🥜 Ceviz (Sert kabuklu yemiş)"],
      en: ["🥜 Walnuts (Tree nuts)"],
      de: ["🥜 Walnüsse (Schalenfrüchte)"],
    },
  },
  {
    id: 32,
    isVegan: true,
    category: "salata",
    price: "4.00 €",
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
      tr: "10 Adet / 4.00 €",
      en: "10 Pcs / 4.00 €",
      de: "10 Stück / 4.00 €",
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
  {
    id: 33,
    isVegan: true,
    category: "salata",
    price: "2.50 €",
    img: "./images/taze-pancar-salatasi.jpg",
    badgeClass: "vegan",
    name: {
      tr: "Taze Pancar Salatası",
      en: "Fresh Beetroot Salad",
      de: "Rote-Bete-Salat",
    },
    desc: {
      tr: "Haşlanmış taze kırmızı pancar, sarımsak, zeytinyağı, limon ve ceviz ile hazırlanan nefis meze salata.",
      en: "Tender red beetroot seasoned with garlic, extra virgin olive oil, fresh lemon, and crushed walnuts.",
      de: "Zarte Rote Bete mit Knoblauch, feinstem Olivenöl, frischer Zitrone und Walnüssen aromatisch verfeinert.",
    },
    badge: {
      tr: "Taze & Vegan",
      en: "Fresh & Vegan",
      de: "Frisch & Vegan",
    },
    ingredients: {
      tr: [
        "🥗 Kırmızı Pancar",
        "🫒 Sızma Zeytinyağı",
        "🍋 Taze Limon",
        "🧄 Sarımsak & Ceviz",
      ],
      en: [
        "🥗 Red Beetroot",
        "🫒 Olive Oil",
        "🍋 Fresh Lemon",
        "🧄 Garlic & Walnuts",
      ],
      de: [
        "🥗 Rote Bete",
        "🫒 Olivenöl",
        "🍋 Frische Zitrone",
        "🧄 Knoblauch & Walnüsse",
      ],
    },
    allergens: {
      tr: ["🥜 Ceviz (Sert kabuklu yemiş)"],
      en: ["🥜 Walnuts (Tree nuts)"],
      de: ["🥜 Walnüsse (Schalenfrüchte)"],
    },
  },
  {
    id: 34,
    category: "tatli",
    price: "2.00 €",
    img: "./images/tulumba.jpg",
    badgeClass: "chef",
    name: {
      tr: "Çıtır Tulumba Tatlısı",
      en: "Crispy Turkish Tulumba",
      de: "Traditionelle Tulumba",
    },
    desc: {
      tr: "Dışı altın sarısı ve çıtır çıtır, içi yumuşacık şerbetli geleneksel tulumba tatlısı porsiyonu.",
      en: "Golden crispy fried pastries soaked in aromatic lemon sugar syrup.",
      de: "Goldbraun frittiertes Spritzgebäck, getränkt in feinem aromatischem Zuckersirup.",
    },
    badge: {
      tr: "Porsiyon / 2.00 €",
      en: "Portion / 2.00 €",
      de: "Portion / 2.00 €",
    },
    ingredients: {
      tr: ["🍯 Şerbet", "🌾 Çıtır Hamur", "🍋 Limon"],
      en: ["🍯 Syrup", "🌾 Crispy Pastry", "🍋 Lemon"],
      de: ["🍯 Zuckersirup", "🌾 Brandteig", "🍋 Zitrone"],
    },
    allergens: {
      tr: [
        "🌾 Gluten (Buğday unu ve irmik)",
        "🥚 Yumurta (Tulumba hamurunda)",
        "🥛 Süt (Hamurda eser miktarda olabilir)",
      ],
      en: [
        "🌾 Gluten (Wheat flour & semolina)",
        "🥚 Egg (in choux pastry)",
        "🥛 Milk (possible traces in dough)",
      ],
      de: [
        "🌾 Gluten (Weizenmehl & Grieß)",
        "🥚 Ei (im Brandteig)",
        "🥛 Milch (Spuren im Teig möglich)",
      ],
    },
  },
  {
    id: 35,
    category: "tatli",
    price: "4.00 €",
    img: "./images/waffel.jpg",
    badgeClass: "chef",
    name: {
      tr: "Taze Sıcak Waffle",
      en: "Fresh Belgian Waffle",
      de: "Frisch gebackene Waffel",
    },
    desc: {
      tr: "Sıcak taze pişmiş çıtır waffle; pudra şekeri, çikolata sosu veya mevsim meyveleri ile.",
      en: "Warm freshly baked crispy waffle served with powdered sugar, chocolate sauce or seasonal fruits.",
      de: "Ofenfrische goldbraune Waffel, serviert mit feinem Puderzucker, Schokosauce oder Früchten.",
    },
    badge: {
      tr: "Taze / 4.00 €",
      en: "Fresh / 4.00 €",
      de: "Ofenfrisch / 4.00 €",
    },
    ingredients: {
      tr: ["🧇 Taze Waffle Hamuru", "🍫 Çikolata Sosu", "✨ Pudra Şekeri"],
      en: ["🧇 Fresh Waffle Batter", "🍫 Chocolate Sauce", "✨ Powdered Sugar"],
      de: ["🧇 Frischer Waffelteig", "🍫 Schokosauce", "✨ Puderzucker"],
    },
    allergens: {
      tr: [
        "🌾 Gluten (Waffle hamuru)",
        "🥚 Yumurta (Waffle hamuru)",
        "🥛 Süt (Hamur ve çikolata sosu)",
        "🥜 Fındık (Çikolata sosunda olabilir)",
        "🫘 Soya (Çikolata sosunda lesitin)",
      ],
      en: [
        "🌾 Gluten (Waffle batter)",
        "🥚 Egg (Waffle batter)",
        "🥛 Milk (Batter & chocolate sauce)",
        "🥜 Hazelnuts (possible in chocolate sauce)",
        "🫘 Soy (Lecithin in chocolate sauce)",
      ],
      de: [
        "🌾 Gluten (Waffelteig)",
        "🥚 Ei (Waffelteig)",
        "🥛 Milch (Teig & Schokosauce)",
        "🥜 Haselnüsse (in Schokosauce möglich)",
        "🫘 Soja (Lecithin in Schokosauce)",
      ],
    },
  },
  {
    id: 36,
    category: "tatli",
    price: "1.50 €",
    img: "./images/nussecke.jpg",
    badgeClass: "chef",
    name: {
      tr: "Fındıklı Nussecke (1 Adet)",
      en: "German Nut Corner - Nussecke (1 Pc)",
      de: "Traditionelle Nussecke (1 Stück)",
    },
    desc: {
      tr: "Tereyağlı gevrek taban, kayısı marmelatı, bol karamelize kavrulmuş fındık ve köşeleri bitter çikolata kaplı klasik Nussecke (1 adet).",
      en: "Crisp shortcrust pastry base with apricot jam, caramelized roasted hazelnuts, and chocolate-dipped corners (1 piece).",
      de: "Traditioneller knuspriger Mürbeteig mit Aprikosenkonfitüre, gerösteten Haselnüssen und feinen Schokoladenecken (1 Stück).",
    },
    badge: {
      tr: "1 Adet / 1.50 €",
      en: "1 Pc / 1.50 €",
      de: "1 Stück / 1.50 €",
    },
    ingredients: {
      tr: [
        "🌰 Kavrulmuş Fındık",
        "🍫 Bitter Çikolata",
        "🧈 Tereyağlı Hamur",
        "🍑 Kayısı Marmelatı",
      ],
      en: [
        "🌰 Roasted Hazelnuts",
        "🍫 Dark Chocolate",
        "🧈 Shortcrust Dough",
        "🍑 Apricot Jam",
      ],
      de: [
        "🌰 Geröstete Haselnüsse",
        "🍫 Dunkle Schokolade",
        "🧈 Mürbeteig",
        "🍑 Aprikosenkonfitüre",
      ],
    },
    allergens: {
      tr: [
        "🌾 Gluten (Buğday unu)",
        "🥜 Fındık (Kavrulmuş fındık kaplama)",
        "🥛 Süt (Tereyağlı hamur)",
        "🥚 Yumurta (Kurabiye hamuru)",
        "🫘 Soya (Çikolata kaplamasında lesitin)",
      ],
      en: [
        "🌾 Gluten (Wheat flour)",
        "🥜 Hazelnuts (Roasted nut topping)",
        "🥛 Milk (Butter shortcrust dough)",
        "🥚 Egg (Shortcrust pastry)",
        "🫘 Soy (Lecithin in chocolate dip)",
      ],
      de: [
        "🌾 Gluten (Weizenmehl)",
        "🥜 Haselnüsse (Schalenfrüchte)",
        "🥛 Milch (Butter im Mürbeteig)",
        "🥚 Ei (im Mürbeteig)",
        "🫘 Soja (Lecithin in Schokolade)",
      ],
    },
  },
  {
    id: 37,
    category: "tatli",
    price: "1.50 €",
    img: "./images/elmali-kurabiye.jpg",
    badgeClass: "chef",
    name: {
      tr: "Elmalı Kurabiye (1 Adet)",
      en: "Homemade Apple Cookie (1 Pc)",
      de: "Feine Apfeltasche / Apfelkeks (1 Stück)",
    },
    desc: {
      tr: "Ağızda dağılan nefis tereyağlı hamur içerisinde tarçınlı elma ve ceviz harcı, üzeri pudra şekeri ile (1 adet).",
      en: "Melt-in-your-mouth buttery pastry filled with spiced cinnamon apples and walnuts, dusted with powdered sugar (1 pc).",
      de: "Zarter Mürbeteig gefüllt mit aromatischen Zimtäpfeln und Walnüssen, mit feinem Puderzucker bestäubt (1 Stück).",
    },
    badge: {
      tr: "1 Adet / 1.50 €",
      en: "1 Pc / 1.50 €",
      de: "1 Stück / 1.50 €",
    },
    ingredients: {
      tr: [
        "🍎 Tarçınlı Elma Harcı",
        "🌰 Ceviz",
        "✨ Pudra Şekeri",
        "🧈 Tereyağlı Hamur",
      ],
      en: [
        "🍎 Cinnamon Apple Filling",
        "🌰 Walnuts",
        "✨ Powdered Sugar",
        "🧈 Butter Cookie Dough",
      ],
      de: [
        "🍎 Zimt-Apfelfüllung",
        "🌰 Walnüsse",
        "✨ Puderzucker",
        "🧈 Buttermürbeteig",
      ],
    },
    allergens: {
      tr: [
        "🌾 Gluten (Buğday unu)",
        "🥛 Süt (Tereyağı ve yoğurt)",
        "🥜 Ceviz (Elmalı iç harçta)",
        "🥚 Yumurta (Hamurda bulunabilir)",
      ],
      en: [
        "🌾 Gluten (Wheat flour)",
        "🥛 Milk (Butter & yogurt)",
        "🥜 Walnuts (in apple filling)",
        "🥚 Egg (possible in dough)",
      ],
      de: [
        "🌾 Gluten (Weizenmehl)",
        "🥛 Milch (Butter & Joghurt)",
        "🥜 Walnüsse (in der Apfelfüllung)",
        "🥚 Ei (im Teig möglich)",
      ],
    },
  },
];

// Node.js ve Browser uyumluluğu için
if (typeof module !== "undefined" && module.exports) {
  module.exports = menuItems;
}
