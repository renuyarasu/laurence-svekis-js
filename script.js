// Laurence Svekis - JavaScript Lessons
console.clear();

// JavaScript Functions

function loop(val) {
    console.log(val);
    if (val > 0) {
        val--;
        loop(val)
    }
    return 'End'
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