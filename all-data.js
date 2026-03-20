// ============================================================
// 1. कार्ड्स का 'रिमोट कंट्रोल' (होम पेज पर दिखने वाले 4 मुख्य कार्ड्स)
// ============================================================
const myCards = [
    { id: 'ads',      title: 'Targeted Ads',    icon: 'fa-bullseye' },
    { id: 'trading',  title: 'Trading',         icon: 'fa-chart-line' },
    { id: 'branding', title: 'Branding',        icon: 'fa-pen-nib' },
    { id: 'courses',  title: 'Courses',         icon: 'fa-graduation-cap' }
];

// ============================================================
// 2. कार्ड्स के अंदर का डेटा (क्लिक करने पर क्या दिखेगा)
// ============================================================
const serviceData = {
    ads: { 
        title: "Targeted Ads", 
        desc: "हाई-कन्वर्जन विज्ञापन जो सेल्स बढ़ाते हैं और आपके बिजनेस को स्केल करते हैं।", 
        img: "https://images.unsplash.com" 
    },
    trading: { 
        title: "Trading Strategies", 
        desc: "मार्केट एनालिसिस, रिस्क मैनेजमेंट और प्रॉफिटेबल ट्रेडिंग कोर्स की पूरी जानकारी।", 
        img: "https://images.unsplash.com" 
    },
    branding: { 
        title: "Branding Services", 
        desc: "आपके बिजनेस की यूनिक पहचान, लोगो डिजाइन और सोशल मीडिया प्रेजेंस।", 
        img: "https://images.unsplash.com" 
    },
    
    // COURSES कार्ड: इसके अंदर Web और App का पूरा सेक्शन है
    courses: { 
        title: "Explore Our Masterclasses 🎓", 
        desc: `
            <p style="margin-bottom: 20px; opacity: 0.8;">नीचे दिए गए कोर्सेज में से अपना पसंदीदा चुनें और सीखना शुरू करें।</p>
            
            <!-- WEB DESIGN SECTION -->
            <div style="text-align: left; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 15px; border: 1px solid rgba(0,236,255,0.3); margin-bottom: 25px;">
                <h3 style="color: #00ecff; margin-bottom: 10px;">🌐 Web Designing Masterclass</h3>
                <ul style="list-style: none; padding: 0; font-size: 0.95rem; line-height: 1.6;">
                    <li>✅ HTML5, CSS3 & Modern JavaScript</li>
                    <li>✅ Responsive Web Design (Mobile Friendly)</li>
                    <li>✅ Hosting & Domain Setup</li>
                </ul>
                <button style="margin-top: 15px; background: #00ecff; color: #000; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer;">Join Web Course</button>
            </div>

            <!-- APP DEVELOPMENT SECTION -->
            <div style="text-align: left; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 15px; border: 1px solid rgba(160, 32, 240, 0.4);">
                <h3 style="color: #a020f0; margin-bottom: 10px;">📱 Mobile App Development</h3>
                <ul style="list-style: none; padding: 0; font-size: 0.95rem; line-height: 1.6;">
                    <li>✅ Android & iOS UI/UX Design</li>
                    <li>✅ Flutter / React Native Framework</li>
                    <li>✅ Backend Integration & PlayStore Launch</li>
                </ul>
                <button style="margin-top: 15px; background: #a020f0; color: #fff; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer;">Join App Course</button>
            </div>
        `, 
        img: "https://images.unsplash.com" 
    }
};

// ============================================================
// 3. जादुई फंक्शन्स
// ============================================================

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

function showHome() {
    const container = document.getElementById('cards-container');
    if(container) container.style.display = 'grid';
    document.getElementById('detail-view').style.display = 'none';
}

window.onpopstate = function() { showHome(); };

// पेज लोड होते ही कार्ड्स रेंडर करें
renderCards();
