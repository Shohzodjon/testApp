const userName = document.querySelector("#account--name");
const userLast = document.querySelector("#account--lastname");
const userEmail = document.querySelector("#account--email");
const userAdress = document.querySelector("#account--adress");
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");
const saveButton = document.querySelector(".account--btn");
const uploadFile = document.querySelector("#user--picture");
const userImg = document.querySelector(".user--img");
const userProfileName = document.querySelector(".user--profile--name");
const userProfileLastname = document.querySelector(".user--profile--lastname");
const profilePicture = document.querySelector(".profile--picture");

let nameIs = false;
let lastIs = false;
let adressIs = false;
let emailIs = false;
let saveUserProfile = {
  name: "",
  lastName: "",
};

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
    saveUserProfile.name = userName.value;
    error1.textContent = "";
    error1.classList.remove("error--msg");
    nameIs = true;
  }
}

function checkLastName(userLast) {
  if (userLast.value.trim() === "") {
    error2.textContent = "Required";
    error2.classList.add("error--msg");
    lastIs = false;
  } else if (
    userLast.value.trim().length >= 1 &&
    userLast.value.trim().length <= 4
  ) {
    error2.textContent = "Must be 5 charecter";
    error2.classList.add("error--msg");
    lastIs = false;
  } else {
    saveUserProfile.lastName = userLast.value;
    error2.textContent = "";
    error2.classList.remove("error--msg");
    lastIs = true;
  }
}
function checkAdress(userAdress) {
  if (userAdress.value.trim() === "") {
    error4.textContent = "Required";
    error4.classList.add("error--msg");
    adressIs = false;
  } else {
    error4.textContent = "";
    error4.classList.remove("error--msg");
    adressIs = true;
  }
}

function checkEmail(userEmail) {
  let emailCheck =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  if (emailCheck.test(userEmail.value)) {
    error3.textContent = "";
    error3.classList.remove("error--msg");
    emailIs = true;
  } else {
    error3.textContent = " Invalid email ";
    error3.classList.add("error--msg");
    emailIs = false;
  }
}
//

//
saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  checkName(userName);
  checkEmail(userEmail);
  checkLastName(userLast);
  checkAdress(userAdress);

  if (nameIs && emailIs && adressIs && lastIs) {
    let jsonString = JSON.stringify(saveUserProfile);
    localStorage.setItem("userProfile", `${jsonString}`);
    userName.value = "";
    userEmail.value = "";
    userLast.value = "";
    userAdress.value = "";
  }
});

let getData = localStorage.getItem("userProfile");
let parseData = JSON.parse(getData);
userProfileLastname.textContent = parseData.lastName;
userProfileName.textContent = parseData.name;
////

const wrapList = document.querySelector(".navbar--list");
const activeSpan = document.querySelectorAll(".active--span");
const navbarBottom = document.querySelector(".navbar--bottom");
const activeSpan1 = document.querySelectorAll(".active--span1");

wrapList.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar--li")) return;
  else {
    for (let i = 0; i <= activeSpan.length - 1; i++) {
      activeSpan[i].style.display = "none";
    }
    let li = e.target.closest(".navbar--li");
    li.childNodes[3].style.display = "block";
    li.childNodes[3].style.background = "#4c6fff";
  }
});

navbarBottom.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar--li")) return;
  else {
    for (let i = 0; i <= activeSpan1.length - 1; i++) {
      activeSpan1[i].style.display = "none";
    }
    let li = e.target.closest(".navbar--li");
    li.childNodes[3].style.display = "none";
    li.childNodes[3].style.background = "#4c6fff";
  }
});

//

window.addEventListener("load", function () {
  console.log("window loaded");
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      console.log("input changed");
      if (this.files && this.files[0]) {
        // var img = document.querySelector("img");
        console.log("img", userImg);
        userImg.onload = () => {
          URL.revokeObjectURL(userImg.src);

          // no longer needed, free memory
        };

        userImg.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
    });
});
