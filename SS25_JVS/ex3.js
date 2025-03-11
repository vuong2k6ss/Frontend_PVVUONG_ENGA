function evenArray(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers.length > 0 ? evenNumbers : "Không có số chẵn trong mảng!";
}
console.log(evenArray([1, 2, 3, 4, 5]));
