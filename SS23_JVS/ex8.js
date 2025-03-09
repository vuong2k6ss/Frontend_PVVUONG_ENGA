let n = +prompt("Nhập số lượng phần tử của mảng:");
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(+prompt(`Nhập số thứ ${i + 1}:`));
}
let isFibonacci = true; 
if (n < 3) {
    isFibonacci = false;
} else {
    for (let i = 2; i < n; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false; 
            break;
        }
    }
}
console.log("Mảng đã nhập:", arr);
if (isFibonacci) {
    console.log(" Mảng này là một dãy số Fibonacci");
} else {
    console.log(" Mảng này KHÔNG phải là một dãy số Fibonacci");
}