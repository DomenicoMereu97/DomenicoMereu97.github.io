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
                    [nameLenght] = array,
                    pureArr = array.slice(0, -2).slice(1),
                    firstFilteredArr = names.filter(e => e.name.length == nameLenght),
                    vowels = ['A', 'E', 'I', 'O', 'U'],
                    results = [],
                    maxResults = 5;

                firstFilteredArr.forEach(element => {
                    const name = [...element.name],
                          letters = pureArr.map(num => name[parseInt(num) -1]),
                          control = [];
                    letters.forEach(letter => {
                        if(vowels.includes(letter)) {
                            control.push(letter);
                            if(control.length == letters.length) {
                                results.push(element);
                                return;
                            }
                        }
                    })

                });
                results.sort((a, b) => {
                    return b.count - a.count;
                });
                
                console.log(results.slice(0, maxResults))
            }
        })
    });
});