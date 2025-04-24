const searchInput = document.querySelector(".search-input");
const classSearch = document.querySelector("#class-select");
const typeSelect = document.querySelector("#type-select");
const healthInput = document.querySelector("#health-input");
const armorInput = document.querySelector("#armor-input");
const damageInput = document.querySelector("#damage-input");
const form = document.querySelector("#form-input");
const searchBtn = document.querySelector(".search-btn");

const searchResult = document.querySelector(".search-result");
const wrongResult = document.querySelector(".wrong-search");

searchBtn.addEventListener("click", () => {
    console.log(searchInput.value);
    console.log(classSearch.value);
    console.log(typeSelect.value);
    console.log(healthInput.value);
    console.log(armorInput.value);
    console.log(damageInput.value);

        async function main() {
            const data = await fetch("http://51.38.232.174:3000/v1/" /*donc la tu connais {{bidule a mimir}}*/, {
                method: "GET",
            });
            const result = await data.json();
            console.log(result);
        }
        
        main();

        
        function cards (atacard) {
            /*crée les carte (une seule + boucle for sur le tab du resultat du fetch pour crée carte)*/
        };
})