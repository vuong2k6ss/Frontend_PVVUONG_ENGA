let number = +prompt("Nhập một số nguyên:");
if(isNaN(number) || number < 1 || !Number.isInteger(number)){
    document.write("vui lòng nhập số nguyên dương");
}else{
    let isPrime = true;
    if(number === 1){
        isPrime = false;
    }else{
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if(isPrime){
        document.write(`${number} là số nguyên tố.`);
    }else{
        document.write(`${number} không phải là số nguyên tố.`);
    }
}
