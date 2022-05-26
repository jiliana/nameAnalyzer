const fs = require('fs');
const descriptions = require('../json/descriptions.json');
const c = require('./constants');

// Add descriptions for each level of trait (low or high)
let createDescription = (e_trait, o_trait, a_trait, c_trait, n_trait) => {

    var fullDesc  = "";
    var extraIdx; 

    // Add e_trait description + fav hobby
    extraIdx = Math.round(e_trait) % c.numOf_e_extras;
    if (e_trait < 1) { 
        fullDesc += descriptions["e"][0].d; 
        fullDesc += " One of your favorite pastimes is ";
        fullDesc +=  descriptions["e_hobbies"]["l"][extraIdx].hobby

    }
    else { 
        fullDesc += descriptions["e"][1].d; 
        fullDesc += " One of your favorite pastimes is ";
        fullDesc +=  descriptions["e_hobbies"]["h"][extraIdx].hobby
    }
    fullDesc += '. ';

    // Add o_trait description + school subject    
    extraIdx = Math.round(o_trait) % c.numOf_o_extras;
    if (o_trait < 1) { 
        fullDesc += descriptions["o"][0].d; 
        fullDesc += " In school, you did particularly well in ";
        fullDesc +=  descriptions["o_subjects"]["l"][extraIdx].subject
    }
    else { 
        fullDesc += descriptions["o"][1].d; 
        fullDesc += " In school, you did particularly well in ";
        fullDesc +=  descriptions["o_subjects"]["h"][extraIdx].subject
    }
    fullDesc += '. ';

    // Add a_trait description
    if (a_trait < 1) { fullDesc += descriptions["a"][0].d; }
    else { fullDesc += descriptions["a"][1].d; }
    fullDesc += ' ';

    // Add c_trait description
    if (c_trait < 1) { fullDesc += descriptions["c"][0].d; }
    else { fullDesc += descriptions["c"][1].d; }
    fullDesc += ' ';

    // Add n_trait description
    if (n_trait < 1) { fullDesc += descriptions["n"][0].d; }
    else { fullDesc += descriptions["n"][1].d; }

    

    return fullDesc;


}

exports.createDescription = createDescription;