const quotes = [
  {
    quote: 'Love the life you live. Live the life you love.',
    author: 'Bob Marley',
  },
  {
    quote:
      "The bird fights its way out of the egg. The egg is the world. Who would be born must first destroy a world. The bird flies to God. That God's name is Abraxas.​​",
    author: 'Hermann Hesse',
  },
  {
    quote: 'In order to succeed, we must first believe that we can.',
    author: 'Nikos Kazantzakis',
  },
  {
    quote: 'The greatest risk is the risk of riskless living.',
    author: 'Stephen Covey',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    quote:
      'The world is a book and those who do not travel read only one page.',
    author: 'Saint Augustine',
  },
  {
    quote:
      'Change the way you look at things and the things you look at change.',
    author: 'Wayne Dyer',
  },
  {
    quote:
      'The greatest mistake you can make in life is to be continually fearing you will make one.',
    author: 'Elbert Hubbard',
  },
  {
    quote: 'We know what we are, but know not what we may be.',
    author: 'William Shakespeare',
  },
  {
    quote: 'Our strength grows out of our weaknesses',
    author: 'Ralph Waldo Emerson',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
