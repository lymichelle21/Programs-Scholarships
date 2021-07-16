var cardContainer = $('.card-container');
var submit = $('.submit-btn');


submit.on("click", addOpp);



function addOpp(event) {
event.preventDefault();

var oppName = $('.name').val();

cardContainer.append(
 `<div>
   <p class = "card"> ${oppName} </p>
     <button class = "delete"> Delete! </button>
  </div>`)
}

//How to delete our cards!

// Event Listener #2

cardContainer.on("click", deleteCard);

//Second Event Handler for Deleting Cards

function deleteCard(event) {
//event.target is going to refer to the cards that I am adding in as the user!
//Notice that the class name is the same as my delete button
if (event.target.className === "delete"){
 //This line of code is going to go to my parent node and remove the card!
 event.target.parentNode.remove();
}
}
