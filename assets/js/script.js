import data from '/assets/data.json' assert {type: 'json'};

document.addEventListener("DOMContentLoaded", (event) => {
    const keyboard = document.getElementById('numbers'),
          keys = keyboard.getElementsByTagName('button'),
          array = [];
    
    [...keys].forEach(key => {
        key.addEventListener("click", (event) => {

            array.push(key.innerText)
            if(array.length && array.slice(-2).toString() == "0,0"){
                let accuracy = 1000;
                const males = data.male.mostUsed.filter(e => e.count > 1000),
                 females = data.female.mostUsed.filter(e => e.count > 1000),

                names = males.concat(females);
                console.log(names.length)
            }
        })
    });
  });