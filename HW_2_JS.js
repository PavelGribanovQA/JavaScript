// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой


function validation_script(my_string) {
    let requirements_arr = [
        "минимум 5 символов в строке",
        "Максимум 64 символа в строке",
        "Должна быть хотя бы одна буква в верхнем регистре",
        "В строке должны быть буквы",
        "Должна быть хотя бы одна цифра",
        "Должна быть хотя бы одна @",
        "Строка не должна быть пустой"
    ];
    let flag_letter_upper = false;
    let flag_letter = false;
    let flag_notNull = false;
    if (my_string.length != 0) {
        requirements_arr.splice(6, 1);
        flag_notNull = true
    };
    if (my_string.indexOf('@') != -1) {
        requirements_arr.splice(5, 1)
    };
    if (my_string.search(/\d/) != -1) {
        requirements_arr.splice(4, 1)
    };
    if (my_string.search(/\p{L}/gu) != -1) {
        requirements_arr.splice(3, 1);
        flag_letter = true;
        if (flag_letter == true) {
            cycle: for (i in my_string) {
                if (i == i.toUpperCase()) {
                    requirements_arr.splice(2, 1)
                    break cycle
                    
                };
            };
        };
    };
    if (flag_notNull == true && my_string.length <= 64) {
        requirements_arr.splice(1, 1)
    };
    if (flag_notNull == true && my_string.length >= 5) {
        requirements_arr.splice(0, 1)
    };
    return console.log(requirements_arr)
};

validation_script("авпав")