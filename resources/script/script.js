const animePathArr = [
  "./resources/img/anime/1.png",
  "./resources/img/anime/2.png",
  "./resources/img/anime/3.jpg",
  "./resources/img/anime/4.png",
  "./resources/img/anime/5.jpg",
  "./resources/img/anime/6.jpg",
  "./resources/img/anime/7.png",
  "./resources/img/anime/8.jpg",
  "./resources/img/anime/9.png"
];

let animeImgPathIndex = Math.floor(Math.random() * animePathArr.length);
document.getElementById("img").src = animePathArr[animeImgPathIndex];

const textColorArr = [
  "#ffffff", "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(74deg) brightness(105%) contrast(105%)", //white  - 0

  "#0037DA", "brightness(0) saturate(100%) invert(18%) sepia(67%) saturate(4477%) hue-rotate(224deg) brightness(85%) contrast(116%)"                           , //blue   - 2

  "#3A96DD", "brightness(0) saturate(100%) invert(51%) sepia(74%) saturate(483%) hue-rotate(165deg) brightness(90%) contrast(92%)"                             , //cyan   - 4

  "#13A10E", "brightness(0) saturate(100%) invert(45%) sepia(31%) saturate(4835%) hue-rotate(88deg) brightness(94%) contrast(89%)"                             , //green  - 6

  "#881798", "brightness(0) saturate(100%) invert(16%) sepia(62%) saturate(4153%) hue-rotate(283deg) brightness(91%) contrast(100%)"                           , //purple - 8

  "#C50F1F", "brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4304%) hue-rotate(342deg) brightness(74%) contrast(112%)"                           , //red    - 10

  "#C19C00", "brightness(0) saturate(100%) invert(50%) sepia(97%) saturate(688%) hue-rotate(18deg) brightness(96%) contrast(101%)"                               //yellow - 12
  /* Filtering done from https://codepen.io/sosuke/pen/Pjoqqp */
];

let textColor = Math.floor(Math.random() * textColorArr.length);
if(textColor % 2 !== 0)
  textColor--;

let bodyCollection = document.getElementsByTagName("body");
for(let i = 0; i < bodyCollection.length; i++)
  bodyCollection[i].style.color = textColorArr[textColor];

let errItemCollection = document.getElementsByClassName("errItem");
errItemCollection[1].style.color = textColorArr[textColor];

let errItemTextCollection = document.getElementsByClassName("errItemText");
errItemTextCollection[0].style.color = textColorArr[textColor];

let aCollection = document.getElementsByTagName("a");
for(let i = 0; i < aCollection.length; i++)
  aCollection[i].style.color = textColorArr[textColor];

let selectedCollection = document.getElementsByClassName("selected");
for(let i = 0; i < selectedCollection.length; i++)
  selectedCollection[i].style.background = textColorArr[textColor];
