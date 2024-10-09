let display = document.querySelector(".display");

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = "Error!";
        }
        break;
      case "+/-":
        display.innerText*=-1;
        break;
      case "%":
        let passedText = display.innerText + "/100";
        display.innerText = eval(passedText);
        break;
        case "delite":
            display.innerText = display.innerText.slice(0, -1); // Удаление последнего символа
            if (display.innerText === "") {
              display.innerText = "0"; // Если строка пуста, устанавливаем 0
            }
    break;
      default:
        if (display.innerText === "0" && e.target.innerText !== ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
  

    if (/\d|\.|\+|\-|\*|\/|\%/.test(key)) {     // Проверка, является ли нажатая клавиша цифрой, оператором или точкой

      if (display.innerText === "0" && key !== ".") {       // Если да, добавить символ в дисплей
        display.innerText = key;
      } else {
        display.innerText += key;
      }
    } else if (key === 'Enter') {

      try {
        display.innerText = eval(display.innerText);       // Если нажата клавиша Enter, выполнить вычисление
      } catch (e) {
        display.innerText = "Error!";
      }
    } else if (key === 'Backspace') {

      display.innerText = display.innerText.slice(0, -1);       // Если нажата клавиша Backspace, удалить последний символ
      if (display.innerText === "") {
        display.innerText = "0";
      }
    } else if (key === 'c') {       // Если нажата клавиша 'c', очистить дисплей

      display.innerText = "0";
    } 
  });