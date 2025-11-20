function computeEquation(string) {
    // TODO: Logic for invalid
    // TODO: Logic for rounding off
    // TODO: Overflow of elements css in result
        // if includes 'e', if includes '.'
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
        if (displayBottom.textContent.length < 12) {
            displayBottom.textContent = `${displayBottom.textContent}` + btn.textContent; 
        }
    });
});

pointBtn.addEventListener('click', () => {
    if (!displayBottom.textContent.includes('.') &&
        displayBottom.textContent.length < 12) {
        displayBottom.textContent = `${displayBottom.textContent}.`;
    }
});

operationBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (displayBottom.textContent || displayTop.textContent) {
            if (!displayTop.textContent) {
                let arr = displayBottom.textContent.split('');
                while (arr[0] === '0') {
                    arr.splice(0, 1);
                }
                if (arr[0] === '.') {
                    arr.splice(0, 0, '0');
                }
                displayTop.textContent = `${arr.join('')} ${btn.textContent}`;
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
    if (displayTop.textContent && displayBottom.textContent){
        let equation = `${displayTop.textContent} ${displayBottom.textContent}`;
        displayBottom.textContent = computeEquation(equation);
        displayTop.textContent = '';
    }
});


