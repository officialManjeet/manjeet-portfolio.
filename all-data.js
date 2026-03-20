// मास्टर डेटा: यहीं से आप हर कार्ड की जानकारी बदलेंगे
const serviceData = {
    ads: { 
        title: "Targeted Ads", 
        desc: "हम फेसबुक और गूगल पर विज्ञापन चलाकर आपके बिजनेस की सेल्स बढ़ाते हैं।", 
        img: "https://images.unsplash.com" 
    },
    trading: { 
        title: "Trading Strategies", 
        desc: "प्रोफेशनल ट्रेडिंग कोर्स और मार्केट एनालिसिस की पूरी जानकारी यहाँ मिलेगी।", 
        img: "https://images.unsplash.com" 
    },
    branding: { 
        title: "Branding", 
        desc: "आपके बिजनेस को एक यूनिक ब्रांड बनाने के लिए लोगो और ग्राफिक्स डिजाइन।", 
        img: "https://images.unsplash.com" 
    },
    courses: { 
        title: "Professional Courses", 
        desc: "वेब डेवलपमेंट और ट्रेडिंग की बारीकियां सीखें हमारे एक्सपर्ट कोर्स के साथ।", 
        img: "https://images.unsplash.com" 
    },
    web: { 
        title: "Web Design", 
        desc: "आधुनिक, फ़ास्ट और मोबाइल फ्रेंडली वेबसाइट्स आपके बिजनेस के लिए।", 
        img: "https://images.unsplash.com" 
    },
    // App Development वाला खास हिस्सा
    apps: { 
        title: "App Development: Basic to Advance 🚀", 
        desc: `
            <p>App development सीखने का सही रोडमैप:</p>
            <ul style="text-align: left; color: #eee; margin-bottom: 20px;">
                <li>✅ Basic: HTML, CSS, JavaScript</li>
                <li>✅ Frameworks: Flutter या React Native</li>
                <li>✅ Advance: API और Play Store पब्लिशिंग</li>
            </ul>
            <div class="detail-gallery">
                <img src="https://images.unsplash.com" style="width:100%; border-radius:10px; margin-bottom:10px;">
                <img src="https://images.unsplash.com" style="width:100%; border-radius:10px; margin-bottom:10px;">
            </div>
        `, 
        img: "https://images.unsplash.com" 
    }
};

// क्लिक करने पर डिटेल्स दिखाने वाला फंक्शन
function showDetail(service) {
    const data = serviceData[service];
    if (data) {
        document.getElementById('det-title').innerText = data.title;
        document.getElementById('det-desc').innerHTML = data.desc; // innerHTML इमेजेस के लिए जरूरी है
        document.getElementById('det-img').src = data.img;
        
        document.getElementById('cards-container').style.display = 'none';
        document.getElementById('detail-view').style.display = 'block';

        window.history.pushState({view: 'detail'}, ''); 
    }
}

// होम पेज पर वापस जाने के लिए
function showHome() {
    document.getElementById('cards-container').style.display = 'grid';
    document.getElementById('detail-view').style.display = 'none';
}

window.onpopstate = function() { showHome(); };
