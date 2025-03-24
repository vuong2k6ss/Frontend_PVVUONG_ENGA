document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    if (!email || !password) {
      alert('Email và mật khẩu không được để trống!');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user => user.email === email && user.password === password);
    if (validUser) {
      alert('Đăng nhập thành công!');
      window.location.href = 'homepage.html'; 
    } else {
      alert('Email hoặc mật khẩu không hợp lệ!');
    }
  });
  