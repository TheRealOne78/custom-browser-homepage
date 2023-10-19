/*
 *  Copyright (C) 2023 TheRealOne78 <bajcsielias78@gmail.com>
 *
 *  This file is part of the 'TheRealOne78's Browser Homepage' project
 *
 *  'TheRealOne78's Browser Homepage' is free software: you can redistribute it
 *  and/or modify it under the terms of the MIT License as published by the
 *  Massachusetts Institute of Technology.
 *
 *  'TheRealOne78's Browser Homepage' is distributed in the hope that it will be
 *  useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the MIT License for
 *  more details.
 *
 *  You should have received a copy of the MIT License along with 'TheRealOne78's
 *  Browser Homepage'. If not, see <https://mit-license.org/>.
 */


/*
 * == Images paths ==
 * In this case, the paths are relative to 'homepage.html',
 * but absolute paths can also be set with no problem
 */
const imgPathArr = [
  "./resources/img/itemImg/96BYTHT.jpg",
  "./resources/img/itemImg/anewwall.png",
  "./resources/img/itemImg/e699cce5b24e1671a12fd45d0dcbf50e.jpg",
  "./resources/img/itemImg/morpho.jpg",
  "./resources/img/itemImg/pipkin_pippa_by_ecjhonny_deykvrn-375w-2x.jpg",
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
  "./resources/img/itemImg/wallhaven-j3ddgp.jpg",
  "./resources/img/itemImg/wallhaven-j55m7p.jpg",
  "./resources/img/itemImg/wallhaven-l8mxeq.jpg",
  "./resources/img/itemImg/wallhaven-m9evmk.png",
  "./resources/img/itemImg/wallhaven-md2qzk.jpg",
  "./resources/img/itemImg/wallhaven-o33lj5.jpg",
  "./resources/img/itemImg/wallhaven-p8oy5m.jpg",
  "./resources/img/itemImg/wallhaven-pk6233.jpg",
  "./resources/img/itemImg/wallhaven-pkkxg9.jpg",
  "./resources/img/itemImg/wallhaven-q66oqq.png",
  "./resources/img/itemImg/wallhaven-q68d17.png",
  "./resources/img/itemImg/wallhaven-rrjgw7.png",
  "./resources/img/itemImg/wallhaven-vq551p.jpg",
  "./resources/img/itemImg/wallhaven-we63vp.png",
  "./resources/img/itemImg/wallhaven-x88m3l.png",
  "./resources/img/itemImg/wallhaven-ymom6x.jpg",
  "./resources/img/itemImg/wallhaven-z8ylgj.jpg",
  "./resources/img/itemImg/244895-aliya06.png"
]

const fortuneArr = [
  "Did you know each insect is a host to ten bacterial species?\n\
  <p>There are around 2 billion species on Earth—with 6.8 million likely to be species of insects. And up to 10 types of bacteria lives inside of each of these insects!</p>\n\
  <!--https://www.rd.com/list/did-you-know-facts-most-people-dont-know/ - fair use -->",

  "Did you know Neil Armstrong once threatened to sue his barber for selling his hair?\n\
  <p>In 2005, Neil Armstrong once threatened legal action to his former barber who had earned $3,000 for selling a lock of the astronaut’s hair. The barber took no heed of the threat and went on to make over $38,000 in 2016 by selling both the hair and the barber's comb and scissors.</p>\n\
  <!--https://parade.com/1199611/marynliles/did-you-know-facts/ - fair use -->",

  "Did you know professional cheesemakers are studying if music can change the taste of cheese?\n\
  <p>Sweet dreams are made of cheese! Swiss cheesemaker, Beat Wampfler, plays songs from bands like Led Zeppelin and A Tribe Called Quest during his cheese-producing process and, with the help of students from the University of the Arts in Bern, he's studying to see if and how music can change the flavor of his Emmental cheese.</p>\n\
  <!--https://parade.com/1199611/marynliles/did-you-know-facts/ - fair use -->",

  "Did you know there is a museum dedicated to failure?\n\
  <p>Boasting around 159 failed products and innovations, the touring Museum of Failure features displays on such bad ideas as Harley-Davidson perfume, Colgate frozen entrees, and Microsoft Zune.</p>\n\
  <!--https://parade.com/1199611/marynliles/did-you-know-facts/ - fair use -->",

  "Did you know it's illegal to own just one guinea pig in Switzerland?\n\
  <p>Guinea pigs are highly social critters that prefer the company of other guinea pigs. That is why it’s illegal to own just one of these adorable pets in Switzerland. Also, if one of your guinea pigs passes away and you're not ready to commit to another, the Swiss government will also allow you to rent a guinea pig as a companion to your remaining pet.</p>\n\
  <!--https://parade.com/1199611/marynliles/did-you-know-facts/ - fair use -->",

  "Did you know a penguin achieved knighthood?\n\
  <p>A penguin living in the Edinburgh Zoo was granted knighthood in 2008. The penguin, named Nils Olav III,  is the mascot of the King of Norway's Guard, making it a special figure for the country's military, and the knighting ceremony, was an opportunity to celebrate the relations between Norway and Scotland.</p>\n\
  <!--https://parade.com/1199611/marynliles/did-you-know-facts/ - fair use -->",

  "Did you know bubble wrap was originally invented as wallpaper?\n\
  <p>If you find popping bubble wrap one of the best things about getting mail, imagine it being plastered all over the walls of your home! Engineer Al Fielding and Swiss inventor Marc Chavannes invented bubble wrap by accident in 1957 while trying to create a textured wallpaper by sealing two shower curtains together to trap air bubbles.</p>\n\
  <!--https://parade.com/1199611/marynliles/did-you-know-facts/ - fair use -->",

  "Did you know grapes light on fire in the microwave?\n\
  <p>In 2011, a physicist at the University of Sydney went viral after he placed a grape in the microwave, filmed the blazing results, and stumped scientists until 2019! Published in Proceedings of the National Academy of Sciences, it was reported that the spontaneous combustion of grapes occurs as a result of the loose electrons and ions that cluster to form plasma when the fruit gets hot.</p>\n\
  <!--https://parade.com/1199611/marynliles/did-you-know-facts/ - fair use -->",

  "Did you know the longest breath held underwater is 24:03 minutes?\n\
  <p>That’s the typical amount of time it takes to watch one episode of The Office. But in 2016, professional freediver Aleix Segura Vendrell set this world record in a breathtaking attempt (literally).</p>\n\
  <!--https://www.rd.com/list/did-you-know-facts-most-people-dont-know/ - fair use -->",

  "Did you know corn, rice, and wheat make up most of the world’s staple foods?\n\
  <p>According to the Food and Agriculture Organization, these three simple, yet vital, ingredients make up the world’s staple foods and provide the majority of the world’s calorie intake.</p>\n\
  <!--https://www.rd.com/list/did-you-know-facts-most-people-dont-know/ - fair use -->",

  "Birds require gravity to swallow.\n\
  <p>Birds cannot chew their food and instead swallow their prey whole. The esophagus of a bird is wide enough to swallow larger meals. They depend on gravity to push their food down the esophagus and then later be propelled into their stomachs.</p>\n\
  <!--https://facts.net/did-you-know-facts/ - fair use -->",

  "The Hawaiian alphabet contains only 13 letters.\n\
  <p>The Hawaiian alphabet contains a total of five vowels that are both long and short. It also contains a total of eight consonants. Hawaii’s alphabet represents all the basic sounds and phonemes in their language.</p>\n\
  <!--https://facts.net/did-you-know-facts/ - fair use -->",

  "Australia is the only continent without an active volcano.\n\
  <p>The nearest active volcanoes are located off the continent of Australia but are still within its territory. One is located on Head Island and the other on McDonald Islands. The reason why Australia does not have any active volcanoes located on the continent is that it isn’t on a plate boundary.</p>\n\
  <!--https://facts.net/did-you-know-facts/ - fair use -->",

  "Honey never spoils.\n\
  <p>Here’s one of our sweetest did you know facts about food. When honey is heated and strained and sealed properly, it will not be able to absorb moisture and therefore will stay as it is forever. The oldest jar of honey ever found is stated to be over 5500 years old today.</p>\n\
  <!--https://facts.net/did-you-know-facts/ - fair use -->",

  "Ducks cannot walk without bobbing their heads.\n\
  <p>Ducks often bob their heads to signify moods or emotions. At times, it may also be used to signify flirting during the mating season.</p>\n\
  <!--https://facts.net/did-you-know-facts/ - fair use -->",

  "Pigs can’t look upwards.\n\
  <p>Their necks physically cannot bend to look up. This is because the body of the pig is designed mainly to prioritize finding food.</p>\n\
  <!--https://facts.net/did-you-know-facts/ - fair use -->",

  "Brazil is named after a tree.\n\
  <p>The country of Brazil was named after the Portuguese settlement on its land in the 1500s. Brazilwood trees were often harvested for a red-colored dye that was later on shipped to Europe which is where the country got its name from. The tree was named after the country.</p>\n\
  <!--https://facts.net/did-you-know-facts/ - fair use -->",

  "Instant coffee was made in 1901.\n\
  <p>The extract is made by brewing ground coffee beans and then spray-drying it with hot air. The droplets then turn into a fine powder.</p>\n\
  <!--https://facts.net/did-you-know-facts/ - fair use -->",

  "Bulls run faster uphill than downhill.\n\
  <p>This is mainly because they have longer hind legs than front legs. Their legs are also very powerful and can run at speeds of 35 mph.</p>\n\
  <!--https://facts.net/did-you-know-facts/ - fair use -->",

  "The side of the hammer is called a cheek.\n\
  <p>The part of the hammer where the handle fits into the head is called the adze eye. Most hammers will also have a claw-like extension used to remove nails.</p>\n\
  <!--https://facts.net/did-you-know-facts/ - fair use -->"
]

/* Get a random path from imgPathArr and set it in HTML */
const randImgPath = imgPathArr[Math.floor(Math.random() * imgPathArr.length)]
document.getElementById("img").src = randImgPath;

/* Get a random path from fortuneArr and set it in HTML */
const randFortune = fortuneArr[Math.floor(Math.random() * fortuneArr.length)]
document.getElementById("funfact").innerHTML = randFortune;

/* Pre-defined terminal-like HEX colors */
const textColorArr = [ "#ffffff", "#0037DA", "#3A96DD", "#13A10E", "#881798", "#C50F1F", "#C19C00", "#ffcadc"]


/* Get a random HEX color from textColorArr */
const textColor = Math.floor(Math.random() * textColorArr.length)

/* Set the body text color as textColor */
document.body.style.color = textColorArr[textColor]

/* Set other text color as textColor, just to be safe */
document.querySelectorAll("a").forEach(a => a.style.color = textColorArr[textColor])
