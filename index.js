//variables
const tweetList = document.getElementById('tweet-list');

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
//removed, version 3 console.log('Form Submitted');
  //Read the textarea value, textarea has id="tweet"
  const tweet = document.getElementById('tweet').value;
  //text console.log()//this should print whatever text thta is in textarea, to console, once submit button is clicked is in the console
  //create an li element, this is from the text that is entered in the text area
  const li = document.createElement('li');
  
  //the text inside the li is what will equal to the data in the const tweet
  li.textContent = tweet;
  //we have to grab the tweet list, remember th id = "tweet-list"
  tweetList.appendChild(li);

}