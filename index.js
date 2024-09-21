function clearScreen() {
    document.getElementById("calculator-screen").value = "";
}

function appendNumber(number) {
    document.getElementById("calculator-screen").value += number;
}

function calculate() {
    let screen = document.getElementById("calculator-screen");
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = "Error";
    }
}
