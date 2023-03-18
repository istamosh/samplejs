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

// find a letter position number of mail
console.log(mail.indexOf('i'));

// find last occurence of letter position of mail
console.log(mail.lastIndexOf('i'));

// slice the mail domain only (hardcode way)
let sliced = mail.slice(5, 13);
console.log(sliced);

// substring mail
let substringed = mail.substring(4, 10);
console.log(substringed);

// replace first occurence letter of mail
let replacedLetter = mail.replace('f', '_');
console.log(replacedLetter);