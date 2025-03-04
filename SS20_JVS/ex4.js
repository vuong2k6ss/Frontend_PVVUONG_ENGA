let str = prompt("Nhập vào một chuỗi:");
      let searchChar = prompt("Nhập ký tự cần tìm kiếm:");
      let found = false;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === searchChar) {
          found = true;
          break;
        }
      }
      if (found) {
        document.write("Tồn tại từ cần tìm kiếm");
      } else {
        document.write("Không tồn tại từ cần tìm kiếm");
      }