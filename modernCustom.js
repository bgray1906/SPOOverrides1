// Test JavaScript for CSS Override Application Customizer

// Log to confirm script loaded
console.log('✅ modernCustom.js loaded successfully!');
console.log('Current URL:', window.location.href);
console.log('Page Title:', document.title);
console.log('Load Time:', new Date().toLocaleTimeString());

// Add a notification banner at the bottom
(function() {
    const banner = document.createElement('div');
    banner.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(90deg, #0078d4, #00b294);
        color: white;
        padding: 12px;
        text-align: center;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
        font-size: 14px;
    `;
    banner.innerHTML = '🚀 JavaScript Active - Custom Extension Running';
    document.body.appendChild(banner);
    
    console.log('✅ Bottom banner added to page');
})();

// Add click counter to page
(function() {
    let clickCount = 0;
    document.addEventListener('click', function() {
        clickCount++;
        console.log(`🖱️ Click #${clickCount} detected on page`);
    });
})();

// Log when page is fully loaded
window.addEventListener('load', function() {
    console.log('✅ Page fully loaded - Custom JS executed');
});

// Log all H1 headers on page
const headers = document.querySelectorAll('h1, h2');
if (headers.length > 0) {
    console.log('📄 Found headers on page:', headers.length);
    headers.forEach((h, i) => {
        console.log(`  Header ${i + 1}:`, h.textContent.trim());
    });
}
