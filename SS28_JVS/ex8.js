const employees = [];

function addEmployee(id, name, position, salary) {
    employees.push({ id, name, position, salary });
    console.log("Nhân viên đã được thêm.");
}

function deleteEmployee(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        const confirmDelete = confirm(`Bạn có chắc muốn xóa nhân viên ${employees[index].name} không?`);
        if (confirmDelete) {
            employees.splice(index, 1);
            console.log("Nhân viên đã bị xóa.");
        } else {
            console.log("Hủy xóa nhân viên.");
        }
    } else {
        console.log("Không tìm thấy nhân viên có ID:", id);
    }
}

function updateSalary(id, newSalary) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        employee.salary = newSalary;
        console.log("Mức lương đã được cập nhật.");
    } else {
        console.log("Không tìm thấy nhân viên có ID:", id);
    }
}

function searchEmployeeByName(name) {
    const results = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
    if (results.length > 0) {
        console.log("Nhân viên tìm thấy:", results);
    } else {
        console.log("Không có nhân viên nào có tên:", name);
    }
}

function showMenu() {
    let choice;
    do {
        choice = prompt(
            "Chọn chức năng:\n1. Thêm nhân viên\n2. Xóa nhân viên\n3. Cập nhật lương\n4. Tìm nhân viên\n5. Thoát"
        );
        switch (choice) {
            case "1":
                const id = prompt("Nhập ID:");
                const name = prompt("Nhập tên:");
                const position = prompt("Nhập chức vụ:");
                const salary = parseFloat(prompt("Nhập lương:"));
                addEmployee(id, name, position, salary);
                break;
            case "2":
                const delId = prompt("Nhập ID nhân viên cần xóa:");
                deleteEmployee(delId);
                break;
            case "3":
                const upId = prompt("Nhập ID nhân viên cần cập nhật lương:");
                const newSalary = parseFloat(prompt("Nhập lương mới:"));
                updateSalary(upId, newSalary);
                break;
            case "4":
                const searchName = prompt("Nhập tên nhân viên cần tìm:");
                searchEmployeeByName(searchName);
                break;
            case "5":
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (choice !== "5");
}

showMenu();
