let n = parseInt(prompt("Nhập số phần tử của mảng:"));
if (isNaN(n) || n < 0) {
  alert("Số lượng phần tử không hợp lệ");
} else {
  let arr = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    let value = parseInt(prompt(`Nhập phần tử arr[${i}]:`));
    while (isNaN(value)) {
      value = parseInt(prompt(`Giá trị không hợp lệ! Nhập lại phần tử arr[${i}]:`));
    }
    arr.push(value);
    if (value < 0) count++;
  }

  alert(count !== 0 ? count : "Không có phần tử nhỏ hơn 0");
}
