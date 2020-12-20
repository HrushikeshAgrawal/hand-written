const inputText = document.getElementById("inputText");
const imgOutput = document.getElementById("imgOutput");

const PARA_HEIGHT = 28;
const PAGE_LINES = 30;

window.onload = () => {
  inputText.addEventListener("input", inputHandler);
  inputText.addEventListener("propertychange", inputHandler);
  setInitialOutput();
};

inputHandler = (e) => {
  const newValue = e.target.value;
  newArr = newValue.split("");
  let template = `<div class="redLine"></div> <div class="pagetop"></div>`;
  template += `<div class="para"><div class="word">`;
  newArr.forEach((val) => {
    if (capsLetters.includes(val)) {
      template += `<img class="letter caps" src="./imgs/caps/${val}.png" alt="" />`;
    } else if (smallLetters.includes(val)) {
      if (smallTallLetters.includes(val)) {
        template += `<img class="letter small tall" src="./imgs/small/${val}.png" alt="" />`;
      } else if (smallDownLetters.includes(val)) {
        template += `<img class="letter small down" src="./imgs/small/${val}.png" alt="" />`;
      } else {
        template += `<img class="letter small" src="./imgs/small/${val}.png" alt="" />`;
      }
    } else {
      switch (val) {
        case " ":
          template += `</div><div class="word">`;
          break;
        case "\n":
          template += `</div></div><div class="para"><div class="word">`;
          break;
        // default:
        //   template += `<img class="letter" src="./imgs/Z.png" alt="" />`;
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

const capsLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const smallLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const smallTallLetters = ["b", "d", "f", "h", "k", "l", "t"];

const smallDownLetters = ["g", "j", "p", "q", "y"];

const downloadPage = () => {
  document.getElementById("imgOutput").style.border = "none";
  domtoimage.toBlob(document.getElementById("imgOutput")).then(function (blob) {
    window.saveAs(blob, "page.png");
    document.getElementById("imgOutput").style.border = "1px solid #000";
  });
};

const setInitialOutput = () => {
  initialOutput = `
  <div class="redLine"></div>
  <div class="pagetop"></div>
  <div class="para">
    <div class="word">
      <img class="letter small" src="./imgs/small/a.png" alt="" /><img
        class="letter small tall"
        src="./imgs/small/b.png"
        alt=""
      /><img class="letter small" src="./imgs/small/c.png" alt="" /><img
        class="letter small tall"
        src="./imgs/small/d.png"
        alt=""
      /><img class="letter small" src="./imgs/small/e.png" alt="" /><img
        class="letter small tall"
        src="./imgs/small/f.png"
        alt=""
      /><img class="letter small down" src="./imgs/small/g.png" alt="" /><img
        class="letter small tall"
        src="./imgs/small/h.png"
        alt=""
      /><img class="letter small" src="./imgs/small/i.png" alt="" /><img
        class="letter small down"
        src="./imgs/small/j.png"
        alt=""
      /><img class="letter small tall" src="./imgs/small/k.png" alt="" /><img
        class="letter small tall"
        src="./imgs/small/l.png"
        alt=""
      /><img class="letter small" src="./imgs/small/m.png" alt="" /><img
        class="letter small"
        src="./imgs/small/n.png"
        alt=""
      /><img class="letter small" src="./imgs/small/o.png" alt="" /><img
        class="letter small down"
        src="./imgs/small/p.png"
        alt=""
      /><img class="letter small down" src="./imgs/small/q.png" alt="" /><img
        class="letter small"
        src="./imgs/small/r.png"
        alt=""
      /><img class="letter small" src="./imgs/small/s.png" alt="" /><img
        class="letter small tall"
        src="./imgs/small/t.png"
        alt=""
      /><img class="letter small" src="./imgs/small/u.png" alt="" /><img
        class="letter small"
        src="./imgs/small/v.png"
        alt=""
      /><img class="letter small" src="./imgs/small/w.png" alt="" /><img
        class="letter small"
        src="./imgs/small/x.png"
        alt=""
      /><img class="letter small down" src="./imgs/small/y.png" alt="" /><img
        class="letter small"
        src="./imgs/small/z.png"
        alt=""
      />
    </div>
  </div>
  <div class="para"><div class="word"></div></div>
  <div class="para">
    <div class="word">
      <img class="letter caps" src="./imgs/caps/A.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/B.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/C.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/D.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/E.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/F.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/G.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/H.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/I.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/J.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/K.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/L.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/M.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/N.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/O.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/P.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/Q.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/R.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/S.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/T.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/U.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/V.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/W.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/X.png"
        alt=""
      /><img class="letter caps" src="./imgs/caps/Y.png" alt="" /><img
        class="letter caps"
        src="./imgs/caps/Z.png"
        alt=""
      />
    </div>
  </div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para"></div>
  <div class="para" style="padding-bottom: 2px"></div>
`;

  imgOutput.innerHTML = initialOutput;
};
