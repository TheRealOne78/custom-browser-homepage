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
  "./resources/img/anime/9.png",
  "./resources/img/anime/wallhaven-1k136g.jpg",
  "./resources/img/anime/wallhaven-28wrdx.jpg",
  "./resources/img/anime/wallhaven-2eqkzx.png",
  "./resources/img/anime/wallhaven-57pd53.jpg",
  "./resources/img/anime/wallhaven-6oo2yl.jpg",
  "./resources/img/anime/wallhaven-833gr1.jpg",
  "./resources/img/anime/wallhaven-966yr8.jpg",
  "./resources/img/anime/wallhaven-96vg61.jpg",
  "./resources/img/anime/wallhaven-e7g32o.png",
  "./resources/img/anime/wallhaven-eyeeo8.jpg",
  "./resources/img/anime/wallhaven-eyy16o.jpg",
  "./resources/img/anime/wallhaven-g7pok3.png",
  "./resources/img/anime/wallhaven-g8ez97.jpg",
  "./resources/img/anime/wallhaven-m9evmk.png",
  "./resources/img/anime/wallhaven-md2qzk.jpg",
  "./resources/img/anime/wallhaven-o33lj5.jpg",
  "./resources/img/anime/wallhaven-p8oy5m.jpg",
  "./resources/img/anime/wallhaven-pk6233.jpg",
  "./resources/img/anime/wallhaven-pkkxg9.jpg",
  "./resources/img/anime/wallhaven-q66oqq.png",
  "./resources/img/anime/wallhaven-x88m3l.png",
  "./resources/img/anime/wallhaven-ymom6x.jpg",
  "./resources/img/anime/wallhaven-z8ylgj.jpg"
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
