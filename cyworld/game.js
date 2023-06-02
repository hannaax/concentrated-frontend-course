const startWord = () => {
  let inputValue = document.querySelector("#myword").value;
  let word = document.querySelector("#word").innerText;
  let result = document.querySelector("#result");

  if (word[word.length - 1] === inputValue[0]) {
    result.innerText = "정답!";
    document.querySelector("#word").innerText = inputValue;
    document.querySelector("#myword").value = "";
  } else {
    result.innerText = "땡!";
  }
};

// search.addEventListener("click", onclick);
