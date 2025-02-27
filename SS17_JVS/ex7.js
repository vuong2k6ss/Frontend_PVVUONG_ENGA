let number = +prompt("nhập số tiền:");
if(isNaN(number)||number<0){
    alert("nhập lại số tiền hợp lệ");
} else {
    let moneyVNĐ = number.toLocaleString();
    alert(`số tiền: ${moneyVNĐ} VNĐ`);
}
