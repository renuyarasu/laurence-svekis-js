// Laurence Svekis - JavaScript Lessons
console.clear();

// JavaScript Functions

function loop(val) {
    console.log(val);
    if (val < 1) { return }
    loop(val - 1);
}
loop(10)

/* 9
8
7
6
5
4
3
2
1
0 */