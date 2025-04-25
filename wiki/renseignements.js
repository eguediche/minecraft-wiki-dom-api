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

  entityName.textContent = entity.name;
  entityDesc.textContent = entity.description;
}
