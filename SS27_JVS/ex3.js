function cArea(r) {
    return Math.PI * r * r;
}

function cPeri(r) {
    return 2 * Math.PI * r;
}

function rArea(w, h) {
    return w * h;
}

function rPeri(w, h) {
    return 2 * (w + h);
}

function menu() {
    let choice;
    do {
        choice = parseInt(prompt(
            "Chọn chức năng:\n" +
            "1. Tính diện tích hình tròn\n" +
            "2. Tính chu vi hình tròn\n" +
            "3. Tính diện tích hình chữ nhật\n" +
            "4. Tính chu vi hình chữ nhật\n" +
            "5. Thoát\n" +
            "Nhập lựa chọn: "
        ));

        switch (choice) {
            case 1:
                let r1 = parseFloat(prompt("Nhập bán kính hình tròn: "));
                console.log("Diện tích hình tròn: ", cArea(r1).toFixed(2));
                break;
            case 2:
                let r2 = parseFloat(prompt("Nhập bán kính hình tròn: "));
                console.log("Chu vi hình tròn: ", cPeri(r2).toFixed(2));
                break;
            case 3:
                let w1 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật: "));
                let h1 = parseFloat(prompt("Nhập chiều dài hình chữ nhật: "));
                console.log("Diện tích hình chữ nhật: ", rArea(w1, h1));
                break;
            case 4:
                let w2 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật: "));
                let h2 = parseFloat(prompt("Nhập chiều dài hình chữ nhật: "));
                console.log("Chu vi hình chữ nhật: ", rPeri(w2, h2));
                break;
            case 5:
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
        }
    } while (true);
}

menu();
