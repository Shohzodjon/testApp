// REGISTER ELEMENTS
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
    register.style.display = "none";
  }
});

// ? END OF REGISTER ELEMENTS
// NAVBAR CHOOSE
const navLi = document.querySelectorAll(".navbar--li");
console.log(navLi);
for (let i = 0; i <= navLi.length - 1; i++) {
  let li = navLi[i];
  li.addEventListener("click", (e) => {
    e.target.style.color = "blue";
    console.log("target", e);
  });
}

// END OF NAVBAR
//  $$$$$$$$$$$$$$$$$$

const grid = document.querySelector(".grid");
const data = [
  {
    user: "Headline label",
    title: "Label, Label",
    text: "Badge",
    text2: "label",
  },
  {
    user: "Headline label",
    title: "Label, Label",
    text: "Badge",
    text2: "label",
  },
  {
    user: "Headline label",
    title: "Label, Label",
    text: "Badge",
    text2: "label",
  },
  {
    user: "Headline label",
    title: "Label, Label",
    text: "Badge",
    text2: "label",
  },
  {
    user: "Headline label",
    title: "Label, Label",
    text: "Badge",
    text2: "label",
  },
  {
    user: "Headline label",
    title: "Label, Label",
    text: "Badge",
    text2: "label",
  },
  {
    user: "Headline label",
    title: "Label, Label",
    text: "Badge",
    text2: "label",
  },
  {
    user: "Headline label",
    title: "Label, Label",
    text: "Badge",
    text2: "label",
  },
  {
    user: "Headline label",
    title: "Label, Label",
    text: "Badge",
    text2: "label",
  },
  {
    user: "Headline label",
    title: "Label, Label",
    text: "Badge",
    text2: "label",
  },
  {
    user: "Headline label",
    title: "Label, Label",
    text: "Badge",
    text2: "label",
  },
];

let item;

for (let i = 0; i <= data.length - 1; i++) {
  if (i == 0 || i === 3 || i === 6 || i === 9) {
    item = `
    <div class="grid--item">
    <div class="item--img">
        <div class="img">
            <img src="./assets/img/Image.png" alt="img">
            <img src="./assets/img/infinity.png" alt="infinite" class="infinity">
        </div>
        <p><i class="bi bi-three-dots"></i></p>
    </div>
     <h4>${data[i].user}</h4>
      <h5>${data[i].title}</h5>
    
    <ul>
      <li><i class="bi bi-calendar-event"></i> <span>Thu. 24</span></li>
      <li><i class="bi bi-camera"></i> <span>11:00 - 12:00</span></li>
    </ul>
    
     </div>
    
    `;
  } else {
    item = `
    <div class="grid--item">
    <div class="item--img">
        <div class="img">
            <img src="./assets/img/Image.png" alt="img">
        </div>
        <p><i class="bi bi-three-dots"></i></p>
    </div>
     <h4>${data[i].user}</h4>
      <h5>${data[i].title}</h5>
        <div id="test">
        <p class="item--span">${data[i].text}</p>
        <span class="test--span">${data[i].text2}<span>
   </div>     
</div>
    
    `;
  }

  grid.insertAdjacentHTML("beforeEnd", item);
}
// BEGIN APPLICANTS LIST

const applicantSection = document.querySelector(".applicants--section");

const lists = [
  {
    icon: `<i class="bi bi-file-text"></i>`,
    name: "Documents",
    text: "1900 files",
    size: "335 MB",
    data: "5/23/2020, 10:45 AM",
    btnText: "Only you",
    style: `style="background:#E1E8FF; color:#4C6FFF"`,
  },
  {
    icon: `<i class="bi bi-emoji-smile"></i>`,
    name: "Media",
    text: "540 files",
    size: "335 MB",
    data: "5/23/2020, 10:45 AM",
    btnText: "3 members",
  },
  {
    icon: `<i class="bi bi-emoji-smile"></i>`,
    name: "Get started in UI.pdf",
    text: "Document",
    size: "335 MB",
    data: "5/23/2020, 10:45 AM",
    btnText: "9 members",
    style: `style="background:#E1E8FF; color:#4C6FFF"`,
  },
  {
    icon: `<i class="bi bi-file-earmark-medical"></i>`,
    name: "Header",
    text: "Sub header",
    size: "335 MB",
    data: "5/23/2020, 10:45 AM",
    btnText: "2 members",
    style: `style="background:#E1E8FF; color:#4C6FFF; border-radius:50%"`,
  },
  {
    icon: `<i class="bi bi-file-earmark-medical"></i>`,
    name: "Header",
    text: "Sub header",
    size: "335 MB",
    data: "5/23/2020, 10:45 AM",
    btnText: "2 members",
    style: `style="background:#E1E8FF; color:#4C6FFF; border-radius:50%"`,
  },
  {
    icon: `<i class="bi bi-file-earmark-medical"></i>`,
    name: "Header",
    text: "Sub header",
    size: "335 MB",
    data: "5/23/2020, 10:45 AM",
    btnText: "2 members",
    style: `style="background:#E1E8FF; color:#4C6FFF; border-radius:50%"`,
  },
  {
    icon: `<i class="bi bi-file-earmark-medical"></i>`,
    name: "Header",
    text: "Sub header",
    size: "335 MB",
    data: "5/23/2020, 10:45 AM",
    btnText: "2 members",
    style: `style="background:#E1E8FF; color:#4C6FFF; border-radius:50%"`,
  },
  {
    icon: `<i class="bi bi-file-earmark-medical"></i>`,
    name: "Header",
    text: "Sub header",
    size: "335 MB",
    data: "5/23/2020, 10:45 AM",
    btnText: "2 members",
    style: `style="background:#E1E8FF; color:#4C6FFF; border-radius:50%"`,
  },
  {
    icon: `<i class="bi bi-file-earmark-medical"></i>`,
    name: "Header",
    text: "Sub header",
    size: "335 MB",
    data: "5/23/2020, 10:45 AM",
    btnText: "2 members",
    style: `style="background:#E1E8FF; color:#4C6FFF; border-radius:50%"`,
  },
];

let list;

for (let i = 0; i <= lists.length - 1; i++) {
  list = `
  <div class="applicant--list">
  <div class="first--info">
    <div class="flex">
      <div class="first--info__style"${lists[i].style}>
        ${lists[i].icon}
      </div>
      <div class="info--text">
        <h5>${lists[i].name}</h5>
        <small>${lists[i].text}</small>
      </div>
    </div>
  </div>
  <!-- end  of first--info  -->
  <div class="second--info">
    <p>${lists[i].size}</p>
  </div>
  <!-- end of second--info  -->
  <div class="third--info">
    <p>${lists[i].data}</p>
  </div>
  <!--  end  of third--info  -->
  <div class="fourth--info">
    <button>${lists[i].btnText}</button>
  </div>
</div>
  `;
  applicantSection.insertAdjacentHTML("beforeEnd", list);
}
