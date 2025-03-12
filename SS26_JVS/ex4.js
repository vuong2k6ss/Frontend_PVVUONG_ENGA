function isPrimes(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }
    return arr.filter((n) => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    });
}
console.log(isPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  
