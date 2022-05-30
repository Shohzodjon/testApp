///   TEST RENDER

const testListWrapp = document.querySelector("#test--list");
const allInput = document.querySelectorAll(".target--element");
const correctAnswer = document.querySelector(".correct--answer");
const incorrectAnswer = document.querySelector(".incorrect--answer");
const resultBox = document.querySelector(".test--result");
const overlay = document.querySelector(".overlay");
const finishBtn = document.querySelector(".test--finish");
const timeContent = document.querySelector(".show--timeContent");
// CHOOSE NAVBAR LIST

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
    console.log("click");
    for (let i = 0; i <= activeSpan1.length - 1; i++) {
      activeSpan1[i].style.display = "none";
    }
    let li = e.target.closest(".navbar--li");
    li.childNodes[3].style.display = "none";
    li.childNodes[3].style.background = "#4c6fff";
  }
});

// for (let i = 0; i <= navList.length - 1; i++) {
//   let span = navList[i].childNodes[3];
//   console.log(navList[i].childNodes);
//   console.log("span", span);
// }
///
// SET TIME
let time = 5;
let setTime;
let minuTimes = time * 60 * 60;
secondTime = minuTimes / 60;
let sec = 0;
let min = 0;
function startTime() {
  setTime = setInterval(function () {
    if (secondTime <= 0) {
      clearInterval(setTime);
      showModal(resultBox, overlay);
    } else {
      secondTime--;
      let sec = Math.floor(secondTime % 60);
      let min = Math.floor(secondTime / 60);

      if (sec >= 0 && sec <= 9) {
      } else {
        timeContent.textContent = `0${min}:${sec}`;
      }
    }
  }, 1000);
}

// END OF SET TIME

let newInfo = localStorage.getItem("newJavaScript");
let newInfoOb = JSON.parse(newInfo);
console.log("fromLocal", newInfoOb);
let newQuestionList;

//
const testLists = [
  {
    title: "JavaScript tilni fremworkni toping",
    question1: "React",
    question2: "Spring",
    question3: ".NET",
    answer: "1",
  },

  {
    title: "JavaScript qanday til",
    question1: "static",
    question2: "inlis tili",
    question3: "dinamic",
    answer: "3",
  },
];

newQuestionList = testLists.concat(newInfoOb);

/////   RANDOM QUESTION
/*
function randomArr(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
*/
let showResultList;
const showTestResult = document.querySelector(".show--test--result");
// Used like so
///  END OF RANDOM QUESTION ///
/// SELECT DOM ELEMENT
const questionTitle = document.querySelector(".question--title");
const labeOne = document.querySelector("#label--one");
const labeTwo = document.querySelector("#label--two");
const labeThree = document.querySelector("#label--three");
const testPrevBtn = document.querySelector(".test--prevBtn");
const testNextBtn = document.querySelector(".test--nextBtn");
/// END OF SELECT DOM ELEMENT
let resultArr = [];
let num = 1;
let score = 0;
questionTitle.textContent = newQuestionList[0].title;
labeOne.textContent = newQuestionList[0].question1;
labeTwo.textContent = newQuestionList[0].question2;
labeThree.textContent = newQuestionList[0].question3;

function changeQuestion(num) {
  questionTitle.textContent = newQuestionList[num].title;
  labeOne.textContent = newQuestionList[num].question1;
  labeTwo.textContent = newQuestionList[num].question2;
  labeThree.textContent = newQuestionList[num].question3;
}
function changeQuestionPrev(num) {
  questionTitle.textContent = newQuestionList[num].title;
  labeOne.textContent = newQuestionList[num].question1;
  labeTwo.textContent = newQuestionList[num].question2;
  labeThree.textContent = newQuestionList[num].question3;
}

//
function showModal(element, over) {
  element.classList.add("show--modal");
  over.style.display = "block";
}

// FINISH BTN
finishBtn.addEventListener("click", () => {
  showModal(resultBox, overlay);
  clearInterval(setTime);
});
// END OF FINISH BTN
incorrectAnswer.textContent = newQuestionList.length;
///
testNextBtn.addEventListener("click", () => {
  if (num === newQuestionList.length - 1) {
    testNextBtn.disabled = true;
    testNextBtn.classList.toggle("test--disable");
  }
  changeQuestion(num);
  num++;

  if (num >= 0) {
    testPrevBtn.classList.add("active--btn");
    testPrevBtn.disabled = false;
    allInput.forEach((i) => {
      i.checked = false;
    });
  }
});
/// CHOSE RIGHT ANSWER
allInput.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.value === newQuestionList[num - 1].answer) {
      score++;
      // console.log("score", score);
      correctAnswer.textContent = score;
    }
    incorrectAnswer.textContent = newQuestionList.length;
  });
});

//   END OF RIGHT ANSWER
testPrevBtn.addEventListener("click", () => {
  --num;

  testNextBtn.disabled = false;
  testNextBtn.classList.remove("test--disable");
  if (num <= 0) {
    testPrevBtn.disabled = true;
    testPrevBtn.classList.toggle("active--btn");
  }
  changeQuestionPrev(num);
});
///  TIME FUNCTION

//
window.addEventListener("load", () => {
  setTimeout(() => {
    startTime();
  }, 500);
});

/*const testLists = [
  {
    title: "Ozbekiston poytaxti qaysi shahar",
    question1: "Samarqand",
    question2: "Washington",
    question3: "Toshkent",
    answer: "3",
  },
  {
    title: "JavaScript tilni fremworkni toping",
    question1: "React",
    question2: "Spring",
    question3: ".NET",
    answer: "1",
  },
  {
    title: "Silicom valley qaysi mamlakatda",
    question1: "Ozbekiston",
    question2: "London",
    question3: "USA",
    answer: "3",
  },
  {
    title: "Suniy intelek uchun qaysi datrulash tili ishlatiladi ",
    question1: "JavaScript",
    question2: "Java",
    question3: "Python",
    answer: "3",
  },
  {
    title: "JavaScript qanday til",
    question1: "static",
    question2: "inlis tili",
    question3: "dinamic",
    answer: "3",
  },
  {
    title: "JavaScriptda nechta malumot turlari bor",
    question1: "4ta",
    question2: "5ta",
    question3: "8ta",
    answer: "3",
  },

  {
    title: `ContextAPI nima "last question"`,
    question1: "Backenddan keladigan malumotlar ",
    question2: "Statemenejment",
    question3: "Shunchaki atama",
    answer: "2",
  },
];*/

// for (let j = 0; j <= allInput.length - 1; j++) {
//   if (allInput[j].checked === true) {
//     resultArr.push(newQuestionList[num]);

//     for (let i = 0; i <= resultArr.length - 1; i++) {
//       if (allInput[i].value === resultArr[i].answer) {
//         showResultList = `
//            <ul style="background:red; opacity:0.4">
//              <li>${resultArr[i].title}</li>
//              <li>${resultArr[i].question1}</li>
//              <li>${resultArr[i].question2}</li>
//              <li>${resultArr[i].question3}</li>
//            </ul>
//        `;
//       } else {
//         if (allInput[i].value === resultArr[i].answer) {
//           showResultList = `
//              <ul>
//                <li>${resultArr[i].title}</li>
//                <li>${resultArr[i].question1}</li>
//                <li>${resultArr[i].question2}</li>
//                <li>${resultArr[i].question3}</li>
//              </ul>
//          `;
//         }
//       }
//       console.log("resultArr", resultArr);

//       showTestResult.insertAdjacentHTML("beforeEnd", showResultList);
//     }
//   }
