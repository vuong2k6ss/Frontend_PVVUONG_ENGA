function inputStudents() {
    let num = parseInt(prompt("Nhập số lượng sinh viên: "));
    let students = [];
    for (let i = 0; i < num; i++) {
        let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
        students.push(name);
    }
    return students;
}

function displayStudents(students) {
    console.log("Danh sách sinh viên:");
    students.forEach((student, index) => {
        console.log(`${index + 1}. ${student}`);
    });
}

function findStudent(students) {
    let name = prompt("Nhập tên sinh viên cần tìm:");
    let found = students.filter(student => student.toLowerCase() === name.toLowerCase());
    if (found.length > 0) {
        console.log("Sinh viên tìm thấy:", found.join(", "));
    } else {
        console.log("Sinh viên không có trong danh sách.");
    }
}

function deleteStudent(students) {
    let name = prompt("Nhập tên sinh viên cần xóa:");
    let index = students.findIndex(student => student.toLowerCase() === name.toLowerCase());
    if (index !== -1) {
        students.splice(index, 1);
        console.log("Đã xóa sinh viên thành công.");
    } else {
        console.log("Không tìm thấy sinh viên để xóa.");
    }
}

function menu() {
    let students = [];
    let choice;
    do {
        choice = parseInt(prompt(
            "Chọn chức năng:\n" +
            "1. Nhập danh sách sinh viên\n" +
            "2. Hiển thị danh sách sinh viên\n" +
            "3. Tìm sinh viên theo tên\n" +
            "4. Xóa sinh viên khỏi danh sách\n" +
            "5. Thoát\n" +
            "Nhập lựa chọn: "
        ));

        switch (choice) {
            case 1:
                students = inputStudents();
                break;
            case 2:
                displayStudents(students);
                break;
            case 3:
                findStudent(students);
                break;
            case 4:
                deleteStudent(students);
                break;
            case 5:
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
        }
    } while (true);
}

menu();
