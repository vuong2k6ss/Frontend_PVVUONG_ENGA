let choice;
const products = [];
do {
    choice = +prompt("mời bận nhập lựa chọn");

    switch(choice){
        case 1:
            // lấy dữ liệu
            const productNameInput = prompt("nhập tên sản phẩm: ");
            const productPriceInput = prompt("nhập giá sp;");

            //gom tất cả dữ liệu vào 1 object
            const newProduct = {
                id: 1,
                productname: productNameInput,
                price: productPriceInput,
            }
             products.push(newProduct);
            //push đối tg trên vào trong mảng
            break;
        case 2:
            const idUpdate = +prompt("nhập id sp: ");

            const findIndex = products.findIndex((product) => product.id === idUpdate);

            if(findIndex !== 1){
                const productNameInput = +prompt("nhập tên sp mới: ");
                const productPriceInput = +prompt("nhập giá sp mới: ");
                products[findIndex].productname = productNameInput;
                products[findIndex].price = productPriceInput;
            }else{
                alert("không tìm thấy sp");
            }
            break;
        case 3:
            const idDelete = prompt("nhập id cần xóa: ");
            const findIndexProductDelete = products.findIndex((product

                
            ))

            break;
        case 4:
            console.table(products);
            break;
        case 5:
            break;
        default:
            alert('lựa chọn kh hợp lệ!!');
            break;

    }
} while (choice !==6);