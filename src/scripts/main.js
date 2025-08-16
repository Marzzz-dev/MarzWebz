document.addEventListener("DOMContentLoaded", function() {
    // Show loading screen
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) loadingScreen.style.display = "flex";

    // Hide loading screen after a delay
    setTimeout(() => {
        if (loadingScreen) loadingScreen.style.display = "none";
        showTabs();
    }, 3000); // 3 detik

    // Animasi tab muncul dari kiri ke tengah
    function showTabs() {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach((tab, index) => {
            setTimeout(() => {
                tab.classList.add("visible");
            }, index * 300); // jeda antar tab
        });
    }

    // Autoplay music looping
    const bgMusic = document.getElementById("bg-music");
    if (bgMusic) {
        bgMusic.play().catch(() => {
            document.body.addEventListener("click", () => {
                bgMusic.play();
            }, { once: true });
        });
    }

    // Scroll event untuk animasi tab (opsional, bisa dihapus jika tidak perlu)
    window.addEventListener("scroll", () => {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach(tab => {
            const rect = tab.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                tab.classList.add("in-view");
            }
        });
    });
});