// Truy xuất vào trong các phần tử của DOM
const formElement = document.querySelector("#form");
const contentInputElement = document.querySelector("#content");
const dueDateInputElement = document.querySelector("#dueDate");
const statusSelectElement = document.querySelector("#status");
const userNameInputElement = document.querySelector("#userName");
const tbodyElement = document.querySelector("#tbody");
const btnSubmit = document.querySelector("#btnSubmit");

let typeForm = "add"; // Loại của form
let indexEdit = null; // Id cần edit

// Lấy dữ liệu từ local
const taskListLocal = JSON.parse(localStorage.getItem("tasks")) || [];

// Hàm reset các giá trị trong form
function handleResetForm() {
  contentInputElement.value = "";
  dueDateInputElement.value = "";
  statusSelectElement.value = "";
  userNameInputElement.value = "";
}

// Hàm lưu dữ liệu lên local
function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Lắng nghe sự kiện submit form
formElement.addEventListener("submit", function (event) {
  // Ngăn chặn sự kiện load lại trang khi submit form
  event.preventDefault();

  //   Lấy giá trị trong từng ô input
  const contentValue = contentInputElement.value.trim();
  const dueDateValue = dueDateInputElement.value.trim();
  const statusValue = statusSelectElement.value.trim();
  const userNameValue = userNameInputElement.value.trim();

  //   Validate dữ liệu
  if (!contentValue || !dueDateValue || !statusValue || !userNameValue) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  //   Kiểm tra xem loại của form là gì
  // Nếu là add thì tiến hành thêm, nếu là edit thì tiến hành cập nhật

  if (typeForm === "add") {
    // Thêm
    // Gom nhóm tất cả các input vào trong 1 object
    const task = {
      id: Math.ceil(Math.random() * 10000000),
      content: contentValue,
      dueDate: dueDateValue,
      status: statusValue,
      userName: userNameValue,
    };

    // Lưu trữ dữ liệu lên local
    taskListLocal.push(task);

    // Lưu dữ liệu lên local
    saveData("tasks", taskListLocal);
  } else {
    // Tiến hành cập nhật
    // Gán lại giá trị cho từng ô input
    taskListLocal[indexEdit].content = contentInputElement.value;
    taskListLocal[indexEdit].dueDate = dueDateInputElement.value;
    taskListLocal[indexEdit].status = statusSelectElement.value;
    taskListLocal[indexEdit].userName = userNameInputElement.value;

    // Lưu dữ liệu lên local
    saveData("tasks", taskListLocal);

    // Thay đổi lại type của button
    typeForm = "add";

    //   Thay đổi tiêu đề của button
    btnSubmit.textContent = "Add";
  }

  // Reset các giá trị trong Form
  handleResetForm();

  // Render lại giao diện
  renderTask();
});

// Ham render danh sách task
function renderTask() {
  // Lặp qua các phần tử của mảng và trả về mảng chứa các chuỗi HTML chứa dữ liệu
  const taskHtmls = taskListLocal.map((task, index) => {
    return `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${task.content}</td>
            <td>${new Date(task.dueDate).toLocaleDateString("vi-VN")}</td>
            <td>${task.status}</td>
            <td>${task.userName}</td>
            <td>
            <button onclick="handleEdit(${index})" class="btn btn-warning">Edit</button>
            </td>
            <td>
            <button onclick="handleDelete(${index})" class="btn btn-danger">Delete</button>
            </td>
        </tr>
    `;
  });

  // Chuyển đổi mảng thành chuỗi HTML
  const convertArrayToString = taskHtmls.join("");

  // Gắn chuỗi HTML đó vào trong DOM
  tbodyElement.innerHTML = convertArrayToString;
}

// Hàm Edit task
function handleEdit(index) {
  // Lấy ra các thông tin của task theo index trong mảng

  //   Thay đổi loại của Form
  typeForm = "edit";

  //   Thay đổi tiêu đề của button
  btnSubmit.textContent = "Save";

  //   Cập nhật lại id cần edit
  indexEdit = index;

  //   Fill giá trị tìm thấy của task lên từng ô input
  contentInputElement.value = taskListLocal[index].content;
  dueDateInputElement.value = taskListLocal[index].dueDate;
  statusSelectElement.value = taskListLocal[index].status;
  userNameInputElement.value = taskListLocal[index].userName;
}

// Hàm xóa task
function handleDelete(index) {
  // Xác nhận xóa từ người dùng
  const confirmDelete = confirm("Bạn có muốn xóa task này không?");

  if (confirmDelete) {
    // Xóa phần tử khỏi mảng
    taskListLocal.splice(index, 1);

    // Lưu dữ liệu lên local
    saveData("tasks", taskListLocal);

    // Render lại giao diện
    renderTask();
  }
}

renderTask();