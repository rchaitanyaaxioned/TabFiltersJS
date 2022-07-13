const tabs = document.querySelectorAll(".tab");
const liContent = document.querySelectorAll(".li-content");
const tabAnchor = document.getElementsByTagName("a");
const btn = document.querySelectorAll(".btn");

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





























