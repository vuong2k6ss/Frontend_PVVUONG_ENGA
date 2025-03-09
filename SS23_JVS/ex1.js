let number = [1, 22, 12, 8, 7, 9, 26, 5, 7, 10]; 
let result = []; 
for (let i = 0; i < number.length; i++) {
    if (number[i] > 10) {
        result.push(number[i]); 
    }
}
if (result.length > 0) {
    console.log(result.join(" ")); 
} else {
    console.log("Không có số nào lớn hơn 10");
}
