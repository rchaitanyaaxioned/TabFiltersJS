const tabs = document.querySelectorAll(".tab");
const liContent = document.querySelectorAll(".li-content");
const tabAnchor = document.getElementsByTagName("a");
const btn = document.querySelectorAll(".btn");
const allImg = document.querySelectorAll(".all-img");
const buisness = document.querySelectorAll(".buisness");
const eco = document.querySelectorAll(".eco");
const controller = document.querySelectorAll(".controller");
const textEffect = document.querySelectorAll(".text-effect");

//for tab from tab-list
tabs.forEach(dispalyContent);

function dispalyContent(item, index) {

  item.addEventListener("click", activeClasses);

  function activeClasses() {
    //for item in tab content
    tabs.forEach(removeClass);

    function removeClass(ritem, ridx) {
      ritem.classList.remove("active-tab");
      liContent[ridx].classList.remove("active-li");
      tabAnchor[ridx].classList.remove("active-a");
    }

    item.classList.add("active-tab");
    liContent[index].classList.add("active-li");
    tabAnchor[index].classList.add("active-a");
  }
}

btn.forEach(activeBtn);

function activeBtn(btnItem, btnIndex) {

  btnItem.addEventListener("click", btnActivate);

  function btnActivate() {
    //for item in tab content
    btn.forEach(removeActive);

    function removeActive(activeItem, activeIdx) {
      activeItem.classList.remove("active-btn");
    }
    btnItem.classList.add("active-btn");
    console.log("btnIndex : " + btnIndex);

    allImg.forEach(imgFun);
    function imgFun(imgItem) { imgItem.style.display = "none"; }

    //for filtering imges
    switch (btnIndex) {
      case 0:
        allImg.forEach(imgFun);
        function imgFun(imgItem) { imgItem.style.display = "block"; }
        break;

      case 1:
        buisness.forEach(imgFun);
        function imgFun(imgItem) { imgItem.style.display = "flex"; }
        break;

      case 2:
        eco.forEach(imgFun);
        function imgFun(imgItem) { imgItem.style.display = "flex"; }
        break;

      case 3:
        controller.forEach(imgFun);
        function imgFun(imgItem) { imgItem.style.display = "flex"; }
        break;

      case 4:
        textEffect.forEach(imgFun);
        function imgFun(imgItem) { imgItem.style.display = "flex"; }
        break;

      default:
        allImg.style.display = "none";
    }
  }
}





























