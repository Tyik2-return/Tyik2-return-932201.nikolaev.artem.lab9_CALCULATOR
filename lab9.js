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
          if (/[+\-*/%]/.test(display.innerText.slice(-1))) {
            display.innerText += display.innerText.slice(0, -1);
          }
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = "Error!";
        }
        break;
      case "+/-":
        display.innerText *= -1;
        break;
      case "%":
        let passedText = display.innerText + "/100";
        display.innerText = eval(passedText);
        break;
      case "delite":
        display.innerText = display.innerText.slice(0, -1);
        if (display.innerText === "") {
          display.innerText = "0";
        }
        break;
      default:
        if (/[0-9.]/.test(e.target.innerText)) {
          if (e.target.innerText === "." && display.innerText.includes(".")) {
            return;
          }
          if (display.innerText === "0" && e.target.innerText !== ".") {
            display.innerText = e.target.innerText;
          } else {
            display.innerText += e.target.innerText;
          }
        } else if (/[+\-*/%]/.test(e.target.innerText)) {
          if (/[+\-*/%]/.test(display.innerText.slice(-1))) {
            display.innerText = display.innerText.slice(0, -1) + e.target.innerText;
          } else {
            display.innerText += e.target.innerText;
          }
        }
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/\d|\.|\+|\-|\*|\/|\%/.test(key)) {
    if (key === ".") {
      if (display.innerText.includes(".")) {
        return;
      }
    }

    if (/[+\-*/%]/.test(key)) {
      if (/[+\-*/%]/.test(display.innerText.slice(-1))) {
        display.innerText = display.innerText.slice(0, -1) + key;
      } else {
        display.innerText += key;
      }
    } else {
      if (display.innerText === "0" && key !== ".") {
        display.innerText = key;
      } else {
        display.innerText += key;
      }
    }
  } else if (key === "Enter") {
    try {
      if (/[+\-*/%]/.test(display.innerText.slice(-1))) {
        display.innerText += display.innerText.slice(0, -1);
      }
      display.innerText = eval(display.innerText);  
    } catch (e) {
      display.innerText = "Error!";
    }
  } else if (key === "Backspace") {
    display.innerText = display.innerText.slice(0, -1);  
    if (display.innerText === "") {
      display.innerText = "0";
    }
  } else if (key === "c") {
    display.innerText = "0";
  }
});
