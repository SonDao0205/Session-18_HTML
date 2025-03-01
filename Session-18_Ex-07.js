let a = +prompt("Nhap so a")
let b = +prompt("Nhap so b")
let operator = prompt("Nhap phep tinh (+, -, *, /)")
let plus = a + b;
let minus = a - b;
let dubplicate = a * b;
let split = a/b;
switch (operator) {
    case "+":
        document.write(`a + b = ${plus}`)
        break;
    case "-":
        document.write(`a - b = ${minus}`)
        break;
    case "*":
        document.write(`a * b = ${dubplicate}`)
        break;
    case "/":
        document.write(`a / b = ${split}`)
        break;
    default:
        document.write(`Phep tinh khong phu hop!`)
        break;
}