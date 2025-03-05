let number = +prompt('nhập số nguyên bất kỳ: ');
if (isNaN(number)) {
    document.write('vui lòng nhập một số nguyên hợp lệ.');
} else {
    document.write(`các ước của ${number} là: `);
    for (let i = 1; i <= Math.abs(number); i++) {
        if (number % i === 0) {
            document.write(i + ' ', -i + ' ');
        }
    }
}
