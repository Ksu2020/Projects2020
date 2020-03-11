//задание1-каждое слово строки с большой буквы

function getUppercase(text) {
    console.log('Начальный текст: ', text);
    var arr = text.split(' ');
    var newString = '';
    for (var item of arr) {
        newString += item.charAt(0).toUpperCase() + item.slice(1) + (' ')
    }
    return newString.trim();
}

console.log('-------------------------------------Задание 1 ----------------------------------');
var newString = getUppercase('oksana study javascript');
console.log('Слова с больших букв: ', newString);
/*

//задание2-каждое слово строки с большой буквы

function getUppercase(text) {
    console.log('Начальный текст: ', text);
    var arr = text.split(' ');
    var newString = '';
    for (var item of arr) {
        newString += item.charAt(0).toUpperCase() + item.slice(1) + (' ')
    }
    return newString.trim();
}

console.log('-------------------------------------Задание 2  ----------------------------------');
var newString = getUppercase('oksana study javascript');
console.log('Слова с больших букв: ', newString);*/
