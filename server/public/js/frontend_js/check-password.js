var password = document.getElementById('password')
var confirmPassword = document.getElementById('confirm_password')

function validationPassword() {
    if(password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Mật khẩu không giống nhau");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = validationPassword;
confirmPassword.onkeyup = validationPassword;