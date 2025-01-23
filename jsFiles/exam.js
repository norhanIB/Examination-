fetch('../frontend_questions.json')
.then(response => response.json()  )
.then(question => {
  displayQuestion(question);
  console.log(question);
}).catch(()=>document.write(`<h1> error loading data</h1>`))


function  displayQuestion(question){
    let quizBlock = document.querySelector(".block")
     question.forEach(item => {
        let questionBlock = document.createElement("div")
          questionBlock.classList.add("question");

         // Add the question title
         let questionTitle = document.createElement('div');
        //  questionTitle.classList.add('question-title');
         questionTitle.textContent = `Q${item.id}: ${item.question}`;
         questionBlock.appendChild(questionTitle);

        
         
         let optionsList = document.createElement('div');
        //   optionsList.classList.add('options');
         item.options.forEach(option => {
            let divAns = document.createElement("div")
            divAns.innerHTML = "<input type='radio'> "+option+" </input>"
            console.log(divAns);
            
            //  let optionItem = document.createElement('input');
            //  optionItem.textContent = option;
              optionsList.appendChild(divAns);
         });

         questionBlock.appendChild(optionsList);

         quizBlock.appendChild(questionBlock);
     });
}

