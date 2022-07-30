// Способ записи строк
let singleQuote = 'Строка в одиночных ковычках'
let doubleleQuote = "Строка вдвойных ковычках"
let tictQuote = `Строка в обпатных ковычках`

// Многострочный текст
let multiline1 = 'Строка\nс\nпереносами'
let multiline2 = `Строка
с
переносами`

let st1 = 'Прервая строка'
let st2 = 'Вторая строка'

let concat = st1 + '\n' + st2  // Первая строка\nВторая стпока

let tictConcat = `${st1}
${st2}`; // Первая строка\nВторая стпока
console.log(tictConcat);