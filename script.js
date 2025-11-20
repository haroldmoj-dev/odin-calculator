function computeEquation(string) {
    // TODO: Logic for invalid
    // TODO: Logic for rounding off
    let ans = 0;
    let arr = string.split(' ');
    let num1 = Number(arr[0]);
    let num2 = Number(arr[2]);
    let operation = arr[1];

    if (operation === "+") ans = num1 + num2;
    else if (operation === "-") ans = num1 - num2;
    else if (operation === "%") ans = num1 / num2;
    else if (operation === "×") ans = num1 * num2;

    console.log(`Operation performed: ${string} = ${ans}`);

    return String(ans);
}

const displayTop = document.querySelector(".display-top");
const displayBottom = document.querySelector(".display-bottom");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const numberBtn = document.querySelectorAll(".number");
const operationBtn = document.querySelectorAll(".operation");
// TODO: Implement point button
const pointBtn = document.querySelector(".point");
const equalBtn = document.querySelector(".equal");

const operations = ['+', '-', '%', '×'];

clearBtn.addEventListener('click', () => {
    displayTop.textContent = '';
    displayBottom.textContent = '';
});

deleteBtn.addEventListener('click', () => {
    let arr = displayBottom.textContent.split('');
    arr.pop();
    displayBottom.textContent = arr.join('');;
});

numberBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        displayBottom.textContent = `${displayBottom.textContent}` + btn.textContent; 
    });
});

operationBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (displayBottom.textContent || displayTop.textContent) {
            if (!displayTop.textContent) {
                displayTop.textContent = `${displayBottom.textContent} ${btn.textContent}`;
                displayBottom.textContent = '';
            } else if (!displayBottom.textContent) {
                let arr = displayTop.textContent.split('');
                arr.pop();
                arr.push(btn.textContent);;
                displayTop.textContent = arr.join('');
            } else if (displayTop.textContent && displayBottom.textContent) {
                let equation = `${displayTop.textContent} ${displayBottom.textContent}`;
                displayTop.textContent = `${computeEquation(equation)} ${btn.textContent}`;
                displayBottom.textContent = '';
            }
        }
    });
});

equalBtn.addEventListener('click', () => {
    let equation = `${displayTop.textContent} ${displayBottom.textContent}`;
    displayBottom.textContent = computeEquation(equation);
    displayTop.textContent = '';
});


