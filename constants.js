const PARA_HEIGHT = 28;
const PAGE_LINES = 30;

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

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "&",
  "<",
  ">",
  "^",
  "@",
  "(",
  ")",
  ":",
  "{",
  "}",
  ".",
  "=",
  "!",
  "#",
  "-",
  "%",
  "+",
  "?",
  ";",
  '"',
  "'",
  "\\",
  "/",
  "*",
  "~",
  "$",
  "...",
];

const symbolsToFileName = [
  { symbol: "&", fileName: "and" },
  { symbol: "<", fileName: "arrow_bracket_close" },
  { symbol: ">", fileName: "arrow_bracket_open" },
  { symbol: "^", fileName: "arrow_up" },
  { symbol: "@", fileName: "at" },
  { symbol: "(", fileName: "circle_bracket_open" },
  { symbol: ")", fileName: "circle_bracket_close" },
  { symbol: ":", fileName: "colon" },
  { symbol: "{", fileName: "curly_bracket_close" },
  { symbol: "}", fileName: "curly_bracket_open" },
  { symbol: ".", fileName: "dot" },
  { symbol: "=", fileName: "equals" },
  { symbol: "!", fileName: "exclamation" },
  { symbol: "#", fileName: "hash" },
  { symbol: "-", fileName: "minus" },
  { symbol: "%", fileName: "percentage" },
  { symbol: "+", fileName: "plus" },
  { symbol: "?", fileName: "question" },
  { symbol: ";", fileName: "semi_colon" },
  { symbol: '"', fileName: "double_quotes" },
  { symbol: "'", fileName: "single_quote" },
  { symbol: "\\", fileName: "slash_backward" },
  { symbol: "/", fileName: "slash_forward" },
  { symbol: "*", fileName: "star" },
  { symbol: "~", fileName: "tild" },
  { symbol: "$", fileName: "dollar" },
  { symbol: "...", fileName: "ellipsis" },
];