const carts = [];
/**
 * 
 * @param {*} price 
 * @returns 
 */
const addPrice = (price) => {
    //thêm giá vào cuối mảng
    carts.push(price);
    
    //trả về giỏ hàng sau khi thêm
    return carts;
};

const updatePrice = (index, newPrice) => {
    //cập nhật lại giá trị cho phần tử trong mảng
    carts[index] = newPrice;

};

const removePrice = (index) => {
    if(index<0 || index > carts.length){
        return "Vị trí  kh hợp lệ";

    }
        //xoa vị trí phần tử của mảng
        carts.splice(index, 1);
        return carts;
};

const totalPrice = () => {
    let total = 0;

    for(let i = 0;i<carts.length;i++){
        total += carts[i];
    }
    return total;
};


const resultAdd1 = addPrice(10000);
const resultAdd2 = addPrice(20000);
const resultAdd3 = addPrice(30000);

console.log("resultAdd1 = ", resultAdd3);

const resultUpdate1 = updatePrice(0, 40000);

const resultRemove1 = removePrice(0);

const resultTotal = totalPrice();
console.log("resultTotal = ", resultTotal);






