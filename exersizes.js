"use strict"
//exersize 1
// {
//     let str = 'aaa@bbb@ccc';
//     let re = /@/gi;
//     let newStr = str.replace(re,'!');
//     console.log(newStr);
// }
//exersize 2
// {
//     let newDate = /-/gi;
//     let date = '2025-12-31';
//     console.log(date.replace(newDate,'/'));
// }
//exersize 3
// {
//     let str = 'Я учу Javascript';
//     console.log(str.substring(0,1));
//     console.log(str.substr(0,1));
//     console.log(str.slice(0,1));
// }
//exersize 4
// {
//     let num = 0;
//     let sum = 0;
//     let arr = [4, 2, 5, 19, 13, 0, 10];
//     for(let i = 0; i<arr.length; i++){
//         num = arr[i]**3;
//         sum += num;
//     }
//     console.log(Math.sqrt(sum));
// }
//exersize 5
// {
//     let a =6;
//     let b =1;
//     let c = a-b;
//     console.log(Math.abs(c));
// }
//exersize 6
// {
//     {
//         let dateToday = new Date();
//         let year = addZiroToDate(dateToday.getFullYear());
//         let month = addZiroToDate(dateToday.getMonth());
//         let date = addZiroToDate(dateToday.getDate());
//         let hour = addZiroToDate(dateToday.getHours());
//         let minute = addZiroToDate(dateToday.getMinutes());
//         let second = addZiroToDate(dateToday.getSeconds());
    
//         function addZiroToDate(date) {
//             date = date.toString();
//             return date.length < 2 ? (date = date.replace(/^/, "0")) : date;
//         }
    
//         console.log(`${hour}:${minute}:${second} ${date}.${month}.${year}`);
//     }
// }
//exersize 7
// {
//     let str = 'aa aba abba abbba abca abea';
//     console.log(str.match(/ab+a/g));
// }
//exersize 8
// {
//     let checkPhone = (number) =>{
//         let regexp = /'+'{1}[0-9]{2,3}([0-9]){2,3}[1-9]{7,})/gi;
//         return number.match(regexp) ? true : false;
//     }
//     console.log(checkPhone('+375336496497'));//почему-то не хочет работать не знаю почему
// }
//exersize 9
// {

//     let checkMail =(email)  => {
//         let regexp = /[0-9a-zA-Z]{2,}@[A-za-z]{2,11}.[a-z]{2,11}/gi;
//         return email.match(regexp) ? true : false;
    
// }
// console.log(checkMail('ilya.20044@gmail.com'));
// }
//exersize 10
{

}