let number1 = parseFloat(prompt("Nhập giá trị của số thứ nhất : "));
let number2 = parseFloat(prompt("Nhập giá trị của số thứ hai : "));
let number3 = parseFloat(prompt("Nhập giá trị của số thứ ba : "));
let max = number1;
if (number2 > max) {
    max = number2;
}
if (number3 > max) {
    max = number3;
}
alert("Giá trị lớn nhất trong 3 số là: " + max);
