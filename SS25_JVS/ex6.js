function isPalindrome(str) {
    if (typeof str !== "string") {
        return "Dữ liệu không hợp lệ";
    }

    let length = str.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (str[i] !== str[length - 1 - i]) {
            return "không phải chuỗi đối xứng";
        }
    }
    return "là chuỗi đối xứng";
}
let input = prompt("Nhập một chuỗi:");
console.log(isPalindrome(input));