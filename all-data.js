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
         apps: { 
        title: "App Development: Learn Basic to Advance 📱", 
        desc: `
            <div style="text-align: left; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 15px; border: 1px solid rgba(0,236,255,0.3);">
                
                <h4 style="color: #00ecff; margin-bottom: 10px;">🚀 App Development सीखने का रोडमैप:</h4>
                
                <p><b>1. Basic Level (शुरुआत):</b></p>
                <ul style="color: #ccc; margin-bottom: 15px;">
                    <li>🔹 UI/UX Design की समझ (Figma/Adobe XD)</li>
                    <li>🔹 HTML, CSS और JavaScript का बेसिक ज्ञान</li>
                    <li>🔹 Mobile Responsive लेआउट बनाना</li>
                </ul>

                <p><b>2. Intermediate Level (मझला):</b></p>
                <ul style="color: #ccc; margin-bottom: 15px;">
                    <li>🔹 Frameworks: React Native या Flutter (Android & iOS दोनों के लिए)</li>
                    <li>🔹 API Integration (डेटा फेच करना)</li>
                    <li>🔹 State Management (Redux या Context API)</li>
                </ul>

                <p><b>3. Advance Level (प्रो):</b></p>
                <ul style="color: #ccc; margin-bottom: 15px;">
                    <li>🔹 Backend & Database (Firebase या Node.js)</li>
                    <li>🔹 Push Notifications और Google Maps का इस्तेमाल</li>
                    <li>🔹 Play Store और App Store पर ऐप पब्लिश करना</li>
                </ul>

                <!-- सीखने के लिए ज़रूरी इमेजेस -->
                <div class="detail-gallery" style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
                    <img src="https://images.unsplash.com" alt="UI Design" style="width:100%; border-radius:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                    <img src="https://images.unsplash.com" alt="Coding" style="width:100%; border-radius:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                    <img src="https://images.unsplash.com" alt="App Launch" style="width:100%; border-radius:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                </div>
            </div>
        `, 
        img: "https://images.unsplash.com" 
    },
 
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
