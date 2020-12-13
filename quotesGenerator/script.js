const quotes = [
    {
    
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        name: "-Mother Teresa"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        name: "-Franklin D. Roosevelt"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        name:  "-Margaret Mead"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        name:  "-Robert Louis Stevenson"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        name:  "-Eleanor Roosevelt"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        name:  "-Benjamin Franklin"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        name:  "-Helen Keller"
    },
    {

        quote: "It is during our darkest moments that we must focus to see the light.",
        name:  "-Aristotle"
    },
    {
        quote: "Whoever is happy will make others happy too.",
        name: "-Anne Frank"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        name:  "-Ralph Waldo Emerson"
    }

]


const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');


quoteBtn.addEventListener('click', getQuote);

function getQuote(){
    let number = Math.floor(Math.random()*quotes.length)
    quote.innerHTML = quotes[number].quote;
    quoteAuthor.innerHTML = quotes[number].name;
    }

