const entityName = document.querySelector(".entity-name");
const entityDesc = document.querySelector(".entity-desc");

/*l'id dans lurl ma geule*/
const params = new URLSearchParams(window.location.search);
const entityId = params.get("id");

if (entityId) {
  fetch("http://51.38.232.174:3000/v1/entities/" + entityId)
    .then(function (response) {
      return response.json();
    })
    .then(function (entity) {
      displayEntity(entity);
    });
}

function displayEntity(entity) {
  const container = document.querySelector(".search-result");

  const card = document.createElement("div");
  card.classList.add("entity-card");

  const name = document.createElement("div");
  name.textContent = "Name: " + entity.name;

  const health = document.createElement("p");
  health.textContent = "Health: " + entity.health;

  const armor = document.createElement("p");
  armor.textContent = "Armor: " + entity.armor;

  const damage = document.createElement("p");
  damage.textContent = "Damage: " + entity.damage;

  const type = document.createElement("p");
  type.textContent = "Type: " + entity.type;

  const classification = document.createElement("p");
  classification.textContent = "Classification: " + entity.classification;

  const size = document.createElement("p");
  const height = entity.size && entity.size.height ? entity.size.height : "?";
  const width = entity.size && entity.size.width ? entity.size.width : "?";
  size.textContent = "Size: Height " + height + " / Width " + width;

  const details = document.createElement("div");
  details.textContent = "DETAILS";

  card.appendChild(name);
  card.appendChild(health);
  card.appendChild(armor);
  card.appendChild(damage);
  card.appendChild(type);
  card.appendChild(classification);
  card.appendChild(size);
  card.appendChild(details);

  container.appendChild(card);

  entityName.textContent = entity.name;
  entityDesc.textContent = entity.description;
}
