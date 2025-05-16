
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");


var Total = document.getElementById("Total");
var Reset = document.getElementById("reset");
var Divide = document.getElementById("divide");
var Multiply = document.getElementById("multiply");
var Plus = document.getElementById("plus");
var Minus = document.getElementById("minus");
var Delete = document.getElementById("delete");

let expression = "";


if (!localStorage.getItem('total')) {
    localStorage.setItem('total', '0');
    Total.innerHTML = '0';
} else {
    Total.innerHTML = localStorage.getItem('total');
}


function clear() {
    expression = "";
    localStorage.setItem('total', '0');
    Total.innerHTML = '0';
}


function calculate(value) {
    expression += value;
    Total.innerHTML = expression;
}

function evaluateExpression() {
    try {
        let result = eval(expression);
        expression = result.toString();
        localStorage.setItem('total', expression);
        Total.innerHTML = expression;
    } catch (err) {
        Total.innerHTML = "Error";
    }
}


Reset.addEventListener("click", clear);
Delete.addEventListener("click", function() {
    expression = expression.slice(0, -1);
    Total.innerHTML = expression || '0';
});

[one, two, three, four, five, six, seven, eight, nine].forEach((btn) => {
    btn.addEventListener("click", function() {
        calculate(btn.innerHTML);
    });
});


Plus.addEventListener("click", () => calculate('+'));
Minus.addEventListener("click", () => calculate('-'));
Multiply.addEventListener("click", () => calculate('*'));
Divide.addEventListener("click", () => calculate('/'));


document.getElementById("equal").addEventListener("click", evaluateExpression);