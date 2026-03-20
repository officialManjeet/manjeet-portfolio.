// ============================================================
// 1. कार्ड्स का 'रिमोट कंट्रोल' (Order, Icon, Title यहीं से बदलें)
// ============================================================
const myCards = [
    { id: 'ads',      title: 'Targeted Ads',    icon: 'fa-bullseye' },
    { id: 'trading',  title: 'Trading',         icon: 'fa-chart-line' },
    { id: 'branding', title: 'Branding',        icon: 'fa-pen-nib' },
    { id: 'courses',  title: 'Courses',         icon: 'fa-graduation-cap' },
 

];

// ============================================================
// 2. कार्ड्स के अंदर का डेटा (क्लिक करने पर क्या दिखेगा)
// ============================================================
const serviceData = {
  // 1. होम पेज पर अब सिर्फ 4 कार्ड्स दिखेंगे
const myCards = [
    { id: 'ads',      title: 'Targeted Ads',    icon: 'fa-bullseye' },
    { id: 'trading',  title: 'Trading',         icon: 'fa-chart-line' },
    { id: 'branding', title: 'Branding',        icon: 'fa-pen-nib' },
    { id: 'courses',  title: 'Courses',         icon: 'fa-graduation-cap' }
];

// 2. Courses कार्ड के अंदर वेब और ऐप की जानकारी
const serviceData = {
    ads: { title: "Targeted Ads", desc: "हाई-कन्वर्जन विज्ञापन जो सेल्स बढ़ाते हैं।", img: "https://images.unsplash.com" },
    trading: { title: "Trading Strategies", desc: "मार्केट एनालिसिस और ट्रेडिंग कोर्स की पूरी जानकारी।", img: "https://images.unsplash.com" },
    branding: { title: "Branding", desc: "आपके बिजनेस की यूनिक पहचान और लोगो डिजाइन।", img: "https://images.unsplash.com" },
    
    // COURSES कार्ड: इसके अंदर अब Web और App दोनों का खजाना है
    courses: { 
        title: "Our Professional Courses 🎓", 
        desc: `
            <div style="text-align: left; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; border: 1px solid rgba(0,236,255,0.2); margin-bottom: 20px;">
                <h3 style="color: #00ecff;">1. Web Designing Course 🌐</h3>
                <p>Basic to Advance: HTML, CSS, JavaScript, और Responsive Design सीखें।</p>
                <img src="https://images.unsplash.com" style="width:100%; border-radius:10px; margin: 10px 0;">
            </div>

            <div style="text-align: left; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; border: 1px solid rgba(0,236,255,0.2);">
                <h3 style="color: #00ecff;">2. App Development Course 📱</h3>
                <p>रोडमैप: UI/UX, Flutter/React Native, और Play Store पब्लिशिंग।</p>
                <img src="https://images.unsplash.com" style="width:100%; border-radius:10px; margin: 10px 0;">
                <img src="https://images.unsplash.com" style="width:100%; border-radius:10px;">
            </div>
        `, 
        img: "https://images.unsplash.com" 
    }
};

// ... बाकी फंक्शन्स (renderCards, showDetail, showHome) पहले जैसे ही रहेंगे ...


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
