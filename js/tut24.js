console.log("JavaScript_Learning_Day-24");

// Date Object : Date & Time In JavaScript

let today = new Date();
console.log(today);
console.log(typeof today);

let otherDate = new Date('Sep 11 2009 15:17:14');
// console.log(otherDate);
otherDate = new Date('July 15 2015');
console.log(otherDate);
otherDate = new Date('09/04/1999');
console.log(otherDate);

let a;
a = otherDate.getDay();
console.log(otherDate);
a = otherDate.getDate();
console.log(otherDate);
a = otherDate.getMinutes();
console.log(otherDate);
a = otherDate.getHours();
console.log(otherDate);
a = otherDate.getSeconds();
console.log(otherDate);
a = otherDate.getMilliseconds();
console.log(otherDate);
a = otherDate.getTime();
console.log(otherDate);
a = otherDate.getTimezoneOffset();
console.log(otherDate);


a = otherDate.getUTCDate();
console.log(otherDate);
a = otherDate.getUTCDay();
console.log(otherDate);
a = otherDate.getUTCFullYear();
console.log(otherDate);
a = otherDate.getUTCMonth();
console.log(otherDate);
a = otherDate.getUTCHours();
console.log(otherDate);
a = otherDate.getUTCMinutes();
console.log(otherDate);
a = otherDate.getUTCSeconds();
console.log(otherDate);
a = otherDate.getUTCMilliseconds();
console.log(otherDate);

a = otherDate.setDate(1);
console.log(otherDate);
a = otherDate.setMonth(2);
console.log(otherDate);
a = otherDate.setMinutes(3);
console.log(otherDate);
a = otherDate.setFullYear(2015);
console.log(otherDate);
a = otherDate.setHours(5);
console.log(otherDate);
a = otherDate.setSeconds(6);
console.log(otherDate);