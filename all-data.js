// ============================================================
// 1. कार्ड्स का 'रिमोट कंट्रोल' (Order, Icon, Title यहीं से बदलें)
// ============================================================
const myCards = [
    { id: 'ads',      title: 'Targeted Ads',    icon: 'fa-bullseye' },
    { id: 'trading',  title: 'Trading',         icon: 'fa-chart-line' },
    { id: 'branding', title: 'Branding',        icon: 'fa-pen-nib' },
    { id: 'courses',  title: 'Courses',         icon: 'fa-graduation-cap' },
    { id: 'web',      title: 'Web Design',      icon: 'fa-laptop-code' },
    { id: 'apps',     title: 'App Development', icon: 'fa-mobile-alt' }
];

// ============================================================
// 2. कार्ड्स के अंदर का डेटा (क्लिक करने पर क्या दिखेगा)
// ============================================================
const serviceData = {
    ads: { title: "Targeted Ads", desc: "हाई-कन्वर्जन विज्ञापन जो सेल्स बढ़ाते हैं।", img: "https://images.unsplash.com" },
    trading: { title: "Trading Strategies", desc: "मार्केट एनालिसिस और ट्रेडिंग कोर्स की पूरी जानकारी।", img: "https://images.unsplash.com" },
    branding: { title: "Branding", desc: "आपके बिजनेस की यूनिक पहचान और लोगो डिजाइन।", img: "https://images.unsplash.com" },
    courses: { title: "Professional Courses", desc: "वेब डेवलपमेंट और ट्रेडिंग की बारीकियां सीखें।", img: "https://images.unsplash.com" },
    web: { title: "Web Design", desc: "आधुनिक और रिस्पॉन्सिव वेबसाइट्स आपके बिजनेस के लिए।", img: "https://images.unsplash.com" },
    
    // APP DEVELOPMENT: रोडमैप और इमेजेस के साथ
    apps: { 
        title: "App Development: Basic to Advance 🚀", 
        desc: `
            <p>App development सीखने का रोडमैप:</p>
            <ul style="text-align: left; color: #eee; margin-bottom: 20px;">
                <li>✅ Basic: UI/UX Design</li>
                <li>✅ Frameworks: React Native / Flutter</li>
                <li>✅ Advance: Play Store Publishing</li>
            </ul>
            <div class="detail-gallery">
                <img src="https://images.unsplash.com" style="width:100%; border-radius:10px; margin-top:10px;">
                <img src="https://images.unsplash.com" style="width:100%; border-radius:10px; margin-top:10px;">
            </div>
        `, 
        img: "https://images.unsplash.com" 
    }
};

// ============================================================
// 3. जादुई फंक्शन्स (इन्हें अब कभी नहीं छूना पड़ेगा)
// ============================================================

// कार्ड्स को स्क्रीन पर दिखाने के लिए
function renderCards() {
    let html = "";
    myCards.forEach(card => {
        html += `
            <div class="card" onclick="showDetail('${card.id}')">
                <i class="fas ${card.icon}"></i>
                <h3>${card.title}</h3>
            </div>`;
    });
    const container = document.getElementById('cards-container');
    if(container) container.innerHTML = html;
}

// कार्ड पर क्लिक करने पर डिटेल्स दिखाने के लिए
function showDetail(service) {
    const data = serviceData[service];
    if (data) {
        document.getElementById('det-title').innerText = data.title;
        document.getElementById('det-desc').innerHTML = data.desc;
        document.getElementById('det-img').src = data.img;
        
        document.getElementById('cards-container').style.display = 'none';
        document.getElementById('detail-view').style.display = 'block';
        window.history.pushState({view: 'detail'}, ''); 
    }
}

// वापस होम पर जाने के लिए
function showHome() {
    const container = document.getElementById('cards-container');
    if(container) container.style.display = 'grid';
    document.getElementById('detail-view').style.display = 'none';
}

// मोबाइल बैक बटन के लिए
window.onpopstate = function() { showHome(); };
