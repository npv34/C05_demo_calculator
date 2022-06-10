
let checkOperator = false;

function setScreen(value) {
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
    let result = eval(input);
    document.getElementById('screen').value = result;
}

function clearScreen() {
    document.getElementById('screen').value = ''
}
