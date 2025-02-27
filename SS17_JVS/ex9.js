document.write("phương trình bậc 2: ax^2 + bx + c = 0");
let a = +prompt('nhập a: ');
let b = +prompt('nhập b: ');
let c = +prompt('nhập c: ');
let delta = b**2-4*a*c;
let sqrtDelta = Math.sqrt(delta);
let x1 = (-b + sqrtDelta) / 2*a;
let x2 = (-b - sqrtDelta) / 2*a;
alert(`phương trình có 2 nghiệm x1 = ${x1},   x2 = ${x2}`);