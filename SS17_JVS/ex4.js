let number = +prompt('nhập số muốn khai căn: ');
if (isNaN(number)){
    alert(`giá trị nhập không phải số`);
}else{
    let squareRoot = Math.sqrt(number)
    alert(`căn bậc 2 của ${number} là ${squareRoot}`);
}