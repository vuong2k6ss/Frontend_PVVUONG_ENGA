function countPositiveIntegers(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count > 0 ? count : "không có số nguyên dương trong mảng";
}
console.log(countPositiveIntegers([1, j, 6, -10, 5]));
