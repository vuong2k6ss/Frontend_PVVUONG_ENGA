function longWords(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let checklongWords = arr.filter((word) => word.length > 5);
    return checklongWords;
}
console.log(longWords(["ahihii", "âkjdhhd", "jaj", "aiol"]));