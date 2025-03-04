let num = prompt("nhập vào một chuỗi số nguyên:");
if (!num || isNaN(num)|| num.length === 1 ) {
    alert(" chuỗi số không hợp lệ");
} else {
    let reversedNum = "";
    for (let i = num.length - 1; i >= 0; i--) {
        reversedNum += num[i];
    }
    if (num === reversedNum) {
        alert(num + " là số đối xứng");
    } else {
        alert(num + " không phải số đối xứng");
    }
}
