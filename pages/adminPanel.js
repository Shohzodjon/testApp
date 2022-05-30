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
let js = [],
  py = [],
  cpp = [],
  ja = [],
  fl = [],
  node = [];
//
function selectSubject(sub) {
  switch (sub.subject) {
    case "js": {
      js.push(sub);
      console.log("pUSH");
      break;
    }
    case "py": {
      py.push(sub);
      console.log("Python");
      break;
    }
    case "cpp": {
      cpp.push(sub);
      console.log("C++");
      break;
    }
    case "ja": {
      ja.push(sub);
      console.log("Java");
      break;
    }
    case "fl": {
      fl.push(sub);
      console.log("Flutter");
      break;
    }
    case "node": {
      node.push(sub);
      console.log("Node js");
      break;
    }
  }
}
// GET DATA FROM LOCALSTORAGE
let jsData = localStorage.getItem("newJavaScript");
let pyData = localStorage.getItem("newPython");
let cppData = localStorage.getItem("newCplus");
let flData = localStorage.getItem("newFlutter");
let nodeData = localStorage.getItem("newNodeJs");
let jaData = localStorage.getItem("newJava");
///  Parse DATA

// SET LOCALSTORAGE
function setLocalStorageJS(js) {
  if (jsData.length > 0) {
    let parseJsData = JSON.parse(jsData);
    let concatJsData = parseJsData.concat(js);
    let stringJs = JSON.stringify(concatJsData);
    localStorage.setItem("newJavaScript", `${stringJs}`);
  } else {
    let jsTest = JSON.stringify(js);
    localStorage.setItem("newJavaScript", `${jsTest}`);
  }
}
///
function setLocalStoragePY(py) {
  if (pyData.length > 0) {
    let parsePyData = JSON.parse(pyData);
    let concatPyData = parsePyData.concat(py);
    let stringPy = JSON.stringify(concatPyData);
    localStorage.setItem("newPython", `${stringPy}`);
  } else {
    let pyTest = JSON.stringify(py);
    localStorage.setItem("newPython", `${pyTest}`);
  }
}
//
function setLocalStorageCPP(cpp) {
  if (cppData.length > 0) {
    let parseCppData = JSON.parse(cppData);
    let concatCppData = parseCppData.concat(cpp);
    let stringCpp = JSON.stringify(concatCppData);
    localStorage.setItem("newCplus", `${stringCpp}`);
  } else {
    let cppTest = JSON.stringify(cpp);
    localStorage.setItem("newCplus", `${cppTest}`);
  }
}
//
function setLocalStorageJA(ja) {
  if (jaData.length > 0) {
    let parseJaData = JSON.parse(jaData);
    let concatJaData = parseJaData.concat(ja);
    let stringJa = JSON.stringify(concatJaData);
    localStorage.setItem("newJava", `${stringJa}`);
  } else {
    let jaTest = JSON.stringify(ja);
    localStorage.setItem("newJava", `${jaTest}`);
  }
}
//
function setLocalStorageFL(fl) {
  if (flData.length > 0) {
    let parseFlData = JSON.parse(flData);
    let concatFlData = parseFlData.concat(fl);
    let stringFl = JSON.stringify(concatFlData);
    localStorage.setItem("newFlutter", `${stringFl}`);
  } else {
    let flTest = JSON.stringify(fl);
    localStorage.setItem("newFlutter", `${flTest}`);
  }
}
//
function setLocalStorageNode(node) {
  if (nodeData.length > 0) {
    let parseNodeData = JSON.parse(nodeData);
    let concatNodeData = parseNodeData.concat(node);
    let stringNode = JSON.stringify(concatNodeData);
    localStorage.setItem("newNodeJs", `${stringNode}`);
  } else {
    let nodeTest = JSON.stringify(node);
    localStorage.setItem("newNodeJs", `${nodeTest}`);
  }
}
function setLocalStorage(js, py, cpp, fl, node, ja) {
  let jsTest = JSON.stringify(js);
  localStorage.setItem("newJavaScript", `${jsTest}`);
  let pyTest = JSON.stringify(py);
  localStorage.setItem("newPython", `${pyTest}`);
  let cppTest = JSON.stringify(cpp);
  localStorage.setItem("newCplus", `${cppTest}`);
  let flTest = JSON.stringify(fl);
  localStorage.setItem("newFlutter", `${flTest}`);
  let nodeTest = JSON.stringify(node);
  localStorage.setItem("newNodeJs", `${nodeTest}`);
  let jaTest = JSON.stringify(ja);
  localStorage.setItem("newJava", jaTest);
}

function removeItem(js, py, ja, cpp, node, fl) {
  if (js.length > 0) {
    js = [];
    jsLeng.textContent = js.length;
  }
  if (py.length > 0) {
    py = [];
    pyLeng.textContent = py.length;
  }
  if (ja.length > 0) {
    ja = [];
    jaLeng.textContent = ja.length;
  }
  if (cpp.length > 0) {
    cpp = [];
    cppLeng.textContent = cpp.length;
  }
  if (fl.length > 0) {
    fl = [];
    flLeng.textContent = fl.length;
  }
  if (node.length > 0) {
    node = [];
    nodeLeng.textContent = node.length;
  }
}

///
function questionNumber(js, ja, cpp, py, fl, node) {
  jsLeng.textContent = js.length;
  jaLeng.textContent = ja.length;
  cppLeng.textContent = cpp.length;
  pyLeng.textContent = py.length;
  flLeng.textContent = fl.length;
  nodeLeng.textContent = node.length;
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
    questionNumber(js, ja, cpp, py, fl, node);

    //

    ////
    (userQusetion.value = ""),
      (questionOne.value = ""),
      (questionTwo.value = "");
    questionThree.value = "";
    rightAnswer.value = "";
  }
});
// SAVE QUESTION
saveQuestion.addEventListener("click", () => {
  adminModal.classList.toggle("adimin--active");
  adminOverlay.style.display = "block";
});

///  ADMIN CANCEL BTN
adminCancelBtn.addEventListener("click", () => {
  adminModal.classList.toggle("adimin--active");
  adminOverlay.style.display = "none";

  removeItem(js, py, ja, cpp, node, fl);
});

///   ADMIN SAVE BTN
adminSaveBtn.addEventListener("click", () => {
  setLocalStorageJS(js);
  setLocalStoragePY(py);
  setLocalStorageJA(ja);
  setLocalStorageFL(fl);
  setLocalStorageCPP(cpp);
  setLocalStorageNode(node);
  removeItem(js, py, ja, cpp, node, fl);
  adminModal.classList.toggle("adimin--active");
  adminOverlay.style.display = "none";
  //
  jsLeng.textContent = 0;
  jaLeng.textContent = 0;
  cppLeng.textContent = 0;
  pyLeng.textContent = 0;
  flLeng.textContent = 0;
  nodeLeng.textContent = 0;
});

const newquestionList = document.querySelector(".newquestion--list--inside");
const showNewquestionList = document.querySelector(".show--newquestion--list");
const newqusetionClose = document.querySelector("#newqusetion--close");
const showTest = document.querySelector(".show--test");
const checkEmpty = document.querySelector(".check--empty");

showTest.addEventListener("click", () => {
  showNewquestionList.style.display = "block";
  checkArrayInfo(js, cpp, py, ja, node, py, fl);
});

newqusetionClose.addEventListener("click", () => {
  showNewquestionList.style.display = "none";
});

function checkArrayInfo(js, cpp, fl, py, ja, node) {
  if (
    js.length === 0 &&
    cpp.length === 0 &&
    fl.length === 0 &&
    py.length === 0 &&
    ja.length === 0 &&
    node.length === 0
  ) {
    checkEmpty.textContent = "Yangi testlar qoshilmagan";
  } else {
    ///  JAVASCRIPT
    for (let i = 0; i <= js.length - 1; i++) {
      let list = `
  <div>
  <ul>
              <li>
                <label for="user--question">JavaScript</label>
              </li>
              <li><p>${js[i].title}</p></li>
            </ul>
  
            <ul>
              <li>Variantlar</li>
              <li>
                <input type="radio" name="add" />
                <p>${js[i].question1}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${js[i].question2}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${js[i].question3}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${js[i].answer} </p>
              </li>
              <li>
                <hr />
              </li>
            </ul>
  
  </div>
  `;
      newquestionList.insertAdjacentHTML("beforeend", list);
    }

    ///  C++;
    for (let i = 0; i <= cpp.length - 1; i++) {
      let list = `
  <div>
  <ul>
              <li>
                <label for="user--question">C++</label>
              </li>
              <li><p>${cpp[i].title}</p></li>
            </ul>
  
            <ul>
              <li>Variantlar</li>
              <li>
                <input type="radio" name="add" />
                <p>${cpp[i].question1}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${cpp[i].question2}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${cpp[i].question3}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${cpp[i].answer} </p>
              </li>
              <li>
                <hr />
              </li>
            </ul>
  
  </div>
  `;
      newquestionList.insertAdjacentHTML("beforeend", list);
    }

    //  FLUTTER
    for (let i = 0; i <= fl.length - 1; i++) {
      let list = `
  <div>
  <ul>
              <li>
                <label for="user--question">Flutter</label>
              </li>
              <li><p>${fl[i].title}</p></li>
            </ul>
  
            <ul>
              <li>Variantlar</li>
              <li>
                <input type="radio" name="add" />
                <p>${fl[i].question1}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${fl[i].question2}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${fl[i].question3}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${fl[i].answer} lore</p>
              </li>
              <li>
                <hr />
              </li>
            </ul>
  
  </div>
  `;
      newquestionList.insertAdjacentHTML("beforeend", list);
    }

    // NODE JS
    for (let i = 0; i <= node.length - 1; i++) {
      let list = `
  <div>
  <ul>
              <li>
                <label for="user--question">Node JS</label>
              </li>
              <li><p>${node[i].title}</p></li>
            </ul>
  
            <ul>
              <li>Variantlar</li>
              <li>
                <input type="radio" name="add" />
                <p>${node[i].question1}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${node[i].question2}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${node[i].question3}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${node[i].answer} </p>
              </li>
              <li>
                <hr />
              </li>
            </ul>
  
  </div>
  `;
      newquestionList.insertAdjacentHTML("beforeend", list);
    }
    // JAVA
    for (let i = 0; i <= ja.length - 1; i++) {
      let list = `
  <div>
  <ul>
              <li>
                <label for="user--question">Java</label>
              </li>
              <li><p>${ja[i].title}</p></li>
            </ul>
  
            <ul>
              <li>Variantlar</li>
              <li>
                <input type="radio" name="add" />
                <p>${ja[i].question1}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${ja[i].question2}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${ja[i].question3}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${ja[i].answer} </p>
              </li>
              <li>
                <hr />
              </li>
            </ul>
  
  </div>
  `;
      newquestionList.insertAdjacentHTML("beforeend", list);
    }

    //  PYTHON
    for (let i = 0; i <= py.length - 1; i++) {
      let list = `
  <div>
  <ul>
              <li>
                <label for="user--question">Python</label>
              </li>
              <li><p>${py[i].title}</p></li>
            </ul>
  
            <ul>
              <li>Variantlar</li>
              <li>
                <input type="radio" name="add" />
                <p>${py[i].question1}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${py[i].question2}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${py[i].question3}</p>
              </li>
              <li>
                <input type="radio" name="add" />
                <p>${py[i].answer} </p>
              </li>
              <li>
                <hr />
              </li>
            </ul>
  
  </div>
  `;
      newquestionList.insertAdjacentHTML("beforeend", list);
    }
  }
}

function allJsQuestion(js) {
  for (let i = 0; i <= js.length - 1; i++) {
    let list = `
<div>
<ul>
            <li>
              <label for="user--question">JavaScript</label>
            </li>
            <li><p>${js[i].title}</p></li>
          </ul>

          <ul>
            <li>Variantlar</li>
            <li>
              <input type="radio" name="add" />
              <p>${js[i].question1}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${js[i].question2}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${js[i].question3}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${js[i].answer} lore</p>
            </li>
            <li>
              <hr />
            </li>
          </ul>

</div>
`;
    newquestionList.insertAdjacentHTML("beforeend", list);
  }
}
function allCppQuestion(cpp) {
  for (let i = 0; i <= cpp.length - 1; i++) {
    let list = `
<div>
<ul>
            <li>
              <label for="user--question">C++</label>
            </li>
            <li><p>${cpp[i].title}</p></li>
          </ul>

          <ul>
            <li>Variantlar</li>
            <li>
              <input type="radio" name="add" />
              <p>${cpp[i].question1}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${cpp[i].question2}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${cpp[i].question3}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${cpp[i].answer} lore</p>
            </li>
            <li>
              <hr />
            </li>
          </ul>

</div>
`;
    newquestionList.insertAdjacentHTML("beforeend", list);
  }
}

function allFlQuestion(fl) {
  for (let i = 0; i <= fl.length - 1; i++) {
    let list = `
<div>
<ul>
            <li>
              <label for="user--question">Flutter</label>
            </li>
            <li><p>${fl[i].title}</p></li>
          </ul>

          <ul>
            <li>Variantlar</li>
            <li>
              <input type="radio" name="add" />
              <p>${fl[i].question1}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${fl[i].question2}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${fl[i].question3}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${fl[i].answer} lore</p>
            </li>
            <li>
              <hr />
            </li>
          </ul>

</div>
`;
    newquestionList.insertAdjacentHTML("beforeend", list);
  }
}

function allNodeQuestion(node) {
  for (let i = 0; i <= node.length - 1; i++) {
    let list = `
<div>
<ul>
            <li>
              <label for="user--question">Node JS</label>
            </li>
            <li><p>${node[i].title}</p></li>
          </ul>

          <ul>
            <li>Variantlar</li>
            <li>
              <input type="radio" name="add" />
              <p>${node[i].question1}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${node[i].question2}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${node[i].question3}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${node[i].answer} lore</p>
            </li>
            <li>
              <hr />
            </li>
          </ul>

</div>
`;
    newquestionList.insertAdjacentHTML("beforeend", list);
  }
}

function allJaQuestion(ja) {
  for (let i = 0; i <= ja.length - 1; i++) {
    let list = `
<div>
<ul>
            <li>
              <label for="user--question">Java</label>
            </li>
            <li><p>${ja[i].title}</p></li>
          </ul>

          <ul>
            <li>Variantlar</li>
            <li>
              <input type="radio" name="add" />
              <p>${ja[i].question1}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${ja[i].question2}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${ja[i].question3}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${ja[i].answer} lore</p>
            </li>
            <li>
              <hr />
            </li>
          </ul>

</div>
`;
    newquestionList.insertAdjacentHTML("beforeend", list);
  }
}
function allPyQuestion(py) {
  for (let i = 0; i <= py.length - 1; i++) {
    let list = `
<div>
<ul>
            <li>
              <label for="user--question">Python</label>
            </li>
            <li><p>${py[i].title}</p></li>
          </ul>

          <ul>
            <li>Variantlar</li>
            <li>
              <input type="radio" name="add" />
              <p>${py[i].question1}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${py[i].question2}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${py[i].question3}</p>
            </li>
            <li>
              <input type="radio" name="add" />
              <p>${py[i].answer} lore</p>
            </li>
            <li>
              <hr />
            </li>
          </ul>

</div>
`;
    newquestionList.insertAdjacentHTML("beforeend", list);
  }
}
