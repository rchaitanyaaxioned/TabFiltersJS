const tabs = document.querySelectorAll(".tab");
const aTab = document.querySelectorAll(".tab-a");
const tabContent = document.querySelectorAll(".tab-content");
const btn = document.querySelectorAll(".btn");
const imgs = document.querySelectorAll(".all-img");
const lightBox = document.querySelector(".lb-img-list");
const lbImgs = document.querySelectorAll(".lb-img");
var closeBtn = document.querySelector(".close");

//for activating tab
tabs.forEach(selectTab);

function selectTab(item, index) {

  item.addEventListener("click", activateTab);

  function activateTab() {

    //for item in tab content
    tabs.forEach(removeClass);

    function removeClass(ritem, ridx) {
      ritem.classList.remove("active-tab");
      aTab[ridx].classList.remove("active-a");
      tabContent[ridx].classList.remove("show");
    }

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

    //for item in tab content
    btn.forEach(removeClass);

    function removeClass(ritem, ridx) {
      ritem.classList.remove("active-btn");
    }

    item.classList.add("active-btn");
    let tabValue = item.getAttribute("data-value-tab");
    for (let i = 0; i <= imgs.length; i++) {
      // console.log(imgs[i]);
      let imgValue = imgs[i].getAttribute("data-value-img");
      console.log("imgValue : " + imgValue);
      let lbImgValue = lbImgs[i].getAttribute("data-value-lb");
      console.log("lbImgValue : " + lbImgValue);
      // console.log(imgValue);
      if (tabValue == imgValue) {
        imgs[i].classList.remove("hide");
        imgs[i].classList.add("show");
        imgs[i].addEventListener("click", activateLB);
        function activateLB() {
          if (imgValue == lbImgValue) {
            lightBox.classList.add("show");
            lbImgs[i].classList.add("show");
          }
          else {
            lbImgs[i].classList.remove("show");
          }
        }
      } else {
        imgs[i].classList.remove("show");
        imgs[i].classList.add("hide");
      }
    }
  }
}

closeBtn.addEventListener("click", closeLB);
function closeLB() {
  lightBox.classList.remove("show");
}