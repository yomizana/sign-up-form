const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const span = document.getElementById("password-check");

password.oninput = handleChange;
confirmPassword.oninput = handleChange;

function handleChange() {
    const firstPwd = password.value;
    const secondPwd = confirmPassword.value;

    if (firstPwd !== secondPwd) {
        span.classList.remove("match");
        span.classList.add("mismatch");
        password.classList.add("error");
        confirmPassword.classList.add("error");
    } else {
        span.classList.remove("mismatch");
        span.classList.add("match");
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
    }
}