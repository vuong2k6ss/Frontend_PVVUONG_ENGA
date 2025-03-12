let arr = []
let number = +prompt("Nhap so phan tu muon nhap")
if (number <= 0 || isNaN(number)) {
    console.log(`Mang khong hop le`);
} else {
    for (let i = 0; i < number; i++) {
        arr[i] = +prompt(`Nhap phan tu thu ${i + 1}`)
        if (isNaN(arr[i])) {
            console.log(`khong hop le`);
            break
        }
    }

    if (arr.length === 0) {
        console.log(`Mang khong hop le`);
    } else {
        let squaredNumbers = arr.map((value) => value ** 2)
        let evenNumbers = squaredNumbers.filter((value) => value % 2 === 0)
        console.log(evenNumbers);
    }
}
