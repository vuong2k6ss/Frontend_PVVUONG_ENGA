document.write("giải phương trình bậc 2: ax² + bx + c = 0<br>");
let a;
do {
    a = +prompt("nhập a:");
    if (a === 0) {
        alert("a phải khác 0, nhập lại");
    }
} while (a === 0);
let b = +prompt("nhập b:");
let c = +prompt("nhập c:");
document.write(`với a = ${a}, b = ${b}, c = ${c} <br>`);
let delta = b*b - 4*a*c;
if(delta < 0){
    document.write("phương trình vô nghiệm.");
}else if (delta === 0) {
    let x = -b / (2 * a);
    document.write("phương trình có nghiệm kép: x = " + x);
}else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write("phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
}




