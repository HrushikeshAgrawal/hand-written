const inputText = document.getElementById("inputText");
const imgOutput = document.getElementById("imgOutput");
const headingInput = document.getElementById("headingInput");
let pageHeading = "";

window.onload = () => {
  inputText.addEventListener("input", inputHandler);
  inputText.addEventListener("propertychange", inputHandler);
  headingInput.addEventListener("input", headingHandler);
  headingInput.addEventListener("propertychange", headingHandler);
  imgOutput.innerHTML = initialOutput;
};

const getLetterString = (val) => {
  let letterTemplate = "";
  if (capsLetters.includes(val)) {
    letterTemplate = `<img class="letter caps" src="./imgs/caps/${val}.png" alt="" />`;
  } else if (smallLetters.includes(val)) {
    if (smallTallLetters.includes(val)) {
      letterTemplate = `<img class="letter small tall" src="./imgs/small/${val}.png" alt="" />`;
    } else if (smallDownLetters.includes(val)) {
      letterTemplate = `<img class="letter small down" src="./imgs/small/${val}.png" alt="" />`;
    } else {
      letterTemplate = `<img class="letter small" src="./imgs/small/${val}.png" alt="" />`;
    }
  } else if (nums.includes(val)) {
    letterTemplate = `<img class="letter num" src="./imgs/nums/${val}.png" alt="" />`;
  } else if (val === ",") {
    letterTemplate = `<img class="letter comma" src="./imgs/symbols/comma2.png" alt="" />`;
  } else if (symbols.includes(val)) {
    let symbolObj = symbolsToFileName.find((symbol) => symbol.symbol === val);
    letterTemplate = `<img class="letter symbol" src="./imgs/symbols/${symbolObj.fileName}.png" alt="" />`;
  }
  if (letterTemplate === "") return false;
  else return letterTemplate;
};

inputHandler = (e) => {
  const newValue = e.target.value;
  newArr = newValue.split("");
  const pageTopHtml = document.querySelector(".pagetop").innerHTML;
  let template = `<div class="redLine"></div> <div class="pagetop">${pageTopHtml}</div>`;
  template += `<div class="para"><div class="word">`;
  newArr.forEach((val) => {
    const isLetter = getLetterString(val);
    if (isLetter) {
      template += isLetter;
    } else {
      switch (val) {
        case " ":
          template += `</div><div class="word">`;
          break;
        case "\n":
          template += `</div></div><div class="para"><div class="word">`;
          break;
        default:
          template += `<img class="letter caps" src="./imgs/specials/red.png" alt="" />`;
      }
    }
  });
  template += `</div></div>`;
  imgOutput.innerHTML = template;
  let paras = document.querySelectorAll(".para");
  let totalHeight = 0;
  paras.forEach((para) => {
    totalHeight += para.scrollHeight;
  });
  let totalLines = totalHeight / PARA_HEIGHT;
  let linePadding = PAGE_LINES - totalLines;
  template = "";
  for (let i = 0; i < linePadding; i++) {
    template += `<div class="para"></div>`;
  }
  imgOutput.innerHTML += template;
  paras = document.querySelectorAll(".para");
  paras[paras.length - 1].style.paddingBottom = "2px";
};

headingHandler = (e) => {
  const newValue = e.target.value;
  let pageHeadArr = newValue.split("");
  let template = `<div class="word">`;
  pageHeadArr.forEach((val) => {
    const isLetter = getLetterString(val);
    if (isLetter) {
      template += isLetter;
    } else if (val === " ") {
      template += `</div><div class="word">`;
    }
  });
  template += `</div>`;
  document.querySelector(".pagetop").innerHTML = template;
};

const getPageTopContent = () => {
  return template;
};

const downloadPage = () => {
  imgOutput.style.border = "none";
  imgOutput.style.margin = "0";
  domtoimage.toBlob(imgOutput).then(function (blob) {
    window.saveAs(blob, "page.png");
    imgOutput.style.border = "1px solid #000";
    imgOutput.style.margin = "20px";
  });
};

const changeInk = (ink) => {
  const letters = document.querySelectorAll(".letter");
  if (ink === "black") {
    letters.forEach((letter) => {
      letter.classList.add("blackInk");
    });
  } else if (ink === "blue") {
    letters.forEach((letter) => {
      letter.classList.remove("blackInk");
    });
  }
};

const newShadow = () => {
  let angle = randomInteger(30, 60);
  let darkerShadow = randomInteger(80, 120);
  let lighterShadow = randomInteger(190, 230);
  let percent = randomInteger(20, 40);
  imgOutput.style.background = `linear-gradient(${angle}deg, rgba(${darkerShadow}, ${darkerShadow}, ${darkerShadow}, 1) 0%, rgba(${lighterShadow}, ${lighterShadow}, ${lighterShadow}, 0.5) ${percent}%)`;
  document.querySelector(".redLine").style.backgroundColor = "#bb1919";
};

const removeShadow = () => {
  imgOutput.style.background = "none";
  document.querySelector(".redLine").style.backgroundColor = "#ff0000";
};

const changeLetterSpacing = () => {
  const newLetterSpacing = document.getElementById("letterSpacing").value;
  document.documentElement.style.setProperty(
    "--letter-spacing",
    `${newLetterSpacing}px`
  );
};

const changeWordSpacing = () => {
  const newWordSpacing = document.getElementById("wordSpacing").value;
  document.documentElement.style.setProperty(
    "--word-spacing",
    `${newWordSpacing}px`
  );
};

const changeFontSize = () => {
  let newFontSize = document.getElementById("fontSize").value;
  if (newFontSize == 0) newFontSize = 24;
  if (newFontSize > 28) newFontSize = 28;
  if (newFontSize < 6) newFontSize = 6;
  document.documentElement.style.setProperty("--font-size", `${newFontSize}px`);
};

const addCuts = () => {
  removeCuts();
  const pageTop = document.querySelector(".pagetop");
  const allWords = [...imgOutput.querySelectorAll(".word")];
  const headingWords = [...pageTop.querySelectorAll(".word")];
  const words = allWords.filter((el) => !headingWords.includes(el));
  const cutsCount = Math.round(words.length / 10);
  let positions = [...Array(words.length).keys()];
  let randomPositions = positions
    .sort(() => 0.5 - Math.random())
    .slice(0, cutsCount);

  for (let i = 0; i < cutsCount; i++) {
    let cutImgNo = randomInteger(1, CUT_IMAGES_COUNT);
    console.log(cutImgNo);
    let newCutElement = document.createElement("img");
    newCutElement.classList.add("letter");
    newCutElement.classList.add("cut");
    if (CUT_SMALL_IMAGES.includes(cutImgNo))
      newCutElement.classList.add("smallCut");
    newCutElement.src = `./imgs/specials/cut${cutImgNo}.png`;

    let newCutWord = document.createElement("div");
    newCutWord.classList.add("word");
    newCutWord.classList.add("cutword");
    newCutWord.appendChild(newCutElement);

    let targetWord = words[randomPositions[i]];
    targetWord.parentNode.insertBefore(newCutWord, targetWord.nextSibling);
  }
};

const removeCuts = () => {
  const cuts = document.querySelectorAll(".cutword");
  cuts.forEach((cut) => {
    cut.parentElement.removeChild(cut);
  });
};

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
