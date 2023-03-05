function atLeastTwoCharacters(text) {
  const letters = text.match(/[a-z]/gi) || [];

  return letters.length >= 1;
}
const checks = [atLeastTwoCharacters];
const textInput = document.querySelector(".textarea");
const wordCountElement = document.querySelector(".word_count");
const letterCountElement = document.querySelector(".letter_count");
const spaceCountElement = document.querySelector(".space_count");
const charactersCountElement = document.querySelector(".character_count");
const digitsCountElement = document.querySelector(".digits_count");
const specialCountElement = document.querySelector(".special_count");

textInput.addEventListener("input", () => {
  const splitted = textInput.value.trim().split(/[\s-]/);
  const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
  const spaceCount = (textInput.value.match(/ /g) || []).length;
  const charactersCount = textInput.value.length;
  const digitsCount = (textInput.value.match(/[0-9]/g) || []).length;
  const specialCount = (textInput.value.match(/\W|_/g) || []).length;

  let wordCount = 0;

  outer: for (const text of splitted) {
    for (const check of checks) {
      if (!check(text)) {
        continue outer;
      }
    }
    wordCount++;
  }
  wordCountElement.textContent = wordCount;
  letterCountElement.textContent = letterCount;
  spaceCountElement.textContent = spaceCount;
  charactersCountElement.textContent = charactersCount;
  digitsCountElement.textContent = digitsCount;
  specialCountElement.textContent = specialCount;
});
