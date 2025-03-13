function getList() {
    let input = prompt("Nhập danh sách số nguyên, cách nhau bằng dấu phẩy:");
    return input.split(",").map(Number);
}

function avg(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return numbers.length ? sum / numbers.length : 0;
}

function maxEven(numbers) {
    let evens = numbers.filter(num => num % 2 === 0);
    return evens.length ? Math.max(...evens) : "Không có số chẵn.";
}

function minOdd(numbers) {
    let odds = numbers.filter(num => num % 2 !== 0);
    return odds.length ? Math.min(...odds) : "Không có số lẻ.";
}

function menu() {
    let numbers = [];
    let choice;
    do {
        choice = +prompt(
            "Chọn chức năng:\n" +
            "1. Nhập danh sách số nguyên\n" +
            "2. Tính trung bình các số\n" +
            "3. Tìm số chẵn lớn nhất\n" +
            "4. Tìm số lẻ nhỏ nhất\n" +
            "5. Thoát\n" +
            "Nhập lựa chọn: "
        );
        let result;
        switch (choice) {
            case 1:
                numbers = getList();
                console.log("Danh sách số nguyên:", numbers);
                break;
            case 2:
                result = avg(numbers);
                console.log("Trung bình các số là : ", result);
                break;
            case 3:
                result = maxEven(numbers);
                console.log("Số chẵn lớn nhất là : ", result);
                break;
            case 4:
                result = minOdd(numbers);
                console.log("Số lẻ nhỏ nhất là : ", result);
                break;
            case 5:
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
                continue;
        }
    } while (true);
}
menu();
