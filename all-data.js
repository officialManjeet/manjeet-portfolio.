// यहाँ आप जो भी बदलेंगे, वो कार्ड पर क्लिक करने के बाद दिखेगा
const serviceData = {
    ads: { 
        title: "Targeted Ads", 
        desc: "हम फेसबुक और गूगल पर हाई-कन्वर्जन विज्ञापन चलाते हैं जो आपके बिजनेस की सेल बढ़ाते हैं।", 
        img: "ads.jpg" 
    },
    web: { 
        title: "Web Design", 
        desc: "आधुनिक और फ़ास्ट वेबसाइट्स जो हर डिवाइस पर सही दिखती हैं।", 
        img: "web.jpg" 
    },
    trading: { 
        title: "Trading Strategies", 
        desc: "शेयर मार्केट और फॉरेक्स के लिए प्रोफेशनल ट्रेडिंग कोर्स और सिग्नल।", 
        img: "trading.jpg" 
    },
    branding: { 
        title: "Branding", 
        desc: "आपके बिजनेस को एक बड़े ब्रांड के रूप में पहचान दिलाना हमारा लक्ष्य है।", 
        img: "branding.jpg" 
    },
    courses: { 
        title: "Professional Courses", 
        desc: "एक्सपर्ट्स से सीखें वेब डेवलपमेंट और ट्रेडिंग की बारीकियां।", 
        img: "courses.jpg" 
    },
    apps: { 
        title: "App Development", 
        desc: "कस्टम Android और iOS ऐप्स जो आपके बिजनेस को आसान बनाएंगे।", 
        img: "apps.jpg" 
    }
};

// यह फंक्शन डेटा को उठाकर स्क्रीन पर दिखाता है
function showDetail(service) {
    const data = serviceData[service];
    if (data) {
        document.getElementById('det-title').innerText = data.title;
        document.getElementById('det-desc').innerText = data.desc;
        document.getElementById('det-img').src = data.img;
        
        // कार्ड्स वाला हिस्सा छुपाएं और डिटेल वाला दिखाएं
        document.querySelector('.services-container').style.display = 'none';
        document.getElementById('detail-view').style.display = 'block';
    }
}

// वापस होम पर जाने के लिए
function showHome() {
    document.querySelector('.services-container').style.display = 'grid';
    document.getElementById('detail-view').style.display = 'none';
}

