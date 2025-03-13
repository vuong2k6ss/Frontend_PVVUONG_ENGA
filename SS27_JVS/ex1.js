function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 !== 0 ? num1 / num2 : "Lỗi: Không thể chia cho 0.";
}

function calculator() {
    let choice;
    do {
        choice = +prompt(
            "Chọn chức năng:\n" +
            "1. Cộng hai số\n" +
            "2. Trừ hai số\n" +
            "3. Nhân hai số\n" +
            "4. Chia hai số\n" +
            "5. Thoát\n" +
            "Nhập lựa chọn: "
        );
        let num1, num2, result;
        
        switch (choice) {
            case 1:
                num1 = parseFloat(prompt("Nhập số thứ nhất:"));
                num2 = parseFloat(prompt("Nhập số thứ hai:"));
                result = add(num1, num2);
                break;
            case 2:
                num1 = parseFloat(prompt("Nhập số thứ nhất:"));
                num2 = parseFloat(prompt("Nhập số thứ hai:"));
                result = subtract(num1, num2);
                break;
            case 3:
                num1 = parseFloat(prompt("Nhập số thứ nhất:"));
                num2 = parseFloat(prompt("Nhập số thứ hai:"));
                result = multiply(num1, num2);
                break;
            case 4:
                num1 = parseFloat(prompt("Nhập số thứ nhất:"));
                num2 = parseFloat(prompt("Nhập số thứ hai:"));
                result = divide(num1, num2);
                break;
            case 5:
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
                continue;
        }
        console.log(`Kết quả: ${result}`);
    } while (true);
}

calculator();