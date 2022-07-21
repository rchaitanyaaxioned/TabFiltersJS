var tabs = document.querySelectorAll(".tab-list li");
var tabContent = document.querySelectorAll(".tab-content");
var btns = document.querySelectorAll(".btn-list a");
var imgLi = document.querySelectorAll(".img-list li");
var imgs = document.querySelectorAll(".all-img");
var docHtml = document.querySelector("html");
var lightBox = document.querySelector(".lightBox");
var lbImg = document.querySelector(".lightBox img");
var closeBtn = document.querySelector(".close");

//for activating tab
tabs.forEach(selectTab);
function selectTab(item, index) {

  item.addEventListener("click", activateTab);
  function activateTab() {
    removeClassActiveTab();
    this.classList.add("active-tab");
    tabContent[index].classList.add("show");
  }
}

//for activating btn
btns.forEach(selectBtn);
function selectBtn(item) {
  item.addEventListener("click", activateBtn);
  function activateBtn() {
    removeClassActiveBtn();
    this.classList.add("active-btn");
    let tabValue = this.getAttribute("data-value-tab");
    for (let i = 0; i <= imgs.length; i++) {
      if (imgs[i].classList.contains(tabValue)) {
        imgs[i].classList.remove("hide");
        imgs[i].classList.add("show");
        imgLi[i].classList.remove("hide");
        imgLi[i].classList.add("show");
      } else {
        imgs[i].classList.remove("show");
        imgs[i].classList.add("hide");
        imgLi[i].classList.remove("show");
        imgLi[i].classList.add("hide");
      }
    }
  }
}

//for light box
imgs.forEach(selectImg);
function selectImg(item) {

  item.addEventListener("click", activateLB);

  function activateLB() {
    let imgSrc = this.src;
    console.log("imgSrc :" + imgSrc);
    lightBox.classList.add("show");
    lbImg.src = imgSrc;
    docHtml.classList.add("stopScroll");
  }
}

lightBox.addEventListener("click", closeLB);
closeBtn.addEventListener("click", closeLB);

function removeClassActiveTab() {
  tabs.forEach(removeClass);
  function removeClass(item, idx) {
    item.classList.remove("active-tab");
    tabContent[idx].classList.remove("show");
  }
}

function removeClassActiveBtn() {
  btns.forEach(removeClass);
  function removeClass(item) {
    item.classList.remove("active-btn");
  }
}

//for closing lightbox
function closeLB(e) {
  //comparing for on click of img do nothing
  if (e.target == e.currentTarget) {
    lightBox.classList.remove("show");
    docHtml.classList.remove("stopScroll");
  }
}