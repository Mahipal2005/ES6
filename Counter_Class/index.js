let count = 0
let num_start = true
let setintfun;
startStopButton = document.getElementById('startStopButton');
incrementButton = document.getElementById('incrementButton');
decrementButton = document.getElementById('decrementButton');
counterDisplay = document.getElementById('counterDisplay');
// counterDisplay.textContent=count

let startstop = () => {
    if (num_start) {
        setintfun = setInterval(function () {
            startStopButton.textContent = "Stop"
            counterDisplay.textContent = count
            count++
        }, 1000)
        num_start = false
    }
    else {
        clearInterval(setintfun)
        startStopButton.textContent = "Start"
        num_start = true
    }
}

let increment = () => {
    clearInterval(setintfun)
    startStopButton.textContent = "Start"
    count++
    counterDisplay.textContent = count


}
let decrement = () => {
    clearInterval(setintfun)
    startStopButton.textContent = "Start"
    count--
    counterDisplay.textContent = count
}
startStopButton.addEventListener('click', startstop)
incrementButton.addEventListener('click', increment)
decrementButton.addEventListener('click', decrement)