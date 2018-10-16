

  
//Event Listners

eventListeners();


function eventListeners() {

document.querySelector('#form').addEventListener('submit', newTweet); 

}

//Functions

function newTweet(e){
	e.preventDefault();
  console.log('Form Submitted')
}