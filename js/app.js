const numbersDOMElement = document.querySelector('.numbers')
const goBtnDOMElement = document.getElementById('go-btn')
console.log(numbersDOMElement, goBtnDOMElement)



const numbersArray = []
const timeOutMessage = 'Il tempo è scaduto!'

while (numbersArray.length < 5) {
    // generare un numero random compreso tra 1 e 100
    const n = getRandomIntInclusive(1, 100)
    // console.log(n) //aiuto, va avanti all'infinito!

    // SE n non è presente nell'array di numeri
    console.log(numbersArray.includes(n))
    if (numbersArray.includes(n) === false) {
        // pushare il numero nell'array di numeri
        numbersArray.push(n)
    }
}

console.log(numbersArray)
// pushare i 5 numeri in numbersDOMElement 
numbersDOMElement.innerHTML = numbersArray

// click sul bottone
goBtnDOMElement.addEventListener ('click', function(){
    startTimer(3000)
})


// funzione per avviare il timer
function startTimer(duration) {
    setTimeout(function() {
      alert(timeOutMessage)
    }, duration)
}

// funzione per generare un numero random compreso tra 2 numeri
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min)
}