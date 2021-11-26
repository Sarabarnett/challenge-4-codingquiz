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

answerButtonHandler1();

};


var answerButtonHandler1 = function(event) {
 //get target element based on answer clicked
 var targetEl = event.target;

 //display "wrong" for incorrect answer clicked
if (targetEl.matches('.one, .two, .three')) {

  //create "wrong" banner
  var wrongAnswer1 = document.createElement("h4");
  wrongAnswer1.innerText = "WRONG!!";
  document.getElementById("wrong").appendChild(wrongAnswer1);
}
else if (targetEl.matches(".four")) {
  //create "right" header
  var rightAnswer1 = document.createElement("h4");
  rightAnswer1.innerText = "CORRECT!!";
  document.getElementById("right").appendChild(rightAnswer1);
}
questionTwo();
};

firstQuestionEl.addEventListener("click", answerButtonHandler1);




var questionTwo = function(event) {

  //set delay for funtion
  var delayQuestion2 = setTimeout(questionTwo, 4000);
  console.log("delay is working");
  

  //remove first question
  var removeEl = document.getElementById("question1");
  removeEl.remove();
  var wrongAnswer1 = document.getElementById("wrong");
  wrongAnswer1.remove();
  var rightAnswer1 = document.getElementById("right");
  rightAnswer1.remove();
  //create h3 element for question 2
 var secondQuestionEl= document.createElement("h3");
 secondQuestionEl.className = "quiz";
 secondQuestionEl.innerText = "What is CSS used for?";
 document.getElementById("question2").appendChild(secondQuestionEl);

 //create buttons for question 2
 var btn1 = document.createElement("button");
 btn1.innerText = "1. Make web pages look pretty";
 btn1.className ="btn one";
 document.getElementById("question2").appendChild(btn1);

 var btn2 = document.createElement("button");
 btn2.innerText = "Gives HTML and JS complex style";
 btn2.className="btn two";
 document.getElementById("question2").appendChild(btn2);

 var btn3 = document.createElement("button");
 btn3.innerText = "Both 1 and 2";
 btn3.className = "btn three";
 document.getElementById("question2").appendChild(btn3);

};

var answerButtonHandler2 = function(event) {
  //get target element based on answer clicked
  var targetEl = event.target;
  console.log(targetEl);
 
  //display "wrong" for incorrect answer clicked
 if (targetEl.matches(".one", ".two")) {
 
   //create "wrong" banner
   var wrongAnswer2 = document.createElement("h4");
   wrongAnswer2.innerText = "WRONG!!";
   document.getElementById("wrong").appendChild(wrongAnswer2);
 }
 else if (targetEl.matches(".three")) {
   //create "right" header
   var rightAnswer2 = document.createElement("h4");
   rightAnswer2.innerText = "CORRECT!!";
   document.getElementById("right").appendChild(rightAnswer2);
 }

 };
 


 secondQuestionEl.addEventListener("click", answerButtonHandler2);


 var questionThree = function(event) {
  //remove start quiz elements
  var removeEl = document.getElementById("question2");
  removeEl.remove();
  wrongAnswer2.remove();
  rightAnswer2.remove();

  //create h3 element for question 1
 var thirdQuestionEl= document.createElement("h3");
 thirdQuestionEl.className = "quiz";
 thirdQuestionEl.innerText = "What are the three core languages of web pages?";
 document.getElementById("question3").appendChild(thirdQuestionEl);

 //create buttons for question 1
 var btn1 = document.createElement("button");
 btn1.innerText = "1. CSS, Python, C#";
 btn1.className ="btn one";
 document.getElementById("question3").appendChild(btn1);

 var btn2 = document.createElement("button");
 btn2.innerText = "2. HTML, Java, Ruby";
 btn2.className="btn two";
 document.getElementById("question3").appendChild(btn2);

 var btn3 = document.createElement("button");
 btn3.innerText = "3. HTML, CSS, JavaScript";
 btn3.className = "btn three";
 document.getElementById("question3").appendChild(btn3);

 var btn4 = document.createElement("button");
 btn4.innerText = "4. JavaScript, C++, Python";
 btn4.className = "btn four";
 document.getElementById("question3").appendChild(btn4);
};



// var quizTimer = function() {

// }


//start quiz when button is clicked
startQuizEl.addEventListener("click", startQuiz);


// //start timer when start quiz button is clicked
// startQuizEl.addEventListener("click", quizTimer)