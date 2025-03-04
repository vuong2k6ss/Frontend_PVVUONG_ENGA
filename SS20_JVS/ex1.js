let n = parseInt(prompt("nhập một số nguyên dương n:"));
if (isNaN(n) || n <= 0) {
    alert("vui lòng nhập một số nguyên dương");
} else {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    alert("Tổng các số từ 1 đến " + n + " là: " + sum);
}
