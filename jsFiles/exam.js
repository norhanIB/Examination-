
let examQuestions = document.querySelector(".qyestions")
let examAnwers = document.querySelector(".answers")
let nxt = document.querySelector(".next")
let prev = document.querySelector(".prev")
let showCount = document.querySelector(".count span")
let timer = document.querySelector(".timer")
let submitBtn = document.querySelector(".submit")

let currentIndex = 0;
let rightAnwers = 0;
let result;

fetch('../frontend_questions.json')
.then(response => response.json()  )
.then(question => {
  let questionCount = question.length
  // passingExam(questionCount);
  displayQuestion(question[currentIndex], questionCount) 
  //next button event
  nxt.addEventListener("click", function(){
    if(currentIndex < questionCount-1){
      let therightAns = question[currentIndex].answer;
      
      currentIndex++;
      //check answer
      checkAnswer(therightAns)
      examQuestions.innerHTML = "";
      examAnwers.innerHTML = "";
      displayQuestion(question[currentIndex], questionCount)
    }
  })
  //previous event
  prev.addEventListener("click", function(){
    prevButton()
    displayQuestion(question[currentIndex], questionCount)
  })
  //Timer
  // countDwon(600, 20);

  //Random
  suffle(question);

  submitExam(questionCount);
}).catch(()=>document.write(`<h1> error loading data</h1>`))

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
      let answerDiv = document.createElement("div")
      answerDiv.classList.add("answers")
      let radio = document.createElement("input")
      radio.classList.add("radio")
      radio.name = "question";
      radio.type = "radio";
      radio.id = `${index}`;
      radio.dataset.answer = `${option}`;

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
  let index = questions.length
  while(index != 0){
    let randomIndex = Math.floor(Math.random() * index);
    index--;
    [questions[index], questions[randomIndex]] = 
    [questions[randomIndex], questions[index]];
  }

  
}

//Check Answers
function checkAnswer(rightAns){
  console.log(rightAns);
  let answers = document.getElementsByName("question");
  let choosenAnswer;
  
  console.log(answers);
  
  
  for(let i = 0; i < answers.length; i++){
    if(answers[i].checked){
      choosenAnswer = answers[i].dataset.answer;
    }
  }
  console.log(choosenAnswer);
  if(rightAns === choosenAnswer){
    rightAnwers++;
  }
}

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
  if(currentIndex = count){
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
}


