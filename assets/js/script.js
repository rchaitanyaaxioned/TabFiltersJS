const tabs = document.querySelectorAll(".tab");
const liContent = document.querySelectorAll(".li-content");
const tabAnchor = document.getElementsByTagName("a");

tabs.forEach(dispalyContent);

function dispalyContent(item, index) {

  item.onclick = function () {

    // item.classList.add("active-li");
    // liContent[index].classList.add("active-tab");
    // tabAnchor[index].classList.add("active-a");

    let result = item.classList.contains("active-li");

    if (result == true) {
      item.classList.remove("active-li");
      liContent[index].classList.remove("active-tab");
      tabAnchor[index].classList.remove("active-a");
    } else {
      item.classList.add("active-li");
      liContent[index].classList.add("active-tab");
      tabAnchor[index].classList.add("active-a");
    }
  }
}





























