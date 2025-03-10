let choice;
let arr2 = [];
let row = 0, col = 0; 

do {
    choice = +prompt(`1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình`);

    switch (choice) {
        case 1:
            row = +prompt('Nhập số hàng: ');
            col = +prompt('Nhập số cột: ');
            arr2 = []; 
            for (let i = 0; i < row; i++) {
                let arrRow = [];
                for (let j = 0; j < col; j++) {
                    arrRow.push(+prompt(`Nhập giá trị tại vị trí arr2[${i}][${j}]:`));
                }
                arr2.push(arrRow);
            }
            break;

        case 2:
                console.log("Mảng 2 chiều đã nhập:");
                for (let i = 0; i < row; i++) {
                    for (let j = 0; j < col; j++) {
                        console.log(`arr2[${i}][${j}] = ${arr2[i][j]}`);
                    }
                }
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    sum += arr2[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng:", sum);
            break;
        case 4:
            let maxVal = arr2[0][0]; 
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (arr2[i][j] > maxVal) {
                    maxVal = arr2[i][j];
                }
            }
        }
        console.log(`Phần tử lớn nhất: ${maxVal} tại vị trí [${maxRow}][${maxCol}]`);
            break;
        case 5:

            break;

        case 6:
            for (let i = 0; i < row; i++) {
                arr2[i].reverse();
            }
            console.log("Mảng sau khi đảo ngược các hàng:", arr2);
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }

} while (choice !== 7);
