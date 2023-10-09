"use strict";
let affichage = document.querySelector(".resultatb");
const touches = document.querySelectorAll("section div ")
let val1 = 0
let val2 = 0
let operateur1 = ""

touches.forEach((touche) =>
    touche.addEventListener("click", () => {
        let toucheClair = touche.textContent.replace(/\s/g, "")
        switch (toucheClair) {
            case "+":
            case "-":
            case "x":
            case "/":
                affichage.textContent = toucheClair
                if (val2 !== 0) {
                    if (operateur1.includes("+")) {
                        val1 += val2
                        val2 = 0
                    }
                    if (operateur1.includes("-")) {
                        val1 -= val2
                        val2 = 0
                    }
                    if (operateur1.includes("/")) {
                        val1 /= val2
                        val2 = 0
                    }
                    else if (operateur1.includes("x")) {
                        val1 *= val2
                        val2 = 0
                    }
                    operateur1 = toucheClair

                }
                else {
                    operateur1 = toucheClair
                }
                break
            case "=":
                if (operateur1.includes("+")) {
                    affichage.textContent = val1 + val2
                    val1 += val2
                }
                if (operateur1.includes("-")) {
                    affichage.textContent = val1 - val2
                    val1 -= val2
                }
                if (operateur1.includes("x")) {
                    affichage.textContent = val1 * val2
                    val1 *= val2
                }
                if (operateur1.includes("/")) {
                    let erreur = val1 / val2
                    console.log(erreur)
                    if (erreur !== Infinity) {
                        affichage.textContent = erreur
                        val1 /= val2
                    }
                    else {
                        affichage.textContent = "Erreur"
                        val1 = 0
                    }
                }
                operateur1 = ""
                val2 = 0
                break
            case "%":
                if (affichage !== 0) {
                    affichage.textContent = (affichage.textContent) / 100
                }
                break
            case "+/-":
                affichage.textContent = (affichage.textContent - 2 * affichage.textContent)
                break
            case "AC":
                affichage.textContent = ""
                val1 = 0
                val2 = 0
                operateur1 = 0
                break
            default:
                affichage.textContent += toucheClair
                if (affichage.textContent.includes("+")) {
                    val2 = parseFloat(affichage.textContent.replace("+", ""))
                }
                else if (affichage.textContent.includes("-")) {
                    val2 = parseFloat(affichage.textContent.replace("-", ""))
                }
                else if (affichage.textContent.includes("x")) {
                    val2 = parseFloat(affichage.textContent.replace("x", ""))
                }
                else if (affichage.textContent.includes("/")) {
                    val2 = parseFloat(affichage.textContent.replace("/", ""))
                }
                else {
                    val1 = parseFloat(affichage.textContent)
                }
                break
        }
        console.log("val1 = " + parseFloat(val1))
        console.log("val2 = " + parseFloat(val2))
        console.log("operation = " + operateur1)
    })
);