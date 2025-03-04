let number1 = +prompt("Mời bạn nhập vào một số a");
      let number2 = +prompt("Mời bạn nhập vào một số b");

      if (isNaN(number1) || isNaN(number2)) {
        document.write("Giá trị nhập không hợp lệ");
      } else {
        let result = number1 ** number2;
        document.write(
          `a^b với a = ${number1} và b = ${number2} có kết quả là: ${result}`
        );
      }