let sumOdd = 0;
for (let i = 1; i <= 5; i++) {
    let num = +prompt(`Nhập vào số nguyên thứ ${i}: `);
    if (num % 2 !== 0) sumOdd += num;
}
document.write("Tổng các số lẻ là: " + sumOdd);
