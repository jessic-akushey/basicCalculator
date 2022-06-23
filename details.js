operator = window.prompt("Enter arithmetic operator\n+, -, /, *");
num1 = window.prompt("Enter the first number");
num2 = window.prompt("Enter the second number");

parseFloat(num1), operator, parseFloat(num2);

if (operator == '+'){
    let result = parseFloat(num1) + parseFloat(num2);
    alert('Your answer is \n' + result);
}else if(operator == '-'){
    let result = parseFloat(num1) + parseFloat(num2);
    alert('Your answer is \n' + result);
}else if(operator == '/'){
    let result = parseFloat(num1) / parseFloat(num2);
    alert('Your answer is \n' + result);
}else if(operator == '*'){
    let result = parseFloat(num1) * parseFloat(num2);
    alert('Your answer is \n' + result);
}else{
    alert("Invalid operator")
}