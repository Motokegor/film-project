import db from '../db.json'
const ratings = document.querySelectorAll(".rating");
if (ratings.length > 0) {
  initRatings();
}

//основная функция
function initRatings() {
  let ratingActive, ratingValue;
  //"Бегаем" по всем рейтингам на странице
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  //инициациализируем конкретный рейтинг
  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains("rating_set")) {
      setRating(rating);
    }
  }

  //инициализация переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating__active");
    ratingValue = rating.querySelector(".rating__value");
  }
  //изменяем ширину активных звёзд
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  //возможность указать оценку
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll(".rating__item");
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener("mouseenter", function (e) {
        //обновление переменных
        initRatingVars(rating);
        // обновление активных звёзд
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener("mouseleave", function (e) {
        //обновление активных звёзд
        setRatingActiveWidth();
      });
      ratingItem.addEventListener("click", function (e) {
        //обновление переменных
        initRatingVars(rating);

        if (rating.dataset.ajax) {
          // "отправить" на сервер
          setRatingValue(ratingItem.value, rating);
        } else {
          // отобразить указанную оценку
          ratingValue.innerHTML = index + 1;
          setRatingActiveWidth();
        }
      });
    }
  }

  // async function setRatingValue(value, rating) {
  //   if (!rating.classList.contains("rating_sending")) {
  //     rating.classList.add("rating_sending");

  //     //отправка данных(value) на сервер
  //     let response = await fetch("rating.json", {
  //       method: "GET",

  //       // body: JSON.stringify({
  //       //   userRating: value,
  //       // }),
  //       // headers: {
  //       //   "content-type": "application/json",
  //       // },
  //     });
  //     if (response.ok) {
  //       const result = await response.json();

  //       //получаем новый рейтинг
  //       const newRating = result.newRating;

  //       //вывод нового среднего результата
  //       ratingValue.innerHTML = newRating;

  //       //обновление активных звёзд
  //       setRatingActiveWidth();

  //       rating.classList.remove("rating_sending");
  //     } else {
  //       alert("Ошибка");

  //       rating.classList.remove("rating_sending");
  //     }
  //   }
  // }
}

window.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video");

  video.addEventListener("click", function () {
    if (video.classList.contains("ready")) {
      return;
    }

    video.classList.add("ready");

    const src = video.dataset.src;

    video.insertAdjacentHTML(
      "afterbegin",
      '<iframe src="https://www.youtube.com/embed/6DR1SqPYWCo?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
  });
});

const btn = document.querySelector(".form__btn");
const modal = document.querySelector(".wrapper-modal");
const btnCloseModal = document.querySelector(".btn_close-modal");
const btnYes = document.querySelector(".btn_da");
const WrapperContent = document.querySelector(".wrapper-content");

function openModal() {
  if (modal.classList.contains("none")) {
    modal.classList.remove("none");
  }
}

btn.addEventListener("click", openModal);

function closeModal() {
  modal.classList.add("none");
}

modal.addEventListener("click", closeModal);

function sendForm() {
  WrapperContent.innerHTML = `<h1 class = 'title_up'> Спасибо за отзыв! </h1> `;
}
modal.addEventListener("click", sendForm);

const trigger = document.querySelector(".trigger");
const nav = document.querySelector(".full-screen");
const backdrop = document.querySelector(".backdrop");
const h2 = document.querySelector("h2");
const video = document.querySelector(".video");
const content = document.querySelector(".content");
const body = document.querySelector("body");
const cross = document.querySelector(".cross");
const contentCross = document.querySelector(".content_cross");

trigger.addEventListener("click", openNav);
cross.addEventListener("click", closeNav);

function openNav() {
  h2.style.zIndex = -1;
  video.style.zIndex = -1;
  trigger.style.zIndex = -1;
  content.style.zIndex = -1;
  cross.style.display = "block";
  body.style.overflow = "hidden";
  nav.classList.add("open");
}

function closeNav() {
  h2.style.zIndex = 1;
  video.style.zIndex = 1;
  trigger.style.zIndex = 1;
  content.style.zIndex = 1;
  cross.style.display = "none";
  body.style.overflow = "visible";
  nav.classList.remove("open");
}

////////////////////////////////////////////////

const firstGroup = document.querySelector(".index_group_movies");
import { arrImg } from "../scriptPicture";

//
function createUser({ ticket, text, btn, id, img , genre }) {
  const div = document.createElement("div");
  div.classList.add("movie");
  div.id = id;
  const template = `
  
  <div class="poster-movie">
  <img src="${img}" alt="" class="poster"/>
</div>
<div class="ticket-container">
    <div class="ticket-content">
      <div class="movie_information">
        <h4 class="ticket-title">${ticket}</h4>
        <p class="ticket-slogan"> ${text}</p>
      </div>
      <button class="ticket-buy">${btn}</button>
    </div>
  </div>
`;
  div.innerHTML = template;
  firstGroup.append(div);
}


function createlistUser(arr) {
  firstGroup.innerHTML = "";
  arr.forEach((item) => {
    createUser(item);
  });
}

async function getUsers() {
  const responce = await fetch("http://localhost:3003/index_group_movies");
  const data = await responce.json();
  const newData = data.map((item,index)=>{
    item.img = arrImg[index]
    return item
  })
  createlistUser(newData);
}
getUsers();





const btn_search = document.querySelector('.form_finding');
const form_search = document.querySelector('.search')


async function search() {
  const value = form_search.value
  console.log(value);

  form_search.value = ''
  const responce = await fetch("http://localhost:3003/index_group_movies");
  const data = await responce.json();
  const newData = data.map((item, index) => {
    item.img = arrImg[index]
    return item
  })


  if (value) {
    console.log(newData);
    const newArr = newData.filter(item => {
      if (item.ticket.indexOf(value) == -1) {
        return false
      }
      return true
    })

    console.log(newArr);
    if (newArr.length > 0) {
      console.log(newArr);
      createlistUser(newArr)
      return
    }
    else {
      firstGroup.innerHTML = `<h1 >Ничего не найдено</h1>`
    }

    return
  } else {
    createlistUser(newData)
  }
}

 btn_search.addEventListener('click', function () { search(db) })







