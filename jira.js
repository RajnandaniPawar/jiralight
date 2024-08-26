const addCardBtn = document.querySelector('#addCard');
const toDoContainer = document.querySelector('#todo');

addCardBtn.addEventListener('click', addTask);

function addTask(){
    let card = document.createElement('div');
    card.className = 'card';
    card.innerText = "Test Card";
    card.setAttribute('contenteditable', 'true');
    toDoContainer.append(card);
    // pointer will be editable automatically
    card.focus();


    //problem 1 empty card should be deleted automactically
    // focus lost => blue event
    
    card.addEventListener('blur', (event)=>{
       let blurredCard = event.target;
       if(blurredCard.innerText.trim() == ""){
          blurredCard.remove();
       }
    });

    //make default test empty
    card.addEventListener('click', (event)=>{
        let clickedCard = event.target;
         if(clickedCard.innerText == "Test Card"){
            clickedCard.innerText = "";
         }
    });

    let selector = document.createElement("select");
   //  selector.innerHTML = 
   //  `<option value='todo'>Todo</option>
   //    <option value='progress'>Progress</option>
   //    <option value='done'>Done</option>`;

   let option1 = document.createElement('option');
   option1.value = 'todo';
   option1.innerText = ' Todo';

   selector.append(option1);

   let option2 = document.createElement('option');
   option2.value = 'progress';
   option2.innerText = 'Progress';
   selector.append(option2);

   let option3 = document.createElement('option');
   option3.value = 'done';
   option3.innerText = 'Done';
   selector.append(option3);

   card.append(selector);

   //selector will change something in dropdown = change event

   selector.addEventListener('change', (event)=>{
      let selectedOption = event.target.value;
      let selectedContainer = document.querySelector(`#${selectedOption}`);
      selectedContainer.append(card);
   });

   


}