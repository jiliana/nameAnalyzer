//  Zodiac traits by index: monkey -> rooster -> dog -> pig -> ...
const zodiac_traits = [
    [5, 2, 3, 4, 5, 5, 5, 1, 3, 2, 2, 3], // extraversion
    [3, 1, 1, 3, 4, 4, 3, 3, 4, 4, 5, 4], // oppenness
    [4, 1, 1, 5, 3, 3, 3, 5, 2, 3, 3, 5], // aggreeableness
    [1, 5, 2, 4, 2, 5, 1, 4, 2, 2, 3, 4], // conscientiousness
    [1, 4, 2, 3, 1, 1, 5, 2, 4, 4, 3, 2] // neuroticism
];
//  Letters in name affect personality trait
const letters = [
    ['a', 'v', 'k', 'y', 'z', 'm', 'x'], // extraversion
    ['a', 'e', 'i', 'o', 'u', 'y'], // oppenness
    ['b', 'e', 'i', 'r', 's', 'p'], // aggreeableness
    ['b', 'c', 'd', 'j', 'r', 't'], // conscientiousness
    ['h', 'd', 'l', 'f', 'u', 'n'] // neuroticism
];
const zodiac_signs = [
    "Monkey", 
    "Rooster", 
    "Dog", 
    "Pig", 
    "Rat", 
    "Ox", 
    "Tiger", 
    "Rabbit", 
    "Dragon", 
    "Snake", 
    "Horse", 
    "Goat"];

const numOf_e_extras = 3;
const numOf_o_extras = 3;

exports.zodiac_traits = zodiac_traits;
exports.zodiac_signs = zodiac_signs;
exports.letters = letters;
exports.numOf_e_extras = numOf_e_extras;
exports.numOf_o_extras = numOf_o_extras;

