const check = (string) =>{
    string = string.toLowerCase().trim()
    let array = []
    array = string.split("")
    array[0] = array[0].toUpperCase()
    for (let i = 0; i < array.length; i++) {
        if (array[i] === " ") {
            array[i+1] = array[i+1].toUpperCase()
        }
    }
    string = array.join("")
    return string
}
let string = `hello world`
console.log(check(string));