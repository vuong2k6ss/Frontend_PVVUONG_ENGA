let number = +prompt("Nhập vào một số nguyên:");
if (isNaN(number)) {
  document.write("Vui lòng nhập một số nguyên hợp lệ");
} else {
  let isPrime = true;
  if (number < 2) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    alert(`${number} là số nguyên tố.`);
  } else {
    alert(`${number} không phải là số nguyên tố.`);
  }
}
