import data from '/assets/data.json' assert {type: 'json'};

document.addEventListener("DOMContentLoaded", (event) => {
    const keyboard = document.getElementById('numbers'),
        keys = keyboard.getElementsByTagName('button'),
        array = [];

    [...keys].forEach(key => {
        key.addEventListener("click", (event) => {

            array.push(key.innerText)
            if (array.length && array.slice(-2).toString() == "0,0") {
                const accuracy = 1000,
                    males = data.male.mostUsed.filter(e => e.count > accuracy),
                    females = data.female.mostUsed.filter(e => e.count > accuracy),
                    names = males.concat(females),
                    [nameLenght] = array;
                console.log(names.length)
                console.log(names.filter(e => e.name.length == nameLenght))
            }
        })
    });
});