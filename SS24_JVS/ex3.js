let numbers = [];
let choice;
let max;
let sum = 0;
let avg = 0;

do {
    choice = +prompt(`
        1. Nhap mang so nguyen
        2. Hien thi mang
        3. Tim phan tu lon nhat trong mang va in ra chi so cua no
        4. Tinh tong va trung binh cong cua cac so duong trong mang
        5. Dao nguoc mang
        6. Kiem tra mang co doi xung khong
        7. Thoat chuong trinh
        =======================================
        Lua chon cua ban`);

    switch (choice) {
        case 1:
            let n = +prompt(`Moi ban nhap so phan tu cua mang`);
            for (let i = 0; i < n; i++) {
                numbers[i] = +prompt(`Nhap phan tu thu ${i + 1}`);
                if (isNaN(numbers[i])) {
                    console.log(`Phan tu khong hop le!`);
                    break;
                }
            }
            break;
        case 2:
            console.log(numbers);
            break;
        case 3:
            let max = numbers[0];
            let index = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] > max) {
                    max = numbers[i];
                    index = i;
                }
            }
            console.log(`Phan tu lon nhat trong mang: ${max} voi vi tri index la ${index}`);
            break;
        case 4:
            sum = 0;
            let count = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] > 0) {
                    sum += numbers[i];
                    count++;
                }
            }
            if (count > 0) {
                avg = sum / count;
                console.log(`Tong cac so duong trong mang la ${sum}`);
                console.log(`Trung binh cong cac so duong trong mang la ${avg}`);
            } else {
                console.log(`Mang khong co so duong`);
            }
            break;
        case 5:
            numbers.reverse();
            console.log(`Mang sau khi dao nguoc la: `);
            console.log(numbers);
            break;
        case 6:
            let reversedArray = [...numbers].reverse();
            let isSymmetric = numbers.every((value, index) => value === reversedArray[index]);

            if (isSymmetric) {
                console.log("Mang la mang doi xung.");
            } else {
                console.log("Mang khong phai la mang doi xung.");
            }
            break;
        case 7:
            console.log(`Thoat chuong trinh`);
            break;
        default:
            console.log(`Lua chon khong hop le`);
            break;
    }
} while (choice !== 7);
