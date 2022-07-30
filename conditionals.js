if (condition) {
    // код выполняющийся при соблюдении условия
}

if (condition) {
    // код выполняющийся при соблюдении условия
}else {
    // код выполняющийся в противном случае
}

if (condition1) {
    // при первом условии
}else if (condition2) {
    // при втором условии
}else if (condition3) {
    // при третем условии
}else {
    // если ни одного условия не соблюдено
}

let fruit = "Яблоко"

switch (fruit) {
    case "Яблоко":
        console.log("Это яблоко");
        break;
    case "Банан":
        console.log("Это банан");
        break
    case "Арбуз":
    case "Вишня":            
    case "Клубника":
        console.log("Это ягода, а не фрукт");
        break
    default:
        console.log("Не знаю что это");
        break;
}


// Тернарный оператор
x = Math.random() > 0.5 ? 10 : 20 
/* Тоже самое, что и
let x = 0 

if (Math.random() > 0.5) {
    x = 10
}else {
    x = 20
}
*/