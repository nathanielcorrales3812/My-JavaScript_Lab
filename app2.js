// 1. Select DOM elements
const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const resultText = document.querySelector('#resultText');
const addBtn = document.querySelector('#addBtn');
const subBtn = document.querySelector('#subBtn');
const mulBtn = document.querySelector('#mulBtn');
const divBtn = document.querySelector('#divBtn');
const clearBtn = document.querySelector('#clearBtn');


// 2. The Core Calculation Function using a Switch Statement
function calculate(operation) {
    const val1 = Number(num1Input.value);
    const val2 = Number(num2Input.value);


    // If clearing, we don't need to validate numbers
    if (operation === "clear" ) {
    // Clear both input boxes and reset the result text to "Result: "
        num1Input.value = "";
        num2Input.value = "";
        resultText.textContent = "Result: ";
        return ;
    }



    // Validation Check (Ensures inputs are not empty and are actual numbers)
    if (num1Input.value === "" || num2Input.value === "" || isNaN(val1) || isNaN(val2)) {
        resultText.textContent = "Error: Please enter two valid numbers!";
        return;
    }


    let result = 0;


    // 3. Switch Evaluation based on button clicked
    switch (operation) {
        // REFERENCE CASE (Use this to write the others!)
        case "add":
            result = val1 + val2;
            resultText.textContent = `Result: ${val1} + ${val2} = ${result}`;
            break;


        case "subtract" :
            // Subtract val2 from val1 and display the result
            result = val1 - val2;
            resultText.textContent = `Result: ${val1} - ${val2} = ${result}`;
            break ;

        case "multiply" :
            // Multiply val1 by val2 and display the result
            result = val1 * val2;
            resultText.textContent = `Result: ${val1} * ${val2} = ${result}`;
            break ;

        case "divide" :
            // Divide val1 by val2 and display the result (with division by zero check)
            if (val2 === 0) {
                resultText.textContent = "Error: Division by zero is not allowed!";
            } else {
                result = val1 / val2;
                resultText.textContent = `Result: ${val1} / ${val2} = ${result}`;
            }
            break ;

        default :
            resultText . textContent = "Unknown operation." ;
    }
}


// 4. Attach Event Listeners to each button
addBtn.addEventListener('click', () => calculate('add'));
subBtn.addEventListener('click', () => calculate('subtract'));
mulBtn.addEventListener('click', () => calculate('multiply'));
divBtn.addEventListener('click', () => calculate('divide'));
clearBtn.addEventListener('click', () => calculate('clear'));


