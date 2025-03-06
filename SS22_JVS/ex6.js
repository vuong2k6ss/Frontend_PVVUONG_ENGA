let array = [1, 3, 4, 2, 4, 5, 7, 8, 3, 3];
let input = parseInt(prompt("nhập một số:"));
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === input) {
        count++;
    }
}
if (count > 0) {
    console.log(`số ${input} xuất hiện ${count} lần trong mảng`);
} else {
    console.log(`số ${input} không tồn tại trong mảng`);
}
