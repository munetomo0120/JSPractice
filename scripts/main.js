let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === "images/firefox-icon.png") {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('あなたの名前を入力してください');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozillaはすばらしいよ、' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozillaはすばらしいよ、' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello, world!';

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// document.querySelector('html').onclick = function() {
//   alert('痛っ！つつくのはやめて！');
// }