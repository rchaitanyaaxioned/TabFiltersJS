const tabs = document.querySelectorAll(".tab");
const liContent = document.querySelectorAll(".li-content");
const tabAnchor = document.getElementsByTagName("a");
const btn = document.querySelectorAll(".btn");

tabs.forEach(dispalyContent);

function dispalyContent(item, index) {

  item.onclick = function () {

    // item.classList.toggle("active-tab");
    // liContent[index].classList.toggle("active-li");
    // tabAnchor[index].classList.toggle("active-a");

    // btn.forEach(check);
    // function check(i, idx) {
    //   i.onclick = function () {
    //     if (i.classList.contains("active-btn") == true) {
    //       i.classList.remove("active-btn");
    //     } else {
    //       i.classList.add("active-btn");
    //     }
    //   }
    // }

    let result = item.classList.contains("active-tab");

    if (result == true) {
      item.classList.remove("active-tab");
      liContent[index].classList.remove("active-li");
      tabAnchor[index].classList.remove("active-a");
    } else {
      item.classList.add("active-tab");
      liContent[index].classList.add("active-li");
      tabAnchor[index].classList.add("active-a");
    }
  }
}





























