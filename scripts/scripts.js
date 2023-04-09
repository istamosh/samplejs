// querying DOM
// for more simple selector, just inspect element
// then go to element tab, navigate a piece you want to select as selector
// then right click > copy selector

// choosing first occurence of paragraph tag in document
// querying occurence runs from the top to bottom in HTML
// then display the entire selected HTML snippet in console
const firstPtag = document.querySelector('p');
console.log(firstPtag);

// select the p tag by referring to the first occurence of error class
// don't forget the dot prefix (.) to determine it's a class name
const errorClass = document.querySelector('.error');
console.log(errorClass);

// selecting another error class w/o interrupting the above code
// you can't just simply selecting div because there is already another div above it
// then combine the two by using dot (.)
const secondError = document.querySelector('div.error');
console.log(secondError);

// pasting copy selector's inspect element feature
// selecting 6th element of list from warehouse content
const sixthElement = document.querySelector('body > ul > li:nth-child(6)');
console.log(sixthElement);

// grabbing entire p tags and displayed as Node List
// Node List can't use array methods
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

// accessing second element of nodelist
console.log(paragraphs[1])

// cycle or iterate through paragraphs using foreach method
paragraphs.forEach(element => {
    console.log(element);
})

// grabbing entire error class in document (body)
const errors = document.querySelectorAll('.error');
console.log(errors)

// grabbing element by ID
const pageTitle = document.getElementById('page-title');
console.log(pageTitle)

// grabbing elements by class name
// without the needs of dot (.)
const errorClass2 = document.getElementsByClassName('error');
console.log(errorClass2)

// can use array accessor on HTMLCollection
// but can't use foreach method
console.log(errorClass2[0])

// get element by their tag name
const byTagName = document.getElementsByTagName('p');
console.log(byTagName);
// access one element
console.log(byTagName[1]);

// get inner text property from first P tag occurence
const textInsidePTag = document.querySelector('p');
console.log(textInsidePTag.innerText);
// you can also override the inner text into Uppercase
textInsidePTag.innerText = textInsidePTag.innerText.toUpperCase();
// also you can append at the end
textInsidePTag.innerText += ' istamosh is handsome hehe!';

// get and access all inner texts props from p tags
// and add sample text for each of it 
const textsInsidePTag = document.querySelectorAll('p');
textsInsidePTag.forEach(param => {
    param.innerText += ' "sample text"';
    console.log(param.innerText)
});

// getting foreword class div inner HTML content
const foreword = document.querySelector('.foreword');
console.log(foreword.innerHTML);
// altering foreword texts with horizontal lines
foreword.innerHTML =
`       <hr>
        <pre>
this is sandbox page.
feel free to crop the snippets, most of the codes are placed individually for each purposes.
            
All thanks to Mr. Shaun, YT: TheNetNinja
        </pre>
        <hr>`;

// altering warehouse list with new list of cartridges
const rifleCartridge = ['.45-70 Govt', '.416 Barrett', '.50 Beowulf'];
const warehouseList = document.querySelector('.warehouse');
rifleCartridge.forEach(content => {
    warehouseList.innerHTML += `<li style="color: darkblue">${content}</li>`;
});