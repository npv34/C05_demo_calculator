
let checkOperator = false;
let checkCalculator = false;

function setScreen(value) {
    if (checkCalculator) {
        document.getElementById('screen').value = '';
        checkCalculator = false;
    }

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            if (!checkOperator) {
                document.getElementById('screen').value += value;
                checkOperator = true;
            }
            break;
        default:
            document.getElementById('screen').value += value;
            checkOperator = false;
    }
}

function cal() {
    let input = document.getElementById('screen').value;
    document.getElementById('screen').value = eval(input);
    checkCalculator = true;
}

function clearScreen() {
    document.getElementById('screen').value = ''
}
