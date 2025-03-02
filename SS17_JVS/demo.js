let r = +prompt("Nhap ban kinh")
let h = +prompt("Nhap chieu cao")
let S_xq = 2 * Math.PI * r * h;
let S_tp = S_xq + 2 * Math.PI * r**2;
let V = Math.PI * r**2 * h
let C = 2 * Math.PI *r;
document.write(`Diện tích xung quanh : ${S_xq}<br>`);
document.write(`Diện tích toàn phần : ${S_tp}<br>`);
document.write(`Thể tích hình trụ : ${V}<br>`);
document.write(`Chu vi đáy : ${C}<br>`);