const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
const cancelBtn = document.querySelector(".cancel-btn");
const text = document.querySelector(".search-text");

searchBtn.onclick = () => {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
    searchBtn.classList.add("active");
    if (searchInput.value != "") {
        let values = searchInput.value;
        text.innerHTML = "Вы пытались найти" + " " + "<span style='font-weight: 700; ' >" + values + "</span>";
    } else {
        text.innerHTML = "";
    }
    text.classList.remove("active");

}
cancelBtn.onclick = () => {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchBtn.classList.remove("active");
    text.classList.add("active");
    searchInput.value = "";

}
