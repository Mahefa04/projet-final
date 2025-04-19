const wordList = [
    "monkey", "banana", "keyboard", "typing", "speed",
    "accuracy", "fast", "practice", "test", "skills", "text",
    "word", "speed"
  ];
  
  const wordsContainer = document.getElementById("words");
  const input = document.getElementById("input");
  const timerDisplay = document.getElementById("timer");
  const wpmDisplay = document.getElementById("wpm");
  const errorsDisplay = document.getElementById("errors");
  const restartBtn = document.getElementById("restart");
  
  let currentIndex = 0;
  let errors = 0;
  let timer = 60;
  let interval;
  let running = false;
  
  function generateWords() {
    wordsContainer.innerHTML = "";
  
    for (let i = 0; i < wordList.length; i++) {
      const wordSpan = document.createElement("span");
      wordSpan.className = "word";
      wordSpan.id = "word-" + i;
  
      const word = wordList[i];
  
      for (let j = 0; j < word.length; j++) {
        const charSpan = document.createElement("span");
        charSpan.className = "char";
        charSpan.id = `word-${i}-char-${j}`; // corrigé : syntaxe template string avec ``
        charSpan.textContent = word[j];
        wordSpan.appendChild(charSpan);
      }
  
      wordsContainer.appendChild(wordSpan);
      const space = document.createTextNode(" ");
      wordsContainer.appendChild(space);
    }
  
    highlightWord(currentIndex);
  }
  
  function highlightWord(index) {
    const allWords = document.getElementsByClassName("word");
    for (let i = 0; i < allWords.length; i++) {
      allWords[i].classList.remove("highlight");
    }
  
    const currentWordSpan = document.getElementById("word-" + index);
    if (currentWordSpan) {
      currentWordSpan.classList.add("highlight");
    }
  }
  
  function startTimer() {
    interval = setInterval(() => {
      timer--;
      timerDisplay.textContent = timer;
  
      if (timer <= 0) {
        finishTest();
      }
    }, 1000);
  }
  
  function finishTest() {
    clearInterval(interval);
    input.disabled = true;
  
    const correctWords = currentIndex - errors;
    const wpm = Math.max(0, Math.round(correctWords * 2));
    wpmDisplay.textContent = wpm;
  }
  
  input.addEventListener("input", () => {
    if (!running) {
      startTimer();
      running = true;
    }
  
    const typed = input.value;
    const currentWord = wordList[currentIndex];
  
    for (let i = 0; i < currentWord.length; i++) {
      const charSpan = document.getElementById(`word-${currentIndex}-char-${i}`);
      if (!charSpan) continue;
  
      if (i < typed.length) {
        if (typed[i] === currentWord[i]) {
          charSpan.classList.add("correct");
          charSpan.classList.remove("incorrect");
        } else {
          charSpan.classList.add("incorrect");
          charSpan.classList.remove("correct");
        }
      } else {
        charSpan.classList.remove("correct");
        charSpan.classList.remove("incorrect");
      }
    }
  
    if (typed.endsWith(" ")) {
      const cleanWord = typed.trim();
      if (cleanWord !== currentWord) {
        errors++;
      }
  
      currentIndex++;
      input.value = "";
      highlightWord(currentIndex);
      errorsDisplay.textContent = errors;
  
      if (currentIndex >= wordList.length) {
        finishTest();
      }
    }
  });
  
  restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    errors = 0;
    timer = 60;
    running = false;
  
    input.disabled = false;
    input.value = "";
  
    wpmDisplay.textContent = "0";
    errorsDisplay.textContent = "0";
    timerDisplay.textContent = timer;
  
    clearInterval(interval);
    generateWords();
  });
  
  generateWords();
  