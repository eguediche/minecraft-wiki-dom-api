/*const searchInput = document.querySelector(".search-input");
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
            const data = await fetch("http://51.38.232.174:3000/v1/", {
                method: "GET",
            });
            const result = await data.json();
            console.log(result);
        }
        
        main();

})
*/
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


searchBtn.addEventListener("click", function () {
    const name = searchInput.value.toLowerCase();
    const classification = classSearch.value;
    const type = typeSelect.value;
    const health = healthInput.value;
    const armor = armorInput.value;
    const damage = damageInput.value;
  
    fetch("http://51.38.232.174:3000/v1/entities")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const filtered = data.filter(function (entity) {
          return (
            (!name || entity.name.toLowerCase().includes(name)) &&
            (!classification || entity.classification === classification) &&
            (!type || entity.type === type) &&
            (!health || entity.health >= Number(health)) &&
            (!armor || entity.armor >= Number(armor)) &&
            (!damage || entity.damage >= Number(damage))
          );
        });
  
        displayResults(filtered);
      });
  });
  
  function displayResults(entities) {
    searchResult.innerHTML = "";
  
    if (entities.length === 0) {
      wrongResult.style.display = "flex";
    } else {
      wrongResult.style.display = "none";
  
      entities.forEach(function (entity) {
        const card = document.createElement("div");
        card.classList.add("entity-card");
  
        const nameBox = document.createElement("div");
        nameBox.textContent = "Name: " + entity.name;
  
        const type = document.createElement("div");
        type.textContent = "Type: " + entity.type;
  
        const classification = document.createElement("div");
        classification.textContent = "Class: " + entity.classification;
  
        const seeMoreBtn = document.createElement("button");
        seeMoreBtn.textContent = "SEE MORE";
  
        /*un qi de 114, je prend l'id du mob pour le diriger vers l'url car c plus simple*/
        seeMoreBtn.addEventListener("click", function () {
          window.location.href = "renseignements.html?id=" + entity.id;
        });
  
        card.appendChild(nameBox);
        card.appendChild(type);
        card.appendChild(classification);
        card.appendChild(seeMoreBtn);
  
        searchResult.appendChild(card);
      });
    }
  }
  