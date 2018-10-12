'use strict';

 window.addEventListener('click', () => {
 console.log('點毛線?');

 let x = document.createElement('h1');
 let m = document.createTextNode(' 這是 <h1> 的文字訊息');
 let x1 = document.createElement('h2');
 let m1 = document.createTextNode(' 這是 <h2> 的文字訊息');
 let x2 = document.createElement('h3');
 let m2 = document.createTextNode(' 這是 <h3> 的文字訊息');
 let x3 = document.createElement('h2');
 let m3 = document.createTextNode(' 這是 <h4> 的文字訊息嗎?');
 let m4 = document.createTextNode(' 這是 <不知道> 的文字訊息');
 x.appendChild(m);
 x1.appendChild(m1);
 x2.appendChild(m2);
 x3.appendChild(m3);
 document.body.appendChild(x);
 document.body.appendChild(x1);
 document.body.appendChild(x2);
 document.body.appendChild(x3);
 document.body.appendChild(m4);
 })
