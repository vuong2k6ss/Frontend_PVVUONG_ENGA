let n = +prompt("Nhập số phần tử của mảng:");
let arr = [];
let count = 0;
if (!Number.isInteger(n) || n < 0) {
  alert("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
  alert("Mảng không có phần tử");
} else {
  for (let i = 0; i < n; i++) {
    let value = +prompt(`Nhập phần tử arr[${i}]:`);
    arr.push(value);

    if (Number.isInteger(value) && value < 0) {
      count++;
    }
  }
  alert(count !== 0 ? count : "Không có phần tử nhỏ hơn 0");
}
