let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === "images/firefox-icon.png") {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
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