let month = +prompt(` nhập 1 tháng bất kì `)
switch (month) {
    case 1:
    case 2: 
    case 3:
        document.write(` tháng ${month} là mùa xuân `)
        break;
    case 4:
    case 5: 
    case 6:
        document.write(` tháng ${month} là mùa hạ `)
        break;
    case 7:
    case 8: 
    case 9:
        document.write(` tháng ${month} là mùa thu `)
        break;    
    case 10:
    case 11: 
    case 12:
         document.write(` tháng ${month} là mùa đông `)
          break;    
    default:
        document.write(` tháng không hợp lệ`)
        break;
}