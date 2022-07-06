// Laurence Svekis - JavaScript Lessons
console.clear();

// Arrow Function

/* 
ES6 : Arrow Function Cheat sheet !!

With normal functions, if you want to return something, you have to use the return keyword. Arrow functions also have that. When you use the return keyword, it's called an explicit return. However, implied return where the return keyword can be skipped.
Let's look at some examples 🤓.

🤓Example A: Normal Function
const sayHi = function(name) {
return name
}

🤓Example B: Arrow Function with Explicit Return
// Multi-line
const sayHi = (name) => {
return name
}
// Single-line
const sayHi = (name) => { return name }

🤓Example C: Arrow Function with Implicit Return
// Single-line
const sayHi = (name) => name

// Multi-line
const sayHi = (name) => (
name
)

Notice the difference? When you use curly braces {}, you need to explicitly state the return. However, when you don't use curly braces, the return is implied and you don't need it. There's actually a name for this. When you use curly braces like in Example b, it's called a block body. And the syntax in Example c is called a concise body.
⭐️ Here are the rules:
Block body ➡️ return keyword is required
Concise body ➡️ return keyword is implied and not needed

⚠️ Arrow Functions Gotcha: Returning Objects
Alright, now you're caught up, let's get back to the gotcha 🤯
Let's purposely break our code, so you can learn your lesson lol 😂

const me = () => { name: "priya" };
me(); // undefined 😱

What?! Why isn't it returning my object. Don't worry, let's fix it by wrapping it in parentheses.

const me = () => ({ name: "priya" });
me(); // { name: "priya" } ✅

⭐️ Here's the rule: For a concise body, wrap object literal in parentheses. */

// Explicit Return - Multi-line

const say = (name) => {
    return name;
}

console.log(say('Renu')); // Renu