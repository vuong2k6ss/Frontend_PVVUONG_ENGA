let input = prompt("nhập dãy số: "); 
let isNumber = true;
for (let i = 0; i < input.length; i++) {  
    if (!(input[i] >= '0' && input[i] <= '9')) {  
        isNumber = false;  
        break;  
    }  
}
if (isNumber) {  
    let numArray = input.split("").map(Number); 
    let maxNumber = Math.max(...numArray);  
    console.log(`${maxNumber} là số lớn nhất trong dãy số`);
} else {  
    console.log("dãy số không hợp lệ");
}
