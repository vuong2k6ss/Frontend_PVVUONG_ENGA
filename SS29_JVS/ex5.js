function checkIsEmpty(field){
    if(field === "" || filed === null || field === undefined){
        return true;
    }
    return false;
}

function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;

    return emailRegex.test(email);
}

function valiatePassword(password){
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    return passwordRegex.test(password);
}

function checkEmailExited(array, email){
    if(!Array.isArray(array)){
        alert("đây kh fai là 1 mảng");
    }
    const findEmail = array.find(element => element.email === email);

    if(findEmail){
        return true;
    }
    return false;
}

const users = [];

// lấy dữ liệu ng dùng
function getInput(){
    const userName = prompt("nhập tên người dung: ");
    const email = prompt("nhập tên người dùng: ");
    const password = prompt("nhập mật khẩu: ");


    if(checkIsEmpty(userName)){
        alert("tên h đc để trống");
    }else if(checkIsEmpty(email)){
        alert("email kh đc để trống");
    }else if(checkIsEmpty(password)){
        alert("mật khẩu kh đc để trống");
    }else{
        if(validateEmail(email)){
            alert("email kh đúng định dạng");
        }else if(valiatePassword(password)){
            alert("mật khẩu không đúng định dạng");
        }else if(checkEmailExited(users, email)){
            alert("email đã tồn tại");
        }else{
            const newUser = {
            id: Math.ceil(Math.random() * 1000000),
            userName,
            email,
            password, 
            };

        }
    }
// valiate dữ liệu ng dùng

}





// lưu dữ liệu vào trong mảng
let choice;
do {
    choice = +prompt("mời bạn nhập lựa chọn: ");

    switch(choice){
        case 1:
            break;
        case 2:
            break;
        case 3:
            alert("thoát ct");
            break;
    }
} while (choice !== 3);