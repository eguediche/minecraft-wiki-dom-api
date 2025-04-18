const searchInput = document.querySelector(".search-input");
const classSearch = document.querySelector("#class-select");
const typeSelect = document.querySelector("#type-select");
const healthInput = document.querySelector("#health-input");
const armorInput = document.querySelector("#armor-input");
const damageInput = document.querySelector("#damage-input");
const form = document.querySelector("#form-input");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    console.log(classSearch.value)
})