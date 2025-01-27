
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


//////////////////flag function////////////////////////////////////
icon.addEventListener("click", function(){
  filflag.classList.toggle('hidden');
  flag.classList.toggle('hidden');

})


function updateFlaggedList() {
  const flaggedList = document.getElementById('flagged-list');
  flaggedList.innerHTML = '';
//  console.log(flaggedQuestions);
  flaggedQuestions.forEach(questionId => {
    const listItem = document.createElement('li');
    listItem.textContent = `Question ${questionId}`;
    flaggedList.appendChild(listItem);
  });
}

/////////////////////////////////////////////////////////////////

let currentIndex = 0;
let rightAnwers = 0;
let result;

fetch('../frontend_questions.json')
.then(response => response.json()  )
.then(question => {
  let questionCount = question.length
  //Timer
   countDwon(600, 20);

  // Random
  let questionUser =  suffle(question);
  console.log(questionUser)

  displayQuestion(questionUser[currentIndex]) 
  // updateFlaggedList();
  // updateFlaggedList();
  //next button
  nxt.addEventListener("click", function(){
    console.log("nm");
    
    if(currentIndex < questionCount - 1){
      // let therightAns = question[currentIndex].answer;
      currentIndex++;
      //check answer
      // checkAnswer(therightAns)
      examQuestions.innerHTML = "";
      examAnwers.innerHTML = "";
      displayQuestion(questionUser[currentIndex]);
    }
  })
  //previous button
  prev.addEventListener("click", function(){
    prevButton() 
    displayQuestion(questionUser[currentIndex])
  })
  //submit
  submitExam(questionCount);
})
.catch(()=>document.write(`<h1> error loading data</h1>`))

//previous Button func
function prevButton(){
  if(currentIndex > 0 )
    currentIndex--;
    examQuestions.innerHTML = "";
    examAnwers.innerHTML = "";    
}
//display data (Q&A)
function displayQuestion(questions){
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
      console.log();
      radio.addEventListener('click' ,checkAnswer(questions.id))

      // label
      let label = document.createElement("label")
      label.classList.add("label")
      label.htmlFor = `${index}`
      let labelText = document.createTextNode(`${option}`);      
      label.append(labelText)

      answerDiv.append(radio)
      answerDiv.append(label)

      examAnwers.append(answerDiv)
    });
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
      index++;
    }    // [questions[index], questions[randomIndex]] = [questions[randomIndex], questions[index]];
  }

  return shuffleQuestion;
  
}

//Check Answers
// function checkAnswer(rightAns){
//   console.log(rightAns);
//   let answers = document.getElementsByName("question");
//   let choosenAnswer;
  
//   console.log(answers);
  
  
//   for(let i = 0; i < answers.length; i++){
//     if(answers[i].checked){
//       choosenAnswer = answers[i].dataset.answer;
//     }
//   }
//   console.log(choosenAnswer);
//   if(rightAns === choosenAnswer){
//     rightAnwers++;
//     localStorage.setItem("rightAnswer", rightAnwers)
//   }
// }
function checkAnswer(index , rightAns){
  userAnswer[index] = rightAns;
}
let userAnswer = [];

// function passingExam(count){
//   console.log(count);
//   if(rightAnwers > count /2 && rightAnwers < count){
//     result = `<span>Good Job ${localStorage.getItem("fname")}. You Get ${rightAnwers} From ${count}</span>`;
//   }else if(rightAnwers === count){
//     result = `<span> Perfect ${localStorage.getItem("fname")}. You Get ${rightAnwers} From ${count}</span>`
//   }
// }


// function failedExam(count){
//   if(rightAnwers < count){
//     result =`<p>You Get ${rightAnwers} From ${count} </br>It's Okay. Stupider than you and they arrived, Try Again</p>`
//   }
// }


function submitExam(count){
    submitBtn.addEventListener("click", function(){
      if(rightAnwers > count /2 && rightAnwers < count || rightAnwers === count){
        close(`htmlpages/exam.html`);
        open("../htmlpages/passExam.html"); 
      }else{
        close(`htmlpages/exam.html`);
        open("../htmlpages/failExam.html");
      }
    })
}


