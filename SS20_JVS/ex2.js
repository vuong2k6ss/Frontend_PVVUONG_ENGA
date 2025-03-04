let n = parseInt(prompt("nhập một số nguyên dương n:"));
if (isNaN(n) || n <= 0) {
    alert("vui lòng nhập một số nguyên dương");
} else {
    let result = "";
    for (let i = 5; i <= n; i += 5) {
        if (result.length === 0) {
            result = i;
        } else {
            result = result + ", " + i;
        }
    }
    if (result.length === 0) {
        alert("không có số nào chia hết cho 5 trong khoảng từ 1 đến " + n);
    } else {
        alert("các số chia hết cho 5 từ 1 đến " + n + " là: " + result);
    }
}
