// Giriş Kontrolü
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var correctUsername = "Angarias";
    var correctPassword = "Luna"; // Örnek şifre, değiştirebilirsin.

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "index.html"; // Başarılı giriş yönlendirme
    } else {
        document.getElementById("error-message").style.display = "block"; // Hata mesajı göster
    }
}

// Müzik Oynatıcı
window.onload = function() {
    var audio1 = new Audio("Beni Sevdi Benden Çok.mp3");
    var audio2 = new Audio("Gömülür.mp3");

    audio1.loop = true;
    audio2.loop = true;

    audio1.volume = 0.5;
    audio2.volume = 0.5;

    audio1.play();
    setTimeout(() => audio2.play(), 293000); // İkinci şarkıyı 293 saniye sonra başlat

    document.getElementById("musicToggle").addEventListener("click", function() {
        if (!audio1.paused) {
            audio1.pause();
            audio2.pause();
            this.innerText = "Müziği Aç";
        } else {
            audio1.play();
            setTimeout(() => audio2.play(), 30000);
            this.innerText = "Müziği Kapat";
        }
    });
};
