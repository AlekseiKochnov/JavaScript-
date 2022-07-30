let spisok = [];

// Добавить в конец массива
spisok.push('Г');
spisok.push('Д');
spisok.push('Е', 'Ж', 'З');

// Добавить в начало
spisok.unshift('В');
spisok.unshift('А', 'Б');

console.log(spisok); // [А, Б, В, Г, Д, Е, Ж, З]
spisok.length // 8