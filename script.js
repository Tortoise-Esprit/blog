// script.js
document.getElementById("accept-cookies").addEventListener("click", function() {
    const banner = document.getElementById("cookie-banner");
    banner.style.display = "none";
    // クッキー同意を保存（例: ローカルストレージ）
    localStorage.setItem("cookiesAccepted", "true");
});

// ページ読み込み時にチェック
document.addEventListener("DOMContentLoaded", function() {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted === "true") {
        document.getElementById("cookie-banner").style.display = "none";
    }
});
