import data from '/assets/data.json' assert {type: 'json'};

document.addEventListener("DOMContentLoaded", (event) => {
    const keyboard = document.getElementById('numbers'),
          keys = keyboard.getElementsByTagName('button'),
          array = [];
    
    [...keys].forEach(key => {
        key.addEventListener("click", (event) => {

            array.push(key.innerText)
            if(array.length && array.slice(-2).toString() == "0,0"){
                console.log(array)
                console.log(data.male.length)
            }
        })
    });
  });