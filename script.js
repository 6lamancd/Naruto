// const someText = document.querySelector(".someText");

// const arrayofGroup = [
//   "Adil",
//   "Sultan",
//   "Elaman",
//   "Dilbara",
//   "Sarynji",
//   "Alihan",
//   "Ammar",
// ];

// function generateCards(arr) {
//   return arr.map((item) => `<span class="adil">${item}</span>`).join("");
// }

// someText.insertAdjacentHTML("beforeend", generateCards(arrayofGroup));

// 'beforebegin': до самого element (до открывающего тега).
// 'afterbegin': сразу после открывающего тега element (перед первым потомком).
// 'beforeend': сразу перед закрывающим тегом element (после последнего потомка).
// 'afterend': после element (после закрывающего тега).

let shinobiWorld = [
  {
    name: "Naruto",
    clan: "Uzumaki",
    gender: "Male",
    rang: "Genin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/f/f7/Naruto_transforming.png/revision/latest?cb=20170304133400&path-prefix=ru",
  },
  {
    name: "Saske",
    clan: "Uchiha",
    gender: "Male",
    rang: "Genin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/9/9f/Sasuke_Part_2.jpg/revision/latest?cb=20210404192345&path-prefix=ru",
  },
  {
    name: "Sakura",
    clan: "Haruno",
    gender: "Female",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/f/f7/Sakura_Boruto.png/revision/latest?cb=20210224210410&path-prefix=ru",
  },
  {
    name: "Kakashi",
    clan: "hatake",
    gender: "Male",
    rang: "Sennin",
    vallage: "Leafy Village",
    image:
      "https://minecraftch.ru/uploads/posts/2018-03/1521238840_kakashihatake.jpg",
  },
  {
    name: "Orochimaru",
    clan: "",
    gender: "Male",
    rang: "Sanin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/1/14/Orochimaru_Infobox.png/revision/latest?cb=20151017160235&path-prefix=ru",
  },
  {
    name: "Madara",
    clan: "Uchiha",
    gender: "Male",
    rang: "dancer(died)",
    vallage: "Leafy Village",
    image:
      "https://sun9-56.userapi.com/impf/c850124/v850124490/cbafc/pqpDEyxae-Y.jpg?size=807x533&quality=96&sign=925f8a5abd5f8f0cd885e09ce61f7323&type=album",
  },
  {
    name: "Gaara",
    clan: "",
    gender: "Male",
    rang: "Kazekage",
    vallage: "Sand Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/0/0f/Gaara_Part_II.png/revision/latest?cb=20170507172824&path-prefix=ru",
  },
  {
    name: "Yamato",
    clan: "",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/f/f7/Yamato_newshot.png/revision/latest?cb=20190202094154&path-prefix=ru",
  },
  {
    name: "Jiraya",
    clan: "",
    gender: "Male",
    rang: "Sanin (died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/2/21/Profile_Jiraiya.PNG/revision/latest?cb=20170818131513&path-prefix=ru",
  },
  {
    name: "Gay",
    clan: "Maito",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/4/40/MightGuy.png/revision/latest?cb=20150423135435&path-prefix=ru",
  },
  {
    name: "Sunade",
    clan: "Senju",
    gender: "Female",
    rang: "Sanin",
    vallage: "Leafy Village",
    image:
      "https://staticg.sportskeeda.com/editor/2022/07/118e8-16581424056750.png?w=840",
  },
  {
    name: "Hirusen",
    clan: "Sarutobi",
    gender: "Male",
    rang: "Hockage (died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/e/e4/Hiruzen_Sarutobi.png/revision/latest?cb=20170930091606&path-prefix=ru",
  },
  {
    name: "Tobirama",
    clan: "Senju",
    gender: "Male",
    rang: "Hockage (died)",
    vallage: "Leafy Village",
    image:
      "https://listasnerds.com.br/wp-content/uploads/2022/06/Tobirama-Senju_CAPA_IMAGEM-DESTACADA.png",
  },
  {
    name: "Killer",
    clan: "Be",
    gender: "Male",
    rang: "Jinchuriki",
    vallage: "Clouds Village",
    image:
      "https://static.wikia.nocookie.net/character-power/images/f/fa/%D0%9A%D0%B8%D0%BB%D0%BB%D0%B5%D1%80_%D0%91%D0%B81.png/revision/latest?cb=20140326105611&path-prefix=ru",
  },
  {
    name: "Minato",
    clan: "Namikaze",
    gender: "Male",
    rang: "Hockage(died)",
    vallage: "Leafy Village",
    image:
      "https://i.pinimg.com/originals/d7/8e/55/d78e55c87762231b61877be5c93d03fb.jpg",
  },
];
const $Container = document.querySelector(".container");

function generateCards(arr) {
  const res = arr
    .map(
      (item) =>
        `<div class="card">
    <img class="card_img" src=${item.image} />
    <ul>
      <li>
        name: ${item.name}
      <li/>
      <li>
        clan: ${item.clan}
      <li/>
      <li>
        gender: ${item.gender}
      <li/>
      <li>
        rang: ${item.rang}
      <li/>
      <li>
        vallage: ${item.village}
      <li/>
    <ul/>
  </div>`
    )
    .join("");
  return res;
}

$Container.innerHTML = generateCards(shinobiWorld);
