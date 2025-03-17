const products = []
let choice;

function addProduct() {
    let name = prompt("Mời bạn nhập tên sản phẩm")
    let price = +prompt("Mời bạn nhập giá sản phẩm")
    let quantity = +prompt("Mời bạn nhập số lượng sản phẩm trong kho")

    let newProduct = {
        id : Math.ceil(Math.random()*100000) ,
        name : name,
        price : price,
        quantity : quantity
    }
    products.push(newProduct);

    console.log("Thêm liên hệ thành công");
    
}

function viewProduct() {
    if (products.length === 0) {
        console.log("Danh sách trống");
        return;
    }
    
    for (let key in products) {
        console.log(`
            ID: ${products[key].id}
            Name: ${products[key].name}
            Price: ${products[key].price}
            Quantity: ${products[key].quantity}`);
    }
    
    
}

function showProduct(array , showId) {

    let show = products.findIndex((el) => el.id === showId);
    
    if ( show !== -1){

        console.log(`
             ID: ${products[show].id}
             Name: ${products[show].name}
             Price: ${products[show].price}
             Quantity: ${products[show].quantity}
            `);

    }else{
        console.log(` không tìm thấy id`);
        
    }
}

function updateProduct(array , updateId) {
    let update = products.findIndex((el) => el.id === updateId );
    if ( update !== -1){

        products[update].name = prompt ("tên mới")
        products[update].price = prompt ("giá mới")
        products[update].quantity = prompt ("số lượng mới")

    }else{
        console.log(` Không tim thấy id`);
        
    }
    
}

function deleteProduct(array , deleteId) {
    let deletee = products.findIndex((el) => el.id === deleteId);
    if ( deletee !== -1 ){
        products.splice(deletee,1)
        console.log(` Xóa thành công`);
        

    }else{
        console.log(` Không tìm thấy id `);
        
    }
}

function filterProduct() {
    let maxPrice = +prompt (` mời bạn nhập giá tiền lớn nhất`)
    let minPrice = +prompt (` Mời bạn nhập giá tiền nhỏ nhất`)

    let filterPrice = products.filter((el) => el.price >= minPrice && el.price <= maxPrice);

    if ( filterPrice.length > 0 ){
        console.table(filterPrice);

    }else{
        console.log(` Không có sản phẩm trong khoảng giá`);
        
    }
}

do {
    choice = +prompt (`
        1.Thêm sản phẩm vào danh sách sản phẩm.
        2.Hiển thị tất cả sản phẩm.
        3.Hiển thị chi tiết sản phẩm theo id.
        4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
        5.Xóa sản phẩm theo id.
        6.Lọc sản phẩm theo khoảng giá.
        7.Thoát.
        `)
    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            viewProduct();
            break;
        case 3:
        let showIdProduct = +prompt(` Mời bạn nhập id sản phẩm cần tìm`);
        showProduct(products , showIdProduct);
            break;
        case 4:
        let updateIdProduct = +prompt(` Mời bạn nhập id cần sửa`);
        updateProduct(products , updateIdProduct)
            break;
        case 5:
        let deleteIdProduct = +prompt (` Mời bạn nhập id cần xóa`);
        deleteProduct(products , deleteIdProduct);
            break;
        case 6:
        
        filterProduct();
            break;
        case 7:
            alert(` Thoát chương trình`)
            break;

        default:
            alert(` Lựa chọn không hợp lệ`)
            break;
    }
} while (choice !== 7);