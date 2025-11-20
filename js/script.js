function computeEquation(string) {
    // TODO: Logic for invalid
    let ans = 0;
    let arr = string.split(' ');
    let num1 = Number(arr[0]);
    let num2 = Number(arr[2]);
    let operation = arr[1];

    // perform operation and round to 6 decimal places
    if (operation === "+") ans = (num1 + num2).toFixed(6);
    else if (operation === "-") ans = (num1 - num2).toFixed(6);
    else if (operation === "%") ans = (num1 / num2).toFixed(6);
    else if (operation === "×") ans = (num1 * num2).toFixed(6);

    // remove trailing zeroes at the end of decimal
    if (ans.includes('.') && !ans.includes('e')) {
        ansArr = ans.split('');
        while (ansArr[ansArr.length - 1] === '0') ansArr.pop();
        if (ansArr[ansArr.length - 1] === '.') ansArr.pop();
        ans = ansArr.join('');
    }

    // TODO: Overflow of elements css in result
    if (ans.length > 12) {
        if (!ans.includes('e')) {
            if (ans.includes('.')) {
                
            } else {

            }
        } else {

        }
    }
    console.log(`Operation performed: ${string} = ${ans}`);

    return ans;
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
        // does nothing if display is empty
        if (displayBottom.textContent || displayTop.textContent) {

            // remove leading zeroes and copy displayBottom to displayTop
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

            // update displayTop's operation
            } else if (!displayBottom.textContent) {
                let arr = displayTop.textContent.split('');
                arr.pop();
                arr.push(btn.textContent);;
                displayTop.textContent = arr.join('');

            // compute and update displayTop
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


