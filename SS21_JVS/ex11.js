let day = +prompt("nhập ngày sinh:");
let month = +prompt("nhập tháng sinh:");
let date = "";
if (isNaN(day) || isNaN(month) || day < 1 || month < 1 || month > 12) {
    document.write("vui lòng nhập ngày tháng hợp lệ!");
} else {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        date = "Bảo Bình";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        date = "Song Ngư";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        date = "Bạch Dương";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        date = "Kim Ngưu";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        date = "Song Tử";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        date = "Cự Giải";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        date = "Sư Tử";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        date = "Xử Nữ";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        date = "Thiên Bình";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        date = "Bọ Cạp";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        date = "Nhân Mã";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        date = "Ma Kết";
    } else {
        date = "ngày hoặc tháng không hợp lệ!";
    }
    document.write(`cung hoàng đạo của bạn là: ${date}`);
}
