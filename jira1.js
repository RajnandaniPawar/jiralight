const addCardBtn = document.querySelector('#addCard');
const todoContainer = document.querySelector('#todo');

addCardBtn.addEventListener('click', addTask);

function addTask(){
    let cardParentDiv = document.createElement('div');
    let card = document.createElement('div');
    card.className = 'card';
    card.innerText = 'Test Card';
    card.setAttribute('contenteditable', 'true');
    cardParentDiv.append(card);
    todoContainer.append(cardParentDiv);
    // pointer will be editable automatically
    card.focus();

    // empty card should be deleted automatically
    //focus lost => blur event 
    card.addEventListener('blur', (event)=>{
        let bluredCard = event.target;
        if(bluredCard. innerText == ""){
            bluredCard.remove();
        }
    });

    // make default test card is empty
    card.addEventListener('click', (event)=>{
        let clickedCard = event.target;
        if(clickedCard.innerText.replaceAll("\n", " ").trim() == 'Test Card Todo Progress Done'){
            clickedCard.innerText = '';
        }
    });

}