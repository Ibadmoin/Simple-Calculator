// Selecting the display input element
// const display = document.getElementById("display");

// // // Function to update the display

// function updateDisplay(value) {
//     const currentValue = display.value;
//     const operators = ["+","-","*","/"];
//     if (operators.includes(currentValue[currentValue.length -1])){
//         if (operators.includes(value)){
//             display.value = display.value.slice(0,-1) + value;
//         } else {
//             display.value += value;
//         }
//     } else {
//         display.value += value;
//     }
// }
// // function updateDisplay(value) {
// //     const currentValue = display.value;
// //     const operators = ["+", "-", "*", "/"];
  
// //     // Check if the current value ends with an operator
// //     if (operators.includes(currentValue[currentValue.length - 1])) {
// //       // Check if the value being added is also an operator
// //       if (operators.includes(value)) {
// //         // Replace the last two operators with the new operator
// //         display.value = currentValue.slice(0, -1) + value;
// //       } else {
// //         // If the value being added is not an operator, just append it
// //         display.value += value;
// //       }
// //     } else {
// //       // If the current value does not end with an operator, just append the new value
// //       display.value += value;
// //     }
// //   }
// // function updateDisplay(value) {
// //   display.value += value;
// // }

// // // Function to clear the display
// function clearDisplay() {
//     display.value = '';
// }
// // function clearDisplay() {
// //   display.value = '';
// // }

// // // Function to delete the last character
// function deletevalue(){
//     if (display.value === "Math Error"){
//         display.value = '';
//     } else {
//         display.value = display.value.slice(0,-1);
//     }
// }
// // function deleteLastChar() {
// //   display.value = display.value.slice(0, -1);
// // }

// // // Function to evaluate the expression
// function evaluate() {
//     const expression = display.value;
//     const result = eval(expression);
//     if (result === Infinity) {
//         display.value = 'Math Error'

//     } else if (result === undefined){
//         display.value = '';
//     }else {

//         display.value = result;
//     }
// }

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
           if(value === "="){
            evaluate();
            
           }

            }
         else {
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

const display = document.getElementById("display");

function updateDisplay(value){
    const currentValue = display.value;
    const operators = ["+","-","*","/"];
    if (operators.includes(currentValue[currentValue.length -1])){
        if(operators.includes(value)){
            display.value = display.value.slice(0,-1) + value ;
        } else {
            display.value += value;
        }
    }else {
        display.value += value;
    }
}
function clearDisplay(){
    display.value = " ";
}
function deletevalue(){
    if( display.value === "Math Error"){
        display.value = " ";
    } else {
        display.value = display.value.slice(0,-1);
    }
}
function evaluate(){
    const expression = display.value;

    const result = eval(expression);
    
    if (result === Infinity){
        display.value = "Math Error";
    } else{

        display.value = result;
    }
    
}
