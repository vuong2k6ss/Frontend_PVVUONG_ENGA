let choice;
const arr = [];

do {
    choice = +prompt(
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất\n" +
        "4. Tính tổng các phần tử\n" +
        "5. Tìm số lần xuất hiện của một phần tử\n" +
        "6. Sắp xếp mảng tăng dần\n" +
        "7. Thoát chương trình\n" +
        "Mời bạn nhập yêu cầu:"
    );

    switch (choice) {
        case 1:
            let n = +prompt("Nhập số lượng phần tử:");
            arr.length = 0;
            for (let i = 0; i < n; i++) {
                let num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
                arr.push(+num);
            }
            alert("Mảng đã nhập thành công!");
            break;
        case 2:
            alert("Mảng đã nhập: " + (arr.join(", ")));
            break;
        case 3:
                alert(`Số lớn nhất: ${Math.max(...arr)}\nSố nhỏ nhất: ${Math.min(...arr)}`);
            break;
        case 4:
            alert("Tổng các phần tử: " + arr.reduce((a, b) => a + b, 0));
            break;
        case 5:
                let searchNum = +prompt("Nhập số cần tìm:");
                let count = arr.filter(num => num === searchNum).length;
                alert(`Số ${searchNum} xuất hiện ${count} lần.`);
            break;
        case 6:
            
            arr.sort((a, b) => a - b);
            alert("Mảng sau khi sắp xếp tăng dần: " + arr.join(", "));
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }

} while (choice !== 7);
