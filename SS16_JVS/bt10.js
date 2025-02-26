let number1 = +prompt('Nhập số thứ nhất:');
let number2 = +prompt('Nhập số thứ hai:');
let min = Math.min(number1, number2);
let max = Math.max(number1, number2);
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
alert(`Số nguyên ngẫu nhiên trong khoảng (${min}, ${max}): ${randomNumber}`);

