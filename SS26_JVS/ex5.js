function findMaxNumber() {
    let input = prompt("Nhập vào 10 số nguyên cách nhau bằng dấu phẩy:");
    let arr = input.split(",").map(Number);
    if (arr.length !== 10 || arr.some(isNaN)) {
        return "Dữ liệu không hợp lệ, vui lòng nhập đúng 10 số nguyên.";
    }
    let maxNumber = Math.max(...arr);
    let index = arr.indexOf(maxNumber);
    
    return `Số lớn nhất là ${maxNumber} tại vị trí ${index}`;
}
console.log(findMaxNumber());
