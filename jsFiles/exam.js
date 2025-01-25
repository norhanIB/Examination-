
let examQuestions = document.querySelector(".qyestions")
let examAnwers = document.querySelector(".answers")
let nxt = document.querySelector(".next")
let prev = document.querySelector(".prev")
let showCount = document.querySelector(".count span")

let currentIndex = 0;

fetch('../frontend_questions.json')
.then(response => response.json()  )
.then(question => {
  let questionCount = question.length
  
  displayQuestion(question[currentIndex], questionCount) 

  nxt.addEventListener("click", function(){
    if(currentIndex < questionCount-1){
      currentIndex++;
      examQuestions.innerHTML = "";
      examAnwers.innerHTML = "";
      displayQuestion(question[currentIndex], questionCount)
    }
  })

  prev.addEventListener("click", function(){
    if(currentIndex > 0 )
    currentIndex--;
    examQuestions.innerHTML = "";
      examAnwers.innerHTML = "";
      displayQuestion(question[currentIndex], questionCount)
  })
}).catch(()=>document.write(`<h1> error loading data</h1>`))


function displayQuestion(questions, count){
  showCount.innerHTML = currentIndex+1;
  // if(currentIndex < count){

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

      let label = document.createElement("label")
      label.classList.add("label")
      label.htmlFor = `${index}`
      let labelText = document.createTextNode(`${option}`);      
      label.append(labelText)
      answerDiv.append(radio)
      answerDiv.append(label)

      examAnwers.append(answerDiv)
    });

  // }
}







// function  displayQuestion(question){
//     let quizBlock = document.querySelector(".block")
//      question.forEach(item => {
//         let questionBlock = document.createElement("div")
//           questionBlock.classList.add("question");

//          // Add the question title
//          let questionTitle = document.createElement('div');
//         //  questionTitle.classList.add('question-title');
//          questionTitle.textContent = `Q${item.id}: ${item.question}`;
//          questionBlock.appendChild(questionTitle);

        
         
//          let optionsList = document.createElement('div');
//         //   optionsList.classList.add('options');
//          item.options.forEach(option => {
//             let divAns = document.createElement("div")
//             divAns.innerHTML = "<input type='radio'> "+option+" </input>"
//             console.log(divAns);
            
//             //  let optionItem = document.createElement('input');
//             //  optionItem.textContent = option;
//               optionsList.appendChild(divAns);
//          });

//          questionBlock.appendChild(optionsList);

//          quizBlock.appendChild(questionBlock);
//      });
// }

