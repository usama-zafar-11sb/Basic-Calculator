function updateFontSize() {
    const screen = document.getElementById("calculator-screen");
    const content = screen.textContent;
    const length = content.length;
    
    // Smooth scaling
    if (length > 20) {
        screen.style.fontSize = "1.2rem";
        screen.style.whiteSpace = "normal"; // Allow wrapping to 2 rows
        screen.style.wordBreak = "break-all";
    } else if (length > 15) {
        screen.style.fontSize = "1.8rem";
        screen.style.whiteSpace = "nowrap";
    } else if (length > 10) {
        screen.style.fontSize = "2.4rem";
        screen.style.whiteSpace = "nowrap";
    } else {
        screen.style.fontSize = "3.5rem";
        screen.style.whiteSpace = "nowrap";
    }
}

function clearScreen() {
    const screen = document.getElementById("calculator-screen");
    screen.textContent = "0";
    updateFontSize();
}

function backspace() {
    const screen = document.getElementById("calculator-screen");
    if (screen.textContent.length > 1) {
        screen.textContent = screen.textContent.slice(0, -1);
    } else {
        screen.textContent = "0";
    }
    updateFontSize();
}

function appendNumber(number) {
    const screen = document.getElementById("calculator-screen");
    
    if (screen.textContent === "0" || screen.textContent === "Error") {
        screen.textContent = number;
    } else if (screen.textContent.length < 40) { // Support more digits now
        screen.textContent += number;
    }
    updateFontSize();
}

function calculate() {
    const screen = document.getElementById("calculator-screen");
    try {
        let expression = screen.textContent;
        // Basic sanitation and evaluation
        let result = eval(expression);
        
        if (result.toString().includes('.') && result.toString().split('.')[1].length > 5) {
            result = parseFloat(result.toFixed(5));
        }
        screen.textContent = result;
    } catch (e) {
        screen.textContent = "Error";
    }
    updateFontSize();
}

// Ensure initial state is 0
window.onload = () => {
    updateFontSize();
};
