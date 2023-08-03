// Задание 1
function print(text) {
    alert("Привет, " + text + "!");
    }

let userName = prompt("Введите ваше имя:");
print(userName);

// Задание 2
let number = parseInt(prompt("Введите ваш возраст:"));
switch (number) {
    case 10:
      alert( 'Маловато' );
      break;
    case 18:
      alert( 'В точку!' );
      break;
    case 100:
      alert( 'Перебор' );
      break;
    default:
      alert( "Попробуй еще раз" );
  }



// Доп задание 1
function change(identifier) {
    identifier.style.background = "red";
   }

