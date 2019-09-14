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

const convertToCelsius = () => {
      
};

const toFahrenheit = () => {
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
};

//Get a reference to the button element in the DOM
const button = document.getElementById('converter');

//This function should determine which conversion should happen based on which radio button us selected

const determineConverter = (e) => {
    console.log("event", e);
};


//Assign a function to be executed when the button is clicked
button.addEventListener('click', determineConverter);