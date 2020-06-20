// create a variable to store the temperature to be converted
let temp = document.getElementById('temperature');
// create a variable to represent the submit button 
let submitBtn = document.getElementById('submit');
// create a variable to represent the clear button
let clearBtn = document.getElementById('clear');
// create a variable to display the result
let output = document.getElementById('output');
// let unitSelected

// create a convertTemp function that takes a temp parameter
function convertTemp(temp) {
    // create a variable to indicate which unit is selected
    let unitSelected = document.querySelector('input[name="unit"]:checked')
    let result = ""
    // if Fahrenheit is selected calculate using the F to C formula
    if (unitSelected.value === 'F') {
        result = Math.round((temp - 32) * (5 / 9))
        output.innerText = result + '\xB0C'
        if (result <= 0) {
            output.style.backgroundColor = "blue"
        } else {
            output.style.backgroundColor = 'red'
        }
        // if Celsius is selected calculate using the C to F formula
    } else if (unitSelected.value === 'C') {
        result = Math.round((temp * 9 / 5) + 32)
        output.innerText = result + '\xB0F'
        if (result < 33) {
            output.style.backgroundColor = "blue"
        } else {
            output.style.backgroundColor = 'red'
        }
    }

    
}

// add eventListeners for the submit button
submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    convertTemp(temp.value)
})
// invoke the convertTemp function when clicked

// add eventListener for the reset button
clearBtn.addEventListener("click", (e) => {
    temp.value = ''
    output.textContent = ''
    output.style.backgroundColor = 'lightgray'
})
// clear the fields when clicked