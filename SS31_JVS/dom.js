// sử dụng theo id thông qua getElementByid
const heading1 =document.getElementById("heading-1")
console.log("heading-1: ", heading1);

//lấy theo getElementsByClassName
const cources = document.getElementsByClassName("cource");
console.log("cources: ", cources);

//lấy thông qua querySelector
const listProductElement = document.querySelector("#list-product");
console.log("listProductElement: ", listProductElement);

//querySelectorAll  note list gạn chế chức năng
const productItem = document.querySelectorAll(".product");
console.log("productItem: ", productItem);

// lấy ra tất cả các thẻ li có trong trang
const listLiTags = document.querySelector("li");
console.log("listLitags: ", listLiTags);

// lấy ra input có tên email
const emailElement = document.querySelector("input[name = 'email']");

const products = document.querySelector("#list-product li");
console.log("products: ", products);


const userNameElement = document.querySelector("username");
console.log(userNameElement.innerText);
console.log(userNameElement.textContent);
console.log(userNameElement.innerHTML);

// sự khác nhau giữa innerText, textContent, innerHTMl
const demoElement = document.querySelector("#demo");
console.log("innerText: ", demoElement.innerText);
console.log("textContent: ", demoElement.textContent);
console.log("innerHTML: ", demoElement.innerHTML);


//classlist
const formElement = document.querySelector("#form");
//thêm class vào 1 phần tử
formElement.classList.add("form-add")
//xóa class khỏi 1 phần tử
formElement.classList.remove("form");
// kiểm tra class đã tồn tại trong phần tử chưa
formElement.classList.contains("hidden");
// thêm/xóa class nếu nó đã/chưa tồn tại
formElement.classList.toggle("hidden");
