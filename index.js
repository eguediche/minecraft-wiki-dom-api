const searchInput = document.querySelector(".search-input");
const classSearch = document.querySelector("#class-select");
const typeSelect = document.querySelector("#type-select");
const healthInput = document.querySelector("#health-input");
const armorInput = document.querySelector("#armor-input");
const damageInput = document.querySelector("#damage-input");
const form = document.querySelector("#form-input");
const searchBtn = document.querySelector(".search-btn");

const searchResult = document.querySelector(".good-search");
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
					(!classification ||
						entity.classification === classification) &&
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

			const classBox = document.createElement("div");
			classBox.classList.add("card-class-box");

			const nameBox = document.createElement("div");
			nameBox.classList.add("card-name-box");
			const nameTxt = document.createElement("h4");
			nameTxt.textContent = entity.name;

			const image = document.createElement("img");
			image.classList.add("entity-img");
			image.src = entity.image;

			const classification = document.createElement("h5");
			classification.textContent = entity.classification;
			classification.classList.add("special-link");

			const type = document.createElement("h5");
			type.textContent = entity.type;

			const seeMoreBtn = document.createElement("button");
			const seeMoreBtnTxt = document.createElement("h4");
			seeMoreBtnTxt.textContent = "SEE MORE";
			seeMoreBtn.classList.add("see-more-btn");

			/*un qi de 114, je prend l'id du mob pour le diriger vers l'url car c plus simple*/
			seeMoreBtn.addEventListener("click", function () {
				window.location.href =
					"/wiki/renseignements.html?id=" + entity.id;
			});

			card.appendChild(nameBox);
			nameBox.appendChild(nameTxt);
			card.appendChild(image);
			card.appendChild(classBox);
			classBox.appendChild(classification);
			classBox.appendChild(type);
			card.appendChild(seeMoreBtn);
			seeMoreBtn.appendChild(seeMoreBtnTxt);

       