let number = [1, 22, 12, 8, 7, 9, 26, 5, 7, 10]; 
let max = number[0]; 
let index = 0; 
for (let i = 1; i < number.length; i++) {
    if (number[i] > max) {
        max = number[i];
        index = i;
    }
}
console.log("Phần tử lớn nhất:", max);
console.log("Vị trí của phần tử lớn nhất:", index);
