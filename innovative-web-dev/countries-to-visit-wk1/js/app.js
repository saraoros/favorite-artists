
const placesMap = new Map();

const inputField = document.getElementById("placeInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const countriesList = document.getElementById("places");


addButton.addEventListener("click", function handlePlacesAdd() {

    const place = inputField.value.trim();

    if (place === "") {
        return;
    }

    if (placesMap.has(place)) {
        alert("Oops! This place has already been added to the list!");
        return;
    }

    placesMap.set(place, true);

    const listItem = document.createElement("li");
    listItem.textContent = place;

    countriesList.appendChild(listItem);

    inputField.value = "";
});

clearButton.addEventListener("click", function handleClearList() {

    placesMap.clear();

    countriesList.innerHTML = "";

});