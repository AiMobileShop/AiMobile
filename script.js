// ==========================================================================
// FALLBACK DATA (STORED LOCAL INVENTORY TEMPLATE)
// ==========================================================================

const fallbackProducts = [];

// ==========================================================================
// TRANSLATION DICTIONARY
// ==========================================================================

const translations = {
  nav_title: { en: "Ai Mobile & Computer", hi: "एआई मोबाइल एंड कंप्यूटर", mr: "एआय मोबाईल अँड कॉम्प्युटर", ur: "اے آئی موبائل اینڈ کمپیوٹر" },
  nav_home: { en: "Home", hi: "मुख्यपृष्ठ", mr: "होम", ur: "ہوم" },
  nav_products: { en: "Products", hi: "उत्पाद", mr: "उत्पादने", ur: "پروڈکٹس" },
  nav_categories: { en: "Categories", hi: "श्रेणियां", mr: "कॅटेगरी", ur: "زمرہ جات" },
  nav_about: { en: "About Us", hi: "हमारे बारे में", mr: "आमच्याबद्दल", ur: "ہمارے بارے میں" },
  nav_contact: { en: "Contact", hi: "संपर्क करें", mr: "संपर्क", ur: "رابطہ کریں" },
  nav_location: { en: "Location", hi: "लोकेशन", mr: "स्थान", ur: "مقام" },

  hero_title: { en: "Ai Mobile & Computer", hi: "एआई मोबाइल एंड कंप्यूटर", mr: "एआय मोबाईल अँड कॉम्प्युटर", ur: "اے آئی موبائل اینڈ کمپیوٹر" },
  hero_subtitle: { en: "Your Trusted Mobile, CCTV & Computer Store", hi: "आपका विश्वसनीय मोबाइल, सीसीटीवी और कंप्यूटर स्टोर", mr: "तुमचे विश्वसनीय मोबाईल, सीसीटीवी आणि कॉम्प्युटर स्टोअर", ur: "آپ کا قابل اعتماد موبائل، سی سی ٹی وی اور کمپیوٹر اسٹور" },
  hero_cta_call: { en: "Call Now", hi: "अभी कॉल करें", mr: "आता कॉल करा", ur: "ابھی کال کریں" },
  hero_cta_products: { en: "View Products", hi: "उत्पाद देखें", mr: "उत्पादने पहा", ur: "پروڈکٹس دیکھیں" },
  hero_cta_maps: { en: "Google Maps", hi: "गूगल मैप्स", mr: "गूगल मॅप्स", ur: "گوگل میپس" },

  cat_title: { en: "Shop By Category", hi: "श्रेणी के अनुसार खरीदें", mr: "कॅटेगरीनुसार खरेदी करा", ur: "زمرہ جات کے لحاظ سے دیکھیں" },
  cat_subtitle: { en: "Explore our wide range of products across three primary divisions", hi: "हमारे तीन प्राथमिक प्रभागों में उत्पादों की विस्तृत श्रृंखला का पता लगाएं", mr: "आमच्या तीन मुख्य विभागांमधील उत्पादनांची विस्तृत श्रेणी एक्सप्लोर करा", ur: "ہمارے تین بنیادی شعبوں میں مصنوعات کی وسیع رینج دریافت کریں" },
  cat_mobile_title: { en: "Mobile Solutions", hi: "मोबाइल समाधान", mr: "मोबाईल सोल्यूशन्स", ur: "موبائل سلوشنز" },
  cat_mobile_desc: { en: "Smartphones, chargers, braided cables, premium earphones, power banks, protective cases, and tempered glass.", hi: "स्मार्टफोन, चार्जर, ब्रेडेड केबल, प्रीमियम ईयरफोन, पावर बैंक, सुरक्षात्मक कवर और टेम्पर्ड ग्लास।", mr: "स्मार्टफोन्स, चार्जर्स, ब्रेडेड केबल्स, प्रीमियम इयरफोन्स, पॉवर बँक्स, कव्हर्स आणि टेम्पर्ड ग्लास.", ur: "اسمارٹ فونز، چارجرز، برائیڈڈ کیبلز، ائرفونز، پاور بینک، کور اور ٹیمپرڈ گلاس۔" },
  cat_cctv_title: { en: "CCTV & Security", hi: "सीसीटीवी और सुरक्षा", mr: "सीसीटीव्ही आणि सुरक्षा", ur: "سی سی ٹی وی اور سیکیورٹی" },
  cat_cctv_desc: { en: "High-definition security cameras, DVR/NVR recorders, surveillance hard drives, power supplies, and expert installation accessories.", hi: "हाई-डेफिनिशन सुरक्षा कैमरे, डीवीआर/एनवीआर रिकॉर्डर, निगरानी हार्ड ड्राइव, बिजली की आपूर्ति और विशेषज्ञ स्थापना सामान।", mr: "हाय-डेफिनिशन सुरक्षा कॅमेरे, DVR/NVR रेकॉर्डर, पाळत ठेवण्यासाठी हार्ड ड्राइव्हस्, पॉवर सप्लाय आणि इन्स्टॉलेशन ॲक्सेसरीज.", ur: "ہائی ڈیفینیشن سیکیورٹی کیمرے، DVR/NVR ریکارڈرز، نگرانی کی ہارڈ ڈرائیوز، پاور سپلائیز، اور انسٹالیشن کے لوازمات۔" },
  cat_computer_title: { en: "Computer & IT", hi: "कंप्यूटर और आईटी", mr: "कॉम्प्युटर आणि आयटी", ur: "کمپیوٹر اور آئی ٹی" },
  cat_computer_desc: { en: "High-performance laptops, customized desktop PCs, keyboards, mouse, high-speed SSDs, RAM, printers, and networking equipment.", hi: "उच्च प्रदर्शन वाले लैपटॉप, कस्टमाइज्ड डेस्कटॉप पीसी, कीबोर्ड, माउस, हाई-स्पीड एसएसडी, रैम, प्रिंटर और नेटवर्किंग उपकरण।", mr: "हाय-परफॉर्मन्स लॅपटॉप, कस्टमाइज्ड डेस्कटॉप पीसी, कीबोर्ड, माउस, हाय-स्पीड SSD, रॅम, प्रिंटर आणि नेटवर्किंग उत्पादने.", ur: "اعلیٰ کارکردگی والے لیپ ٹاپ، ڈیسک ٹاپ پی سی، کی بورڈز، ماؤس، تیز رفتار SSDs، ریم، پرنٹرز اور نیٹ ورکنگ مصنوعات۔" },

  prod_title: { en: "Our Products", hi: "हमारे उत्पाद", mr: "आमची उत्पादने", ur: "ہماری مصنوعات" },
  prod_subtitle: { en: "Live inventory fetched directly from our retail catalog", hi: "हमारे खुदरा कैटलॉग से सीधे प्राप्त लाइव स्टॉक सूची", mr: "आमच्या रिटेल कॅटलॉगवरून थेट मिळवलेला लाईव्ह स्टॉक", ur: "براہ راست ہمارے ریٹیل کیٹلاگ سے حاصل کردہ لائیو انوینٹری" },
  prod_search: { en: "Search products...", hi: "उत्पाद खोजें...", mr: "उत्पादने शोधा...", ur: "پروڈکٹس تلاش کریں..." },
  prod_category_all: { en: "All Products", hi: "सभी उत्पाद", mr: "सर्व उत्पादने", ur: "تمام مصنوعات" },
  prod_sort_label: { en: "Sort By", hi: "क्रमबद्ध करें", mr: "सॉर्ट करा", ur: "ترتیب دیں" },
  prod_sort_default: { en: "Default", hi: "डिफ़ॉल्ट", mr: "डिफॉल्ट", ur: "ڈیفالٹ" },
  prod_sort_low_high: { en: "Price: Low to High", hi: "कीमत: कम से अधिक", mr: "किंमत: कमी ते जास्त", ur: "قیمت: کم سے زیادہ" },
  prod_sort_high_low: { en: "Price: High to Low", hi: "कीमत: अधिक से कम", mr: "किंमत: जास्त ते कमी", ur: "قیمت: ज्यादा से کم" },
  prod_in_stock: { en: "In Stock", hi: "स्टॉक में", mr: "स्टॉकमध्ये आहे", ur: "دستیاب ہے" },
  prod_out_of_stock: { en: "Out of Stock", hi: "स्टॉक से बाहर", mr: "स्टॉक संपला", ur: "دستیاب نہیں ہے" },
  prod_view_details: { en: "View Details", hi: "विवरण देखें", mr: "तपशील पहा", ur: "تفصیلات دیکھیں" },
  prod_call_now: { en: "Call Now", hi: "कॉल करें", mr: "कॉल करा", ur: "کال کریں" },
  prod_whatsapp_enq: { en: "WhatsApp Enquiry", hi: "व्हाट्सएप पूछताछ", mr: "व्हॉट्सॲप चौकशी", ur: "واٹس ایپ انکوائری" },
  prod_no_results: { en: "No products found matching your search.", hi: "आपकी खोज से मेल खाने वाले कोई उत्पाद नहीं मिले।", mr: "तुमच्या शोधानुसार कोणतीही उत्पादने आढळली नाहीत.", ur: "آپ کی तलाश کے अनुसार कोई प्रोڈکٹ نہیں ملا۔" },

  about_title: { en: "About Ai Mobile & Computer", hi: "एआई मोबाइल एंड कंप्यूटर के बारे में", mr: "एआय मोबाईल अँड कॉम्प्युटरबद्दल", ur: "اے آئی موبائل اینڈ کمپیوٹر کے بارے میں" },
  about_subtitle: { en: "Serving our local community with premium electronics and security solutions", hi: "प्रीमियम इलेक्ट्रॉनिक्स और सुरक्षा समाधानों के साथ हमारे स्थानीय समुदाय की सेवा करना", mr: "आमच्या स्थानिक समुदायाला प्रीमियम इलेक्ट्रॉनिक्स आणि सुरक्षा सोल्यूशन्स प्रदान करणे", ur: "اعلیٰ معیار کے الیکٹرانکس اور سیکیورٹی سلوشنز کے ساتھ مقامی کمیونٹی کی خدمت" },
  about_desc_p1: { en: "Ai Mobile & Computer, owned by Salman Pathan, is your premier destination for all electronics retail, custom CCTV installations, and computer sales and servicing. We aim to bridge the gap between high-end technology and local affordability.", hi: "सलमान पठान के स्वामित्व वाला एआई मोबाइल एंड कंप्यूटर, सभी इलेक्ट्रॉनिक्स खुदरा बिक्री, कस्टम सीसीटीवी स्थापना और कंप्यूटर बिक्री और सर्विसिंग के लिए आपका प्रमुख गंतव्य है। हमारा लक्ष्य उच्च तकनीक और स्थानीय सामर्थ्य के बीच की दूरी को पाटना है।", mr: "सलमान पठाण यांच्या मालकीचे एआय मोबाईल अँड कॉम्प्युटर हे सर्व इलेक्ट्रॉनिक्स रिटेल, कस्टम सीसीटीव्ही इन्स्टॉलेशन आणि कॉम्प्युटर विक्री आणि सर्व्हिसिंगसाठी तुमचे प्रमुख ठिकाण आहे. आमचे उद्दिष्ट हाय-एंड तंत्रज्ञान आणि स्थानिक परवडण्यायोग्यता यामधील दरी कमी करणे आहे.", ur: "سلمان پٹھان کی ملکیت اے آئی موبائل اینڈ کمپیوٹر، تمام الیکٹرانکس ریٹیل، کسٹم سی سی ٹی وی انسٹالیشنز، اور کمپیوٹر کی فروخت اور سروسنگ کے لیے آپ کا بنیادی مرکز ہے۔ ہمارا مقصد اعلیٰ ٹیکنالوجی اور مقامی سستی کے درمیان فرق کو ختم کرنا ہے۔" },
  about_desc_p2: { en: "Whether you need to upgrade your smartphone accessories, secure your business premises with state-of-the-art surveillance systems, or construct a custom gaming rig, our friendly staff is here to support you at every step.", hi: "चाहे आपको अपने स्मार्टफोन एक्सेसरीज़ को अपग्रेड करना हो, अत्याधुनिक निगरानी प्रणालियों के साथ अपने व्यावसायिक परिसरों को सुरक्षित करना हो, या एक कस्टम गेमिंग रिग का निर्माण करना हो, हमारे मित्रवत कर्मचारी हर कदम पर आपकी सहायता के लिए तैयार हैं।", mr: "तुम्हाला तुमच्या स्मार्टफोनच्या ॲक्सेसरीज अपग्रेड करायच्या असतील, अत्याधुनिक पाळत ठेवण्याच्या यंत्रणेसह तुमचे व्यावसायिक ठिकाण सुरक्षित करायचे असेल किंवा कस्टम गेमिंग पीसी तयार करायचा असेल, आमचे कर्मचारी तुम्हाला प्रत्येक टप्प्यावर मदत करण्यासाठी येथे आहेत.", ur: "خواہ آپ کو اپنے موبائل کے सामान को अपग्रेड करना हो, अपने व्यावसायिक परिसर को सुरक्षित करना हो, یا اپنی पसंद کا कंप्यूटर बनाना ہو، ہمارا स्टाफ ہر कदम پر آپ کی مدد کے لیے دستیاب ہے۔" },
  about_feat_trust: { en: "Trusted Local Shop", hi: "विश्वसनीय स्थानीय दुकान", mr: "विश्वासू स्थानिक दुकान", ur: "قابل اعتماد مقامی دکان" },
  about_feat_trust_desc: { en: "Years of integrity serving our neighborhood with verified products.", hi: "सत्यापित उत्पादों के साथ हमारे पड़ोस की सेवा करने वाले वर्षों की अखंडता।", mr: "पडताळणी केलेल्या उत्पादनांसह आमच्या परिसराची सेवा करण्याचे विश्वासाचे वर्ष.", ur: "سالہا سال سے ہمارے پڑوس میں تصدیق شدہ مصنوعات فراہم کرنے کا بھروسہ۔" },
  about_feat_quality: { en: "Premium Quality", hi: "प्रीमियम गुणवत्ता", mr: "प्रीमियम गुणवत्ता", ur: "اعلیٰ معیار" },
  about_feat_quality_desc: { en: "We stock only verified accessories and equipment from reputed brands.", hi: "हम केवल प्रतिष्ठित ब्रांडों से सत्यापित सामान और उपकरण स्टॉक करते हैं।", mr: "आम्ही केवळ नामांकित ब्रँड्सचे पडताळणी केलेले सामान आणि उपकरणे ठेवतो.", ur: "ہم صرف نامور برانڈز کے تصدیق شدہ لوازمات اور آلات رکھتے ہیں۔" },
  about_feat_price: { en: "Affordable Rates", hi: "किफायती दरें", mr: "परवडणारे दर", ur: "مناسب قیمتیں" },
  about_feat_price_desc: { en: "Top tech shouldn't break the bank. Best prices guaranteed.", hi: "शीर्ष तकनीक के लिए बहुत अधिक खर्च करने की आवश्यकता नहीं है। सर्वोत्तम कीमतों की गारंटी।", mr: "उत्कृष्ट तंत्रज्ञान महाग असायलाच हवे असे नाही. सर्वोत्तम दराची हमी.", ur: "بہترین ٹیکنالوجی بجٹ سے باہر نہیں ہونی چاہیے۔ بہترین قیمتوں کی ضمانت۔" },
  about_feat_support: { en: "Expert Support", hi: "विशेषज्ञ सहायता", mr: "तज्ञ सपोर्ट", ur: "ماہرانہ رہنمائی" },
  about_feat_support_desc: { en: "Post-purchase assistance, CCTV layout guidance, and troubleshooting.", hi: "खरीद के बाद सहायता, सीसीटीवी लेआउट मार्गदर्शन और समस्या निवारण।", mr: "खरेदीनंतरची मदत, सीसीटीव्ही मांडणी मार्गदर्शन आणि त्रुटी निवारण.", ur: "خریداری کے بعد کی مدد، سی سی ٹی وی کی تنصیب میں رہنمائی اور کمپیوٹر کی درستگی۔" },

  contact_title: { en: "Get In Touch", hi: "संपर्क करें", mr: "संपर्क साधा", ur: "رابطہ کریں" },
  contact_subtitle: { en: "Have questions about stock or custom CCTV installations? Reach out now!", hi: "स्टॉक या कस्टम सीसीटीवी इंस्टॉलेशन के बारे में प्रश्न हैं? अभी संपर्क करें!", mr: "स्टॉक किंवा सानुकूल सीसीटीव्ही इन्स्टॉलेशनबद्दल प्रश्न आहेत? आता संपर्क साधा!", ur: "اسٹاک یا سی سی ٹی وی کی تنصیب کے بارے में سوالات ہیں؟ ابھی رابطہ کریں!" },
  contact_owner: { en: "Shop Owner", hi: "दुकान के मालिक", mr: "दुकानचे मालक", ur: "دکان کے مالک" },
  contact_phone: { en: "Phone Number", hi: "फ़ोन नंबर", mr: "फोन नंबर", ur: "فون نمبر" },
  contact_loc_label: { en: "Shop Address", hi: "दुकान का पता", mr: "दुकानचा पत्ता", ur: "دکان کا پتہ" },
  contact_loc_val: { en: "Ai Mobile & Computer, Near Bharatgas Agency, Badnapur, Maharashtra 431202", hi: "एआई मोबाइल एंड कंप्यूटर, मुख्य बाजार के पास, भारत", mr: "एआय मोबाईल अँड कॉम्प्युटर, मुख्य बाजारपेठेजवळ, भारत", ur: "اے آئی موبائل اینڈ کمپیوٹر، نزد مین بازار، بھارت" },

  test_title: { en: "What Our Customers Say", hi: "हमारे ग्राहक क्या कहते हैं", mr: "आमचे ग्राहक काय म्हणतात", ur: "ہمارے گاہک کیا کہتے ہیں" },
  test_subtitle: { en: "Honest feedback from our local retail and security layout clients", hi: "हमारे स्थानीय खुदरा और सुरक्षा लेआउट ग्राहकों से ईमानदार प्रतिक्रिया", mr: "आमच्या स्थानिक किरकोळ आणि सुरक्षा ग्राहकांकडून प्रामाणिक अभिप्राय", ur: "ہمارے مقامی خریداروں اور سیکیورٹی کیمرہ گاہکوں کے تاثرات" },

  faq_title: { en: "Frequently Asked Questions", hi: "अक्सर पूछे जाने वाले प्रश्न", mr: "सतत विचारले जाणारे प्रश्न", ur: "عام طور पर पूछे جانے والے سوالات" },
  faq_subtitle: { en: "Quick answers to help you with our services and products", hi: "हमारी सेवाओं और उत्पादों के बारे में त्वरित उत्तर", mr: "आमच्या सेवा आणि उत्पादनांबद्दल त्वरित उत्तरे", ur: "ہماری خدمات اور مصنوعات کے بارے میں فوری معلومات" },

  footer_desc: { en: "Premium mobile accessories, high-grade security systems, and custom computers. Your local electronics destination.", hi: "प्रीमियम मोबाइल एक्सेसरीज़, हाई-ग्रेड सुरक्षा प्रणालियाँ और कस्टम कंप्यूटर। आपका स्थानीय इलेक्ट्रॉनिक्स गंतव्य।", mr: "प्रीमियम मोबाईल ॲक्सेसरीज, हाय-ग्रेड सुरक्षा यंत्रणा आणि कस्टमाइज्ड कॉम्प्युटर. तुमचे स्थानिक इलेक्ट्रॉनिक्सचे ठिकाण.", ur: "اعلیٰ معیار کے موبائل لوازمات، جدید سیکیورٹی سسٹمز اور بہترین کمپیوٹرز۔ آپ کے الیکٹرانکس کی قابل اعتماد دکان۔" },
  footer_quick_links: { en: "Quick Links", hi: "त्वरित लिंक", mr: "क्विक लिंक्स", ur: "فوری لنکس" },
  footer_rights: { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।", mr: "सर्व हक्क राखीव.", ur: "جملہ حقوق محفوظ ہیں۔" },
  footer_created_by: { en: "Designed with Premium aesthetics.", hi: "प्रीमियम सौंदर्यशास्त्र के साथ डिज़ाइन किया गया।", mr: "प्रीमियम डिझाइनसह तयार केले गेले.", ur: "جدید ڈیزائن کے ساتھ تیار کیا گیا۔" },
};

// ==========================================================================
// CONFIGURATION VARIABLES
// ==========================================================================

let SPREADSHEET_ID = ""; // Insert your Google Sheets ID here
let SPREADSHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiKDhSvlyASIJpArYYE-WB-gK46BpsWysID_UqO8lQxyEL0874Yoy4_ETJVKtiYwn2HLR9ZN2-I-cM/pub?output=csv"; // Or insert direct Published CSV URL here

// Parse parameters from URL e.g. ?sheet_id=123 or ?csv_url=URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("sheet_id")) {
  SPREADSHEET_ID = urlParams.get("sheet_id");
}
if (urlParams.has("csv_url")) {
  SPREADSHEET_CSV_URL = urlParams.get("csv_url");
}

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================

let appState = {
  locale: "en",
  theme: "dark",
  colorTheme: "purple",
  products: [],
  isLoading: true,
  searchQuery: "",
  selectedCategory: "All",
  sortBy: "default",
  selectedProduct: null,
  isZoomed: false,
};

// ==========================================================================
// CSV PARSING SYSTEM
// ==========================================================================

function parseCSV(csvText) {
  const result = [];
  let row = [];
  let inQuotes = false;
  let currentVal = "";

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentVal += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push(currentVal.trim());
      currentVal = "";
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      row.push(currentVal.trim());
      if (row.length > 1 || (row.length === 1 && row[0] !== "")) {
        result.push(row);
      }
      row = [];
      currentVal = "";
    } else {
      currentVal += char;
    }
  }

  if (row.length > 0 || currentVal !== "") {
    row.push(currentVal.trim());
    result.push(row);
  }

  return result;
}

// ==========================================================================
// DATA FETCHING SYSTEM
// ==========================================================================

async function fetchProducts() {
  let fetchUrl = SPREADSHEET_CSV_URL;
  if (!fetchUrl && SPREADSHEET_ID) {
    fetchUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv`;
  }

  if (!fetchUrl) {
    console.log("No Google Sheet configured. Rendering local mock catalog.");
    return fallbackProducts;
  }

  try {
    const res = await fetch(fetchUrl, { cache: "no-store" });
    if (!res.ok) throw new Error("Fetch failed: " + res.status);

    const csvText = await res.text();
    const rows = parseCSV(csvText);

    if (rows.length <= 1) throw new Error("CSV has no product rows");

    const headers = rows[0].map(h => h.toLowerCase().trim());
    const imgIndex = headers.findIndex(h => h.includes("image url") || h.includes("image") || h.includes("photo"));
    const nameIndex = headers.findIndex(h => h.includes("product name") || h.includes("name") || h.includes("title"));
    const categoryIndex = headers.findIndex(h => h.includes("category") || h.includes("type"));
    const priceIndex = headers.findIndex(h => h.includes("price") || h.includes("rate") || h.includes("cost"));
    const detailsIndex = headers.findIndex(h => h.includes("details") || h.includes("specification") || h.includes("spec") || h.includes("desc"));
    const statusIndex = headers.findIndex(h => h.includes("status") || h.includes("stock") || h.includes("availability"));
    const linkIndex = headers.findIndex(h => h.includes("product link") || h.includes("link") || h.includes("url"));

    const productsList = [];

    for (let r = 1; r < rows.length; r++) {
      const row = rows[r];
      if (row.length < 2) continue;

      const getVal = (index, fallback = "") => {
        return index !== -1 && index < row.length ? row[index] : fallback;
      };

      const name = getVal(nameIndex);
      if (!name) continue;

      const categoryRaw = getVal(categoryIndex, "Mobile");
      let category = "Mobile";
      if (categoryRaw.toLowerCase().includes("cctv")) {
        category = "CCTV";
      } else if (categoryRaw.toLowerCase().includes("computer") || categoryRaw.toLowerCase().includes("pc") || categoryRaw.toLowerCase().includes("laptop")) {
        category = "Computer";
      } else {
        category = categoryRaw;
      }

      const imageUrl = getVal(imgIndex) || "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&q=80";
      const price = getVal(priceIndex, "");
      const details = getVal(detailsIndex, "No specifications available");
      const statusRaw = getVal(statusIndex, "In Stock");
      const status = statusRaw.toLowerCase().includes("out") ? "Out of Stock" : "In Stock";

      let link = getVal(linkIndex);
      if (!link || link === "https://www.test.com") {
        const message = `I am interested in buying: *${name}* (${price}). Please check if it's available.`;
        link = `https://wa.me/919822338978?text=${encodeURIComponent(message)}`;
      }

      productsList.push({
        id: `row-${r}`,
        imageUrl,
        name,
        category,
        price,
        details,
        status,
        link
      });
    }

    return productsList.length > 0 ? productsList : fallbackProducts;

  } catch (err) {
    console.error("Sheets sync failed. Falling back to local data.", err);
    return fallbackProducts;
  }
}

// ==========================================================================
// TRANSLATION RENDERER
// ==========================================================================

function updateTranslations() {
  const currentLang = appState.locale;

  // Set HTML lang attribute
  document.documentElement.lang = currentLang;

  // Handle right-to-left layout for Urdu
  if (currentLang === "ur") {
    document.documentElement.dir = "rtl";
    document.documentElement.classList.add("font-urdu");
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.classList.remove("font-urdu");
  }

  // Update text elements with data-t
  document.querySelectorAll("[data-t]").forEach((elem) => {
    const key = elem.getAttribute("data-t");
    const dict = translations[key];
    if (dict && dict[currentLang]) {
      elem.textContent = dict[currentLang];
    }
  });

  // Update input placeholders with data-t-placeholder
  document.querySelectorAll("[data-t-placeholder]").forEach((elem) => {
    const key = elem.getAttribute("data-t-placeholder");
    const dict = translations[key];
    if (dict && dict[currentLang]) {
      elem.placeholder = dict[currentLang];
    }
  });
}

// ==========================================================================
// PRODUCTS LIST RENDERER
// ==========================================================================

function getNumericPrice(priceStr) {
  if (!priceStr) return 0;
  const clean = priceStr.replace(/[^0-9]/g, "");
  const parsed = parseInt(clean, 10);
  return isNaN(parsed) ? 0 : parsed;
}

function renderProducts() {
  const listContainer = document.getElementById("product-grid");
  if (!listContainer) return;

  // Render Skeletons if loading
  if (appState.isLoading) {
    listContainer.innerHTML = Array(6).fill(0).map(() => `
      <div class="glass-card border border-card-border rounded-3xl p-5 space-y-4 animate-pulse">
        <div class="w-full h-48 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
        <div class="h-5 w-1/3 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
        <div class="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
        <div class="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
        <div class="flex gap-2 pt-2">
          <div class="h-10 flex-grow bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
          <div class="h-10 w-12 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
        </div>
      </div>
    `).join("");
    return;
  }

  // Filter & Sort
  let list = [...appState.products];

  // Search filter
  if (appState.searchQuery.trim() !== "") {
    const q = appState.searchQuery.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.details.toLowerCase().includes(q));
  }

  // Category filter
  if (appState.selectedCategory !== "All") {
    list = list.filter(p => p.category === appState.selectedCategory);
  }

  // Sort
  if (appState.sortBy === "low-high") {
    list.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
  } else if (appState.sortBy === "high-low") {
    list.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
  }

  // Empty state
  if (list.length === 0) {
    listContainer.innerHTML = `
      <div class="col-span-full text-center py-20 glass-card border border-card-border rounded-3xl max-w-xl mx-auto w-full">
        <svg class="mx-auto h-12 w-12 text-orange-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
        <h3 class="text-lg font-bold text-theme-fg mb-1" data-t="prod_no_results">
          No products found matching your search.
        </h3>
      </div>
    `;
    // Update local empty translations immediately
    updateTranslations();
    return;
  }

  // Generate cards
  const enqLabel = translations["prod_whatsapp_enq"][appState.locale] || translations["prod_whatsapp_enq"]["en"];
  const viewLabel = translations["prod_view_details"][appState.locale] || translations["prod_view_details"]["en"];
  const stockLabel = translations["prod_in_stock"][appState.locale] || translations["prod_in_stock"]["en"];
  const outStockLabel = translations["prod_out_of_stock"][appState.locale] || translations["prod_out_of_stock"]["en"];

  listContainer.innerHTML = list.map((prod) => {
    const isAvailable = prod.status === "In Stock";
    return `
      <div class="group relative flex flex-col justify-between rounded-3xl glass-card p-5 border border-card-border hover:shadow-lg transition-all duration-300">
        
        <!-- Image with hover zoom -->
        <div class="relative h-48 sm:h-52 w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-card-border mb-4 flex items-center justify-center">
          <img src="${prod.imageUrl}" alt="${prod.name}" class="h-full w-full object-contain zoom-image" loading="lazy" />
          
          <!-- Stock status -->
          <span class="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold shadow-sm ${isAvailable
        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
        : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
      }">
            <span class="h-1.5 w-1.5 rounded-full ${isAvailable ? "bg-emerald-500" : "bg-red-500"}"></span>
            ${isAvailable ? stockLabel : outStockLabel}
          </span>

          <!-- Category tag -->
          <span class="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[9px] font-bold bg-slate-900/80 text-white backdrop-blur-sm uppercase">
            ${prod.category}
          </span>
        </div>

        <div>
          <!-- Title & Price -->
          <div class="flex items-start justify-between gap-3 mb-2">
            <h3 class="font-extrabold text-base text-theme-fg group-hover:text-primary transition-colors line-clamp-1">
              ${prod.name}
            </h3>
            ${prod.price ? `
            <div class="font-black text-sm sm:text-base text-primary whitespace-nowrap">
              ${prod.price}
            </div>
            ` : ''}
          </div>

          <!-- Description -->
          <p class="text-xs text-theme-text-muted line-clamp-2 leading-relaxed mb-6">
            ${prod.details}
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex gap-2">
          <button onclick="openModal('${prod.id}')" class="flex items-center justify-center gap-1.5 flex-grow px-3 py-2.5 rounded-xl border border-card-border hover:border-primary text-theme-fg hover:text-primary text-xs font-bold transition-all">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            ${viewLabel}
          </button>
          
          <a href="tel:+919822338978" class="p-2.5 rounded-xl border border-card-border hover:bg-slate-100 dark:hover:bg-slate-800 text-theme-text-muted hover:text-theme-fg transition-all" title="Call Now">
            <svg class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </a>

          <a href="${prod.link}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl bg-primary-light text-primary hover:bg-primary hover:text-white transition-all" title="${enqLabel}">
            <svg class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// DETAILED MODAL MANAGEMENT
// ==========================================================================

function openModal(id) {
  const prod = appState.products.find(p => p.id === id);
  if (!prod) return;

  appState.selectedProduct = prod;
  appState.isZoomed = false;

  const modalContainer = document.getElementById("detail-modal");
  if (!modalContainer) return;

  const enqLabel = translations["prod_whatsapp_enq"][appState.locale] || translations["prod_whatsapp_enq"]["en"];
  const callLabel = translations["prod_call_now"][appState.locale] || translations["prod_call_now"]["en"];
  const stockLabel = translations["prod_in_stock"][appState.locale] || translations["prod_in_stock"]["en"];
  const outStockLabel = translations["prod_out_of_stock"][appState.locale] || translations["prod_out_of_stock"]["en"];

  const isAvailable = prod.status === "In Stock";

  modalContainer.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm select-none" onclick="closeModalOutside(event)">
      <div id="modal-box" class="relative w-full max-w-3xl rounded-3xl glass-card border border-card-border shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto" onclick="event.stopPropagation()">
        
        <!-- Close button -->
        <button onclick="closeModal()" class="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-theme-text-muted hover:text-theme-fg transition-colors focus:outline-none">
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-4">
          
          <!-- Product image with zoom toggle -->
          <div class="space-y-3">
            <div onclick="toggleImageZoom()" class="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-card-border flex items-center justify-center cursor-zoom-in">
              <img id="modal-image" src="${prod.imageUrl}" alt="${prod.name}" class="h-full w-full object-contain transition-transform duration-300 scale-100" />
              <span class="absolute bottom-3 left-3 px-2 py-0.5 rounded-md text-[9px] font-bold bg-slate-900/80 text-white backdrop-blur-sm" id="zoom-hint">
                Click to Zoom In
              </span>
            </div>
            <div class="flex items-center justify-center gap-1.5 text-[10px] text-theme-text-muted font-bold">
              <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
              Touch image to toggle zoom
            </div>
          </div>

          <!-- Specs Info -->
          <div class="flex flex-col justify-between h-full">
            <div>
              <div class="flex items-center gap-2 mb-3">
                <span class="px-2 py-0.5 rounded-md text-[9px] font-bold bg-primary-light text-primary uppercase">
                  ${prod.category}
                </span>
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold border ${isAvailable
      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
      : "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
    }">
                  ${isAvailable ? stockLabel : outStockLabel}
                </span>
              </div>

              <h3 class="text-2xl font-extrabold text-theme-fg mb-2">
                ${prod.name}
              </h3>
              
              ${prod.price ? `
              <div class="text-2xl font-black text-primary mb-6">
                ${prod.price}
              </div>
              ` : '<div class="mb-4"></div>'}

              <div class="space-y-3">
                <h4 class="text-xs font-bold text-theme-fg uppercase tracking-wider">
                  Specifications & Details
                </h4>
                <p class="text-sm text-theme-text-muted leading-relaxed whitespace-pre-line bg-slate-100/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-card-border font-medium">
                  ${prod.details}
                </p>
              </div>
            </div>

            <!-- Modal CTA buttons -->
            <div class="grid grid-cols-2 gap-3 mt-8">
              <a href="${prod.link}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all text-center">
                <svg class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                ${enqLabel}
              </a>

              <a href="tel:+919822338978" class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-card-border hover:bg-slate-100 dark:hover:bg-slate-800 text-theme-fg text-xs sm:text-sm font-bold transition-all text-center">
                <svg class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                ${callLabel}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
  modalContainer.classList.remove("hidden");
  document.body.classList.add("overflow-hidden"); // Lock scroll
}

function closeModal() {
  const modalContainer = document.getElementById("detail-modal");
  if (modalContainer) {
    modalContainer.classList.add("hidden");
    modalContainer.innerHTML = "";
  }
  document.body.classList.remove("overflow-hidden");
  appState.selectedProduct = null;
}

function closeModalOutside(event) {
  closeModal();
}

function toggleImageZoom() {
  const img = document.getElementById("modal-image");
  const hint = document.getElementById("zoom-hint");
  if (!img) return;

  appState.isZoomed = !appState.isZoomed;

  if (appState.isZoomed) {
    img.classList.replace("scale-100", "scale-150");
    img.classList.add("cursor-zoom-out");
    if (hint) hint.textContent = "Click to Zoom Out";
  } else {
    img.classList.replace("scale-150", "scale-100");
    img.classList.remove("cursor-zoom-out");
    if (hint) hint.textContent = "Click to Zoom In";
  }
}

// ==========================================================================
// FEATURED SLIDER SYSTEM
// ==========================================================================

let sliderIndex = 0;
let autoSliderInterval = null;

function initFeaturedSlider() {
  const container = document.getElementById("featured-slides-container");
  const dotsContainer = document.getElementById("featured-dots-container");

  if (!container || !dotsContainer) return;

  // Clear previous intervals
  if (autoSliderInterval) clearInterval(autoSliderInterval);

  const featured = appState.products.filter(p => p.status === "In Stock").slice(0, 5);
  if (featured.length === 0) {
    document.getElementById("featured-section")?.classList.add("hidden");
    return;
  }
  document.getElementById("featured-section")?.classList.remove("hidden");

  // Create slides HTML
  const enqLabel = translations["prod_whatsapp_enq"][appState.locale] || translations["prod_whatsapp_enq"]["en"];
  const callLabel = translations["prod_call_now"][appState.locale] || translations["prod_call_now"]["en"];

  container.innerHTML = featured.map((prod) => `
    <div class="w-full flex-shrink-0 px-1 sm:px-2">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 rounded-3xl p-6 sm:p-10 border border-white/10 backdrop-blur-md">
        <!-- Image -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl bg-slate-800 border border-white/5">
            <img src="${prod.imageUrl}" alt="${prod.name}" class="h-full w-full object-contain zoom-image" />
          </div>
        </div>
        <!-- Copy info -->
        <div class="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 mb-4 border border-white/5 uppercase">
              ${prod.category}
            </span>
            <h3 class="text-2xl sm:text-4xl font-extrabold text-white mb-3">${prod.name}</h3>
            ${prod.price ? `<div class="text-xl sm:text-2xl font-bold text-primary mb-4">${prod.price}</div>` : '<div class="mb-2"></div>'}
            <p class="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">${prod.details}</p>
          </div>
          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="${prod.link}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary-hover font-bold transition-all text-xs sm:text-sm">
              <svg class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              ${enqLabel}
            </a>
            <a href="tel:+919822338978" class="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold transition-all text-xs sm:text-sm">
              ${callLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Create dot buttons
  dotsContainer.innerHTML = featured.map((_, idx) => `
    <button onclick="gotoSlide(${idx})" class="h-2.5 rounded-full transition-all ${sliderIndex === idx ? "w-8 bg-primary" : "w-2.5 bg-white/20 hover:bg-white/40"
    }" aria-label="Go to slide ${idx + 1}"></button>
  `).join("");

  // Start auto scroll
  if (featured.length > 1) {
    autoSliderInterval = setInterval(() => {
      gotoSlide((sliderIndex + 1) % featured.length);
    }, 5000);
  }
}

function gotoSlide(idx) {
  const container = document.getElementById("featured-slides-container");
  const dotsContainer = document.getElementById("featured-dots-container");
  if (!container || !dotsContainer) return;

  const featured = appState.products.filter(p => p.status === "In Stock").slice(0, 5);
  if (featured.length === 0) return;

  sliderIndex = idx;
  container.style.transform = `translateX(-${sliderIndex * 100}%)`;

  // Update dots classes
  const dots = dotsContainer.querySelectorAll("button");
  dots.forEach((dot, dIdx) => {
    if (dIdx === sliderIndex) {
      dot.className = "h-2.5 rounded-full transition-all w-8 bg-primary";
    } else {
      dot.className = "h-2.5 rounded-full transition-all w-2.5 bg-white/20 hover:bg-white/40";
    }
  });
}

function slidePrev() {
  const featured = appState.products.filter(p => p.status === "In Stock").slice(0, 5);
  if (featured.length === 0) return;
  const newIndex = (sliderIndex - 1 + featured.length) % featured.length;
  gotoSlide(newIndex);
}

function slideNext() {
  const featured = appState.products.filter(p => p.status === "In Stock").slice(0, 5);
  if (featured.length === 0) return;
  const newIndex = (sliderIndex + 1) % featured.length;
  gotoSlide(newIndex);
}

// ==========================================================================
// INTERACTIVE CONTROLS TRIGGERS
// ==========================================================================

function selectCategory(catName) {
  appState.selectedCategory = catName;

  // Update category chip active style
  const container = document.getElementById("category-chips-container");
  if (container) {
    container.querySelectorAll("button").forEach((btn) => {
      const isAll = catName === "All" && btn.getAttribute("data-cat") === "All";
      const isMatch = btn.getAttribute("data-cat") === catName;
      if (isAll || isMatch) {
        btn.className = "px-4 py-1.5 rounded-full text-xs font-bold transition-all border bg-primary text-white border-primary shadow-sm";
      } else {
        btn.className = "px-4 py-1.5 rounded-full text-xs font-bold transition-all border bg-white/40 dark:bg-slate-900/40 border-card-border text-theme-fg hover:border-primary/30";
      }
    });
  }

  renderProducts();
}

function changeLanguage(langCode) {
  appState.locale = langCode;
  localStorage.setItem("locale", langCode);

  // Close language dropdown
  document.getElementById("lang-dropdown")?.classList.add("hidden");

  // Re-run translators
  updateTranslations();

  // Rerender products & featured to load translated stock headers
  renderProducts();
  initFeaturedSlider();
}

function changeColorTheme(colorName) {
  appState.colorTheme = colorName;
  localStorage.setItem("color-theme", colorName);
  document.documentElement.setAttribute("data-color-theme", colorName);

  // Close theme dropdown
  document.getElementById("theme-dropdown")?.classList.add("hidden");

  // Update active state circle checks in dropdowns
  updateColorDropdownChecks();
}

function toggleDarkMode() {
  appState.theme = appState.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", appState.theme);

  if (appState.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function updateColorDropdownChecks() {
  const dropdown = document.getElementById("theme-dropdown");
  const mobileDropdown = document.getElementById("mobile-theme-selection");

  const colorsList = ["purple", "blue", "green", "orange"];

  colorsList.forEach((c) => {
    // Desktop indicator checks
    const checkIcon = document.getElementById(`check-${c}`);
    if (checkIcon) {
      if (appState.colorTheme === c) {
        checkIcon.classList.remove("hidden");
      } else {
        checkIcon.classList.add("hidden");
      }
    }

    // Mobile border scales
    const mBtn = document.getElementById(`mob-theme-${c}`);
    if (mBtn) {
      if (appState.colorTheme === c) {
        mBtn.className = "flex items-center justify-center p-2 rounded-full border-2 border-primary scale-110 shadow-sm transition-all";
      } else {
        mBtn.className = "flex items-center justify-center p-2 rounded-full border-2 border-transparent opacity-60 transition-all";
      }
    }
  });
}

// ==========================================================================
// SCROLL WATCHER
// ==========================================================================

function initScrollWatcher() {
  const topBtn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      topBtn?.classList.remove("hidden");
    } else {
      topBtn?.classList.add("hidden");
    }
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// ==========================================================================
// ENQUIRY FORM HANDLER
// ==========================================================================

function handleContactSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById("user-name");
  const messageInput = document.getElementById("user-message");
  const alertBox = document.getElementById("form-alert");

  if (!nameInput || !messageInput) return;

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) return;

  const formattedMsg = `Hello Salman, I am ${name}. ${message}`;
  const waUrl = `https://wa.me/919822338978?text=${encodeURIComponent(formattedMsg)}`;
  window.open(waUrl, "_blank");

  // Show status success alert
  alertBox?.classList.remove("hidden");
  nameInput.value = "";
  messageInput.value = "";

  setTimeout(() => {
    alertBox?.classList.add("hidden");
  }, 5000);
}

// ==========================================================================
// MOBILE MENU CONTROL
// ==========================================================================

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  }
}

// ==========================================================================
// BOOTSTRAP INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", async () => {
  // 1. Load LocalStorage preferences
  const savedTheme = localStorage.getItem("theme");
  const savedColorTheme = localStorage.getItem("color-theme");
  const savedLocale = localStorage.getItem("locale");

  if (savedTheme) {
    appState.theme = savedTheme;
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    appState.theme = "light";
  }

  if (appState.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (savedColorTheme) {
    appState.colorTheme = savedColorTheme;
  }
  document.documentElement.setAttribute("data-color-theme", appState.colorTheme);

  if (savedLocale && ["en", "hi", "mr", "ur"].includes(savedLocale)) {
    appState.locale = savedLocale;
  }

  // Set checks in drop-down list
  updateColorDropdownChecks();

  // Run Translation dictionary
  updateTranslations();

  // 2. Fetch live data from Sheets or fallback
  appState.isLoading = true;
  renderProducts(); // Draw skeleton screens initially

  const data = await fetchProducts();
  appState.products = data;
  appState.isLoading = false;

  // 3. Render catalog and featured sliders
  renderProducts();
  initFeaturedSlider();

  // 4. Initialize scroll behaviors
  initScrollWatcher();

  // 5. Connect Search Listener
  const searchInput = document.getElementById("catalog-search");
  searchInput?.addEventListener("input", (e) => {
    appState.searchQuery = e.target.value;
    renderProducts();
  });

  // Connect Sort Listener
  const sortSelect = document.getElementById("price-sort");
  sortSelect?.addEventListener("change", (e) => {
    appState.sortBy = e.target.value;
    renderProducts();
  });

  // Connect Contact Submit
  const contactForm = document.getElementById("contact-form");
  contactForm?.addEventListener("submit", handleContactSubmit);

  // Close dropdowns on document clicks
  document.addEventListener("click", () => {
    document.getElementById("theme-dropdown")?.classList.add("hidden");
    document.getElementById("lang-dropdown")?.classList.add("hidden");
  });

  // Stop propagation for dropdown triggers to prevent instant auto-closure
  document.getElementById("theme-dropdown-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("theme-dropdown")?.classList.toggle("hidden");
    document.getElementById("lang-dropdown")?.classList.add("hidden");
  });

  document.getElementById("lang-dropdown-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("lang-dropdown")?.classList.toggle("hidden");
    document.getElementById("theme-dropdown")?.classList.add("hidden");
  });
});
