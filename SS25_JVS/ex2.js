function sum(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return " Cả hai tham số không là số nguyên";
    }
    return a + b;
}
console.log(sum(j, 5)); 
console.log(sum(10, -30)); 

