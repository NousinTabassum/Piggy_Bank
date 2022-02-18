//function for getting the input values
function getInput(inputId) {
    const userInput = document.getElementById(inputId);
    const userAmountText = userInput.value;
    const userAmount = parseFloat(userAmountText);
    return userAmount;
};//function for getting the input values
function getInput(inputId) {
    const userInput = document.getElementById(inputId);
    const userAmountText = userInput.value;
    const userAmount = parseFloat(userAmountText);
    return userAmount;
};

// function for showing the output values

function getValue(inputText, opration) {

    const inputField = document.getElementById(inputText);
    const inputFieldText = inputField.innerText;
    const inputFieldAmount = parseFloat(inputFieldText);
    inputField.innerText = opration;
    return inputFieldAmount;


}

// function for calculate button 
document.getElementById('calculate-button').addEventListener('click', function () {

    // get input from input filed and put them in a function
    const incomeInput = getInput('income-input');
    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const clothesInput = getInput('clothes-input');

    // error messages 
    const pin1 = document.getElementById('failed');
    const pin2 = document.getElementById('failed-two');
    const pin3 = document.getElementById('failed-three');


    if (incomeInput < 0 || foodInput < 0 || rentInput < 0 || clothesInput < 0) {
        pin1.style.display = 'block';
        pin2.style.display = 'none';
        pin3.style.display = 'none';

    }
    else if (isNaN(incomeInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothesInput)) {

        pin1.style.display = 'none';
        pin2.style.display = 'block';
        pin3.style.display = 'none';

    }
    else {
        const addTotalExpense = foodInput + rentInput + clothesInput;
        if (addTotalExpense > incomeInput) {

            pin1.style.display = 'none';
            pin2.style.display = 'none';
            pin3.style.display = 'block';
        }
        else {
            pin1.style.display = 'none';
            pin2.style.display = 'none';
            pin3.style.display = 'none';


            getValue('total-expense', addTotalExpense);

            // claculate balance 
            const calculateBalance = incomeInput - addTotalExpense;
            getValue('balance', calculateBalance);

        }

    }
});


// function for save button 
document.getElementById('save-button').addEventListener('click', function () {
    // error msg 
    const pin4 = document.getElementById('failed-four');
    const pin5 = document.getElementById('failed-five');

    const savebuttonInput = getInput('save-input');
    if (savebuttonInput < 0 || isNaN(savebuttonInput)) {

        pin4.style.display = 'none';
        pin5.style.display = 'block';

    }
    else {
        const incomeInput = getInput('income-input');

        const balanceText = document.getElementById('balance').innerText;
        const balance = parseFloat(balanceText);

        // calculate saving ammount 
        const calculateSavingAmmount = (savebuttonInput * incomeInput) / 100;
        if (balance < calculateSavingAmmount) {

            pin4.style.display = 'block';
            pin5.style.display = 'none';

        }
        else {
            pin4.style.display = 'none';
            pin5.style.display = 'none';

            getValue('saving-amount', calculateSavingAmmount);
            const calculateReminingBalance = balance - calculateSavingAmmount;
            getValue('remining-balance', calculateReminingBalance);

        }
    }


});


// function for showing the output values

function getValue(inputText, opration) {

    const inputField = document.getElementById(inputText);
    const inputFieldText = inputField.innerText;
    const inputFieldAmount = parseFloat(inputFieldText);
    inputField.innerText = opration;
    return inputFieldAmount;


}

// function for calculate button 
document.getElementById('calculate-button').addEventListener('click', function () {

    // get input from input filed and put them in a function
    const incomeInput = getInput('income-input');
    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const clothesInput = getInput('clothes-input');

    // error messages 
    const pin1 = document.getElementById('failed');
    const pin2 = document.getElementById('failed-two');
    const pin3 = document.getElementById('failed-three');


    if (incomeInput < 0 || foodInput < 0 || rentInput < 0 || clothesInput < 0) {
        pin1.style.display = 'block';
        pin2.style.display = 'none';
        pin3.style.display = 'none';

    }
    else if (isNaN(incomeInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothesInput)) {

        pin1.style.display = 'none';
        pin2.style.display = 'block';
        pin3.style.display = 'none';

    }
    else {
        const addTotalExpense = foodInput + rentInput + clothesInput;
        if (addTotalExpense > incomeInput) {

            pin1.style.display = 'none';
            pin2.style.display = 'none';
            pin3.style.display = 'block';
        }
        else {
            pin1.style.display = 'none';
            pin2.style.display = 'none';
            pin3.style.display = 'none';


            getValue('total-expense', addTotalExpense);

            // claculate balance 
            const calculateBalance = incomeInput - addTotalExpense;
            getValue('balance', calculateBalance);

        }

    }
});


// function for save button 
document.getElementById('save-button').addEventListener('click', function () {
    // error msg 
    const pin4 = document.getElementById('failed-four');
    const pin5 = document.getElementById('failed-five');

    const savebuttonInput = getInput('save-input');
    if (savebuttonInput < 0 || isNaN(savebuttonInput)) {

        pin4.style.display = 'none';
        pin5.style.display = 'block';

    }
    else {
        const incomeInput = getInput('income-input');

        const balanceText = document.getElementById('balance').innerText;
        const balance = parseFloat(balanceText);

        // calculate saving ammount 
        const calculateSavingAmmount = (savebuttonInput * incomeInput) / 100;
        if (balance < calculateSavingAmmount) {

            pin4.style.display = 'block';
            pin5.style.display = 'none';

        }
        else {
            pin4.style.display = 'none';
            pin5.style.display = 'none';

            getValue('saving-amount', calculateSavingAmmount);
            const calculateReminingBalance = balance - calculateSavingAmmount;
            getValue('remining-balance', calculateReminingBalance);

        }
    }


});
