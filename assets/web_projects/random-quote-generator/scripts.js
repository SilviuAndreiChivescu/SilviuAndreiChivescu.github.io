$( document ).ready(function() {
    myQuote();
});

const quotes = [
  "But man is not made for defeat. A man can be destroyed but not defeated.", 
  "When you reach the end of your rope, tie a knot in it and hang on.",
  "There is nothing permanent except change.",
  "You cannot shake hands with a clenched fist.",
  "Let us sacrifice our today so that our children can have a better tomorrow.",
  "The purpose of our lives is to be happy.",
  "Life is what happens when you’re busy making other plans",
  "Get busy living or get busy dying.",
  "You only live once, but if you do it right, once is enough.",
  "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Money and success don’t change people; they merely amplify what is already there.",
  "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."
];

const colors = [
"#62456a",
"#d75111",
"#e912be",
"#4b372d",
"#0cb866",
"#CD5C5C",
"#DAA520",
"#228B22",
"#B22222",
"#1E90FF",
"#9400D3",
"#DC143C",
"#4B0082"
];

const authorsFull = [
"- Ernest Hemingway",
"- Franklin D. Roosevelt",
"- Heraclitus",
"- Indira Gandhi",
"- A. P. J. Abdul Kalam",
"- Dalai Lama",
"- John Lennon",
"- Stephen King",
"- Mae West",
"- Thomas A. Edison",
"- Albert Einstein",
"- Will Smith",
"- Steve Jobs"
];

var display = document.getElementById("display_text");
var authors = document.getElementById("authors");
function myQuote() {
  let randomColor = Math.floor(Math.random() * colors.length);
  $("body").css("background-color", colors[randomColor]);
  $("#btn").css("background-color", colors[randomColor]);
  $("#display").css("color", colors[randomColor]);
  let random = Math.floor(Math.random() * quotes.length);
  $("#display_text").fadeOut().hide().fadeIn("slow", "linear");
  $("#authors").fadeOut().hide().fadeIn("slow", "linear");
  display.innerText = quotes[random];
  authors.innerText = authorsFull[random];
}