const tabs = document.querySelectorAll(".tab");
const aTab = document.querySelectorAll(".tab-a");
const tabContent = document.querySelectorAll(".tab-content");
const btn = document.querySelectorAll(".btn");
const imgs = document.querySelectorAll(".all-img");
const lbImgs = document.querySelectorAll(".lb-img");
var lightBox = document.querySelector(".lb-img-list");
var closeBtn = document.querySelector(".close");

//for activating tab
tabs.forEach(selectTab);
function selectTab(item, index) {
  item.addEventListener("click", activateTab);
  function activateTab() {
    removeClassActiveTab();
    item.classList.add("active-tab");
    aTab[index].classList.add("active-a");
    tabContent[index].classList.add("show");
  }
}

//for activating btn
btn.forEach(selectBtn);
function selectBtn(item, index) {
  item.addEventListener("click", activateBtn);
  function activateBtn() {
    removeClassActiveBtn();
    item.classList.add("active-btn");
    let tabValue = item.getAttribute("data-value-tab");
    for (let i = 0; i <= imgs.length; i++) {
      if (imgs[i].classList.contains(tabValue)) {
        imgs[i].classList.remove("hide");
        imgs[i].classList.add("show");
      } else {
        imgs[i].classList.remove("show");
        imgs[i].classList.add("hide");
      }
    }
  }
}

imgs.forEach(selectImg);
function selectImg(item, idx) {

  item.addEventListener("click", activateLB);
  function activateLB() {
    removeClassShow();
    lightBox.classList.add("show");
    lbImgs[idx].classList.add("show");
  }
}

function removeClassActiveTab() {
  tabs.forEach(removeClass);
  function removeClass(ritem, ridx) {
    ritem.classList.remove("active-tab");
    aTab[ridx].classList.remove("active-a");
    tabContent[ridx].classList.remove("show");
  }
}

function removeClassActiveBtn() {
  btn.forEach(removeClass);
  function removeClass(ritem) {
    ritem.classList.remove("active-btn");
  }
}

function removeClassShow() {
  lbImgs.forEach(removeClass);

  function removeClass(item) {
    item.classList.remove("show");
  }
}


closeBtn.addEventListener("click", closeLB);
function closeLB() {
  lightBox.classList.remove("show");
}