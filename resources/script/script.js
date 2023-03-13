/* Images paths *
 * In this case, the paths are relative to 'homepage.html',
 * but absolute paths can also be set with no problem */
const imgPathArr = [
  "./resources/img/itemImg/96BYTHT.jpg",
  "./resources/img/itemImg/anewwall.png",
  "./resources/img/itemImg/morpho.jpg",
  "./resources/img/itemImg/wadim-kashin-monday.jpg",
  "./resources/img/itemImg/wallhaven-137qmv.png",
  "./resources/img/itemImg/wallhaven-1k136g.jpg",
  "./resources/img/itemImg/wallhaven-28wrdx.jpg",
  "./resources/img/itemImg/wallhaven-2eqkzx.png",
  "./resources/img/itemImg/wallhaven-57pd53.jpg",
  "./resources/img/itemImg/wallhaven-6oo2yl.jpg",
  "./resources/img/itemImg/wallhaven-728k2e.png",
  "./resources/img/itemImg/wallhaven-762zq3.png",
  "./resources/img/itemImg/wallhaven-833gr1.jpg",
  "./resources/img/itemImg/wallhaven-966yr8.jpg",
  "./resources/img/itemImg/wallhaven-96vg61.jpg",
  "./resources/img/itemImg/wallhaven-e7g32o.png",
  "./resources/img/itemImg/wallhaven-eyeeo8.jpg",
  "./resources/img/itemImg/wallhaven-eyy16o.jpg",
  "./resources/img/itemImg/wallhaven-g7pok3.png",
  "./resources/img/itemImg/wallhaven-g8ez97.jpg",
  "./resources/img/itemImg/wallhaven-j55m7p.jpg",
  "./resources/img/itemImg/wallhaven-m9evmk.png",
  "./resources/img/itemImg/wallhaven-md2qzk.jpg",
  "./resources/img/itemImg/wallhaven-o33lj5.jpg",
  "./resources/img/itemImg/wallhaven-p8oy5m.jpg",
  "./resources/img/itemImg/wallhaven-pk6233.jpg",
  "./resources/img/itemImg/wallhaven-pkkxg9.jpg",
  "./resources/img/itemImg/wallhaven-q66oqq.png",
  "./resources/img/itemImg/wallhaven-q68d17.png",
  "./resources/img/itemImg/wallhaven-x88m3l.png",
  "./resources/img/itemImg/wallhaven-ymom6x.jpg",
  "./resources/img/itemImg/wallhaven-z8ylgj.jpg",
  "./resources/img/itemImg/244895-aliya06.png"
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
document.querySelector(".item:nth-child(2)").style.color = textColorArr[textColor]
document.querySelector(".itemText").style.color = textColorArr[textColor];
document.querySelectorAll("a").forEach(a => a.style.color = textColorArr[textColor])
document.querySelectorAll(".selected").forEach(selected => selected.style.background = textColorArr[textColor])
