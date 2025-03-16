const splitArray = (array, size) => {
    if (!Array.isArray(array) || array.some(number => !Number.isInteger(number)) || size <= 0 || !Number.isInteger(size)) {
        return "Dữ liệu không hợp lệ!!";
    }

    const childArray = [];
    for (let i = 0; i < array.length; i += size) {
        childArray.push(array.slice(i, i + size));
    }
    return childArray;
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = splitArray(numbers, 2); // [[1,2], [3,4], [5,6], [7]]
console.log("result: ", result);
