function checkEmail(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let Emails = arr.filter((email) => email.includes("@") && !email.includes(" "));
    return Emails;
}
console.log(checkEmail(["john.doe@gmail.com", "invalidemail.com","hello@domain.net","space@out.com"]));  
