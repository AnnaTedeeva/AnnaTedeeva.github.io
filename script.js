let nameUser=prompt("Hello, what's your name?", "Write your name");

alert("Have a good day, "+ nameUser + "!");
let nameUser = document.querySelector('.nameUser');
let clickButton = document.querySelector('.click-button');
nameUser.onsubmit = function() {
  console.log('Форма отправлена!');
}
clickButton.onclick = function() {
    console.log("Have a very nice day" + nameUser);
  }



