window.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector(".video");
    video.addEventListener("click", function() {
        if (video.classList.contains("ready")) return;
        video.classList.add("ready");
        var src = video.dataset.src;
        video.insertAdjacentHTML("afterbegin", '    <iframe  src="https://www.youtube.com/embed/q5xqY3QevWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    ');
    });
});
const trigger = document.querySelector(".trigger");
const nav = document.querySelector(".full-screen");
const backdrop = document.querySelector(".backdrop");
const h2 = document.querySelector("h2");
const video = document.querySelector(".video");
const content = document.querySelector(".content");
const body = document.querySelector("body");
trigger.addEventListener("click", openNav);
backdrop.addEventListener("click", closeNav);
function openNav() {
    h2.style.zIndex = -1;
    video.style.zIndex = -1;
    content.style.zIndex = -1;
    body.style.overflow = "hidden";
    nav.classList.add("open");
}
function closeNav() {
    h2.style.zIndex = 1;
    video.style.zIndex = 1;
    content.style.zIndex = 1;
    body.style.overflow = "visible";
    nav.classList.remove("open");
}

//# sourceMappingURL=comedy.6cee661f.js.map
