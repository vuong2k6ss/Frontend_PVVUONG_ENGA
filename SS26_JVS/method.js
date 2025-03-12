const numbers = [1,2,3,4,5,6,7,8,9,10];

//foreach
numbers.forEach(function(value, index){
    console.log("Value - index - thisArray: ", value, index);
});

//hàm filter trả về mảng mới thỏa mãn ddkien nếu kh có ptu nào thì trả về rỗng
//cách 1
// const evenNumbers = numbers.filter((value, index) => {
//     return value % 2 === 0;
// })
// console.log("evenNumbers: ", evenNumbers);
//cách 2 ngắn gọn hơn
const evenNumbers = numbers.filter((value, index) => value % 2 === 0);
console.log("evenNumbers: ", evenNumbers);


//tìm kiếm một phần tử bất kì trong mảng, nếu kh có trả về null
const findNumbers = numbers.find((value) => value === 1);
console.log(findNumbers);


//map lặp qua các phần tử trả về 1 mảng mới có số lượng phần tử = mảng gốc, nhưng đã được chỉnh sủa
const newArray = numbers.map((value, index) => value * 2);
console.log("mảng mới: ", newArray);



const students = ["nguyễn văn a", "tran anh tu", " le thi a"];
const htmls = students.map((value, index) => {
    return ` 
        <li>${value}</li>
    `;
})
document.write("htmls: ",htmls);


//reduce 
const carts= [100, 200, 300, 400, 500];

//cách 1
// const totalCart = carts.reduce((previousValue, currentValue, index) => {
//     console.log(index, previousValue, currentValue);
//     return previousValue + currentValue;
// }, 0);
//cách 2
const totalCart = carts.reduce((previousValue, currentValue, index) =>  previousValue + currentValue, 0);


// kiểm tra xem mảng có tất là chắn hay không trả về đúng or sai: HÀM EVERY
const score = [2,4,6,8,10];
const checkAllEven = score.every((value) => value % 2 === 0);
console.log(checkAllEven);
//hàm .some là một vài khác every code tương tự hàm every trên cũng trả về kieur boolean

//hàm fill thay thể tất cả giá trị về 1 giá trị
score.fill(0, 0, score.length);

//includes
//split dùng để chuyển đổi chuỗi thành mảng dựa trên điểm chung ví dụ như dấu cách hoac dấu phẩy
//join chuyển đổi mảng thành chuỗi
const company = "rikkei education 1";
company.split(" ");






