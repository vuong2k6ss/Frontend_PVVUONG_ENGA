const inputElement = document.querySelector('#form-input');
const  formElement = document.querySelector('#form');
const jobLocals = JSON.parse(localStorage.getItem("jobs")) || [];//lấy key trên local


//lắng nghe sự kiện submit form
formElement.addEventListener("submit", function(e){
    //ngăn chặn sự kiện mặc định của form
    e.preventDefault();

    //b1 lấy dữ liệu ng dùng
    const inputValue = inputElement.value.trim();
    console.log("inputValue: ", inputValue);

    //b2 valiate dữ liệu đầu vào
    if(inputValue){
        alert("tên công việc kh đc để trống");
        return;
    }

    //b3 lưu trữ dữ liệu lên localStorage
    //b3.1 xác định các thông tin công việc
    const job = {
        id: Math.ceil(Math.random() * 10000),
        jobName: inputValue,
        status: false,
    }
    //push công việc mới nhất vào 1 mảng
    jobLocals.push(job);



    //b3.2 lưu trữ dữ liệu trên local
    localStorage.setItem("jobs", JSON.stringify(jobLocals));





    

    //b4 render lại giao diện mới cho người dùng
});