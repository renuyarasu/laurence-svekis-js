// Laurence Svekis - JavaScript Lessons
console.clear();

// Math Random/Floor

for (let i = 0; i < 100; i++) {
    console.log(randumNumber(1, 10));
}

function randumNumber(min, max) {
    return Math.floor(Math.random() * max) + min
}