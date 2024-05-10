document.querySelector('#display-panel').value = '0'
// document.getElementById('display-panel').innerText = 'Hello, ladies'

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
let equalToPressed = false;

output.value = 0

let concat = function(input){
    // if (output.value.length < 13) {
    if (output.value == 0 && output.value.length < 2) {
        output.value = input;
        equalToPressed = false;
        // result = output.value;
        // result = output.value;
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

let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let times = document.querySelector('#times');
let over  = document.querySelector('#over');
let equalTo = document.querySelector('#equalTo');

let nums = [];
let result = null;
// let intResult;

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
    
    // let decimalSplitting = `${result}`.split('.')
    // let wholeNumLen = decimalSplitting[0].length;
    // console.log(wholeNumLen);

    let noOfDigits = `${result}`.length;
    if (noOfDigits >= 14) {
        result = result.toPrecision(13);
    }

    output.value = result;
    console.log(nums);
    equalToPressed = true;
    result = 0;
})
