window.addEventListener("load", function () {
  // Khai báo biến
  const tabs = document.querySelectorAll(".tab-title-item");
  const line = document.querySelector(".line");
  const contents = document.querySelectorAll(".tab-content-item");

  function start() {
    const tabTitleActive = document.querySelector(".tab-title-item.active");
    const width = tabTitleActive.offsetWidth;
    const left = tabTitleActive.offsetLeft;
    line.style.width = width + "px";
    line.style.left = left + "px";
  }

  start();

  // Khi click vào 1 tab sẽ kích hoạt sự kiện handleTabClick
  tabs.forEach((tab) => {
    tab.addEventListener("click", handleTabClick);
  });

  // Hàm xử lý sự kiện click vào 1 tab bất kì
  function handleTabClick(e) {
    // line effect
    const left = e.target.offsetLeft;
    const width = e.target.offsetWidth;
    line.style.left = left + "px";
    line.style.width = width + "px";

    // add class active
    tabs.forEach((tab) => {
      removeClass(tab, "active");
    });
    addClass(e.target, "active");

    // Hiển thị đúng content tab
    const dataTab = e.target.dataset.tab;
    contents.forEach((content) => {
      const dataContent = content.dataset.content;
      removeClass(content, "active");
      if (dataTab === dataContent) {
        addClass(content, "active");
      }
    });
  }

  // Hàm thêm class
  function addClass(selector, className) {
    selector.classList.add(className);
  }

  // Hàm xóa class
  function removeClass(selector, className) {
    selector.classList.remove(className);
  }
});
