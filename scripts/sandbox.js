// adding hello world ads screen
// alert('hello world hehe.');

// adding some console log in chrome
console.log(2+2);

// adding let vars for console
let age = 28;
let year = 2023;
console.log(age, year);
age = 30; // changing var
console.log(age, year); // the change is applied

// adding const var
const maxScore = 100;
// maxScore = 50; // const var can't be reassigned/overriden
console.log(maxScore);

// var variable for older browser
var score = 57;
console.log(score);

// concatenate (join) two strings
let userMail = 'alfi';
let mailDomain = '@istamosh.com';

let mail = userMail + mailDomain;
console.log(mail);

// cherrypick letter from string
console.log(userMail[2]);

// count every letter
console.log(mail.length);

// change whole string to uppercase
console.log(mail.toUpperCase());

// store username in Uppercase
let nameUpper = userMail.toUpperCase();
console.log(nameUpper);

// find @ in count letter of mail
console.log(mail.indexOf('@'));