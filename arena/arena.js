const API_URL = "http://51.38.232.174:3000/v1";

const tbody = document.querySelector(".body-head");
const spawnForm = document.getElementById("form-spawn");
const select = document.querySelector("#entityId");

async function main() {
	// Load entity options
	const allEntities = await (await fetch(`${API_URL}/entities`)).json();
	for (let entity of allEntities) {
		const option = document.createElement("option");
		option.innerHTML = entity.name;
		option.value = entity.id;
		select.appendChild(option);
	}

	// Load current arena entities
	const arenaEntitiesRes = await fetch(`${API_URL}/arena/entities`);
	const arenaEntities = await arenaEntitiesRes.json();

	for (let entity of arenaEntities) {
		tbody.append(await createTableElement(entity));
	}
}

async function createTableElement({ x, z, id, entity }) {
	const tr = document.createElement("tr");

	const tdImg = document.createElement("td");
	const img = document.createElement("img");
	img.src = entity.icon;
	img.alt = entity.name;
	tdImg.appendChild(img);
	tr.appendChild(tdImg);

	tr.appendChild(createCell(entity.name));
	tr.appendChild(createCell(x));
	tr.appendChild(createCell(z));

	const entityDetails = await (
		await fetch(`${API_URL}/entities/${entity.id}`)
	).json();
	tr.appendChild(createCell(entityDetails.strength));

	const tdButton = document.createElement("td");
	const button = document.createElement("button");
	button.innerHTML = "DELETE";
	button.className = "delete-btn";
	button.addEventListener("click", async () => {
		await fetch(`${API_URL}/arena/entities/${id}`, { method: "DELETE" });
		tr.remove();
	});
	tdButton.appendChild(button);
	tr.appendChild(tdButton);
	return tr;
}

function createCell(content) {
	const td = document.createElement("td");
	td.innerHTML = content;
	return td;
}

spawnForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	const formData = new FormData(spawnForm);
	const data = {
		entityId: formData.get("entityId"),
		x: parseFloat(formData.get("x")),
		z: parseFloat(formData.get("z")),
	};

	if (!data.entityId || isNaN(data.x) || isNaN(data.z)) {
		alert("Please fill in all fields correctly.");
		return;
	}

	const response = await fetch(`${API_URL}/arena/entities`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json",
		},
	});

	const responseData = await response.json();

	if (response.ok) {
		const newEntityRes = await fetch(
			`${API_URL}/arena/entities/${responseData.id}`
		);
		const newEntityData = await newEntityRes.json();
		tbody.append(await createTableElement(newEntityData));
		spawnForm.reset();
	} else {
		alert("Failed to spawn entity. Check console.");
		console.error(responseData);
	}
});

main();
