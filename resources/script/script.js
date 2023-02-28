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
]

const randomImage =animePathArr[Math.floor(Math.random() * animePathArr.length)]
document.getElementById("img").src =randomImage

const textColorArr = [ "#ffffff", "#0037DA", "#3A96DD", "#13A10E", "#881798", "#C50F1F", "#C19C00" ]

const textColor = Math.floor(Math.random() * textColorArr.length)
document.body.style.color =textColorArr[textColor]

document.querySelector(".errItem:nth-child(2)").style.color = textColorArr[textColor]
document.querySelector(".errItemText").style.color = textColorArr[textColor];
document.querySelectorAll("a").forEach(a => a.style.color = textColorArr[textColor])
document.querySelectorAll(".selected").forEach(selected => selected.style.background = textColorArr[textColor])
