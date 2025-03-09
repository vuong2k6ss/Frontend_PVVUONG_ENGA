let arr = ['a', 2, 'c', 8, 'd', 6, 9];
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") { 
        result.push(arr[i]);
    }
}
if (result.length > 0) {
    console.log(`Ký tự số trong mảng là: ${result.join(" ")}`);
} else {
    console.log("Không có ký tự số");
}
