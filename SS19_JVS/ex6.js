let a = parseFloat(prompt("nhap so a:"));
let b = parseFloat(prompt("nhap so b:"));
let c = parseFloat(prompt("nhap so c:"));

if (a == 0) {
    document.write(`day k phai phuong trinh bac 2`);
} else {
    let delta = b * b - 4 * a * c;
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.write(`pt co 2 nghiem phan biet: x1 = ${x1}, x2 = ${x2}`);
    } else if (delta == 0) {

        let x = -b / (2 * a);
        document.write(`Pt co nghiem kep: x = ${x}`);
    } else {
    
        document.write(`Pt vo nghiem.`);
    }
}