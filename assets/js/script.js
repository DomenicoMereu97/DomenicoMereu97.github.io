import data from '/assets/data.json' assert {type: 'json'};

function getAnimalNamesByCode(animals, code) {
    const filteredAnimals = animals.filter(animal => animal.code === code);
    return filteredAnimals.map(animal => animal.name);
  }
  


document.addEventListener("DOMContentLoaded", (event) => {

    const keyboard = document.getElementById('numbers'),
        notifiche = document.getElementById("notifiche"),
        notificheResult = document.getElementById("result"),
        notesContainer = document.getElementById("notes"),
        notes = notesContainer.querySelectorAll(".note"),
        keys = keyboard.getElementsByTagName('button'),
        array = [],
        now = new Date,
        h = now.getHours(),
        m = (now.getMinutes()<10?'0':'' + now.getMinutes()),
        clock = document.getElementById("time");

    let clear = 0;

    clock.innerHTML = (h.toString() + ":" + m.toString());

    [...keys].forEach(key => {
        key.addEventListener("click", (event) => {
            const dotsContainer = document.getElementById("fields"),
                dots = dotsContainer.querySelectorAll(".numberfield");

            clear++;
            if (clear == 10) {
                clear = 1;
            }
            dots.forEach((e, index) => {
                if (clear <= 4 && index == clear - 1) {
                    dots[index].classList.add('active');
                }
                if (clear > 4 && index == clear - 5) {
                    dots[index].classList.remove('active');
                }
            });
            array.push(key.innerText)

            if (array.length && array.slice(-2).toString() == "0,0") {
                const results = getAnimalNamesByCode(data, array.slice(0, -2).slice(1).join(''));
                console.log(results);
                
                keyboard.classList.add("unlock")
                notifiche.classList.add("unlock")
                notes.forEach((note, index) => {
                    if(results[index] !== "undefined"){
                        note.innerHTML = results[index];
                    }
                });
                notesContainer.classList.add("unlock")
                notificheResult.innerHTML = results.length
                dotsContainer.style.display = "none";
                console.log(results)
            }
        })
    });
});