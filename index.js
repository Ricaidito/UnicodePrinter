const inputBox = document.getElementById("input-box");
const outputLine = document.getElementById("output");
const button = document.getElementById("get-char-btn");
const clearBtn = document.getElementById("clear-btn");

const getAsciiChars = (upTo, from = 0) =>
  Array.from({ length: upTo - from + 1 }, (_, i) => i + from)
    .map(x => String.fromCharCode(x))
    .reduce((prev, curr) => `${prev} ${curr}`, "");

const handleButtonClick = () => {
  if (inputBox.value < 0) {
    inputBox.value = "";
    return;
  }
  outputLine.innerHTML = getAsciiChars(inputBox.value);
};

const handleReset = () => {
  inputBox.value = "";
  outputLine.innerHTML = getAsciiChars(0);
};

button.addEventListener("click", handleButtonClick);
clearBtn.addEventListener("click", handleReset);
