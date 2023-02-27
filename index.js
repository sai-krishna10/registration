(function () {
    var show = document.querySelector(".show");
    var password = document.querySelector(".password");
    var c_password = document.querySelector(".c-password");
    var submit = document.querySelector(".submit");

    show.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
        }
        else {
            password.type = "password";
        }
    })
    submit.addEventListener("click", function () {
        if (password.value != c_password.value) {
            alert("Your password and Conform password are not matching");
        }
    })

})();