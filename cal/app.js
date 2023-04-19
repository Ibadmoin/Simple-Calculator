// Selecting the display input element
const display = document.getElementById("display");

// // Function to update the display
function updateDisplay(value){
    display.value +=value;
}
// function updateDisplay(value) {
//   display.value += value;
// }

// // Function to clear the display
function clearDisplay() {
    display.value = '';
}
// function clearDisplay() {
//   display.value = '';
// }

// // Function to delete the last character
function deletevalue(){
    if (display.value === "Math Error"){
        display.value = '';
    } else {
        display.value = display.value.slice(0,-1);
    }
}
// function deleteLastChar() {
//   display.value = display.value.slice(0, -1);
// }

// // Function to evaluate the expression
function evaluate() {
    const expression = display.value;
    const result = eval(expression);
    if (result === Infinity) {
        display.value = 'Math Error'

    } else if (result === undefined){
        display.value = '';
    }else {

        display.value = result;
    }
}
// function evaluateExpression() {
//   const expression = display.value;
//   const result = eval(expression);
//   display.value = result;
// }

// // Adding event listeners to the buttons
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'AC'){
            clearDisplay();
        } else if (value === 'DE'){
            deletevalue();
        } else if (value === '='){
            evaluate();
        } else {
            updateDisplay(value);
        }
    })
})
// document.querySelectorAll('input[type="button"]').forEach(button => {
//   button.addEventListener('click', () => {
//     const value = button.value;
//     if (value === 'AC') {
//       clearDisplay();
//     } else if (value === 'DE') {
//       deleteLastChar();
//     } else if (value === '=') {
//       evaluateExpression();
//     } else {
//       updateDisplay(value);
//     }
//   });
// });
