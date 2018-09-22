// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
let quotes = [
  {
    'quote': 'Yabba Dabba Doo!',
    'source': 'Fred Flinstone',
    'citation': 'The Flintstones',
  },
  {
    'quote': 'Scooby-Dooby-Doo!',
    'source': 'Scooby-Doo',
    'tags': []
  },
  {
    'quote': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'source': 'Cicero',
    'citation': 'De finibus bonorum et malorum',
    'tags': ['p', 'l', 'a', 'c', 'e', 'h', 'o', 'l', 'd', 'e', 'r']
  },
  {
    'quote': 'Look both ways before crossing the street',
    'source': 'our parents',
    'tags': ['parent wisdom']
  },
  {
    'quote': 'Luke, I am your father',
    'source': 'not Darth Vader',
    'citation': 'misquote of Star Wars: Episode V - The Empire Strikes Back',
    'tags': ['misquotes', 'movie']
  },
  {
    'quote': 'The coldest winter I ever spent was a summer in San Francisco.',
    'source': 'misattributed to Mark Twain',
    'tags': ['misquotes', 'humor']
  },
  {
    'quote': 'More than anything else, Jonathan Livingston Seagull loved to fly.',
    'source': 'Richard Bach',
    'citation': 'Jonathan Livingston Seagull',
    'year': '1970',
    'tags': ['book']
  },
  {
    'quote': 'The answer to the great question of life, the universe and everything is forty-two.',
    'source': 'Deep Thought',
    'citation': 'The Hitchhiker\'s Guide to the Galaxy, Chapter 27',
    'year': '1979',
    'tags': ['humor', 'book']
  },
  {
    'quote': 'I\'ve developed a new philosophy. I only dread one day at a time.',
    'source': 'Charlie Brown',
    'citation': 'Peanuts comic strip',
    'year': 'August 8, 1966',
    'tags': ['humor', 'comic strip']
  }
];


// Create a list of background colors
let colors = [
  'Black', 'Blue', 'Brown', 'Gray', 'Indigo', 'Maroon', 'OrangeRed',
  'Red', 'Purple', 'Teal', 'DarkOrange', 'DarkMagenta', 'DarkRed'
];

let autoRepeatCycle = 10000;

let previousQuote;
let previousColor;
let autoRepeat;

// Return a random number from 0 but not including 'limit'
function randomIndex(limit) {
  return Math.floor( Math.random() * limit);
}

// Create the getRandomQuuote function and name it getRandomQuote
//  Don't repeat the immediately previous quote
function getRandomQuote(array, previous) {
  let newQuote;
  do { newQuote = array[ randomIndex( array.length ) ]; }
    while ( previous === newQuote );
  return newQuote;
}

// Get a random color without repeating the immeidately previous color
function getRandomColor(previous) {
  let newColor;
  do { newColor = colors[ randomIndex( colors.length ) ]; }
    while ( previous === newColor );
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
  if ( quote['citation'] !== undefined ) {
    htmlStr += '<span class="citation">' + quote['citation'] + '</span>';
  }
  if ( quote['year'] !== undefined ) {
    htmlStr += '<span class="year">' + quote['year'] + '</span>';
  }
  htmlStr += '</p>';
  if ( quote['tags'] !== undefined && quote['tags'].length ) {
    htmlStr += '<ul class="tag">';
    for (let i = 0; i < quote['tags'].length; i++ ) {
      htmlStr += '<li class="tag">' + quote['tags'][i] + '</li>';
    }
    htmlStr += '</ul>';
  }

  document.getElementById('quote-box').innerHTML = htmlStr;
  previousQuote = quote;

  // change the background color
  let color = getRandomColor(previousColor);
  document.getElementsByTagName('body')[0].style.backgroundColor = color;
  previousColor = color;

  // reset the auto repeat timer
  clearTimeout(autoRepeat);
  autoRepeat = setTimeout(printQuote, autoRepeatCycle);
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// launch first automatic cycle for another quote
autoRepeat = setTimeout(printQuote, autoRepeatCycle);
