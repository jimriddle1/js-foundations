

module.exports = {  
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
};



function createBarber(name, earnings = 0, haircuts = []){
    const barber = {name: name, earnings: earnings, haircuts: haircuts};
    return barber;
}

function giveCompliment(haircut){
    return "This " + haircut.style + " looks great!";
}

function cutHair(barber, haircut){
    newBarber = barber
    newBarber.earnings += haircut.price;
    newBarber.haircuts.push(haircut);

    return newBarber;
}

function listStyles(barber, length){
    placeholder = [];
    for (haircut of barber.haircuts){
        if (length == haircut.hairLength){
            placeholder.push(haircut.style);
        }
    }
    return placeholder;
}