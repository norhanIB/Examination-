
let examQuestions = document.querySelector(".qyestions")
let examAnwers = document.querySelector(".answers")
let nxt = document.querySelector(".next")
let prev = document.querySelector(".prev")
let showCount = document.querySelector(".count span")
let timer = document.querySelector(".timer")
let submitBtn = document.querySelector(".submit")

let currentIndex = 0;
let rightAnswers = 0;
let result;
let userAnswer = [];
let questionUser = []

fetch('../frontend_questions.json')
.then(response => response.json()  )
.then(question => {
  let questionCount = question.length
  //Timer
  // countDwon(600, 20);

  // Random
  questionUser =  suffle(question);

  //display Question
  displayQuestion(questionUser[currentIndex]) 

  //next button
  nxt.addEventListener("click", function(){
    if(currentIndex < questionCount - 1){
      currentIndex++;
      examQuestions.innerHTML = "";
      examAnwers.innerHTML = "";
      displayQuestion(questionUser[currentIndex] );
    }
  })

  //previous button
  prev.addEventListener("click", function(){
    if(currentIndex > 0 ){
      currentIndex--;
      examQuestions.innerHTML = "";
      examAnwers.innerHTML = "";  
      displayQuestion(questionUser[currentIndex])
      console.log(userAnswer);
      
    }
  })
  
  //submit
  submitExam(questionCount);
}).catch(()=>document.write(`<h1> error loading data</h1>`))

//display data (Q&A)
function displayQuestion(questions ){
   showCount.innerHTML = currentIndex+1;
    //question
    let questionTitle = document.createElement("h2")
    let questionText = document.createTextNode(questions.question)
    questionTitle.append(questionText)
    examQuestions.append(questionTitle)
    //answer
    questions.options.forEach((option, index) => {
      //div parent
      let answerDiv = document.createElement("div")
      answerDiv.classList.add("answers")
      // input radio
      let radio = document.createElement("input")
      radio.classList.add("radio")
      radio.name = "question";
      radio.type = "radio";
      radio.id = `${index}`;
      radio.dataset.answer = `${option}`;
  
      // label
      let label = document.createElement("label")
      label.classList.add("label")
      label.htmlFor = `${index}`
      let labelText = document.createTextNode(`${option}`);      
      label.append(labelText);
      console.log(radio.dataset.answer)
      console.log(index)
      radio.setAttribute('onclick' , `saveAnswer(${currentIndex} , '${radio.dataset.answer}')`);
      
      answerDiv.append(radio)
      answerDiv.append(label)
      examAnwers.append(answerDiv);

      if(userAnswer[currentIndex] === option){
        radio.checked = true;
      }
    });
}
//Calc Right Answers
function calculate () {
  for (let i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] === questionUser[i].answer) {
      console.log(userAnswer[i] === questionUser[i].answer);
      rightAnswers++
    }
  }
  localStorage.setItem('grad' , (rightAnswers / questionUser.length * 100))
}

//Timer
function countDwon(duration, count){
  if(currentIndex < count){
    let minutes;
    let seconds;
    timerInterval = setInterval(() => {
      minutes = parseInt(duration / 60);
      seconds = parseInt(duration % 60);
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      timer.innerHTML = `${minutes}:${seconds}`;

      if(--duration < 0 ){
        clearInterval(timerInterval);
        close(`htmlpages/exam.html`);
        open("../htmlpages/timeout.html");
      }
    }, 1000);
  }
}

//Randomization
function suffle(questions){
  let index = 0;
  let shuffleQuestion = [];
  let randomeIndexCheck = new Set();
  while(index < questions.length){
    let randomIndex = Math.floor(Math.random() * questions.length);
    if(!randomeIndexCheck.has(randomIndex)){
      shuffleQuestion.push(questions[randomIndex]) 
      randomeIndexCheck.add(randomIndex);
      console.log(randomIndex);
      
      index++;
    }  
  }
  return shuffleQuestion;
}
//Save Answers
function saveAnswer(index , answer){
  userAnswer[index] = answer;
}

//Submit Button
function submitExam(count){
    submitBtn.addEventListener("click", function(){
    calculate();
    if(rightAnswers > count /2 ){
      close(`htmlpages/exam.html`);
      open("../htmlpages/passExam.html"); 
    }else{
      close(`htmlpages/exam.html`);
      open("../htmlpages/failExam.html");
    }
  })
}
//&& rightAnswers < count || rightAnswers === count

