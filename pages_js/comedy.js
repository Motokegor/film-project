import db from '../db.json'

window.addEventListener('DOMContentLoaded', function(){

  var video = document.querySelector('.video');

  video.addEventListener('click', function(){

    if(video.classList.contains('ready')){
      return;
    }

    video.classList.add('ready');

    var src = video.dataset.src

    video.insertAdjacentHTML('afterbegin', '    <iframe  src="https://www.youtube.com/embed/q5xqY3QevWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    ')

  });
});



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

const thirdGroup = document.querySelector(".comedy_group_movies")
import { arrImgThird } from "../scriptPicture";

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
  thirdGroup.append(div);
}


function createlistUser(arr) {
  thirdGroup.innerHTML = "";
  arr.forEach((item) => {
    createUser(item);
  });
}

async function getUsers() {
  const responce = await fetch("http://localhost:3003/comedy_group_movies");
  const data = await responce.json();
  const newData = data.map((item,index)=>{
    item.img = arrImgThird[index]
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
  const responce = await fetch("http://localhost:3003/comedy_group_movies");
  const data = await responce.json();
  const newData = data.map((item, index) => {
    item.img = arrImgThird[index]
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
      thirdGroup.innerHTML = `<h1 >Ничего не найдено</h1>`
    }

    return
  } else {
    createlistUser(newData)
  }
}
 btn_search.addEventListener('click', function () { search(db) })
