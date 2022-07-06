// Laurence Svekis - JavaScript Lessons
console.clear();

// Loop: for 

const fruits = [
    { id: 1, name: 'Oranges', type: 'Citrus' },
    { id: 2, name: 'Nectarines', type: 'Stone Fruit' },
    { id: 3, name: 'Watermelons', type: 'Melons' },
    { id: 4, name: 'Strawberries', type: 'Berries' },
];

for (let i = 0; i < fruits.length; i++) {
    console.table(fruits[i].name);
}

/* Oranges
Nectarines
Watermelons
Strawberries */