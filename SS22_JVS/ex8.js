let numbers = [4, 2, 4, 5, 2, 3, 4, 1, 2, 2];
      let frequency = {};
      for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (frequency[num]) {
          frequency[num]++;
        } else {
          frequency[num] = 1;
        }
      }
      let maxFrequency = 0;
      let result = null;
      for (let key in frequency) {
        let value = parseInt(key);
        if (
          frequency[key] > maxFrequency ||
          (frequency[key] === maxFrequency && value < result)
        ) {
          maxFrequency = frequency[key];
          result = value;
        }
      }
      alert(`Phần tử có số lần xuất hiện nhiều nhất là: ${result}`);