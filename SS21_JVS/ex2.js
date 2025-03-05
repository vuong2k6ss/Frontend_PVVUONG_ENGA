let sumOdd = 0;
let sumEven = 0;
for (let i = 1; i <= 5; i++) {
    let num = +prompt(`Nhập vào số nguyên thứ ${i}: `);
    if (num % 2 !== 0) sumOdd++;
    if (num % 2 !== 1) sumEven++;
}
document.write("Tổng các số lẻ là: " + sumOdd);
document.write("Tổng các số chẵn là: " + sumEven);