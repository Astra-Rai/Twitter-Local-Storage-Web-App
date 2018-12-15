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
  
  //Remove tweet from list, when a person clicks on the "x", whichi is inside 
  //the <a>, which is inside the <li> element, the fuction removetweet() runs
  tweetList.addEventListener('click', removeTweet);
  
  document.addEventListener('DOMContentLoaded', localStorageOnLoad);
  
  
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
  
  //create a remove button
  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-tweet';
  //text inside 'a ' anchor
  removeBtn.textContent = "X";
  
  const li = document.createElement('li');
  
  //the text inside the li is what will equal to the data in the const tweet
  li.textContent = tweet;
 
  
  //Add the remove button to each tweet
  li.appendChild(removeBtn);
  
  //Add to the list
  tweetList.appendChild(li);
  
  addTweetLocalStorage();
} 
//console.log(li);
 //removes tweet from DOM
//in order to access delegation, pass event here
//targe will prent element pressed, 
function removeTweet(e) {
  if(e.target.classList.contains('remove-tweet')) {
    //where on anchor, one element up to <Li>
    //we want to target theh anchor<a> AND the parent element
    e.target.parentElement.remove();
    /*Test to see if event listener to remove tweety is working?
    console.log('Yes');
  }else{
    console.log('No');
  }
  */
  }
  
  //test, text hello entered in text area, x to delete, returns helloX
  //test works
  //console.log(e.target.parentElement.textContent);
  //pass text we want to remove//
  //create function removeTweetLocalStorage
 
  removeTweetLocalStorage(e.target.parentElement.textContent);
  
  
}
  
  
//add tweet into local storage
//this function will pass the contents of the const tweet
//remember const tweet = document.getElementById('tweet').value;
function addTweetLocalStorage(tweet){
  
  
  
  /*/test to see if this funciton is called after the save tweet button is clicked 
  console.log('Hello from local storage function');
  */
  let tweets = getTweetsFromStorage();
  //test function getTweetsFromStorage() 
  //console.log(tweets);
  //Add the tweet into the array
  tweets.push(tweet);
//Convert tweet array into string and add into localStorage
  localStorage.setItem('tweets', JSON.stringify( tweets ) );

}
function getTweetsFromStorage() {
     let tweets;
     const tweetsLS = localStorage.getItem('tweets');
     // Get the values, if null is returned then we create an empty array
     if(tweetsLS === null) {
          tweets = [];
     } else {
          tweets = JSON.parse( tweetsLS ); 
     }
     return tweets;
}


//we need to read values from application

//Prints local storage tweets on load

function localStorageOnLoad() {
  let tweets = getTweetsFromStorage();
  
  //console.log(tweets);
  
     tweets.forEach(function(tweet) {
          // Create the remove button
          const removeBtn = document.createElement('a');
          removeBtn.classList = 'remove-tweet';
          removeBtn.textContent = 'X';

          // Create an <li> element
          const li = document.createElement('li');
          li.textContent = tweet; 
          
          // Add the remove button to each tweet
          li.appendChild(removeBtn);

          // Add to the list
          tweetList.appendChild(li);
     });
}
    
  
// Removes the tweet from local storage

function removeTweetLocalStorage(tweet){
  //test to make sure functions are properly working, test works
  //console.log(tweet);
  
  let tweets = getTweetsFromStorage();
  
  // Remove the X from the tweet
  //this will remove the last character of the string, tweet.length - 1
  const tweetDelete = tweet.substring( 0, tweet.length -1);
  //test to see if the X at end of string of text is removed
  //test works
  //console.log(tweetDelete);
  
  //Loop through the tweets and remove the twee that's equal
  //tweetList is the tweet from the local storage
  tweets.forEach(function(tweetList) {
    if(tweetDelete === tweetLS){     
            console.log('Yes');    
    }
 });
}