/* Images paths *
 * In this case, the paths are relative to 'homepage.html',
 * but absolute paths can also be set with no problem */
const imgPathArr = [
  "./resources/img/anime/1.png",
  "./resources/img/anime/2.png",
  "./resources/img/anime/3.jpg",
  "./resources/img/anime/4.png",
  "./resources/img/anime/5.jpg",
  "./resources/img/anime/6.jpg",
  "./resources/img/anime/7.png",
  "./resources/img/anime/8.jpg",
  "./resources/img/anime/9.png"
]

/* Get a random path from imgPathArr and set it in HTML */
const randImgPath = imgPathArr[Math.floor(Math.random() * imgPathArr.length)]
document.getElementById("img").src = randImgPath

/* Pre-defined terminal-like HEX colors */
const textColorArr = [ "#ffffff", "#0037DA", "#3A96DD", "#13A10E", "#881798", "#C50F1F", "#C19C00" ]

/* Get a random HEX color from textColorArr */
const textColor = Math.floor(Math.random() * textColorArr.length)

/* Set the body text color as textColor */
document.body.style.color = textColorArr[textColor]

/* Set other text color as textColor, just to be safe */
document.querySelector(".errItem:nth-child(2)").style.color = textColorArr[textColor]
document.querySelector(".errItemText").style.color = textColorArr[textColor];
document.querySelectorAll("a").forEach(a => a.style.color = textColorArr[textColor])
document.querySelectorAll(".selected").forEach(selected => selected.style.background = textColorArr[textColor])
