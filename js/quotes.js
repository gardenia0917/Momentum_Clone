const quotes = [
    {
        quote: "Self-respect is the cornerstone of all virtue.",
        author: "John Herschel",
    },
    {
        quote: "You may delay, but time will not.",
        author: "Benjamin Franklin",
    },
    {
        quote: "God doesn't require us to succeed; he only requires that you try.",
        author: "Mother Teresa",
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar",
    },
    {
        quote: "TI've never known any trouble that an hour's reading didn't assuage.",
        author: "Charles De Secondat",
    },
    {
        quote: "Our imagination is the only limit to what we can hope to have in the future.",
        author: "Charles F. Kettering",
    },
    {
        quote: "There is no way to be truly great in this world. We are all impaled on the crook of conditioning.",
        author: "James Dean",
    },
    {
        quote: "The stupid neither forgive nor forget; the naive forgive and forget; the wise forgive but do not forget.",
        author: "Thomas Szasz",
    },
    {
        quote: "An honor is not diminished for being shared.",
        author: "Lois McMaster Bujold",
    },
    {
        quote: "We make a living by what we get, we make a life by what we give.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "We are advertis'd by our loving friends.",
        author: "William Shakespeare",
    },
    {
        quote: "Study without desire spoils the memory, and it retains nothing that it takes in.",
        author: "Leonardo da Vinci",
    },
    {
        quote: "Life is an unbroken succession of false situations.",
        author: "Thornton Wilder",
    },
    {
        quote: "Dying is a very dull, dreary affair. And my advice to you is to have nothing whatever to do with it.",
        author: "William Somerset Maugham",
    },
    {
        quote: "Tomorrow hopes we have learned something from yesterday.",
        author: "John Wayne",
    },


];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `/ author : ${todaysQuote.author}`;