// create a function to create the buttons dinamically.
export const addCalculatorButtons = () => {
  // store button section on a variable.
  const buttonSection = document.querySelector(".button-section");
  // code a loop that runs a total of 10 times and use i as text content of each button.
  for (let i = 0; i < 10; i++) {
    const button = document.createElement("button");
    button.classList.add("number-button");
    button.id = `${i}-button`;
    button.textContent = `${i}`;
    buttonSection.append(button);
  }

  // create decimal (.) button
  const decimalButton = document.createElement("button");
  decimalButton.classList.add("number-button");
  decimalButton.textContent = ".";
  buttonSection.append(decimalButton);

  // create operation buttons
  const plusButton = document.createElement("button");
  plusButton.classList.add("number-button");
  plusButton.classList.add("operator-button");
  plusButton.textContent = "+";
  buttonSection.append(plusButton);

  const subtractButton = document.createElement("button");
  subtractButton.classList.add("number-button");
  subtractButton.classList.add("operator-button");
  subtractButton.textContent = "-";
  buttonSection.append(subtractButton);

  const multiplyButton = document.createElement("button");
  multiplyButton.classList.add("number-button");
  multiplyButton.classList.add("operator-button");
  multiplyButton.textContent = "*";
  buttonSection.append(multiplyButton);

  const divideButton = document.createElement("button");
  divideButton.classList.add("number-button");
  divideButton.classList.add("operator-button");
  divideButton.textContent = "/";
  buttonSection.append(divideButton);

  // create an enter button
  const enterButton = document.createElement("button");
  enterButton.id = "enter-button";
  enterButton.textContent = "enter";
  buttonSection.append(enterButton);
  document.querySelector(".calculator-container").append(buttonSection);

  // create clear content button
  const clearButton = document.createElement("button");
  clearButton.id = "clear-button";
  clearButton.textContent = "clear";
  buttonSection.append(clearButton);
};

// create a function that adds button's text content to our calculator screen.
export const displayOnScreen = (target) => {
  // retrieve screen html element
  const calculatorScreen = document.querySelector(".calculator-screen");
  // change text content of screen to number clicked.
  calculatorScreen.textContent += target.textContent;
};

// create a function that when enter-button is pressed it parses the numbers on the screen into numbers and updates screen text content to operation's result
// if there is one.
export const calculate = (target) => {
  const calculatorScreen = document.querySelector(".calculator-screen");
  const result = eval(calculatorScreen.textContent);

  // reassign calculatorScreen text content to be equal to result!
  calculatorScreen.textContent = result;
};

export const clearCalculatorScreen = () => {
  const calculatorScreen = document.querySelector(".calculator-screen");
  calculatorScreen.textContent = "";
};
// Add a button to clear the text content of calculator's screen!

// incorporate different type of operations and find a way to be able to nest them together in a single operation.

// create restrictions so that users cant type the same operator like this (//) (**) (++) (--)
