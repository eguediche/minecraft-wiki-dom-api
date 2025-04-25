const entityName = document.querySelector(".entity-name");
const entityDesc = document.querySelector(".entity-desc");

const container = document.querySelector(".search-result");

/*l'id dans lurl ma geule*/
const params = new URLSearchParams(window.location.search);
const entityId = params.get("id");

  fetch("http://51.38.232.174:3000/v1/entities/" + entityId)
    .then(function (response) {
      return response.json();
    })
    .then(function (entity) {
      displayEntity(entity);
    });

function displayEntity(entity) {

  const card = document.createElement("div");
  card.classList.add("entity-card");


  entityName.textContent = entity.name;
  entityDesc.textContent = entity.description;

  const nameBox = document.createElement("div");
  nameBox.classList.add("name-box");

  const nameTxt = document.createElement("h4");
  nameTxt.textContent = entity.name;

  const nameImg = document.createElement("img");
  nameImg.classList.add("name-img")
  nameImg.src = entity.icon;

  const mobImg = document.createElement("img");
  mobImg.classList.add("mob-img")
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
  HealthSpanImg.src = "/assets/healthicon.svg"

  const armorBox = document.createElement("div");
  armorBox.classList.add("armor-box");

  const mobTarmor = document.createElement("h5");
  mobTarmor.textContent = "armor";

  const mobArmor = document.createElement("h5");
  mobArmor.textContent = entity.armor;

  const mobarmorSpan = document.createElement("span");
  mobarmorSpan.classList.add("mob-span");

  const armorSpanImg = document.createElement("img");
  armorSpanImg.src = "/assets/armoricon.svg"

  const strengthBox = document.createElement("div");
  strengthBox.classList.add("strength-box");

  const mobTstrength = document.createElement("h5");
  mobTstrength.textContent = "strength";

  const mobStrength = document.createElement("h5");
  mobStrength.textContent = entity.strength;

  const mobStrengthSpan = document.createElement("span");
  mobStrengthSpan.classList.add("mob-span");

  const StrengthSpanImg = document.createElement("img");
  StrengthSpanImg.src = "/assets/healthicon.svg"

  const classBox = document.createElement("div");
  classBox.classList.add("class-box");

  const mobTclass = document.createElement("h5");
  mobTclass.textContent = "classification";

  const mobClass = document.createElement("h5");
  mobClass.textContent = entity.classification;
  mobClass.classList.add("special-link")

  const behaviorBox = document.createElement("div");
  behaviorBox.classList.add("behavior-box");

  const mobTbehavior = document.createElement("h5");
  mobTbehavior.textContent = "behavior";

  const mobBehavior = document.createElement("h5");
  mobBehavior.textContent = entity.type;

  const detailBtn = document.createElement("button");
  detailBtn.classList.add("detail-btn");
  detailBtn.textContent = "DETAILS";

  const sizeBox = document.createElement("div");
  sizeBox.classList.add("size-box");

  const mobSizeTitle = document.createElement("h5");
  mobSizeTitle.textContent = "Size";

  const mobSizeH = document.createElement("p");
  mobSizeH.classList.add("h-w-span")
  mobSizeH.textContent = "Height: " + entity.height + " blocks";

  const mobSizeW = document.createElement("span");
  mobSizeW.classList.add("size-span");
  mobSizeW.textContent = "Width: " + entity.width + " blocks";

  card.appendChild(nameBox); 
  nameBox.appendChild(nameImg);
  nameBox.appendChild(nameTxt);

  card.appendChild(mobImg);

  card.appendChild(healthBox);
  healthBox.appendChild(mobThealth);
  healthBox.appendChild(mobHealth);
  mobHealth.appendChild(mobHealthSpan);

  mobHealthSpan.appendChild(HealthSpanImg);
  
  card.appendChild(armorBox);
  armorBox.appendChild(mobTarmor);
  armorBox.appendChild(mobArmor);
  mobArmor.appendChild(mobarmorSpan);
  mobarmorSpan.appendChild(armorSpanImg);

  card.appendChild(strengthBox);
  strengthBox.appendChild(mobTstrength);
  strengthBox.appendChild(mobStrength);
  mobStrength.appendChild(mobStrengthSpan);
  mobStrengthSpan.appendChild(StrengthSpanImg);

  card.appendChild(classBox);
  classBox.appendChild(mobTclass);
  classBox.appendChild(mobClass);

  card.appendChild(behaviorBox);
  behaviorBox.appendChild(mobTbehavior);
  behaviorBox.appendChild(mobBehavior);

  card.appendChild(detailBtn);


  card.appendChild(sizeBox);

  sizeBox.appendChild(mobSizeTitle);
  sizeBox.appendChild(mobSizeH);
  mobSizeH.appendChild(mobSizeW);

  container.appendChild(card);

  if (entity.type.toLowerCase() === "hostile") {
    nameBox.classList.add("background-hostile");
    classBox.classList.add("border-bottom-hostile");
    detailBtn.classList.add("background-hostile");
    armorBox.classList.add("border-bottom-hostile");
    strengthBox.classList.add("border-bottom-hostile");
    classBox.classList.add("border-bottom-hostile");
    behaviorBox.classList.add("border-bottom-hostile");
    healthBox.classList.add("border-bottom-hostile");
    card.classList.add("border-hostile");
  } else if (entity.type.toLowerCase() === "neutral") {
    nameBox.classList.add("background-neutral");
    classBox.classList.add("border-bottom-neutral");
    card.classList.add("border-neutral");
    detailBtn.classList.add("background-neutral");
    armorBox.classList.add("border-bottom-neutral");
    strengthBox.classList.add("border-bottom-neutral");
    classBox.classList.add("border-bottom-neutral");
    behaviorBox.classList.add("border-bottom-neutral");
    healthBox.classList.add("border-bottom-neutral");
  } else {
    nameBox.classList.add("background-passive");
    classBox.classList.add("border-bottom-passive");
    card.classList.add("border-passive");
    detailBtn.classList.add("background-passive");
    armorBox.classList.add("border-bottom-passive");
    strengthBox.classList.add("border-bottom-passive");
    classBox.classList.add("border-bottom-passive");
    behaviorBox.classList.add("border-bottom-passive");
    healthBox.classList.add("border-bottom-passive");
  }
}