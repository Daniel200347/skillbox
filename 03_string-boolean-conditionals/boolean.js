// exercise 1

let password = '1234-';

if (((password.includes('-')) || (password.includes('_'))) && (password.length >= 4)) {
    console.log('Пароль надёжный');
} else {
    console.log('Пароль недостаточно надёжный');
}

// exercise 2

let name = 'alexanDER';
let surname = 'Shahanov';

nameChanged = name[0].toUpperCase() + (name.slice(1, name.length).toLowerCase());
surnameChanged = surname[0].toUpperCase() + (surname.slice(1, surname.length).toLowerCase())

console.log(nameChanged);
console.log(surnameChanged);

name === nameChanged ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');
surnameChanged === surnameChanged ? console.log('Фамилия осталась без' +
    ' изменений') : console.log('Фамилия была преобразована');
