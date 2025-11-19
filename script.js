function computeEquation(string) {
    // TODO: Complete the logic for computing the answer
    console.log(string);
    let arr = string.split(' ')
    return '0'; // should return answer as string
}

const displayTop = document.querySelector(".display-top");
const displayBottom = document.querySelector(".display-bottom");
const clearBtn = document.querySelector(".clear");
const numberBtn = document.querySelectorAll(".number");
const operationBtn = document.querySelectorAll(".operation");
// TODO: Implement point button
// TODO: Add backspace button
const pointBtn = document.querySelector(".point");
const equalBtn = document.querySelector(".equal");

const operations = ['+', '-', '%', '×'];

clearBtn.addEventListener('click', () => {
    displayTop.textContent = '';
    displayBottom.textContent = '';
});

numberBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        displayBottom.textContent = `${displayBottom.textContent}` + btn.textContent; 
    });
});

operationBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (displayBottom.textContent === '') {
            // TODO: update the operation on displayTop with the clicked operation
            return;
        }
        if (operations.some(operation => displayTop.textContent.includes(operation))) {
            let equation = `${displayTop.textContent} ${displayBottom.textContent}`;
            displayTop.textContent = `${computeEquation(equation)} ${btn.textContent}`;
        } else {
            displayTop.textContent = `${displayBottom.textContent} ${btn.textContent}`;
        }
        displayBottom.textContent = '';
    });
});

equalBtn.addEventListener('click', () => {
    let equation = `${displayTop.textContent} ${displayBottom.textContent}`;
    displayBottom.textContent = computeEquation(equation);
    displayTop.textContent = '';
});


