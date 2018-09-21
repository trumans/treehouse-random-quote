// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
function makeQuote(quote, source, citation, year) {
  return { 'quote': quote, 'source': source, 'citation': citation, 'year': year };
}

var quotes = [
  makeQuote(
    'Yabba Dabba Doo!',
    'Fred Flinstone',
    'The Flintstones',
    ''
  ),
  makeQuote(
    'Luke, I am your father',
    'not Darth Vader',
    'misquote of Star Wars: Episode V - The Empire Strikes Back',
    ''
  ),
  makeQuote(
    'The coldest winter I ever spent was a summer in San Francisco.',
    'misattributed to Mark Twain',
    '', ''
  ),
  makeQuote(
    'More than anything else, Jonathan Livingston Seagull loved to fly',
    'Richard Bach',
    'Jonathan Livingston Seagull',
    '1970'
  ),
  makeQuote(
    'The answer to the great question of life, the universe and everything is forty-two',
    'Deep Thought',
    'The Hitch Hiker\'s Guide to the Galaxy, Chapter 27',
    '1979'
  ),
  makeQuote(
    'I\'ve developed a new philosophy. I only dread one day at a time',
    'Charlie Brown',
    'Peanuts comic strip',
    'August 8, 1966'
  )
];

// Create an array of background colors
var colors = [
  'Black', 'Blue', 'Brown', 'Gray', 'Indigo', 'Maroon', 'OrangeRed',
  'Red', 'Purple', 'Teal', 'DarkOrange', 'DarkMagenta', 'DarkRed'
];

// Return a random number from 0 but not including 'limit'
function randomIndex(limit) {
  return Math.floor( Math.random() * limit);
}

// Save previous values to avoid repeating
var previousQuote;
var previousColor;

// Create the getRandomQuuote function and name it getRandomQuote
//  Verify this is not the previous quote
function getRandomQuote(array, previous) {
  let newQuote;
  do { newQuote = array[ randomIndex( array.length ) ]; }
    while ( previous !== undefined && previous['quote'] === newQuote['quote'] );
  return newQuote;
}

// Get a random color
//  Verify is is not the previous color
function getRandomColor(previous) {
  let newColor;
  do { newColor = colors[ randomIndex( colors.length ) ]; }
    while ( previous !== undefined && previous === newColor );
  return newColor;
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
  let htmlStr = '';
  let quote = getRandomQuote(quotes, previousQuote);

  // build quote html
  htmlStr += '<p class="quote">' + quote['quote'] + '</p>';
  htmlStr += '<p class="source">' + quote['source'];
  // conditionally include citation and year, if present
  if ( quote['citation'].length !== 0 ) {
    htmlStr += '<span class="citation">' + quote['citation'] + '</span>';
  }
  if ( quote['year'].length !== 0 ) {
    htmlStr += '<span class="year">' + quote['year'] + '</span>';
  }
  htmlStr += '</p>';

  document.getElementById('quote-box').innerHTML = htmlStr;
  previousQuote = quote;

  // change the background color
  let color = getRandomColor(previousColor);
  document.getElementsByTagName('body')[0].style.backgroundColor = color;
  previousColor = color;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
