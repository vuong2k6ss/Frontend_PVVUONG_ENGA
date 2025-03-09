let n = +prompt("Nhập số lượng phần tử của mảng:");
if (Number.isInteger(n) && n > 0) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`Nhập phần tử arr[${i}]:`); 
  }
  let max = arr[0];
  let second = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second && arr[i] < max) {
      second = arr[i];
    }
  }
  if (second === max) {
    console.log("Không có số lớn thứ hai");
  } else {
    console.log(`Số lớn thứ hai trong mảng là: ${second}`);
  }
}

