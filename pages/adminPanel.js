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

//
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

//// SAVOL QO'SHISH
const userQusetion = document.querySelector("#user--question");
const questionOne = document.querySelector("#question1");
const questionTwo = document.querySelector("#question2");
const questionThree = document.querySelector("#question3");
const rightAnswer = document.querySelector("#right--answer");
const deleteAllValue = document.querySelector("#delete--values");
const addNewQustionSec = document.querySelector(".add-body--btn");
const addNewQuestion = document.querySelector(".add--test__btn");
const newQuestionList = document.querySelector(".newqueston--list");
const selectQuestion = document.querySelector("#question--subject");
////
const saveQuestion = document.querySelector(".save--test");
// modal elements
const adminModal = document.querySelector(".admin--modal");
const adminOverlay = document.querySelector(".admin--overlay");
const jsLeng = document.querySelector(".js--lang");
const pyLeng = document.querySelector(".py--lang");
const cppLeng = document.querySelector(".cpp--lang");
const jaLeng = document.querySelector(".ja--lang");
const flLeng = document.querySelector(".fl--lang");
const nodeLeng = document.querySelector(".node--lang");
// admin btns
const adminCancelBtn = document.querySelector(".admin--cancel");
const adminSaveBtn = document.querySelector(".admin--save");
//

/// validation
const userQuestionValidation = document.querySelector(
  ".user--question--validation"
);
const questionOneValidation = document.querySelector(".question1--validation");
const questionTwoValidation = document.querySelector(".question2--validation");
const questionThreeValidation = document.querySelector(
  ".question3--validation"
);
const questionFourValidation = document.querySelector(".question4--validation");

let isQuest = false;
let isQuestOne = false;
let isQuestTwo = false;
let isQuestThree = false;
let isQuestAnswer = false;

function checkQuestion(question) {
  if (question.value.trim() === "") {
    userQuestionValidation.textContent = "Input is empty ...";
    userQuestionValidation.style.color = "crimson";
    isQuest = false;
  } else {
    userQuestionValidation.textContent = "";
    isQuest = true;
  }
}
function checkQuestionOne(text) {
  if (text.value.trim() === "") {
    isQuestOne = false;
    questionOneValidation.textContent = "Input is empty ...";
    questionOneValidation.style.color = "crimson";
  } else {
    isQuestOne = true;
    questionOneValidation.textContent = "";
  }
}
function checkQuestionTwo(text) {
  if (text.value.trim() === "") {
    isQuestTwo = false;
    questionTwoValidation.textContent = "Input is empty .... ";
    questionTwoValidation.style.color = "crimson";
  } else {
    isQuestTwo = true;
    questionTwoValidation.textContent = "";
  }
}
function checkQuestionThree(text) {
  if (text.value.trim() === "") {
    isQuestThree = false;
    questionThreeValidation.textContent = "Input is empty ... ";
    questionThreeValidation.style.color = "crimson";
  } else {
    isQuestThree = true;
    questionThreeValidation.textContent = "";
  }
}
function checkQuestionAnswer(text) {
  let num = Number(text.value);
  if (text.value.trim() === "") {
    isQuestAnswer = false;
    questionFourValidation.textContent = "Input is empty ...";
    questionFourValidation.style.color = "crimson";
  } else if (num < 0) {
    isQuestAnswer = false;
    questionFourValidation.textContent = "Value is greater than zero ...";
    questionFourValidation.style.color = "crimson";
  } else if (num === 0) {
    isQuestAnswer = false;
    questionFourValidation.textContent = "Value is greater than zero ...";
    questionFourValidation.style.color = "crimson";
  } else if (num >= 1 && num <= 3) {
    isQuestAnswer = true;
    questionFourValidation.textContent = "";
  } else if (num >= 3) {
    isQuestAnswer = false;
    questionFourValidation.textContent = "Value is between 1 and 3 ...";
    questionFourValidation.style.color = "crimson";
  }
}
////  end of check validation
let subjectValue = "";

let test = {
  subject: "",
  title: "",
  question1: "",
  question2: "",
  question3: "",
  answer: "",
};
let newObject;
let obj = {
  js: [],
  py: [],
  cpp: [],
  ja: [],
  fl: [],
  node: [],
};
//
function selectSubject(sub) {
  switch (sub.subject) {
    case "js": {
      obj.js.push(sub);
      newObject = { ...obj };
      break;
    }
    case "py": {
      obj.py.push(sub);
      newObject = { ...obj };
      break;
    }
    case "cpp": {
      obj.cpp.push(sub);
      newObject = { ...obj };

      break;
    }
    case "ja": {
      obj.ja.push(sub);
      newObject = { ...obj };
      break;
    }
    case "fl": {
      obj.fl.push(sub);
      newObject = { ...obj };
      break;
    }
    case "node": {
      obj.node.push(sub);
      newObject = { ...obj };
      break;
    }
  }
}

// SET LOCALSTORAGE
function setLocalStorage(info) {
  let testJSON = JSON.stringify(info);
  localStorage.setItem("newQuestion", `${testJSON}`);
}

function removeItem(data) {
  if (data.js.length > 0) {
    // // for (let i = 0; i <= data.js.length - 1; i++) {
    //   data.js[i] = "";
    // }
    data.js = [];
    jsLeng.textContent = obj.js.length;
  }
  if (data.py.length > 0) {
    data.py = [];
    pyLeng.textContent = obj.py.length;
  }
  if (data.ja.length > 0) {
    data.ja = [];
    jaLeng.textContent = obj.ja.length;
  }
  if (data.cpp.length > 0) {
    data.cpp = [];
    cppLeng.textContent = obj.cpp.length;
  }
  if (data.fl.length > 0) {
    data.fl = [];
    flLeng.textContent = obj.fl.length;
  }
  if (data.node.length > 0) {
    data.node = [];
    nodeLeng.textContent = obj.node.length;
  }
}

///
function questionNumber(obj) {
  jsLeng.textContent = obj.js.length;
  jaLeng.textContent = obj.ja.length;
  cppLeng.textContent = obj.cpp.length;
  pyLeng.textContent = obj.py.length;
  flLeng.textContent = obj.fl.length;
  nodeLeng.textContent = obj.node.length;
}
//console.log(obj.js[1]);
selectQuestion.addEventListener("change", (e) => {
  subjectValue = e.target.value;
});

///
addNewQuestion.addEventListener("click", () => {
  checkQuestion(userQusetion);
  checkQuestionOne(questionOne);
  checkQuestionTwo(questionTwo);
  checkQuestionThree(questionThree);
  checkQuestionAnswer(rightAnswer);
  if (
    isQuest === true &&
    isQuestAnswer === true &&
    isQuestOne === true &&
    isQuestTwo === true &&
    isQuestThree === true
  ) {
    test = {
      subject: subjectValue ? subjectValue : "js",
      title: userQusetion.value,
      question1: questionOne.value,
      question2: questionTwo.value,
      question3: questionThree.value,
      answer: rightAnswer.value,
    };

    selectSubject(test);
    questionNumber(obj);

    ////
    (userQusetion.value = ""),
      (questionOne.value = ""),
      (questionTwo.value = "");
    questionThree.value = "";
    rightAnswer.value = "";
  }
});

///  ADMIN CANCEL BTN
adminCancelBtn.addEventListener("click", () => {
  adminModal.classList.toggle("adimin--active");
  adminOverlay.style.display = "none";

  removeItem(obj);
  console.log("ddd", obj);
});
///   ADMIN SAVE BTN
adminSaveBtn.addEventListener("click", () => {
  adminModal.classList.toggle("adimin--active");
  adminOverlay.style.display = "none";
});

////   SAVE ALL QUESTION FUNCTION

saveQuestion.addEventListener("click", () => {
  adminModal.classList.toggle("adimin--active");
  adminOverlay.style.display = "block";
  console.log("new", obj);
  setLocalStorage(newObject);
});

let time = new Date();
console.log(time);
let day = time.getDay();
console.log(day);
let month = time.getMonth();
console.log("month", month);
let clock = time.getHours();
console.log("clock", clock);
let minut = time.getMinutes();
console.log("min", minut);
let secund = time.getSeconds();
console.log("secund", secund);
