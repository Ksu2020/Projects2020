//задание1-перевернуть строку

function reversString(text) {
    console.log('Начальный текст: ', text)
    var textArray = text.split('')
    var reversArray = textArray.reverse()
    var reversText = reversArray.join('')
    return reversText
}

var reversText = reversString('Oksana')
console.log('Перевернутый текст: ', reversText)

//задание2 - массив  чисел

function numbersArray(arr) {
    console.log('Начальный массив: ', arr.join())
    console.log('for: ')
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var newNumber = Math.pow(arr[i], 2)
        newArr.push(newNumber)
    }
    console.log('Массив квадратов чисел: ', newArr.join())

    console.log('for in: ')
    newArr = []
    for (var index in arr) {
        var newNumber = Math.pow(arr[index], 2)
        newArr.push(newNumber)
    }
    console.log('Массив квадратов чисел: ', newArr.join())

    console.log('for of: ')
    newArr = []
    for (var num of arr) {
        var newNumber = Math.pow(num, 2)
        newArr.push(newNumber)
    }
    console.log('Массив квадратов чисел: ', newArr.join())
}

numbersArray([1, 2, 3, 4, 5, 6, 7, 8, 9])

//задание3- перевернуть массив
function reversArray(arr) {
    console.log('Начальный массив: ', arr.join(' '))
    var reversArray = arr.reverse()
    return reversArray
}

var reversArray = reversArray(['I', 'study', 'JavaScript'])
console.log('Перевернутый массив: ', reversArray.join(' '))