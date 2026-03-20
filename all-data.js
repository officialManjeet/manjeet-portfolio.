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
apps: { 
    title: "App Development: Basic to Advance 🚀", 
    desc: `
        <div style="text-align: left; line-height: 1.6;">
            <p style="color: #00ecff; font-weight: bold;">App Development सीखने का सही रास्ता:</p>
            <ul style="margin-left: 20px;">
                <li>✅ <b>Basic:</b> HTML, CSS, JavaScript (Mobile Responsive)</li>
                <li>✅ <b>Frameworks:</b> React Native या Flutter (Cross Platform)</li>
                <li>✅ <b>Database:</b> Firebase या MongoDB का उपयोग</li>
                <li>✅ <b>Advance:</b> API Integration और Play Store पर पब्लिश करना</li>
            </ul>
        </div>
        
        <!-- शानदार इमेजेस -->
        <div class="detail-gallery">
            <img src="https://images.unsplash.com" alt="App UI Design">
            <img src="https://images.unsplash.com" alt="Mobile Coding">
            <img src="https://images.unsplash.com" alt="App Roadmap">
        </div>
    `, 
    img: "https://images.unsplash.com"
},

    }
};

// यह फंक्शन डेटा को उठाकर स्क्रीन पर दिखाता है
function showDetail(service) {
    const data = serviceData[service];
    if (data) {
        document.getElementById('det-desc').innerHTML = data.desc;
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

