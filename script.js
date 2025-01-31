function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Belirlenen kullanıcı adı ve şifre
    var correctUsername = "Angarias";
    var correctPassword = "Luna"; // Örnek olarak "Luna" kullandım, istediğin şifreyi koyabilirsin.

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "index.html"; // Başarılı giriş olursa yönlendir
    } else {
        document.getElementById("error-message").style.display = "block"; // Hata mesajı göster
    }
}

