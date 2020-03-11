/*
вывести в консоль:
1. отсортированный массив студентов по оценке (от большего к меньшему) (со звездочкой: если оценки одинаковые, то в алфавитном порядке)
2. массив студентов, у которых isAdmin: true
3. основываясь на этом массиве, создатть и вывести на экран массив, состоящий из только name и email
4. найти среднюю оценку по студентам. использовать reduce для нахождения суммы всех оценок */


var students = [
    {name: 'Denis', mark: '3', email: 'someEmailDima@gmail.com', age: 23, isAdmin: true},
    {name: 'Daniel', mark: '3.5', email: 'someEmailDaniel@gmail.com', age: 25, isAdmin: false},
    {name: 'Dina', mark: '4.5', email: 'someEmailDina@gmail.com', age: 24, isAdmin: false},
    {name: 'Anna', mark: '5', email: 'someEmailAnna@gmail.com', age: 22, isAdmin: false},
    {name: 'Nick', mark: '3', email: 'someEmailNick@gmail.com', age: 25, isAdmin: false},
    {name: 'Nicolas', mark: '3.5', email: 'someEmailNicolas@gmail.com', age: 22, isAdmin: true}
];

//задание1- массив студентов по оценке (от большего к меньшему) (со звездочкой: если оценки одинаковые, то в алфавитном порядке)
console.log('Задание 1 - массив студентов по оценке (от большего к меньшему) (со звездочкой: если оценки одинаковые, то в алфавитном порядке)');

function sortStudents(students) {
    return students.sort(function (a, b) {
        if (a.mark < b.mark) {
            return 1;
        }
        if (a.mark > b.mark) {
            return -1;
        }
        if (a.mark === b.mark) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
        }
        return 0;
    });
}

var sortedStudents = sortStudents(students);
console.log(sortedStudents);

//задание2- массив студентов, у которых isAdmin: true
console.log('Задание 2 - массив студентов, у которых isAdmin: true');

function filterStudents(students) {
    return students.filter(function (item) {
        return item.isAdmin;
    });
}
var isAdminStudents = filterStudents(students);
console.log(isAdminStudents);


//задание3- массив студентов, состоящий из только name и email
console.log('Задание 3 - массив студентов, состоящий из только name и email');

function newStudents(students) {
    return students.map(function (item) {
        return {
            name: item.name,
            email: item.email
        };
    });
}

var newStudentsArr = newStudents(students);
console.log(newStudentsArr);

//задание4- средняя оценка по студентам
console.log('Задание 4 - средняя оценка по студентам')

function getAwarageMark(students) {
    return students.reduce(function (acc, item) {
        return acc += Math.abs(item.mark);
    }, 0) / students.length;
}

var awarageMark = getAwarageMark(students);
console.log("Средняя оценка: ", awarageMark);