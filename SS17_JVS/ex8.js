let day1 = prompt("nhập lần lượt năm-tháng-ngày thứ nhất: ");
let day2 = prompt("nhập lần lượt năm-tháng-ngày thứ hai: ");
let d1 = new Date(day1);
let d2 = new Date(day2);
let timeDiff = Math.abs(d2 - d1);
let dayDiff = Math.ceil(timeDiff / (1000*60*60*24));
alert(`Độ lệch là ${dayDiff} ngày`);