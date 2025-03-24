//thêm dữ  liệu
localStorage.setItem("number", 10);
localStorage.setItem("userName", "Đỗ Công");
localStorage.setItem("userName", "Đỗ Trí");

const user = {
    id: 1,
    userName: "Nguyễn Văn A",
    age: 21,
};



// lưu dữ liệu dạng object
localStorage.setItem("user", JSON.stringify(user));


//2 lấy dữ liệu từ localStorage
const numberLocal = localStorage.getItem("number");
console.log("numberLocal: ", numberLocal);

const userLocal = localStorage.getItem("user");
console.log("userLocal: ", userLocal);

//convert kiểu Json thành kiểu của Js
const userParsed = JSON.parse(userLocal);
console.log("userParsed: ", userParsed);

//3 xoa 1 key trên local
localStorage.removeItem("userName");
localStorage.removeItem("number");

//4 clean local ( hay áp dụng khi đăng xuất)
localStorage.clear();