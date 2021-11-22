var startQuizEl = document.querySelector("#start");
var firstQuestionEl = document.querySelector("#question1");
var secondQuestionEl = document.querySelector("#question2");
var thirdQuestionEl = document.querySelector("#question3");
var timerEl = document.querySelector("#countdown");

var startQuiz = function(event) {
  //remove start quiz elements
  var startEl = document.getElementById("quizStart");
  startEl.remove();

  //create h3 element for question 1
 var firstQuestionEl= document.createElement("h3");
 firstQuestionEl.className = "quiz";
 firstQuestionEl.innerText = "What does HTML stand for?";
 document.getElementById("question1").appendChild(firstQuestionEl);

 //create buttons for question 1
 var btn1 = document.createElement("button");
 btn1.innerText = "1. Hot Tamale Mega Love";
 btn1.className ="btn one";
 document.getElementById("question1").appendChild(btn1);

 var btn2 = document.createElement("button");
 btn2.innerText = "2. Hypertext Medium Language";
 btn2.className="btn two";
 document.getElementById("question1").appendChild(btn2);

 var btn3 = document.createElement("button");
 btn3.innerText = "3. How To Meet Ladies";
 btn3.className = "btn three";
 document.getElementById("question1").appendChild(btn3);

 var btn4 = document.createElement("button");
 btn4.innerText = "4. Hypertext Markup Language";
 btn4.className = "btn four";
 document.getElementById("question1").appendChild(btn4);
};



var answerButtonHandler = function(event) {
 //get target element based on answer clicked
 var targetEl = event.target;
 console.log(targetEl);

 //display "wrong" for incorrect answer clicked
if (targetEl.matches(".one", ".two", ".three")) {

  //create "wrong" banner
  var wrongAnswer = document.createElement("h4");
  wrongAnswer.innerText = "WRONG!!";
  document.getElementById("wrong").appendChild(wrongAnswer);
}
else if (targetEl.matches(".four")) {
  //create "right" header
  var rightAnswer = document.createElement("h4");
  rightAnswer.innerText = "CORRECT!!";
  document.getElementById("right").appendChild(rightAnswer);
}
};

firstQuestionEl.addEventListener("click", answerButtonHandler);


// <h3>What is CSS used for?</h3>
//       <button class="btn one" type="submit">1. Make web pages look pretty</button>
//       <button class="btn two" type="submit">2. Gives HTML and JS complex style</button>
//       <button class="btn three" type="submit">3. Both 1 and 2</button> */}


// <h3>What are the three core languages of web pages?</h3>
//       <button class="btn one" type="submit">1. CSS, Python, C#</button>
//       <button class="btn two" type="submit">2. HTML, Java, Ruby</button>
//       <button class="btn three" type="submit">3. HTML, CSS, JavaScript</button>
//       <button class="btn four" type="submit">4. JavaScript, C++, Python</button> */}


// var quizTimer = function() {

// }


//start quiz when button is clicked
startQuizEl.addEventListener("click", startQuiz);

// //start timer when start quiz button is clicked
// startQuizEl.addEventListener("click", quizTimer)