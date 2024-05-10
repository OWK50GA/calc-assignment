// verifying that yoiu've grabbed the document element
document.querySelector('#display-panel').value = '0'

// Grabbing the buttons for the numbers and decimal points
let output = document.querySelector('#display-panel');
let num0 = document.querySelector('#num0');
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let num4 = document.querySelector('#num4');
let num5 = document.querySelector('#num5');
let num6 = document.querySelector('#num6');
let num7 = document.querySelector('#num7');
let num8 = document.querySelector('#num8');
let num9 = document.querySelector('#num9');
let decimal = document.querySelector('#point');

// Writing the concat function to update the display, and add as callback to the eventlisteners of each button you grabbed
let concat = function(input){
    if (output.value == 0 && output.value.length < 2) {
        output.value = input;
        equalToPressed = false;
    }

    else if (equalToPressed == true) {
        output.value = input;
        equalToPressed = false
        result = output.value;
    }

    else {
        equalToPressed = false
        output.value = output.value + input;
        result = output.value;
    }
    // }
}

// Add the concat function as callback to each of the event listeners.
num0.addEventListener("click", () => concat(num0.innerHTML));
num1.addEventListener("click", () => concat(num1.innerHTML));
num2.addEventListener("click", () => concat(num2.innerHTML));
num3.addEventListener("click", () => concat(num3.innerHTML));
num4.addEventListener("click", () => concat(num4.innerHTML));
num5.addEventListener("click", () => concat(num5.innerHTML));
num6.addEventListener("click", () => concat(num6.innerHTML));
num7.addEventListener("click", () => concat(num7.innerHTML));
num8.addEventListener("click", () => concat(num8.innerHTML));
num9.addEventListener("click", () => concat(num9.innerHTML));
decimal.addEventListener("click", () => {
    if (!output.innerHTML.includes(decimal.innerHTML)) {
        output.value = output.value + decimal.innerHTML;
    }
});

// Grabbing the operator buttons
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let times = document.querySelector('#times');
let over  = document.querySelector('#over');
let equalTo = document.querySelector('#equalTo');

// declaring some important variables that will be updated by the loops and algorithms for each button, based on user input
let nums = [];
let result = null;
let equalToPressed = false;
output.value = 0

// Writing the event listeners for each of the operator buttons
plus.addEventListener('click', () => {
    nums.push(parseFloat(output.value));
    nums.push(plus.innerHTML);
    output.value = '0';
    console.log(nums)
    if (nums.length > 2) {
        switch (nums[1]) {
            case '+':
                result = nums[0] + nums[2];
                break;
            case '-':
                result = nums[0] - nums[2];
                break;
            case '×':
                result = nums[0] * nums[2];
                break
            case '÷':
                result = nums[0] / nums[2];
                break
            default: result;
        }
        nums = [result, plus.innerHTML]
        console.log(nums)
    }
})

minus.addEventListener('click', () => {
    nums.push(parseFloat(output.value));
    nums.push(minus.innerHTML);
    output.value = '0';
    console.log(nums)
    if (nums.length > 2) {
        switch (nums[1]) {
            case '+':
                result = nums[0] + nums[2];
                break;
            case '-':
                result = nums[0] - nums[2];
                break;
            case '×':
                result = nums[0] * nums[2];
                break
            case '÷':
                result = nums[0] / nums[2];
                break
            default: result;
        }
        nums = [result, minus.innerHTML]
        console.log(nums)
    }
})

times.addEventListener('click', () => {
    nums.push(parseFloat(output.value));
    nums.push(times.innerHTML);
    output.value = '0';
    console.log(nums)
    if (nums.length > 2) {
        switch (nums[1]) {
            case '+':
                result = nums[0] + nums[2];
                break;
            case '-':
                result = nums[0] - nums[2];
                break;
            case '×':
                result = nums[0] * nums[2];
                break
            case '÷':
                result = nums[0] / nums[2];
                break
            default: result;
        }
        nums = [result, times.innerHTML]
        console.log(nums)
    }
})

over.addEventListener('click', () => {
    nums.push(parseFloat(output.value));
    nums.push(over.innerHTML);
    output.value = '0';
    console.log(nums)
    if (nums.length > 2) {
        switch (nums[1]) {
            case '+':
                result = nums[0] + nums[2];
                break;
            case '-':
                result = nums[0] - nums[2];
                break;
            case '×':
                result = nums[0] * nums[2];
                break
            case '÷':
                result = nums[0] / nums[2];
                break
            default: result;
        }
        nums = [result, over.innerHTML]
        console.log(nums)
    }
})

equalTo.addEventListener('click', () => {
    nums.push(parseFloat(output.value));
    console.log(nums)
    switch (nums[1]) {
        case '+':
            result = nums[0] + nums[2];
            break;
        case '-':
            result = nums[0] - nums[2];
            break;
        case '×':
            result = nums[0] * nums[2];
            break
        case '÷':
            result = nums[0] / nums[2];
            break
        default: result;
    }
    console.log(result);
    nums = [];

    let noOfDigits = `${result}`.length;
    if (noOfDigits >= 14) {
        result = result.toPrecision(13);
    }

    output.value = result;
    console.log(nums);
    equalToPressed = true;
    result = 0;
})
