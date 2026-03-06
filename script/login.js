document.getElementById("signin-btn").addEventListener("click", function () {
  //1-get mobile number input
  const usernameInput = document.getElementById("username-input");
  const userName = usernameInput.value;

  //2-get pin input
  const passwordInput = document.getElementById("password-input");
  const userPassword = passwordInput.value;

  //3-match pin & mobile
  if (
    userName.toLowerCase() === "admin" &&
    userPassword.toLowerCase() === "admin123"
  ) {
    //3.1- if true >alert > homepage
    alert("login success !");
    window.location.assign("/home.html");
    usernameInput.value = "";
  }

  //3.2- if false > alert > return
  else {
    alert("login failed");
    return;
  }
});
