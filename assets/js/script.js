console.log('ciao fra')
const keyboard = document.getElementById('numbers');
const keys = keyboard.getElementsByTagName('button');

keys.forEach(element => {
    console.log(element.textContent)
});