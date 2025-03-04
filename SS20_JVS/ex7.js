let n = +prompt("Nhập số n: ");
let fib = [1, 1];
if (n < 2 || isNaN(n)) {
    document.write("Vui lòng nhập số hợp lệ");
} else {
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.write(fib.join(", "));
}