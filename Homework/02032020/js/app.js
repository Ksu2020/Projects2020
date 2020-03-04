
//задание1-перевернуть строку
function reverseString(text) {
    console.log('Начальный текст: ', text)
    var textArray = text.split('')
    var reverseArray = textArray.reverse()
    var reverseText = reverseArray.join('')
    return reverseText
}
console.log('-------------------------------------Задание 1 ----------------------------------')
var reverseText = reverseString('Oksana')
console.log('Перевернутый текст: ', reverseText)

//задание2 - массив  чисел
function numbersArray(arr) {
    console.log('Начальный массив: ', arr.join())
    console.log('for: ')
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var newNumber = arr[i] ** 2
        newArr.push(newNumber)
    }
    console.log('Массив квадратов чисел: ', newArr.join())

    console.log('for in: ')
    newArr = []
    for (var index in arr) {
        var newNumber = arr[index] ** 2
        newArr.push(newNumber)
    }
    console.log('Массив квадратов чисел: ', newArr.join())

    console.log('for of: ')
    newArr = []
    for (var num of arr) {
        var newNumber = num ** 2
        newArr.push(newNumber)
    }
    console.log('Массив квадратов чисел: ', newArr.join())
}
console.log('-------------------------------------Задание 2 ----------------------------------')
numbersArray([1, 2, 3, 4, 5, 6, 7, 8, 9])

//задание3- перевернуть массив
function reverseArray(arr) {
    console.log('Начальный массив: ', arr.join(' '))
    var reverseArray = arr.reverse()
    return reverseArray
}
console.log('-------------------------------------Задание 3 ----------------------------------')
var reverseArray = reverseArray(['I', 'study', 'JavaScript'])
console.log('Перевернутый массив: ', reverseArray.join(' '))

//задание4- математические операции
function calcValues(type, first, second) {
    var result = 0
    if(type.toLowerCase() === 'add'){
        result = first + second
    }
    if(type.toLowerCase() === 'subtract'){
        result = first - second
    }
    if(type.toLowerCase() === 'multiply'){
        result = first * second
    }
    if(type.toLowerCase() === 'divide'){
        result = first / second
    }
    return result;
}
console.log('-------------------------------------Задание 4 ----------------------------------')
var addResult = calcValues('add', 34, 65)
console.log('Сумма чисел: ', addResult)
var addResult = calcValues('subtract', 34, 12)
console.log('Разница чисел: ', addResult)
var addResult = calcValues('multiply', 20, 5)
console.log('Произведение чисел: ', addResult)
var addResult = calcValues('divide', 145, 5)
console.log('Частное чисел: ', addResult)

//задание5 - сумма элементов массива
function sumOfNumbersInArray(arr) {
    console.log('Начальный массив: ', arr.join())
    console.log('for: ')
    var result = 0
    for (var i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    console.log('Сумма чисел: ', result)

    console.log('for in: ')
    result = 0
    for (var index in arr) {
        result += arr[index]
    }
    console.log('Сумма чисел: ', result)

    console.log('for of: ')
    result = 0
    for (var num of arr) {
        result += num
    }
    console.log('Сумма чисел: ', result)
}
console.log('-------------------------------------Задание 5 ----------------------------------')
sumOfNumbersInArray([1, 2, 3, 4, 5, 6, 7, 8, 9])

//задание6 - сумма длин массива строк
function sumOfStringsInArrayFirst(arr) {
    console.log('Начальный массив: ', arr.join())
    var sumOfStringsLength = 0
    for (var i = 0; i < arr.length; i++) {
        sumOfStringsLength += arr[i].length
    }
    return sumOfStringsLength
}
function sumOfStringsInArraySecond(arr) {
    console.log('Начальный массив: ', arr.join())
    var string = arr.join("")
    var sumOfStringsLength = string.length
    return sumOfStringsLength
}
console.log('-------------------------------------Задание 6 ----------------------------------')
console.log('1 способ: ')
var sumOfStringsLength = sumOfStringsInArrayFirst(['I', 'study', 'JavaScript'])
console.log('Сумма длин строк: ', sumOfStringsLength)

console.log('2 способ: ')
var sumOfStringsLength = sumOfStringsInArraySecond(['I', 'study', 'JavaScript'])
console.log('Сумма длин строк: ', sumOfStringsLength)

//задание7 - показать все элементы массива
function showAnArray(arr) {
    console.log('Начальный массив: ', arr)
    for (var el of arr) {
        for (var index in el) {
            console.log(el[index])
        }
    }
}
console.log('-------------------------------------Задание 7 ----------------------------------')
showAnArray([[1, 2, 3, 4], [5, 6, 7, 8, 9], [43,655,76,434], [23,54,76,87]])
