function isPrime(n) {
    if (!Number.isInteger(n) || n <= 0) {
        return "dữ liệu không hợp lệ";
    }
    if (n < 2) {
        return "không phải là số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return "không phải là số nguyên tố";
        }
    }
    return "là số nguyên tố";
}

let input = prompt("Nhập một số nguyên dương:");
let n = Number(input);
console.log(isPrime(n)); 
