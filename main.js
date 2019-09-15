//Variables

const tempInput =document.getElementById('tempInput');
const celsiusRadioBtn = document.getElementById('F2C');
const fahRadioBtn = document.getElementById('C2F');
const clearInput = document.getElementById('clearTemp');
const convertBtn = document.getElementById('converter');
const convertedTemp = document.getElementById('output')



const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
}

// Celsius Function
const convertToCelsius = (x) => {
    const x = tempInput.value;
    const convertToC = (x - 32) * 5/9;
    const ctemp = convertToC.toFixed();
    if (ctemp < 0) {
        convertedTemp.style.color = 'blue';
    } else if (ctemp > 32) {
        convertedTemp.style.color = 'red';
    } else {
        convertedTemp.style.color = 'green';
    }
    printToDom(ctemp + '\xBOC', 'output')
    
};


//Fahrenheit Function
const convertToFahrenheit = (x) => {
    const x = tempInput.value;
    const convertToF = (x * 9/5) + 32;
    const ftemp = convertToF.toFixed();
    if (ftemp > 90) {
        convertedTemp.style.color = 'red';
    } else if (ftemp < 32) {
        convertedTemp.style.color = 'blue';
    } else {
        convertedTemp.style.color = 'green';
    }
    printToDom(ftemp + '\xBOF', 'output')
};

//Get a reference to the button element in the DOM
const button = document.getElementById('converter');

//This function should determine which conversion should happen based on which radio button us selected

const determineConverter = (e) => {
    if (celsiusRadioBtn.checked === true) {
        tempInput.focus();
        convertToCelsius();
       
    } else {
        (fahRadioBtn.checked === true)
        tempInput.focus();
        convertToFahrenheit();
    }
};

//Assign a function to be executed when the button is clicked
button.addEventListener('click', determineConverter);
