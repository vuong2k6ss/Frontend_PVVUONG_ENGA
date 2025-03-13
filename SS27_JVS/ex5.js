//khai báo hàm
//1. truyền vào tham số  và kích thước mảng con 
//kiểm tra dữ liệu đầu vào(hợp lệ khi là 1 mảng và cấc phần tử là 1 số nguyên kích thước pghair lớn hươn 0)
//duyệt qua mảng 

const splitArray = (array, size) => {
    if(!Array.isArray(array) || !array.some((number) => !Number.isInteger(numbers)) || size <= 0 || !Number.isInteger(size)){
        return "dữ liệu kh hợp lệ!!";
    }


    const childArray = [];
    for(let i =0; i < array.length; i += size){
        childArray.push(array.slice(i, i + size));
        return childArray;
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = splitArray(numbers, 2);// [[1,2,3,], [4,5,6]]

console.log("result: ", result);