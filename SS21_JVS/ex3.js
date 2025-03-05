let passWord = "ahihi2k6";
let input;
do {
    input = prompt("nhập mật khẩu:");
    if (input !== passWord) {
        alert("mật khẩu sai, thử lại");
    }
} while (input !== passWord);
alert("mật khẩu chính xác!");

