// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

const checkAge = function(age) {
    let age_2 = 18;
    let age_3 = 60;

    if (age < age_2) {
        return "You don't have access cause your age is " + age + " It's less then"
    } else if (age >= age_2 && age < age_3) {
        return("Welcome  !")
    } else if (age > age_3) {
        return "Keep calm and look Culture channel"
    } else {
        return "Technical work"};
}
console.log(checkAge(17))
console.log(checkAge(18))
console.log(checkAge(61))

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge = function(age) {
    let age_2 = 18;
    let age_3 = 60;

    if (typeof age != Number){
        return "Error: type of data is not 'number'"
    } else if (age < age_2) {
        return "You don't have access cause your age is " + age + " It's less then"
    } else if (age >= age_2 && age < age_3) {
        return("Welcome  !")
    } else if (age > age_3) {
        return "Keep calm and look Culture channel"
    } else {
        return "Technical work"};
}
console.log(checkAge("2"))

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge = function(age) {
    let age_2 = 18;
    let age_3 = 60;
    
    if (isNaN(Number(age))){
        return "Error: type of data is not 'number'"
    } else if (+age < age_2) {
        return "You don't have access cause your age is " + age + " It's less then"
    } else if (+age >= age_2 && age < age_3) {
        return("Welcome  !")
    } else if (+age > age_3) {
        return "Keep calm and look Culture channel"
    } else {
        return "Technical work"};
};
console.log(checkAge('15'))

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке


const checkAge = function(age) {
    let age_2 = 18;
    let age_3 = 60;
    
    if (isNaN(Number(age))){
        return "Error: type of data is not 'number'"
    } else if (+age < age_2) {
        return "You don't have access cause your age is " + age + " It's less then"
    } else if (+age >= age_2 && age < age_3) {
        return("Welcome  !")
    } else if (+age > age_3) {
        return "Keep calm and look Culture channel"
    } else {
        return "Technical work"};
};
console.log(checkAge('15'))