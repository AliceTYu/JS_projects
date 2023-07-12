const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multipBtn = document.getElementById('multip')
const delBtn = document.getElementById('del')
const degreeBtn = document.getElementById('degree')
const submitBtn = document.getElementById('submit')
const resultElement = document.getElementById('result')

let action = '+'
console.log(typeof plusBtn.value)

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multipBtn.onclick = function () {
    action = '*'
}

delBtn.onclick = function () {
    action = '/'
}

degreeBtn.onclick = function () {
    action = '^'
}

function sumColor (result) {
    if (result < 0){
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumberWithAction (inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    switch(actionSymbol){
        case '+': return num1 + num2
        case '-': return num1 - num2
        case '*': return num1 * num2
        case '/': return num1 / num2
        case '^': return num1 ** num2
    }
}

submitBtn.onclick = function () {
    const result = computeNumberWithAction(input1, input2, action)
    sumColor(result)
}
