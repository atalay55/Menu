/**
 * ====================================================================
 * FATİH CAMİ MENÜ - YEMEK VE İÇECEK LİSTESİ (MENU DATA)
 * ====================================================================
 * Bu dosyada menüdeki tüm ürünleri düzenleyebilir,
 * yeni ürün ekleyebilir veya istemediğiniz ürünleri silebilirsiniz.
 * 
 * 📌 KATEGORİ KODLARI (category):
 * - "breakfast" ➔ Kahvaltı
 * - "lunch"     ➔ Öğle Yemeği
 * - "dinner"    ➔ Akşam Yemeği
 * - "dessert"   ➔ Tatlılar
 * - "drinks"    ➔ İçecekler
 * 
 * 📌 ROZET RENKLERİ (badgeClass):
 * - "chef"  ➔ Turuncu (Popüler, Şefin Seçimi vb.)
 * - "vegan" ➔ Yeşil (Organik, Vejetaryen, Fit vb.)
 * - "spicy" ➔ Kırmızı (Özel Lezzet, Acılı vb.)
 * ====================================================================
 */

const menuItems = [
  // ==========================================
  // 1. KAHVALTI (BREAKFAST)
  // ==========================================
  {
    id: 1,
    category: "breakfast",
    price: "12.50 €",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
    badgeClass: "chef",
    name: {
      tr: "Gurme Tavuk Burger",
      en: "Gourmet Chicken Burger",
      de: "Gourmet Hähnchen-Burger"
    },
    desc: {
      tr: "Özel soslu çıtır tavuk fileto, eritilmiş cheddar peyniri ve taze yeşillikler.",
      en: "Crispy chicken breast with chef's secret sauce, melted cheddar, and farm greens.",
      de: "Knusprige Hähnchenbrust mit Spezialsauce, geschmolzenem Cheddar und Salat."
    },
    badge: {
      tr: "Popüler",
      en: "Popular",
      de: "Beliebt"
    }
  },
  {
    id: 2,
    category: "breakfast",
    price: "15.00 €",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=80",
    badgeClass: "chef",
    name: {
      tr: "Geleneksel Köy Kahvaltısı",
      en: "Traditional Country Breakfast",
      de: "Traditionelles Bauernfrühstück"
    },
    desc: {
      tr: "Ezine peyniri, ev yapımı reçeller, organik zeytinler, tereyağı ve fırından sıcak simit.",
      en: "Artisanal cheeses, homemade fruit jams, organic olives, butter, and warm sesame simit.",
      de: "Feine Käsesorten, Marmelade, Bio-Oliven, Butter und ofenwarmes Simit."
    },
    badge: {
      tr: "Şefin Seçimi",
      en: "Chef's Choice",
      de: "Empfehlung"
    }
  },
  {
    id: 3,
    category: "breakfast",
    price: "11.00 €",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80",
    badgeClass: "vegan",
    name: {
      tr: "Avokadolu Poşe Yumurta",
      en: "Avocado Poached Eggs",
      de: "Pochierte Eier mit Avocado"
    },
    desc: {
      tr: "Ekşi mayalı ekmek üzerinde ezilmiş avokado, çiftlik poşe yumurta ve frenk soğanı.",
      en: "Toasted sourdough topped with mashed avocado, organic poached eggs, and chives.",
      de: "Geröstetes Sauerteigbrot mit cremiger Avocado, Bio-Pochiertem Ei und Schnittlauch."
    },
    badge: {
      tr: "Sağlıklı",
      en: "Healthy",
      de: "Gesund"
    }
  },

  // ==========================================
  // 2. ÖĞLE YEMEĞİ (LUNCH)
  // ==========================================
  {
    id: 4,
    category: "lunch",
    price: "16.00 €",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
    badgeClass: "vegan",
    name: {
      tr: "Taş Fırın Margherita Pizza",
      en: "Stone-Oven Margherita Pizza",
      de: "Steinofen Margherita Pizza"
    },
    desc: {
      tr: "48 saat mayalanmış hamur, manda mozzarella, San Marzano domates sosu ve fesleğen.",
      en: "48-hour fermented dough, buffalo mozzarella, San Marzano tomato sauce, and basil.",
      de: "48 Stunden fermentierter Teig, Büffelmozzarella, Tomatensauce und Basilikum."
    },
    badge: {
      tr: "Vejetaryen",
      en: "Vegetarian",
      de: "Vegetarisch"
    }
  },
  {
    id: 5,
    category: "lunch",
    price: "10.50 €",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80",
    badgeClass: "vegan",
    name: {
      tr: "Akdeniz Kinoa Salatası",
      en: "Mediterranean Quinoa Salad",
      de: "Mediterraner Quinoa-Salat"
    },
    desc: {
      tr: "Renkli kinoa, taze roka, çeri domates, avokado ve narenciyeli sızma zeytinyağı sosu.",
      en: "Tri-color quinoa, wild arugula, cherry tomatoes, avocado, and citrus vinaigrette.",
      de: "Bunter Quinoa, Rucola, Kirschtomaten, Avocado und Zitrus-Olivenöl-Dressing."
    },
    badge: {
      tr: "Fit & Hafif",
      en: "Light & Fit",
      de: "Leicht & Fit"
    }
  },
  {
    id: 6,
    category: "lunch",
    price: "15.00 €",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
    badgeClass: "chef",
    name: {
      tr: "Kremalı Mantarlı Fettuccine",
      en: "Creamy Truffle Fettuccine",
      de: "Cremige Trüffel-Fettuccine"
    },
    desc: {
      tr: "Taze el yapımı fettuccine, porçini ve kestane mantarı, trüf aroması ve parmesan.",
      en: "Handmade fresh fettuccine, porcini & wild mushrooms, truffle essence, and parmesan.",
      de: "Hausgemachte frische Fettuccine, Waldpilze, Trüffelaroma und Parmesan."
    },
    badge: {
      tr: "Çok Satan",
      en: "Best Seller",
      de: "Bestseller"
    }
  },

  // ==========================================
  // 3. AKŞAM YEMEĞİ (DINNER)
  // ==========================================
  {
    id: 7,
    category: "dinner",
    price: "29.00 €",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80",
    badgeClass: "chef",
    name: {
      tr: "Izgara Antrikot Steak",
      en: "Grilled Ribeye Steak",
      de: "Gegrilltes Ribeye-Steak"
    },
    desc: {
      tr: "Meşe kömüründe dinlendirilmiş et, tereyağlı bebek patates ve ızgara kuşkonmaz.",
      en: "Dry-aged ribeye steak, roasted baby potatoes, and grilled buttered asparagus.",
      de: "Gereiftes Ribeye-Steak über Holzkohle gegrillt, Rosmarinkartoffeln und Spargel."
    },
    badge: {
      tr: "Şefin İmzası",
      en: "Chef's Signature",
      de: "Chef-Spezialität"
    }
  },
  {
    id: 8,
    category: "dinner",
    price: "23.00 €",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80",
    badgeClass: "spicy",
    name: {
      tr: "Deniz Mahsüllü Paella",
      en: "Seafood Saffron Paella",
      de: "Meeresfrüchte-Paella"
    },
    desc: {
      tr: "Safranlı pirinç yatağında jumbo karides, kalamar, midye ve taze Akdeniz baharatları.",
      en: "Traditional saffron rice with tiger prawns, tender calamari, black mussels, and herbs.",
      de: "Safranreis mit Riesengarnelen, zartem Calamari, Muscheln und Kräutern."
    },
    badge: {
      tr: "Özel Lezzet",
      en: "Specialty",
      de: "Delikatesse"
    }
  },
  {
    id: 9,
    category: "dinner",
    price: "26.00 €",
    img: "https://images.unsplash.com/photo-1514944298352-f673b7d19760?auto=format&fit=crop&w=400&q=80",
    badgeClass: "chef",
    name: {
      tr: "Fırında Kuzu İncik",
      en: "Slow-Braised Lamb Shank",
      de: "Geschmorte Lammhaxe"
    },
    desc: {
      tr: "Ağır ateşte 6 saat nar gibi pişirilmiş kuzu incik, kadife patates püresi ile.",
      en: "Fall-off-the-bone lamb shank slow-braised for 6 hours with velvet potato puree.",
      de: "6 Stunden sanft geschmorte Lammhaxe auf cremigem Kartoffelpüree."
    },
    badge: {
      tr: "Klasik",
      en: "Classic",
      de: "Klassiker"
    }
  },

  // ==========================================
  // 4. TATLILAR (DESSERT)
  // ==========================================
  {
    id: 10,
    category: "dessert",
    price: "9.00 €",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80",
    badgeClass: "chef",
    name: {
      tr: "San Sebastian Cheesecake",
      en: "San Sebastian Cheesecake",
      de: "San Sebastian Käsekuchen"
    },
    desc: {
      tr: "İçi akışkan, karamelize kabuklu İspanyol cheesecake, ılık Belçika çikolatası ile.",
      en: "Creamy Basque cheesecake with caramelized crust, served with warm chocolate.",
      de: "Cremig gebackener baskischer Käsekuchen mit Schokoladensauce."
    },
    badge: {
      tr: "Favori",
      en: "Favorite",
      de: "Favorit"
    }
  },
  {
    id: 11,
    category: "dessert",
    price: "9.50 €",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
    badgeClass: "chef",
    name: {
      tr: "Belçika Çikolatalı Sufle",
      en: "Belgian Chocolate Soufflé",
      de: "Schokoladensoufflé"
    },
    desc: {
      tr: "%70 bitter Callebaut çikolatası ile sıcak akışkan sufle, vanilyalı dondurma.",
      en: "Rich dark Callebaut chocolate lava cake served with vanilla gelato.",
      de: "Warmer Schokokuchen mit flüssigem Callebaut-Kern und Vanilleeis."
    },
    badge: {
      tr: "Sıcak Servis",
      en: "Served Hot",
      de: "Heiß serviert"
    }
  },
  {
    id: 12,
    category: "dessert",
    price: "10.50 €",
    img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=400&q=80",
    badgeClass: "chef",
    name: {
      tr: "Antep Fıstıklı Baklava",
      en: "Pistachio Baklava",
      de: "Pistazien-Baklava"
    },
    desc: {
      tr: "Çıtır ince yufka, bol boz fıstık ve sade yağ ile fırınlanmış geleneksel lezzet.",
      en: "Crispy filo pastry filled with prime Antep emerald pistachios and syrup.",
      de: "Hauchdünner Filoteig mit feinsten Antep-Pistazien und aromatischem Sirup."
    },
    badge: {
      tr: "Geleneksel",
      en: "Traditional",
      de: "Traditionell"
    }
  },

  // ==========================================
  // 5. İÇECEKLER (DRINKS)
  // ==========================================
  {
    id: 13,
    category: "drinks",
    price: "4.50 €",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
    badgeClass: "vegan",
    name: {
      tr: "Special Filtre Kahve",
      en: "Specialty Filter Coffee",
      de: "Spezial-Filterkaffee"
    },
    desc: {
      tr: "Etiyopya tek köken çekirdeklerden taze öğütülmüş V60 damlama kahve.",
      en: "Single-origin Ethiopian beans freshly hand-poured with floral notes.",
      de: "Frisch aufgebrühter V60 Handfilterkaffee aus äthiopischen Bohnen."
    },
    badge: {
      tr: "Organik",
      en: "Organic",
      de: "Bio"
    }
  },
  {
    id: 14,
    category: "drinks",
    price: "5.00 €",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80",
    badgeClass: "vegan",
    name: {
      tr: "Taze Nane & Zencefilli Limonata",
      en: "Fresh Mint Lemonade",
      de: "Minz-Limonade"
    },
    desc: {
      tr: "Bahçe limonları, taze nane yaprakları, bal ve hafif taze zencefil özü.",
      en: "Fresh squeezed lemons, garden mint, pure honey, and a hint of ginger.",
      de: "Frisch gepresste Zitronen, Gartenminze, Honig und feine Ingwernote."
    },
    badge: {
      tr: "Ferahlatıcı",
      en: "Refreshing",
      de: "Erfrischend"
    }
  },
  {
    id: 15,
    category: "drinks",
    price: "6.50 €",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80",
    badgeClass: "vegan",
    name: {
      tr: "Japon Matcha Latte",
      en: "Japanese Matcha Latte",
      de: "Japanischer Matcha Latte"
    },
    desc: {
      tr: "Uji seremoniyel matcha tozu, köpürtülmüş yulaf sütü ve vanilya dokunuşu.",
      en: "Ceremonial matcha whisked with steamed oat milk and vanilla touch.",
      de: "Hochwertiger Matcha-Tee mit aufgeschäumter Hafermilch und Vanille."
    },
    badge: {
      tr: "Detox",
      en: "Detox",
      de: "Detox"
    }
  }
];
