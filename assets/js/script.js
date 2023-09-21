import data from '/assets/data.json' assert {type: 'json'};

document.addEventListener("DOMContentLoaded", (event) => {

    const keyboard = document.getElementById('numbers'),
        notifiche = document.getElementById("notifiche"),
        notificheResult = document.getElementById("result"),
        keys = keyboard.getElementsByTagName('button'),
        array = [],
        now = new Date,
        h = now.getHours(),
        m = now.getMinutes(),
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
                        letters = pureArr.map(num => name[parseInt(num) - 1]),
                        control = [];
                    letters.forEach(letter => {
                        if (vowels.includes(letter)) {
                            control.push(letter);
                            if (control.length == letters.length) {
                                results.push(element);
                                return;
                            }
                        }
                    })

                });
                results.sort((a, b) => {
                    return b.count - a.count;
                });
                keyboard.classList.add("unlock")
                notifiche.classList.add("unlock")
                notificheResult.innerHTML = results.length
                dotsContainer.style.display = "none";
                console.log(results)
            }
        })
    });
});