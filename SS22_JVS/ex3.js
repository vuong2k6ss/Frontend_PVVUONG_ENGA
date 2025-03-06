let input = prompt("nhập dãy số: "); 
let isNumber = true;  
for (let i = 0; i < input.length; i++) {  
    if (input[i] < '0' || input[i] > '9') {  
        isNumber = false;  
        break;  
    }  
}
if (isNumber) {  
    let reversed = "";  
    for (let i = input.length - 1; i >= 0; i--) {  
        reversed += input[i];  
    }  
    console.log(reversed);  
} else {  
    console.log("dãy không hợp lệ");  
}
