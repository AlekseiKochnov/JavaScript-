/*Задание 1.
Цель задания
Попрактиковаться в использовании сложных структур данных (массив объектов) и работе со свойствами.

Задание
Напишите функцию filter в object-array-filter.js, фильтрующую массив объектов по значению свойства. 
Массив, название свойства и нужное значение должны передаваться в качестве аргументов. Пример использования:

let objects = [
 { name: 'Василий', surname: 'Васильев' },
 { name: 'Иван', surname: 'Иванов' },
 { name: 'Пётр', surname: 'Петров' }
 ]
 
 let result = filter(objects, 'name', 'Иван');

  Результат выполнения должен быть:
 [
 { name: 'Иван', surname: 'Иванов' }
 ]
*/


function filter(object, keys, values) {
    let res = [];
    for (let ob of object) {
        if (ob[keys] === values) {
            res.push(ob);
        }
    }
    return res;
}

const array = [
    { id: 1, name: 'Name 1' },
    { id: 2, name: 'Name 2' },
    { id: 3, name: 'Name 3' },
    { id: 22, name: 'Name 2' },
];

const filtered = filter(array, 'name', 'Name 2');

