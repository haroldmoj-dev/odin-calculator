let string = '';
const displayText = document.querySelector(".text");
const clearBtn = document.querySelector(".clear");
const numberBtn = document.querySelectorAll(".number");
const operationBtn = document.querySelectorAll(".operation");
const equalBtn = document.querySelector(".equal");

clearBtn.addEventListener('click', () => {
    displayText.textContent = '';
});

numberBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        displayText.textContent = `${displayText.textContent}` + btn.textContent; 
    });
});

operationBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        string += displayText.textContent + btn.textContent;
        console.log(string);
        displayText.textContent = '';
        // TODO: logic for equal if this is the second operation
    });
});

equalBtn.addEventListener('click', () => {
    string += displayText.textContent;
    console.log(string);
    // TODO: logic for doing the operation and outputting it
    displayText.textContent = '';
    string = '';
});


