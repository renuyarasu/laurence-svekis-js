// Laurence Svekis - JavaScript Lessons
console.clear();

// Loop: Map()


const fruits = [
    { id: 1, name: 'Oranges', type: 'Citrus' },
    { id: 2, name: 'Nectarines', type: 'Stone Fruit' },
    { id: 3, name: 'Watermelons', type: 'Melons' },
    { id: 4, name: 'Strawberries', type: 'Berries' },
];

let fruit = fruits.map(fruits => fruits.type);
console.log(fruit);

// [ 'Citrus', 'Stone Fruit', 'Melons', 'Berries' ]