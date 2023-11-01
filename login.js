function loginf() {
    var email = document.getElementById("login").value;
    var pass = document.getElementById("password").value;

    if (email === "admin@admin.com" && pass === "123456") {
        alert("Login Successful");
    }
    else {
        alert("Incorrect E-mail or Password");
    }
}