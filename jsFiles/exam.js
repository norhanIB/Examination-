
let examQuestions = document.querySelector(".qyestions")
let examAnwers = document.querySelector(".answers")
let nxt = document.querySelector(".next")
let prev = document.querySelector(".prev")
let showCount = document.querySelector(".count span")
let timer = document.querySelector(".timer")
let submitBtn = document.querySelector(".submit")
let flag=document.querySelector(".flag")
let filflag=document.querySelector(".fillflag")
let icon=document.querySelector(".icon")

let currentIndex = 0;
let rightAnswers = 0;
let result;
let userAnswer = [];
let questionUser = [];
let flaggedQuestions = [];

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

  //flag func
  icon.addEventListener("click", function () {
    // console.log(questionUser[currentIndex]);
      //  updateFlaggedList(currentIndex)
     toggleFlag(currentIndex);
  });

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
})
// .catch(()=>document.write(`<h1> error loading data</h1>`))

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
    console.log("mom");
    
    checkflag(currentIndex);
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

////flag function
// check if Q in list or not in the array
function toggleFlag(questionx) {
  // console.log(questionId);
    
  filflag.classList.toggle('hidden');
  flag.classList.toggle('hidden');
  const index = flaggedQuestions.indexOf(questionx);
  console.log(index);
  
  if (index > -1) {
    flaggedQuestions.splice(questionx, 1);
  } else {
    flaggedQuestions.push(questionx);
  }
  console.log(flaggedQuestions);//output list
  
  //add to list 
  updateFlaggedList(); 
}

function updateFlaggedList() {
  // console.log(question);
  const flaggedList = document.getElementById('flagged-list');
  flaggedList.innerHTML = '';
// console.log(flaggedList);

  flaggedQuestions.forEach((questionx) => {
  // console.log(question);
    const listItem = document.createElement('li');
    //  console.log(flaggedQuestions[currentIndex]);
    listItem.textContent = `Question ${questionx+1}`;
    listItem.classList.add('listitem')
    ////////////////////
    listItem.addEventListener("click",function() {
      examQuestions.innerHTML = "";
      examAnwers.innerHTML = ""; 
      displayQuestion(questionUser[questionx]) 
      console.log(questionx);
      
    })
   flaggedList.appendChild(listItem);
   console.log(flaggedList);
   
  });
}

 function checkflag(currentIndex) { 
  if (flaggedQuestions.includes(currentIndex)) {
    console.log(currentIndex);
    
    flag.classList.add('hidden'); 
    filflag.classList.remove('hidden');
  } else {
    console.log(currentIndex);
    
    flag.classList.remove('hidden'); 
    filflag.classList.add('hidden');
  }
}
