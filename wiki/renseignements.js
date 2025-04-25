const entityName = document.querySelector(".entity-name");
const entityDesc = document.querySelector(".entity-desc");

const container = document.querySelector(".search-result");

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
  entityName.textContent = entity.name;
  entityDesc.textContent = entity.description;

  const nameBox = document.createElement("div");
  nameBox.classList.add("name-box");

  const nameTxt = document.createElement("h4");
  nameTxt.textContent = entity.name;

  const nameImg = document.createElement("img");
  nameImg.src = entity.icon;

  const mobImg = document.createElement("img");
  mobImg.src = entity.image;

  const healthBox = document.createElement("div");
  healthBox.classList.add("health-box");

  const mobThealth = document.createElement("h5");
  mobThealth.textContent = "Health";
  mobThealth.classList.add("blue");

  const mobHealth = document.createElement("h5");
  mobHealth.textContent = entity.health;
  
  const mobHealthSpan = document.createElement("span");
  mobHealthSpan.classList.add("mob-span");

  const HealthSpanImg = document.createElement("img");
  HealthSpanImg.src = /assets/healthicon.svg;

  const armorBox = document.createElement("div");
  armorBox.classList.add("armor-box");

  const mobTarmor = document.createElement("h5");
  mobTarmor.textContent = "armor";

  const mobArmor = document.createElement("h5");
  mobArmor.textContent = entity.armor;

  const mobarmorSpan = document.createElement("span");
  mobarmorSpan.classList.add("mob-span");

  const armorSpanImg = document.createElement("img");
  armorSpanImg.src = /assets/armoricon.svg;

  const strengthBox = document.createElement("div");
  strengthBox.classList.add("strength-box");

  const mobTstrength = document.createElement("h5");
  mobTstrength.textContent = "strength";

  const mobStrength = document.createElement("h5");
  mobStrength.textContent = entity.strength;

  const mobStrengthSpan = document.createElement("span");
  mobStrengthSpan.classList.add("mob-span");

  const StrengthSpanImg = document.createElement("img");
  StrengthSpanImg.src = /assets/healthicon.svg;

  const classBox = document.createElement("div");
  classBox.classList.add("class-box");

  const mobTclass = document.createElement("h5");
  mobTclass.textContent = "classification";

  const mobClass = document.createElement("h5");
  mobClass.textContent = entity.classification;
  mobClass.classList.Add("special-link")

  const behaviorBox = document.createElement("div");
  behaviorBox.classList.Add("behavior-box");

  const mobTbehavior = document.createElement("h5");
  mobTbehavior.textContent = "behavior";

  const mobBehavior = document.createElement("h5");
  mobBehavior.textContent = entity.type;

  const detailBtn = document.createElement("button");
  detailBtn.classList.add("detail-btn");
  detailBtn.textContent = "DETAILS";

  const sizeBox = document.createElement("div");
  sizeBox.classList.Add("size-box");

  const mobSizeTitle = document.createElement("h5");
  mobSizeTitle.textContent = "Size";

  const mobSizeH = document.createElement("p");
  mobSizeH.textContent = "Height: " + entity.height + " blocks";

  const mobSizew = document.createElement("p");
  mobSizew.textContent = "Width: " + entity.width + " blocks";
}
