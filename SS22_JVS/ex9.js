let number = [3,4,7,9,4,7,4,5,3,6];
console.log(number);
for (let i = 0; i < number.length; i++) {
    for (let j = i+1; j < number.length; j++) {
        if (number[i] === number[j]) {
            number.splice(j, 1);
        }
    }
}
console.log(number.sort());