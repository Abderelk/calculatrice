"use strict";
let display = document.querySelector(".resultatb");
const buttons = document.querySelectorAll("input")
let FirstValue = 0
let SecondValue = 0
let operateur1 = ""
function calculate() {
    if (operateur1.includes("+")) {
        FirstValue += SecondValue
    }
    if (operateur1.includes("-")) {
        FirstValue -= SecondValue
    }
    if (operateur1.includes("/")) {
        let error = FirstValue / SecondValue;
        if (error !== Infinity) {
            FirstValue /= SecondValue;
        } else {
            display.textContent = "Error";
            FirstValue = "Error";
        }
    }
    if (operateur1.includes("x")) {
        FirstValue *= SecondValue
    }
    SecondValue = 0
}
buttons.forEach((button) =>
    button.addEventListener("click", () => {
        switch (button.value) {
            case "+":
            case "-":
            case "x":
            case "/":
                display.textContent = button.value
                if (SecondValue !== 0) {
                    calculate()
                    operateur1 = button.value
                }
                else {
                    operateur1 = button.value
                }
                break
            case "=":
                calculate()
                display.textContent = FirstValue
                break
            case "%":
                display.textContent = (display.textContent) / 100
                break
            case "+/-":
                display.textContent = (display.textContent - 2 * display.textContent)
                break
            case "AC":
                display.textContent = ""
                FirstValue = SecondValue = operateur1 = 0
                break
            default:
                display.textContent += button.value
                if (display.textContent.includes("+")) {
                    SecondValue = parseFloat(display.textContent.replace("+", ""))
                }
                else if (display.textContent.includes("-")) {
                    SecondValue = parseFloat(display.textContent.replace("-", ""))
                }
                else if (display.textContent.includes("x")) {
                    SecondValue = parseFloat(display.textContent.replace("x", ""))
                }
                else if (display.textContent.includes("/")) {
                    SecondValue = parseFloat(display.textContent.replace("/", ""))
                }
                else {
                    FirstValue = parseFloat(display.textContent)
                }
                break
        }
        console.log("FirstValue = " + FirstValue)
        console.log("SecondValue = " + SecondValue)
        console.log("operation = " + operateur1)
    })
);