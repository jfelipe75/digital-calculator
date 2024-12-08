import "./style.css";

// import dom-helper functions!
import {
  addCalculatorButtons,
  displayOnScreen,
  calculate,
  clearCalculatorScreen,
} from "./dom-helpers";

// add calculator buttons
addCalculatorButtons();

// create an event listener for when the buttons in our calculator are pressed by an user.
const buttons = document.querySelectorAll(".number-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    displayOnScreen(event.target);
  });
});

// add event listener to enter-button to parse screen text content into numbers
const enterButton = document.querySelector("#enter-button");
enterButton.addEventListener("click", calculate);

// add event listener to clear-button to remove text content from calculator screen
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearCalculatorScreen);
