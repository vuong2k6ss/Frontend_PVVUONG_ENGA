function minArray(arr){
    if (!Array.isArray(arr)) {
        return "Tham số truyền vào không phải là một mảng";
    }
    return Math.min(...arr);
}
console.log(minArray([1,2,4,5,6]));
console.log(minArray(["ahahah"]));