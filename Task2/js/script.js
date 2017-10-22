var arrOfNames =[];

for (var i = 0; i < 5; i++) {
    arrOfNames[i] = prompt("Введите имя");
}

var userName = prompt('Введите имя пользователя');


// var result = arrOfNames.indexOf(userName);
// console.log(result);
//
// var resultNew = arrOfNames.includes(userName);
// console.log(resultNew);


var isFind = false;

for (var i = 0; i<arrOfNames.length; i++) {
    if (arrOfNames[i] === userName) {
        isFind = true;
    }
}

console.log((isFind) ? userName + ', Вы успешно вошли' : 'error');


