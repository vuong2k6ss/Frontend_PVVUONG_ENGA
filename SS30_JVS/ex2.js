let books = [
    { id: 1, name: "Lập trình JS", price: 100000, quantity: 10, category: "Công nghệ" },
    { id: 2, name: "Doraemon", price: 50000, quantity: 20, category: "Truyện tranh" },
    { id: 3, name: "Toán cao cấp", price: 150000, quantity: 5, category: "Giáo trình" },
    { id: 4, name: "Naruto", price: 70000, quantity: 15, category: "Truyện tranh" }
];

let cart = [];

function showCategory(cat) {
    let list = books.filter(function (b) {
        return b.category === cat;
    });

    if (list.length > 0) {
        console.table(list);
    } else {
        console.log("Không có sách trong thể loại này.");
    }
}

function addBook() {
    let id = parseInt(prompt("Nhập ID sách: "));
    let name = prompt("Nhập tên sách: ");
    let price = parseFloat(prompt("Nhập giá sách: "));
    let quantity = parseInt(prompt("Nhập số lượng sách: "));
    let category = prompt("Nhập thể loại sách: ");

    books.push({ id: id, name: name, price: price, quantity: quantity, category: category });
    console.log("Đã thêm sách vào kho.");
}

function searchBook() {
    let keyword = prompt("Nhập ID hoặc tên sách cần tìm: ");
    let results = books.filter(function (b) {
        return b.id == keyword || b.name.toLowerCase().includes(keyword.toLowerCase());
    });

    if (results.length > 0) {
        console.table(results);
    } else {
        console.log("Không tìm thấy sách.");
    }
}

function buyBook() {
    let id = parseInt(prompt("Nhập ID sách muốn mua: "));
    let qty = parseInt(prompt("Nhập số lượng: "));

    let book = books.find(function (b) {
        return b.id === id;
    });

    if (!book) {
        console.log("Không tìm thấy sách.");
        return;
    }

    if (book.quantity < qty) {
        console.log("Không đủ sách trong kho.");
        return;
    }

    book.quantity -= qty;
    let cartItem = cart.find(function (c) {
        return c.id === id;
    });

    if (cartItem) {
        cartItem.quantity += qty;
    } else {
        cart.push({ id: id, name: book.name, price: book.price, quantity: qty });
    }

    console.log("Đã thêm vào giỏ hàng.");
}

function sortBooks(order) {
    if (order === "1") {
        books.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (order === "2") {
        books.sort(function (a, b) {
            return b.price - a.price;
        });
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }
    console.table(books);
}

function totalCart() {
    let totalQty = 0;
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        totalQty += cart[i].quantity;
        totalPrice += cart[i].price * cart[i].quantity;
    }

    console.log("Tổng số sách đã mua: " + totalQty);
    console.log("Tổng tiền: " + totalPrice + " VND");
}

function totalStock() {
    let total = 0;
    for (let i = 0; i < books.length; i++) {
        total += books[i].quantity;
    }
    console.log("Tổng số sách trong kho: " + total);
}

function main() {
    let choice;
    do {
        choice = prompt(`
1. Hiển thị sách theo thể loại
2. Thêm sách vào kho
3. Tìm kiếm sách
4. Mua sách
5. Sắp xếp sách theo giá
6. Xem tổng tiền giỏ hàng
7. Xem tổng số sách trong kho
8. Thoát

Chọn: `);
        switch (choice) {
            case "1":
                let cat = prompt("Nhập thể loại: ");
                showCategory(cat);
                break;
            case "2":
                addBook();
                break;
            case "3":
                searchBook();
                break;
            case "4":
                buyBook();
                break;
            case "5":
                let order = prompt("Nhập '1' để tăng dần, '2' để giảm dần: ");
                sortBooks(order);
                break;
            case "6":
                totalCart();
                break;
            case "7":
                totalStock();
                break;
            case "8":
                console.log("Thoát.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (choice !== "8");
}

main();
