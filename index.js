const userName = document.querySelector("#user--name");
const userEmail = document.querySelector("#user--email");
const userPassword = document.querySelector("#user--password");
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const registerButton = document.querySelector(".register--button");
const register = document.querySelector(".register");
let nameIs = false;
let emailIs = false;
let passIs = false;

function checkName(userName) {
  if (userName.value.trim() === "") {
    error1.textContent = "Required";
    error1.classList.add("error--msg");
    nameIs = false;
  } else if (
    userName.value.trim().length >= 1 &&
    userName.value.trim().length <= 4
  ) {
    error1.textContent = "Must be 5 charecter";
    error1.classList.add("error--msg");
    nameIs = false;
  } else {
    error1.textContent = "";
    error1.classList.remove("error--msg");
    nameIs = true;
  }
}

function checkEmail(userEmail) {
  let emailCheck =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  if (emailCheck.test(userEmail.value)) {
    error2.textContent = "";
    error2.classList.remove("error--msg");
    emailIs = true;
  } else {
    error2.textContent = " Invalid email ";
    error2.classList.add("error--msg");
    emailIs = false;
  }
}
function checkPassword(userPassword) {
  let text = userPassword.value;
  if (text.trim() === "") {
    error3.textContent = "Password required";
    error3.classList.add("error--msg");
    passIs = false;
  } else if (text.trim().length >= 1 && text.trim().length <= 6) {
    error3.textContent = "Password is less than 7";
    error3.classList.add("error--msg");
    passIs = false;
  } else {
    error3.textContent = "";
    error3.classList.remove("error--msg");
    passIs = true;
  }
}

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  checkName(userName);
  checkEmail(userEmail);
  checkPassword(userPassword);
  if (nameIs && emailIs && passIs) {
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
    registerButton.children[0].baseURI = "";
  }
});
console.log("child", registerButton.children[0].baseURI);
