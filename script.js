//рисуем светофор с пормощью js

//в стилях, прямо из index.html рисуем стили и делаем базовую верстку с помощью тега style

//создается массив circles [], туда будут помещаться все спаны. Для перебора спанов используется цикл for

// circles = [];
// colors = ['red', 'yellow', 'green', 'purple', 'orange'];

// for (i=0; i<colors.length; i++) {
    
    

//чтобы задать цвета для кружочков, как в светофоре (красный, желтый, зеленый), можно использовать 2 способа. Длинный, switch case или более короткий, созданием массива и добавлением необходимых значений в него. Если у нас в массиве несколько элементов (цветов) можно написать в цикл i<colors.length.

//длинный способ
// switch(i) {
//     case 0:
//             color = 'red';
//             break;
//         case 1:
//             color = 'yellow';
//             break;
//         case 2:
//             color = 'green';
//             break;
//     }

//короткий способ, создать массив color и туда написать цвета
//    circles[circles.length ] = `<span class="circle" style="background: ${colors[i]}"></span>`;
// }
// console.log(circles);

//document.write (`<div class="traficlights">${circles.join(``)}</div>`); //join позволяет указать, каким способом мы хоти соединять элементы нашего массива. В данном случае, это убирает запятые при выводе информации на страницу

     
//задание, сделать таблицу, где будут мспользоваться td и tr, для вывода изображений и названий изображений

//для приведения первой буквы в слове в верхнему регистру используется метод slice. 
// animalsIcons = ['🦮', '🐱', '🐭', '🐰', '🦊', '🐻'];
// animalsNames = ['dog', 'cat', 'mouse', 'rabbit', 'fox', 'bear'];

// trs = [];

// for (i=0; i<animalsIcons.length; i++) {

//     firstLetter = animalsNames[i][0].toUpperCase();
//     name = firstLetter + animalsNames[i].slice(1, animalsNames[i].length);

//     trs[trs.length] = `<tr>
//             <td>${name}</td>
//             <td>${animalsIcons[i]}</td>
//         </tr>`;
// }

// document.write (`<table border="1">
//     ${trs.join('')}
// </table>`);

desk = [];

for (trIndex=0; trIndex<=7; trIndex++) {
    console.log(trIndex);

    desk = [];
    for (tdIndex=0; tdIndex<=6; tdIndex++) {
        desk [desk.length] = `<td width="40" height="40"></td>`;
    }

    desk[desk.length] = `<tr width="40" height="40"></tr>`;
}

document.write (`<table>${desk}</table>`);