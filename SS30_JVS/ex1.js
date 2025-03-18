let products = [
    { id: 1, name: "Mèn mén", category: "Mông", price: 20000, quantity: 20 },
    { id: 2, name: "Mứt", category: "Kinh", price: 80000, quantity: 21 },
    { id: 3, name: "Cơm lam", category: "Mông", price: 40000, quantity: 15 },
    { id: 4, name: "Bánh đậu xanh", category: "Kinh", price: 60000, quantity: 30 }
];

let cart = [];

function showCategory(cat) {
    let list = products.filter(p => p.category === cat);
    if (list.length > 0) {
        console.table(list);
    } else {
        console.log("Không có sản phẩm.");
    }
}

function buy(id, qty) {
    let p = products.find(p => p.id === id);
    if (!p) {
        console.log("Không tìm thấy sản phẩm.");
        return;
    }
    if (p.quantity < qty) {
        console.log("hết hàng");
        return;
    }

    p.quantity -= qty;
    let item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += qty;
    } else {
        cart.push({ id, name: p.name, price: p.price, quantity: qty });
    }
    console.log("Đã thêm vào giỏ.");
}

function sortPrice(order) {
    if (order === "1") {
        products.sort((a, b) => a.price - b.price);
    } else if (order === "2") {
        products.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }
    console.table(products);
}

function totalCost() {
    let total = 0;
    for (let i of cart) {
        total += i.price * i.quantity;
    }
    console.log(`Tổng tiền: ${total} VND`);
}

function main() {
    let choice;
    do {
        alert(`
1. Hiển thị sản phẩm theo danh mục
2. Mua sản phẩm
3. Sắp xếp sản phẩm theo giá
4. Xem tổng tiền giỏ hàng
5. Thoát
`);
        choice = prompt("Chọn: ");
        switch (choice) {
            case "1":
                let cat = prompt("Nhập danh mục: ");
                showCategory(cat);
                break;
            case "2":
                let id = parseInt(prompt("Nhập ID: "));
                let qty = parseInt(prompt("Nhập số lượng: "));
                buy(id, qty);
                break;
            case "3":
                let order = prompt("Nhập '1' để tăng dần, '2' để giảm dần: ");
                sortPrice(order);
                break;
            case "4":
                totalCost();
                break;
            case "5":
                console.log("Thoát.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (choice !== "5");
}

main();
