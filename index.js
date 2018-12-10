//Event Listners

//call the event listner function
eventListeners();


function eventListeners() {
  
//form has id = "form", event listen
//first event listener we need is for when the form is submitted
//when the submit button is clicked, the funciton newTweet will run
//there's for the input element, the type is "submit"  
document.querySelector('#form').addEventListener('submit', newTweet); 

}

//Functions

//function new tweet, we want to prevent the defulat 
function newTweet(e){
	e.preventDefault();
//the defalut behavior is prevented
//type text in text area field, click on submit button
//in the console you should see "Form Submitted"  
  console.log('Form Submitted');
}