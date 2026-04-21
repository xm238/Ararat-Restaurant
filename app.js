const STORAGE_KEY = "ararat_language";

const translations = {
  tr: {
    brandSubline: "Restaurant & Rooftop",
    navAbout: "Hakkında",
    navGallery: "Galeri",
    navMenu: "Menü",
    languageLabel: "Dil",
    heroEyebrow: "Sultanahmet'te Manzaralı Akşam",
    heroTitle: "Ararat Terrace Restaurant & Rooftop",
    heroText: "Blue Mosque manzarasına karşı özgün Türk mutfağı, deniz mahsulleri ve gün batımı atmosferi.",
    reviewsWord: "yorum",
    openUntil: "Bugün 23:30'a kadar açık",
    serviceTypes: "Mekanda servis · Drive-through · No-contact delivery",
    ctaMenu: "QR Menüye Git",
    ctaReserve: "Masa Ayırt",
    cardViewTitle: "Blue Mosque Manzarası",
    cardViewText: "Teras katında İstanbul siluetine karşı akşam yemeği deneyimi.",
    cardServiceTitle: "Servis Seçenekleri",
    cardServiceText: "Mekanda servis, drive-through ve no-contact delivery seçenekleri.",
    cardLocationTitle: "Merkezi Konum",
    cardLocationText: "Sultan Ahmet, Torun Sk. No:3 D:101, Fatih / İstanbul.",
    aboutTitle: "İstanbul'un En Güçlü Rooftop Akşamı",
    aboutBody: "Ararat Terrace, tarihi yarımadanın kalbinde yer alır. İmzalı kebaplardan taze deniz mahsullerine kadar geniş bir menüyle hem turistler hem yerel misafirler için premium bir atmosfer sunar.",
    aboutItem1: "5,204+ değerlendirme ile 4.8 puan",
    aboutItem2: "Aile yemeği, romantik akşam ve grup rezervasyonlarına uygun",
    aboutItem3: "Canlı şehir ritmini hisseden sakin rooftop konsepti",
    ctaCall: "Ara",
    ctaDirections: "Yol Tarifi",
    galleryTitle: "Ambiyans ve Lezzet",
    gallerySubtitle: "Mekandan ve sunumlardan seçilmiş kareler.",
    reviewTitle: "Misafirler Ne Diyor?",
    reviewSubtitle: "Gerçek ziyaretçilerden öne çıkan yorumlar.",
    review1: "\"Rooftop gece manzarası mükemmeldi, servis çok profesyoneldi ve yemekler çok lezzetliydi.\"",
    review2: "\"Sakin atmosferi, temizliği ve manzarasıyla İstanbul'da özel bir akşam için harika bir seçim.\"",
    review3: "\"Blue Mosque manzarası 10/10. Yemeğin kalitesi ve sunumu beklentimin üstündeydi.\"",
    contactTitle: "Konum & İletişim",
    addressLabel: "Adres:",
    phoneLabel: "Telefon:",
    hoursLabel: "Saatler:",
    hoursValue: "Her gün 09:00 - 23:30",
    footerLine: "Ararat Terrace Restaurant & Rooftop · İstanbul, Türkiye",
    backHome: "Ana Sayfa",
    menuHeroEyebrow: "QR Menü",
    menuHeroTitle: "Ararat Menü",
    menuHeroText: "Kategoriyi seç, menüyü filtrele ve hızlıca karar ver.",
    menuPriceNote: "Fiyatlar demo amaçlıdır ve ₺ cinsindendir.",
    searchPlaceholder: "Yemek ara...",
    clearSearch: "Temizle",
    allCategories: "Tümü",
    emptyMenu: "Aramana uygun ürün bulunamadı.",
    badgeFresh: "Taze",
    badgeSea: "Deniz",
    badgeChef: "Özel"
  },
  en: {
    brandSubline: "Restaurant & Rooftop",
    navAbout: "About",
    navGallery: "Gallery",
    navMenu: "Menu",
    languageLabel: "Language",
    heroEyebrow: "Sunset Dining In Sultanahmet",
    heroTitle: "Ararat Terrace Restaurant & Rooftop",
    heroText: "Authentic Turkish cuisine, seafood specialties, and a Blue Mosque view from a premium rooftop atmosphere.",
    reviewsWord: "reviews",
    openUntil: "Open today until 11:30 PM",
    serviceTypes: "Dine-in · Drive-through · No-contact delivery",
    ctaMenu: "Open QR Menu",
    ctaReserve: "Reserve Table",
    cardViewTitle: "Blue Mosque View",
    cardViewText: "An elevated dinner experience facing Istanbul's iconic skyline.",
    cardServiceTitle: "Service Types",
    cardServiceText: "Dine-in, drive-through, and no-contact delivery options.",
    cardLocationTitle: "Prime Location",
    cardLocationText: "Sultan Ahmet, Torun St. No:3 D:101, Fatih / Istanbul.",
    aboutTitle: "A Signature Rooftop Night In Istanbul",
    aboutBody: "Ararat Terrace is located in the heart of the historical peninsula. From signature kebabs to fresh seafood, the menu delivers a premium experience for both tourists and local guests.",
    aboutItem1: "4.8 rating with 5,204+ reviews",
    aboutItem2: "Perfect for family dinners, romantic evenings, and group reservations",
    aboutItem3: "Relaxed rooftop concept with vibrant city energy",
    ctaCall: "Call",
    ctaDirections: "Directions",
    galleryTitle: "Atmosphere & Flavor",
    gallerySubtitle: "Selected moments from the venue and culinary presentations.",
    reviewTitle: "What Guests Say",
    reviewSubtitle: "Featured feedback from real visitors.",
    review1: "\"The rooftop night view was magical, service was professional, and the food was unforgettable.\"",
    review2: "\"Quiet, clean, and warm atmosphere with an incredible terrace view in Istanbul.\"",
    review3: "\"Blue Mosque view was a 10/10. Food quality and presentation were above expectations.\"",
    contactTitle: "Location & Contact",
    addressLabel: "Address:",
    phoneLabel: "Phone:",
    hoursLabel: "Hours:",
    hoursValue: "Daily 09:00 AM - 11:30 PM",
    footerLine: "Ararat Terrace Restaurant & Rooftop · Istanbul, Turkiye",
    backHome: "Home",
    menuHeroEyebrow: "QR Menu",
    menuHeroTitle: "Ararat Menu",
    menuHeroText: "Pick a category, filter dishes, and decide quickly.",
    menuPriceNote: "Prices are demo values displayed in Turkish Lira.",
    searchPlaceholder: "Search dishes...",
    clearSearch: "Clear",
    allCategories: "All",
    emptyMenu: "No menu item matches your search.",
    badgeFresh: "Fresh",
    badgeSea: "Sea",
    badgeChef: "Special"
  },
  ar: {
    brandSubline: "مطعم وروفتوب",
    navAbout: "عن المطعم",
    navGallery: "المعرض",
    navMenu: "القائمة",
    languageLabel: "اللغة",
    heroEyebrow: "عشاء بإطلالة في السلطان أحمد",
    heroTitle: "Ararat Terrace Restaurant & Rooftop",
    heroText: "مأكولات تركية أصلية وأطباق بحرية مميزة مع إطلالة مباشرة على الجامع الأزرق من روفتوب فاخر.",
    reviewsWord: "تقييم",
    openUntil: "مفتوح اليوم حتى 11:30 مساءً",
    serviceTypes: "داخل المطعم · خدمة سريعة · توصيل بدون تلامس",
    ctaMenu: "افتح قائمة QR",
    ctaReserve: "احجز طاولة",
    cardViewTitle: "إطلالة الجامع الأزرق",
    cardViewText: "تجربة عشاء راقية مع مشهد بانورامي لإسطنبول.",
    cardServiceTitle: "خيارات الخدمة",
    cardServiceText: "خدمة داخل المطعم، مرور سريع، وتوصيل بدون تلامس.",
    cardLocationTitle: "موقع مركزي",
    cardLocationText: "السلطان أحمد، شارع تورون رقم 3، الفاتح / إسطنبول.",
    aboutTitle: "أمسية روفتوب مميزة في إسطنبول",
    aboutBody: "يقع Ararat Terrace في قلب المدينة التاريخية. من الكباب المميز إلى المأكولات البحرية الطازجة، يقدم المكان تجربة راقية للزوار والسكان المحليين.",
    aboutItem1: "تقييم 4.8 من أكثر من 5,204 مراجعات",
    aboutItem2: "مناسب للعائلات، الأمسيات الرومانسية، والحجوزات الجماعية",
    aboutItem3: "أجواء هادئة مع طاقة المدينة من أعلى السطح",
    ctaCall: "اتصال",
    ctaDirections: "الاتجاهات",
    galleryTitle: "الأجواء والنكهات",
    gallerySubtitle: "لقطات مختارة من المكان وتقديم الأطباق.",
    reviewTitle: "ماذا يقول الضيوف؟",
    reviewSubtitle: "آراء حقيقية من الزوار.",
    review1: "\"إطلالة الروفتوب الليلية كانت رائعة، والخدمة احترافية، والطعام ممتاز.\"",
    review2: "\"مكان هادئ ونظيف مع أجواء دافئة وإطلالة جميلة جدًا.\"",
    review3: "\"إطلالة الجامع الأزرق 10/10، وجودة الطعام والتقديم أعلى من التوقعات.\"",
    contactTitle: "الموقع والتواصل",
    addressLabel: "العنوان:",
    phoneLabel: "الهاتف:",
    hoursLabel: "ساعات العمل:",
    hoursValue: "يوميًا 09:00 - 23:30",
    footerLine: "Ararat Terrace Restaurant & Rooftop · إسطنبول، تركيا",
    backHome: "الرئيسية",
    menuHeroEyebrow: "قائمة QR",
    menuHeroTitle: "قائمة Ararat",
    menuHeroText: "اختر الفئة، صفِّ الأطباق، واطلب بسرعة.",
    menuPriceNote: "الأسعار تجريبية ومكتوبة بالليرة التركية.",
    searchPlaceholder: "ابحث عن طبق...",
    clearSearch: "مسح",
    allCategories: "الكل",
    emptyMenu: "لا يوجد طبق يطابق البحث.",
    badgeFresh: "طازج",
    badgeSea: "بحري",
    badgeChef: "مميز"
  }
};

function dish(tr, en, ar = en) {
  return { tr, en, ar };
}

const menuCategories = [
  {
    id: "cold",
    basePrice: 210,
    imageQuery: "meze plate",
    label: { tr: "Soğuk Başlangıçlar", en: "Cold Starters", ar: "المقبلات الباردة" },
    summary: {
      tr: "Zeytinyağlılar ve soğuk meze sunumları.",
      en: "Cold meze and olive-oil based starters.",
      ar: "مقبلات باردة وتشكيلة مزة."
    },
    items: [
      dish("Karışık meze tabağı", "Mix meze plate", "طبق مقبلات مشكلة"),
      dish("Humus", "Hummus", "حمص"),
      dish("Acılı domates ezmesi", "Spicy tomato dip", "صلصة طماطم حارة"),
      dish("Cacık", "Tzatziki", "تزاتزيكي"),
      dish("Şakşuka", "Saksuka", "شكشوكة"),
      dish("Fesleğen soslu mozzarella", "Mozzarella with basil sauce", "موزاريلا مع صلصة الريحان"),
      dish("Füme karides", "Smoked shrimps", "روبيان مدخن"),
      dish("Füme somon", "Smoked salmon", "سلمون مدخن"),
      dish("Peynir tabağı", "Cheese plate", "طبق أجبان")
    ]
  },
  {
    id: "hot",
    basePrice: 245,
    imageQuery: "hot starter",
    label: { tr: "Sıcak Başlangıçlar", en: "Hot Starters", ar: "المقبلات الساخنة" },
    summary: {
      tr: "Sıcak servis edilen başlangıç lezzetleri.",
      en: "Warm and crispy starters for sharing.",
      ar: "مقبلات ساخنة مناسبة للمشاركة."
    },
    items: [
      dish("Günün çorbası", "Soup of the day", "شوربة اليوم"),
      dish("Kızarmış kalamar", "Fried calamari", "كالاماري مقلي"),
      dish("Tereyağlı sarımsaklı karides", "Shrimps in butter garlic", "روبيان بالزبدة والثوم"),
      dish("Balık çorbası", "Fish soup", "شوربة سمك"),
      dish("Peynirli rulolar", "Cheese rolls", "لفائف جبن"),
      dish("Pastırmalı peynirli rulolar", "Pastrami cheese rolls", "لفائف جبن مع بسطرمة"),
      dish("Izgara hellim", "Grilled halloumi", "حلوم مشوي"),
      dish("Kadayıflı dil peyniri", "String cheese with kadayif", "جبن خيطي بالكنافة"),
      dish("Patlıcan teknesi", "Eggplant boat", "باذنجان محشو"),
      dish("Tereyağlı sarımsaklı ahtapot", "Octopus with butter garlic", "أخطبوط بالزبدة والثوم"),
      dish("Fıstıklı irmik topları", "Semolina balls with pistachio", "كرات سميد بالفستق")
    ]
  },
  {
    id: "salads",
    basePrice: 195,
    imageQuery: "fresh salad",
    label: { tr: "Salatalar", en: "Salads", ar: "السلطات" },
    summary: {
      tr: "Taze yeşillikler ve hafif seçenekler.",
      en: "Fresh greens and balanced seasonal bowls.",
      ar: "سلطات طازجة وخفيفة."
    },
    items: [
      dish("Yunan salatası", "Greek salad", "سلطة يونانية"),
      dish("Roka salatası", "Rocket salad", "سلطة جرجير"),
      dish("Yeşil salata", "Green salad", "سلطة خضراء"),
      dish("Dağ salatası", "Mountain salad", "سلطة الجبل"),
      dish("Sezar salata", "Caesar salad", "سلطة سيزر"),
      dish("Deniz mahsullü salata", "Seafood salad", "سلطة مأكولات بحرية")
    ]
  },
  {
    id: "pastas",
    basePrice: 280,
    imageQuery: "pasta dish",
    label: { tr: "Makarnalar", en: "Pastas", ar: "الباستا" },
    summary: {
      tr: "Klasik ve özel soslu makarna çeşitleri.",
      en: "Classic and creamy pasta options.",
      ar: "أطباق باستا كلاسيكية وكريمية."
    },
    items: [
      dish("Spagetti bolonez", "Spaghetti bolognese", "سباغيتي بولونيز"),
      dish("Penne arrabbiata", "Penne arrabbiata", "بيني أرابياتا"),
      dish("Fettuccine Alfredo", "Fettuccine Alfredo", "فيتوتشيني ألفريدو"),
      dish("Ispanaklı ravioli", "Spinach ravioli", "رافيولي بالسبانخ")
    ]
  },
  {
    id: "kebabs",
    basePrice: 410,
    imageQuery: "turkish kebab",
    label: { tr: "Kebaplar", en: "Kebabs", ar: "الكباب" },
    summary: {
      tr: "Mangal ateşinde pişen imza et tabakları.",
      en: "Signature charcoal-grilled meat selections.",
      ar: "تشكيلة كباب مشوية على الفحم."
    },
    items: [
      dish("Adana kebap", "Adana kebab", "كباب أضنة"),
      dish("Kuzu şiş kebap", "Lamb shish kebab", "شيش كباب لحم"),
      dish("Tavuk şiş kebap", "Chicken shish kebab", "شيش كباب دجاج"),
      dish("Beğendi soslu ızgara köfte", "Grilled meatballs with begendi sauce", "كفتة مشوية مع صلصة بگندي"),
      dish("Kuzu pirzola", "Lamb chops", "ريش لحم"),
      dish("Hardallı tavuk", "Chicken with mustard", "دجاج بصلصة الخردل"),
      dish("Tavuk kanat", "Chicken wings", "أجنحة دجاج"),
      dish("Karışık kebap tabağı", "Mix kebab plate", "طبق كباب مشكل")
    ]
  },
  {
    id: "pitas",
    basePrice: 250,
    imageQuery: "turkish pide",
    label: { tr: "Pideler", en: "Pitas", ar: "البيدا" },
    summary: {
      tr: "Fırından çıkan geleneksel pide seçenekleri.",
      en: "Oven-baked Turkish pide varieties.",
      ar: "أنواع بيدة تركية مخبوزة في الفرن."
    },
    items: [
      dish("Peynirli pide", "Pita with cheese", "بيدة بالجبن"),
      dish("Karışık pide", "Mix pide", "بيدة مشكلة")
    ]
  },
  {
    id: "pizzas",
    basePrice: 300,
    imageQuery: "pizza slice",
    label: { tr: "Pizzalar", en: "Pizzas", ar: "البيتزا" },
    summary: {
      tr: "İnce hamur pizza klasikleri.",
      en: "Classic thin-crust pizza selections.",
      ar: "بيتزا كلاسيكية بعجين رقيق."
    },
    items: [
      dish("Margherita pizza", "Margherita pizza", "بيتزا مارغريتا"),
      dish("Karışık pizza", "Mix pizza", "بيتزا مشكلة")
    ]
  },
  {
    id: "seafood",
    basePrice: 520,
    imageQuery: "seafood platter",
    label: { tr: "Deniz Mahsulleri", en: "Seafood", ar: "المأكولات البحرية" },
    summary: {
      tr: "Günün taze balıkları ve özel deniz tabakları.",
      en: "Daily fish and premium seafood signatures.",
      ar: "أسماك يومية طازجة وأطباق بحرية مميزة."
    },
    items: [
      dish("Izgara levrek", "Grilled seabass", "لفرَك مشوي"),
      dish("Çipura", "Sea bream", "دنيس"),
      dish("Lagos balığı", "Ligos fish", "سمك لاغوس"),
      dish("Izgara somon", "Grilled salmon", "سلمون مشوي"),
      dish("Izgara kalamar", "Grilled calamari", "كالاماري مشوي"),
      dish("Giovani levrek", "Seabass Giovani", "لفرَك جيوفاني"),
      dish("Jumbo karides", "Jumbo shrimps", "روبيان جامبو"),
      dish("Hardal soslu balık fileto", "Fillet fish with mustard sauce", "فيليه سمك بصلصة الخردل"),
      dish("Ispanak ve fıstıklı levrek", "Seabass with spinach and pistachio", "لفرَك مع سبانخ وفستق"),
      dish("Dil balığı", "Sole fish", "سمك موسى"),
      dish("Barbun", "Red mullet", "بربون"),
      dish("Balıkçı usulü balık", "Fisherman style fish", "سمك على طريقة الصياد"),
      dish("Şef özel balık", "Chef special fish", "سمك خاص الشيف"),
      dish("Tuzda balık", "Fish in salt", "سمك بالملح"),
      dish("Istakoz", "Lobster", "لوبستر"),
      dish("Karışık deniz mahsulü tabağı", "Mix seafood plate", "طبق مأكولات بحرية مشكل"),
      dish("Kilogram günlük balık", "Kg daily fish", "سمك يومي بالكيلو"),
      dish("Mavi yengeç", "Blue crab", "سلطعون أزرق"),
      dish("İstiridye", "Oyster", "محار"),
      dish("Turbot balığı", "Turbo fish", "سمك توربو"),
      dish("Kılıç balığı", "Sword fish", "سمك أبو سيف")
    ]
  },
  {
    id: "ottoman",
    basePrice: 470,
    imageQuery: "ottoman cuisine",
    label: { tr: "Osmanlı Mutfağı", en: "Ottoman Kitchen", ar: "المطبخ العثماني" },
    summary: {
      tr: "Tarihi mutfaktan gelen güçlü ana yemekler.",
      en: "Hearty signature plates inspired by Ottoman cuisine.",
      ar: "أطباق رئيسية مستوحاة من المطبخ العثماني."
    },
    items: [
      dish("Mutancana", "Mutancana", "موتانجانا"),
      dish("Kuzu incik", "Lamb shank", "موزة لحم"),
      dish("Sac tava", "Sac tava", "ساج تافا"),
      dish("Sultanın favorisi", "Sultan's favorite", "طبق السلطان المفضل"),
      dish("Marmara dana", "Marmara beef", "لحم مارمارا"),
      dish("Anadolu usulü tavuk", "Chicken Anatolia", "دجاج أناضوليا"),
      dish("İncir ve kayısılı tavuk", "Chicken with fig and apricot", "دجاج بالتين والمشمش"),
      dish("Manzo (2 kişilik)", "Manzo (for two)", "مانزو (لشخصين)")
    ]
  },
  {
    id: "vegetarian",
    basePrice: 260,
    imageQuery: "vegetarian dish",
    label: { tr: "Vejetaryen Yemekler", en: "Vegetarian Dishes", ar: "أطباق نباتية" },
    summary: {
      tr: "Sebze odaklı dengeli ana yemekler.",
      en: "Balanced vegetarian mains with rich flavors.",
      ar: "أطباق نباتية متوازنة وغنية بالنكهات."
    },
    items: [
      dish("Izgara sebzeler", "Grilled vegetables", "خضار مشوية"),
      dish("Safran soslu vejetaryen güveç", "Vegetarian casserole with saffron sauce", "طاجن نباتي بصلصة الزعفران"),
      dish("Nuhun ambarı", "Nuhun ambari", "نوحون أمباري")
    ]
  },
  {
    id: "steaks",
    basePrice: 540,
    imageQuery: "steak plate",
    label: { tr: "Biftekler", en: "Steaks", ar: "شرائح اللحم" },
    summary: {
      tr: "Izgara tekniğiyle hazırlanan premium biftekler.",
      en: "Premium steak cuts from the grill.",
      ar: "شرائح لحم فاخرة مشوية."
    },
    items: [
      dish("Mantarlı biftek", "Mushroom steak", "ستيك بالمشروم"),
      dish("Biberli biftek", "Pepper steak", "ستيك بالفلفل"),
      dish("Chateaubriand (2 kişilik)", "Chateaubriand (for two)", "شاتوبريان (لشخصين)")
    ]
  },
  {
    id: "kids",
    basePrice: 190,
    imageQuery: "kids meal",
    label: { tr: "Çocuk Menüsü", en: "Kids Menu", ar: "قائمة الأطفال" },
    summary: {
      tr: "Çocuklar için dengeli ve sevilen tabaklar.",
      en: "Kids-friendly favorites in lighter portions.",
      ar: "أطباق مناسبة للأطفال."
    },
    items: [
      dish("Tom & Jerry", "Tom & Jerry", "توم آند جيري"),
      dish("Garfield", "Garfield", "غارفيلد"),
      dish("Superman", "Superman", "سوبرمان"),
      dish("Barbie Baby", "Barbie Baby", "باربي بيبي")
    ]
  },
  {
    id: "desserts",
    basePrice: 180,
    imageQuery: "turkish dessert",
    label: { tr: "Tatlılar", en: "Desserts", ar: "الحلويات" },
    summary: {
      tr: "Yemeği tamamlayan geleneksel ve modern tatlar.",
      en: "Traditional and modern dessert finishes.",
      ar: "حلويات تقليدية وحديثة."
    },
    items: [
      dish("Baklava", "Baklava", "بقلاوة"),
      dish("Sütlaç", "Rice pudding", "أرز بالحليب"),
      dish("Künefe", "Kunefe", "كنافة"),
      dish("Çikolatalı sufle", "Chocolate souffle", "سوفليه شوكولاتة"),
      dish("Katmer", "Katmer", "كتمر"),
      dish("Dondurma", "Ice cream", "آيس كريم"),
      dish("Meyve tabağı", "Fruit plate", "طبق فواكه")
    ]
  },
  {
    id: "hotdrinks",
    basePrice: 110,
    imageQuery: "hot drink",
    label: { tr: "Sıcak İçecekler", en: "Hot Drinks", ar: "مشروبات ساخنة" },
    summary: {
      tr: "Kahve ve çay odaklı sıcak içecekler.",
      en: "Coffee and tea based warm drinks.",
      ar: "مشروبات ساخنة من القهوة والشاي."
    },
    items: [
      dish("Çay", "Tea", "شاي"),
      dish("Bitki çayları", "Herbal teas", "أعشاب ساخنة"),
      dish("Türk kahvesi", "Turkish coffee", "قهوة تركية"),
      dish("Espresso", "Espresso", "إسبريسو"),
      dish("Cappuccino", "Cappuccino", "كابتشينو"),
      dish("Americano", "Americano", "أمريكانو"),
      dish("Cafe latte", "Coffee latte", "لاتيه"),
      dish("Cafe mocha", "Coffee mocha", "موكا"),
      dish("Sıcak çikolata", "Hot chocolate", "شوكولاتة ساخنة"),
      dish("Salep", "Salep", "سحلب")
    ]
  },
  {
    id: "colddrinks",
    basePrice: 95,
    imageQuery: "cold beverage",
    label: { tr: "Soğuk İçecekler", en: "Cold Drinks", ar: "مشروبات باردة" },
    summary: {
      tr: "Gazlı, taze ve ferahlatıcı içecek seçenekleri.",
      en: "Refreshing sodas, juices, and chilled drinks.",
      ar: "مشروبات باردة ومنعشة."
    },
    items: [
      dish("Kola", "Cola", "كولا"),
      dish("Fanta", "Fanta", "فانتا"),
      dish("Sprite", "Sprite", "سبرايت"),
      dish("Ice tea (limon, şeftali)", "Ice tea (lemon, peach)", "آيس تي (ليمون، خوخ)"),
      dish("Sade soda (küçük)", "Soda water small", "مياه غازية صغيرة"),
      dish("Taze portakal suyu", "Fresh orange juice", "عصير برتقال طازج"),
      dish("Taze nar suyu", "Fresh pomegranate juice", "عصير رمان طازج"),
      dish("Mevsim taze meyve suyu", "Seasonal fresh juice", "عصير موسمي طازج"),
      dish("Limonata", "Lemonade", "ليمونادة"),
      dish("Milkshake", "Milkshake", "ميلك شيك"),
      dish("Ice coffee", "Ice coffee", "قهوة مثلجة"),
      dish("Şalgam suyu", "Turnip juice", "عصير شلغم"),
      dish("Ayran", "Ayran", "عيران"),
      dish("Su", "Water", "ماء")
    ]
  },
  {
    id: "beers",
    basePrice: 150,
    imageQuery: "beer glass",
    label: { tr: "Biralar", en: "Beers", ar: "بيرة" },
    summary: {
      tr: "Yerel ve global bira seçenekleri.",
      en: "Local and international beer selection.",
      ar: "تشكيلة بيرة محلية وعالمية."
    },
    items: [
      dish("Efes", "Efes", "إيفس"),
      dish("Tuborg", "Tuborg", "توبورغ"),
      dish("Bomonti", "Bomonti", "بومونتي"),
      dish("Miller", "Miller", "ميلر")
    ]
  },
  {
    id: "cocktails",
    basePrice: 280,
    imageQuery: "cocktail bar",
    label: { tr: "Kokteyller", en: "Cocktails", ar: "كوكتيلات" },
    summary: {
      tr: "Klasik bar kokteylleri rooftop sunumuyla.",
      en: "Classic cocktail lineup with rooftop style.",
      ar: "كوكتيلات كلاسيكية بطابع الروفتوب."
    },
    items: [
      dish("Sex on the beach", "Sex on the beach", "سكس أون ذا بيتش"),
      dish("Mojito", "Mojito", "موهيتو"),
      dish("Cosmopolitan", "Cosmopolitan", "كوزموبوليتان"),
      dish("Cuba libre", "Cuba libre", "كيوبا ليبر"),
      dish("Gimlet", "Gimlet cocktail", "جيمليت"),
      dish("White russian", "White russian", "وايت رشن"),
      dish("Pina colada", "Pina colada", "بينا كولادا"),
      dish("Long island ice tea", "Long island ice tea", "لونغ آيلاند آيس تي"),
      dish("Margarita", "Margarita", "مارغريتا"),
      dish("Mint julep", "Mint julep", "مينت جوليب"),
      dish("Tequila sunrise", "Tequila sunrise", "تيكيلا صن رايز"),
      dish("Aperol spritz", "Aperol spritz", "أبيرول سبريتز")
    ]
  }
];

const categoryDescriptions = {
  tr: {
    cold: "Soğuk servis",
    hot: "Sıcak servis",
    salads: "Hafif seçim",
    pastas: "İtalyan dokunuşu",
    kebabs: "Izgara imza",
    pitas: "Fırından",
    pizzas: "Taş fırın",
    seafood: "Günün tazesi",
    ottoman: "Geleneksel",
    vegetarian: "Sebze odaklı",
    steaks: "Premium et",
    kids: "Çocuklara özel",
    desserts: "Tatlı final",
    hotdrinks: "Sıcak servis",
    colddrinks: "Serinletici",
    beers: "Şişe servis",
    cocktails: "Bar seçkisi"
  },
  en: {
    cold: "Cold service",
    hot: "Warm bites",
    salads: "Light choice",
    pastas: "Italian style",
    kebabs: "Grill signature",
    pitas: "From oven",
    pizzas: "Stone oven",
    seafood: "Catch of the day",
    ottoman: "Traditional",
    vegetarian: "Plant-based",
    steaks: "Premium meat",
    kids: "Kids option",
    desserts: "Sweet finish",
    hotdrinks: "Hot service",
    colddrinks: "Refreshing",
    beers: "Bottle service",
    cocktails: "Bar lineup"
  },
  ar: {
    cold: "تقديم بارد",
    hot: "مقبلات ساخنة",
    salads: "اختيار خفيف",
    pastas: "طابع إيطالي",
    kebabs: "مشويات مميزة",
    pitas: "من الفرن",
    pizzas: "فرن حجري",
    seafood: "صيد اليوم",
    ottoman: "تقليدي",
    vegetarian: "نباتي",
    steaks: "لحم فاخر",
    kids: "للأطفال",
    desserts: "ختام حلو",
    hotdrinks: "تقديم ساخن",
    colddrinks: "منعش",
    beers: "تقديم زجاجة",
    cocktails: "بار"
  }
};

function stockUrl(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
}

const stockImagePools = {
  default: [
    stockUrl("photo-1517248135467-4c7edcad34c4"),
    stockUrl("photo-1544145945-f90425340c7e"),
    stockUrl("photo-1559339352-11d035aa65de"),
    stockUrl("photo-1563245372-f21724e3856d"),
    stockUrl("photo-1514933651103-005eec06c04b"),
    stockUrl("photo-1541544741938-0af808871cc0"),
    stockUrl("photo-1547592180-85f173990554"),
    stockUrl("photo-1504674900247-0877df9cc836")
  ],
  seafood: [
    stockUrl("photo-1559737558-2f5a35f4523b"),
    stockUrl("photo-1519708227418-c8fd9a32b7a2"),
    stockUrl("photo-1551024709-8f23befc6cf7"),
    stockUrl("photo-1515003197210-e0cd71810b5f")
  ],
  kebabs: [
    stockUrl("photo-1544025162-d76694265947"),
    stockUrl("photo-1529193591184-b1d58069ecdd"),
    stockUrl("photo-1544510808-1bb07bd6db3f"),
    stockUrl("photo-1528605105345-5344ea20e269")
  ],
  desserts: [
    stockUrl("photo-1551024506-0bccd828d307"),
    stockUrl("photo-1559620192-032c4bc4674e"),
    stockUrl("photo-1488477181946-6428a0291777"),
    stockUrl("photo-1519864600265-abb23847ef2c")
  ],
  salads: [
    stockUrl("photo-1512621776951-a57141f2eefd"),
    stockUrl("photo-1498837167922-ddd27525d352"),
    stockUrl("photo-1546069901-ba9599a7e63c"),
    stockUrl("photo-1473093295043-cdd812d0e601")
  ],
  hotdrinks: [
    stockUrl("photo-1514432324607-a09d9b4aefdd"),
    stockUrl("photo-1495474472287-4d71bcdd2085"),
    stockUrl("photo-1442512595331-e89e73853f31"),
    stockUrl("photo-1459755486867-b55449bb39ff")
  ],
  colddrinks: [
    stockUrl("photo-1513558161293-cdaf765ed2fd"),
    stockUrl("photo-1453825012366-3738046cb6c7"),
    stockUrl("photo-1497534446932-c925b458314e"),
    stockUrl("photo-1481391032119-d89fee407e44")
  ],
  cocktails: [
    stockUrl("photo-1536935338788-846bb9981813"),
    stockUrl("photo-1531384441138-2736e62e0919"),
    stockUrl("photo-1514362545857-3bc16c4c7d1b"),
    stockUrl("photo-1470337458703-46ad1756a187")
  ],
  beers: [
    stockUrl("photo-1436076863939-06870fe779c2"),
    stockUrl("photo-1515215316771-2742baa337b6"),
    stockUrl("photo-1510812431401-41d2bd2722f3"),
    stockUrl("photo-1481671703460-040cb8a2d909")
  ]
};

let currentLang = "tr";
let activeCategory = "all";
let searchTerm = "";
let menuRoot = null;
let categoryTabs = null;
let menuSearch = null;
let menuSearchClear = null;

function localeValue(entry) {
  return entry?.[currentLang] || entry?.tr || "";
}

function t(key) {
  return translations[currentLang]?.[key] || translations.tr[key] || key;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function inferBadge(categoryId, itemName) {
  const name = (itemName || "").toLowerCase();
  if (categoryId === "seafood" || /fish|shrimp|salmon|oyster|crab|deniz|balık|kalamar/.test(name)) {
    return t("badgeSea");
  }
  if (categoryId === "salads" || categoryId === "vegetarian" || /salad|sebze|fresh|green/.test(name)) {
    return t("badgeFresh");
  }
  if (categoryId === "kebabs" || categoryId === "steaks" || /special|şef|chef|mix|manzo|chateaubriand/.test(name)) {
    return t("badgeChef");
  }
  return "";
}

function imageSources(categoryId, itemIndex, absoluteIndex) {
  const mainPool = stockImagePools[categoryId] || stockImagePools.default;
  const fallbackPool = stockImagePools.default;
  const primary = mainPool[itemIndex % mainPool.length];
  const secondary = fallbackPool[(itemIndex + absoluteIndex + 2) % fallbackPool.length];
  const tertiary = `https://picsum.photos/seed/ararat-${categoryId}-${itemIndex}/640/420`;
  return { primary, secondary, tertiary };
}

function menuImageFallback(img) {
  if (!img) {
    return;
  }
  const step = Number(img.dataset.fallbackStep || "0");
  const chain = [
    img.dataset.fallbackOne || "",
    img.dataset.fallbackTwo || "",
    img.dataset.fallbackThree || "image.png"
  ];
  const next = chain[step];
  if (!next) {
    return;
  }
  img.dataset.fallbackStep = String(step + 1);
  img.src = next;
}

window.__menuImgFallback = menuImageFallback;

function getPrice(categoryIndex, itemIndex) {
  const category = menuCategories[categoryIndex];
  const oscillation = ((itemIndex + 2) * (categoryIndex + 3) * 9) % 130;
  const premiumByCategory = {
    seafood: 190,
    steaks: 120,
    cocktails: 65,
    beers: 35,
    kids: -30,
    hotdrinks: -70,
    colddrinks: -55,
    desserts: -35,
    salads: -20
  };
  const premium = premiumByCategory[category.id] || 0;
  const raw = category.basePrice + oscillation + premium;
  const rounded = Math.max(45, Math.round(raw / 5) * 5);
  return rounded;
}

function formatPrice(value) {
  const locale = currentLang === "ar" ? "ar-EG" : "tr-TR";
  return `${new Intl.NumberFormat(locale).format(value)} ₺`;
}

function matchesSearch(item, normalizedSearch) {
  if (!normalizedSearch) {
    return true;
  }
  const bucket = `${item.tr} ${item.en} ${item.ar}`.toLocaleLowerCase("tr-TR");
  return bucket.includes(normalizedSearch);
}

function renderCategoryTabs() {
  if (!categoryTabs) {
    return;
  }
  const allButton = `
    <button class="category-btn ${activeCategory === "all" ? "active" : ""}" data-category="all">
      ${escapeHtml(t("allCategories"))}
    </button>
  `;

  const categoryButtons = menuCategories
    .map((category) => {
      const active = activeCategory === category.id ? "active" : "";
      return `<button class="category-btn ${active}" data-category="${category.id}">${escapeHtml(localeValue(category.label))}</button>`;
    })
    .join("");

  categoryTabs.innerHTML = `${allButton}${categoryButtons}`;
}

function renderMenu() {
  if (!menuRoot) {
    return;
  }

  const normalizedSearch = searchTerm.trim().toLocaleLowerCase("tr-TR");
  const visibleCategories = menuCategories.filter((category) => activeCategory === "all" || category.id === activeCategory);

  const sections = visibleCategories
    .map((category) => {
      const categoryIndex = menuCategories.findIndex((entry) => entry.id === category.id);
      const itemRows = category.items
        .map((item, itemIndex) => ({ item, itemIndex }))
        .filter(({ item }) => matchesSearch(item, normalizedSearch));

      if (!itemRows.length) {
        return "";
      }

      const cards = itemRows
        .map(({ item, itemIndex }) => {
          const title = localeValue(item);
          const badge = inferBadge(category.id, title);
          const images = imageSources(category.id, itemIndex, categoryIndex);
          const price = formatPrice(getPrice(categoryIndex, itemIndex));
          const shortNote = categoryDescriptions[currentLang]?.[category.id] || categoryDescriptions.tr[category.id];

          return `
            <article class="menu-item">
              <div class="menu-item-media">
                <img
                  loading="lazy"
                  src="${images.primary}"
                  data-fallback-one="${images.secondary}"
                  data-fallback-two="${images.tertiary}"
                  data-fallback-three="image.png"
                  data-fallback-step="0"
                  onerror="window.__menuImgFallback(this)"
                  alt="${escapeHtml(title)}"
                >
                ${badge ? `<span class="menu-item-badge">${escapeHtml(badge)}</span>` : ""}
              </div>
              <div class="menu-item-copy">
                <div class="menu-item-topline">
                  <h3>${escapeHtml(title)}</h3>
                  <span class="menu-item-price">${escapeHtml(price)}</span>
                </div>
                <p>${escapeHtml(shortNote)}</p>
              </div>
            </article>
          `;
        })
        .join("");

      return `
        <section class="menu-category reveal" id="cat-${category.id}">
          <div class="menu-category-head">
            <h2>${escapeHtml(localeValue(category.label))}</h2>
            <p>${escapeHtml(localeValue(category.summary))}</p>
          </div>
          <div class="menu-items-grid">${cards}</div>
        </section>
      `;
    })
    .join("");

  if (!sections) {
    menuRoot.innerHTML = `<div class="empty-state">${escapeHtml(t("emptyMenu"))}</div>`;
    return;
  }

  menuRoot.innerHTML = sections;
  setupRevealAnimations();
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) {
      return;
    }
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (!key) {
      return;
    }
    element.placeholder = t(key);
  });

  document.documentElement.lang = currentLang === "ar" ? "ar" : currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", currentLang === "ar");
}

function syncLanguageSwitchers() {
  document.querySelectorAll("[data-lang-switcher]").forEach((switcher) => {
    switcher.value = currentLang;
  });
}

function setupLanguageSwitchers() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && ["tr", "en", "ar"].includes(saved)) {
    currentLang = saved;
  }

  syncLanguageSwitchers();

  document.querySelectorAll("[data-lang-switcher]").forEach((switcher) => {
    switcher.addEventListener("change", (event) => {
      currentLang = event.target.value;
      localStorage.setItem(STORAGE_KEY, currentLang);
      syncLanguageSwitchers();
      applyTranslations();
      renderCategoryTabs();
      renderMenu();
    });
  });
}

function setupMenuPage() {
  menuRoot = document.querySelector("[data-menu-root]");
  categoryTabs = document.querySelector("[data-category-tabs]");
  menuSearch = document.querySelector("[data-menu-search]");
  menuSearchClear = document.querySelector("[data-search-clear]");

  if (!menuRoot || !categoryTabs) {
    return;
  }

  categoryTabs.addEventListener("click", (event) => {
    const button = event.target.closest(".category-btn");
    if (!button) {
      return;
    }
    activeCategory = button.dataset.category || "all";
    renderCategoryTabs();
    renderMenu();
  });

  if (menuSearch) {
    menuSearch.addEventListener("input", (event) => {
      searchTerm = event.target.value || "";
      syncSearchClearState();
      renderMenu();
    });
  }

  if (menuSearchClear && menuSearch) {
    menuSearchClear.addEventListener("click", () => {
      searchTerm = "";
      menuSearch.value = "";
      syncSearchClearState();
      renderMenu();
      menuSearch.focus();
    });
  }

  syncSearchClearState();
}

function syncSearchClearState() {
  if (!menuSearchClear || !menuSearch) {
    return;
  }
  const hidden = !menuSearch.value.trim();
  menuSearchClear.classList.toggle("is-hidden", hidden);
}

function setupRevealAnimations() {
  const revealNodes = [...document.querySelectorAll(".reveal:not([data-reveal-bound])")];
  if (!revealNodes.length) {
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  revealNodes.forEach((node) => {
    node.dataset.revealBound = "1";
    observer.observe(node);
  });
}

function setupMenuHeroParallax() {
  const hero = document.querySelector(".menu-hero");
  const media = document.querySelector(".menu-hero-media");
  if (!hero || !media) {
    return;
  }

  const updateHeroMotion = () => {
    const rect = hero.getBoundingClientRect();
    const viewport = window.innerHeight || 1;
    const progress = Math.min(1, Math.max(-1, (viewport - rect.top) / (viewport + rect.height)));
    const shift = (progress - 0.5) * 36;
    const scale = 1.06 + Math.abs(progress - 0.5) * 0.1;
    media.style.setProperty("--menu-hero-shift", `${shift.toFixed(2)}px`);
    media.style.setProperty("--menu-hero-scale", scale.toFixed(3));
  };

  updateHeroMotion();
  window.addEventListener("scroll", updateHeroMotion, { passive: true });
  window.addEventListener("resize", updateHeroMotion);
}

function init() {
  setupLanguageSwitchers();
  setupMenuPage();
  setupRevealAnimations();
  setupMenuHeroParallax();
  applyTranslations();
  renderCategoryTabs();
  renderMenu();
}

document.addEventListener("DOMContentLoaded", init);
