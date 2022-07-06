// Laurence Svekis - JavaScript Lessons
console.clear();

// Loop: forEach( )


const fruits = [
    { id: 1, name: 'Oranges', type: 'Citrus' },
    { id: 2, name: 'Nectarines', type: 'Stone Fruit' },
    { id: 3, name: 'Watermelons', type: 'Melons' },
    { id: 4, name: 'Strawberries', type: 'Berries' },
];

fruits.forEach(
    function (fruit, index, fruits) {
        console.log(`Name: ${fruit.name} Type: ${fruit.type}`);
    }
)

/* 
Name: Oranges Type: Citrus
Name: Nectarines Type: Stone Fruit
Name: Watermelons Type: Melons
Name: Strawberries Type: Berries */