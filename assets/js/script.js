console.log('ciao fra')
const keyboard = document.getElementById('numbers'),
      keys = keyboard.getElementsByTagName('button');
      
      keys.forEach(element => {
        console.log(element.textContent)
      });