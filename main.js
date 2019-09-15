const temp = document.getElementById('tempInput');
const celsiusRadioBtn = document.getElementById('gridRadios1');
const fahRadioBtn = document.getElementById('gridRadios2');
const convertedTemp = document.getElementById('output')



const printToDom = (divID, textToPrint) => {
    document.getElementById(divID).innerHTML = textToPrint;
}

// Celsius Function
const convertToCelsius = (temp) => {
    const newTemp = Math.floor((temp - 32) * 5/9);
    if (newTemp <= 0) {
        document.getElementById('output').style.color = 'blue';
    } else if (newTemp >= 32) {
        document.getElementById('output').style.color = 'red';
    } else if(newTemp > 0 && newTemp < 32) {
        document.getElementById('output').style.color = 'green';
    }
    printToDom('output', `<h3>${newTemp}</h3>`)
    
}


//Fahrenheit Function
const convertToFahrenheit = (temp) => {
    const newTemp = Math.floor((temp * 9/5) + 32);
    if (newTemp >= 90) {
        document.getElementById('output').style.color = 'red';
    } else if (convertToF <= 32) {
        document.getElementById('output').style.color = 'blue';
    } else if (newTemp > 32 && newTemp < 90) {
        document.getElementById('output').style.color = 'green';
    }
    printToDom('output', `<h3>${newTemp}</h3>`)
}


// Get a reference to the button element in the DOM
const clearInput = document.getElementById('clearTemp');
const convertBtn = document.getElementById('converter');


//This function should determine which conversion should happen based on which radio button us selected

const determineConverter = (e) => {
    const buttonId = e.target.id;
    if (buttonId === 'converter' && celsiusRadioBtn.checked === true){
        convertToCelsius(temp.value);
    } else  if (buttonId === 'converter' && fahRadioBtn.checked === true){
        convertToFahrenheit(temp.value);
    }
}


const enterFunc = (e) => {
    const key = e.keyCode; 
    if (key === 13 && fahRadioBtn.checked === true) {
        e.preventDefault();
        toFahrenheit(temp.value);
    } else if (key === 13 && celsiusRadioBtn.checked === true) {
        e.preventDefault();
        toCelsius(temp.value);
    }
}

// This should clear the page when user clicks clearbtn

const clearBtn = () => {
    temp.value = '';
    printToDom('output', '');
    celsiusRadioBtn.checked = false;
    fahRadioBtn.checked = false;
    }





//Assign a function to be executed when the button is clicked

convertBtn.addEventListener('click', determineConverter);
temp.addEventListener('keypress', enterFunc);
clearInput.addEventListener('click', clearBtn);