// REGISTER ELEMENTS

// ? END OF REGISTER ELEMENTS

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
///

navbarBottom.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar--li")) return;
  else {
    console.log("click");
    for (let i = 0; i <= activeSpan1.length - 1; i++) {
      activeSpan1[i].style.display = "none";
    }
    let li = e.target.closest(".navbar--li");
    li.childNodes[3].style.display = "none";
    li.childNodes[3].style.background = "#4c6fff";
  }
});

//  ###########  TAB #####333#####
// uicList.forEach((i) => {
//   for (let j = 0; j <= spans.length - 1; j++) {
//     spans[j].classList.remove("bottom--span");
//   }
//   i.addEventListener("click", () => {
//     document
//       .querySelector(`.uic--li_${i.dataset.num}`)
//       .classList.toggle("bottom--span");
//   });
// });

function openContent(evt, cityName, span) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  const spans = document.querySelectorAll(".span");
  for (let i = 0; i <= spans.length - 1; i++) {
    spans[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("uic--li");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    document
      .querySelector(`.uic--li_${tablinks[i].dataset.num}`)
      .classList.add("bottom--span");
  }
  document.getElementById(cityName).style.display = "block";
  document.querySelector(`.${span}`).style.display = "block";
  evt.currentTarget.className += "active";
}

//  ########### END OF  TAB #####333#####

// #####

const grid = document.querySelector(".grid");
const data = [
  {
    user: "Headline label",
    title: "JavaScript dastulash tili test",
    text: "Badge",
    text2: "label",
    link: "./pages/test.html",
  },
  {
    user: "Headline label",
    title: "Java dasturlash tili test",
    text: "Badge",
    text2: "label",
    link: "./pages/java.html",
  },
  {
    user: "Headline label",
    title: "C++ dasturlash tili test",
    text: "Badge",
    text2: "label",
    link: "./pages/cpp.html",
  },
  {
    user: "Headline label",
    title: "Python dasturlash tili test",
    text: "Badge",
    text2: "label",
    link: "./pages/python.html",
  },
  {
    user: "Headline label",
    title: "Node JS dasturlash tili test",
    text: "Badge",
    text2: "label",
    link: "./pages/node.html",
  },
  {
    user: "Headline label",
    title: "Flutter dasturlash tili testi",
    text: "Badge",
    text2: "label",
    link: "./pages/flutter.html",
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
        <button class="change--file">
        <a href="${
          data[i].link ? data[i].link : "#"
        }"><i class="bi bi-three-dots"></i></a></button>
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
       
        <button class="change--file">
        
        <a href="${
          data[i].link ? data[i].link : "#"
        }"><i class="bi bi-three-dots"></i>
        </a>
        </button>
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

// BEGIN APPLICANTS LISTS

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
