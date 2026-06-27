const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear everything
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        if (display.value === "") return;

        // Convert percentage
        let expression = display.value.replace(/%/g, "/100");

        let result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// ==========================
// Keyboard Support
// ==========================

document.addEventListener("keydown", function (event) {

    const key = event.key;

    if (!isNaN(key) || key === ".") {
        appendValue(key);
    }

    if (["+", "-", "*", "/", "%"].includes(key)) {
        appendValue(key);
    }

    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }

});