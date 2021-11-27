var startQuizEl = document.querySelector("#start");
var firstQuestionEl = document.querySelector("#question1");
var secondQuestionEl = document.querySelector("#question2");
var thirdQuestionEl = document.querySelector("#question3");
var fourthQuestionEl = document.querySelector("#question4");
var timerEl = document.querySelector("#countdown");
var rightAnswer = document.querySelector("#right");
var wrongAnswer = document.querySelector("#wrong");

var startQuiz = function(event) {
  //remove start quiz elements
  var startEl = document.getElementById("quizStart");
  startEl.style.display = "none";

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
  // var wrongAnswer = document.getElementById("wrong");
   wrongAnswer.style.display= "block";
}
else if (targetEl.matches('.four')) {
  // var rightAnswer = document.getElementById("right");
   rightAnswer.style.display= "block";
}
//delay questionTwo function
setTimeout(questionTwo, 2000);
};


firstQuestionEl.addEventListener("click", answerButtonHandler1);


var questionTwo = function(event) {
  //remove first question
  var hideEl = document.getElementById("question1");
  hideEl.style.display = "none";
  // var wrongAnswer = document.getElementById("wrong");
  wrongAnswer.style.display = "none";
  var rightAnswer = document.getElementById("right");
  rightAnswer.style.display = "none";

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
 
  //display "wrong" for incorrect answer clicked
 if (targetEl.matches('.one, .two')) {

  //  var wrongAnswer = document.getElementById("wrong");
   wrongAnswer.style.display= "block";
 }
  //display "right" for correct answer
 else if (targetEl.matches('.three')) {
  //  var rightAnswer = document.getElementById("right");
   rightAnswer.style.display= "block";
 }
 //delay questionThree function
 setTimeout(questionThree, 2000)
 };
 

 secondQuestionEl.addEventListener("click", answerButtonHandler2);


 var questionThree = function(event) {
   //hide question 2
  var hideEl = document.getElementById("question2");
  hideEl.style.display = "none";
  // var wrongAnswer = document.getElementById("wrong");
  wrongAnswer.style.display = "none";
  // var rightAnswer = document.getElementById("right");
  rightAnswer.style.display = "none";

  //create h3 element for question 3
 var thirdQuestionEl= document.createElement("h3");
 thirdQuestionEl.className = "quiz";
 thirdQuestionEl.innerText = "What are the three core languages of web pages?";
 document.getElementById("question3").appendChild(thirdQuestionEl);

 //create buttons for question 3
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

var answerButtonHandler3 = function(event) {
  //get target element based on answer clicked
  var targetEl = event.target;
 
  //display "wrong" for incorrect answer clicked
 if (targetEl.matches('.one, .two .four')) {
  //  var wrongAnswer = document.getElementById("wrong");
   wrongAnswer.style.display= "block";
 }
 else if (targetEl.matches('.three')) {
   var rightAnswer = document.getElementById("right");
   rightAnswer.style.display= "block";
 }
 //delay questionFour function
 setTimeout(questionFour, 2000)
 };

thirdQuestionEl.addEventListener("click", answerButtonHandler3);


var questionFour = function(event) {
     //hide question 
     var hideEl = document.getElementById("question3");
     hideEl.style.display = "none";
    //  var wrongAnswer = document.getElementById("wrong");
     wrongAnswer.style.display = "none";
     var rightAnswer = document.getElementById("right");
     rightAnswer.style.display = "none";

  //create h3 elements for question 4
  var fourthQuestionEl = document.createElement("h3");
  fourthQuestionEl.className = "quiz";
  fourthQuestionEl.innerText = "What class of web-development languages are HTML, CSS and JavaScript?";
  document.getElementById("question4").appendChild(fourthQuestionEl);

  //create buttons for question 4
  var btn1 = document.createElement("button");
  btn1.innerText = "1. Front-End Development";
  btn1.className = "btn one";
  document.getElementById("question4").appendChild(btn1);

  var btn2 = document.createElement("button");
  btn2.innerText = "2. Middle-Side Development";
  btn2.className = "btn two";
  document.getElementById("question4").appendChild(btn2);

  var btn3 = document.createElement("button");
  btn3.innerText = "3. Front-Back Development";
  btn3.className = "btn three";
  document.getElementById("question4").appendChild(btn3);

  var btn4 = document.createElement("button");
  btn4.innerText = "4. Back-End Development";
  btn4.className = "btn four";
  document.getElementById("question4").appendChild(btn4);
 
};

var answerButtonHandler4 = function(event) {
  //get target element based on button clicked
  var targetEl = event.target;

  //display "wrong" for incorrent answer
  if (targetEl.matches('.two .three .four')) {
    // var wrongAnswer = document.getElementById("wrong");
    wrongAnswer.style.display = "block";
  }
  //display "correct" for right answer
  else if (targetEl.matches('.one')) {
    // var rightAnswer = document.getElementById("right");
    rightAnswer.style.display = "block";
  }
};

fourthQuestionEl.addEventListener("click", answerButtonHandler4);

// var quizTimer = function() {

// }


//start quiz when button is clicked
startQuizEl.addEventListener("click", startQuiz);


// //start timer when start quiz button is clicked
// startQuizEl.addEventListener("click", quizTimer)