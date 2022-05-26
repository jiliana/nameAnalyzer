const axios = require("axios");
const d = require('./createDescription');
const c = require('./constants');

const zodiac_traits = c.zodiac_traits;
const letters = c.letters;
var zodiac_sign;

let analyzeName = (name, birthyear) => {

    name = nameProper(name);
    zodiac_sign = c.zodiac_signs[getZodiac(birthyear)];


    e_trait = extraversion(name, birthyear).toFixed(1);
    o_trait = oppenness(name, birthyear).toFixed(1);
    a_trait = aggreableness(name, birthyear).toFixed(1);
    c_trait = conscientiousness(name, birthyear).toFixed(1);
    n_trait = neuroticism(name, birthyear).toFixed(1);
    description = d.createDescription(e_trait, o_trait, a_trait, c_trait, n_trait);

    analysis = {
        name: name,
        birthyear: birthyear,
        zodiac: zodiac_sign,
        extraversion: e_trait,
        oppenness: o_trait,
        aggreeableness: a_trait,
        conscientiousness: c_trait,
        neuroticism: n_trait,
        description: description
    }
    return analysis;

}


// Calculate strengths of each personality trait
function extraversion(name, birthyear) {
    var zodiac_bonus = Math.log(zodiac_traits[0][getZodiac(birthyear)]);
    var strength = getStrength(letters[0], name) + zodiac_bonus;
    return strength
}

function oppenness(name, birthyear) {
    var zodiac_bonus = Math.log(zodiac_traits[1][getZodiac(birthyear)]);
    var strength = getStrength(letters[1], name) + zodiac_bonus;

    return strength
}

function aggreableness(name, birthyear) {
    var zodiac_bonus = Math.log(zodiac_traits[2][getZodiac(birthyear)]);
    var strength = getStrength(letters[2], name) + zodiac_bonus;


    return strength
}

function conscientiousness(name, birthyear) {
    var zodiac_bonus = Math.log(zodiac_traits[3][getZodiac(birthyear)]);
    var strength = getStrength(letters[3], name) + zodiac_bonus;


    return strength
}

function neuroticism(name, birthyear) {
    var zodiac_bonus = Math.log(zodiac_traits[4][getZodiac(birthyear)]);
    var strength = getStrength(letters[4], name) + zodiac_bonus;


    return strength
}

// Helper functions
function nameProper(name) {
    proper = name[0].toUpperCase().trim() + name.slice(1).toLowerCase();
    return proper;
}

function getStrength(letters, name, birthyear) {
    var strength = 1;
    for (var i = 0; i < name.length; i++) {
        if (letters.includes(name.charAt(i))) {
            strength++;
        }
    }
    strength = Math.log(strength);
    return strength;
}

function getZodiac(birthyear) {
    return zodiac = birthyear % 12;
}

// Export analyzeName for server
exports.analyzeName = analyzeName;
