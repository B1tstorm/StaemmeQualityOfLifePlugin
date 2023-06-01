let currentPopulation = document.getElementById("pop_current_label");
let maxPopulation = document.getElementById("pop_max_label");
let currentPopulationPercentage =  (currentPopulation.textContent / maxPopulation.textContent) * 100;
let populationUsedByBuildings = 1647; // Dieser Wert muss noch aus dem Bauernhof ausgelesen werden.
let currentPopulationWithoutBuildings = currentPopulation.textContent - populationUsedByBuildings;

maxPopulation.textContent = maxPopulation.textContent + "(" + currentPopulationPercentage.toPrecision(2) + "%)";

let infantryRows = document.querySelectorAll(".row_a");
infantryRows.forEach(element => {
    let unitPopulation = element.children[1].firstElementChild.children[3].textContent;
    let unitCount = element.children[2].textContent.split('/')[1];
    let unitPopulationPercentageValue = (unitCount * unitPopulation / currentPopulationWithoutBuildings) * 100;

    element.children[2].textContent = element.children[2].textContent + " (" + unitPopulationPercentageValue.toPrecision(2) + "%)";
    console.log(element.children[2].textContent);
})

let cavalryRows = document.querySelectorAll(".row_b");
cavalryRows.forEach(element => {
    let unitPopulation = element.children[1].firstElementChild.children[3].textContent;
    let unitCount = element.children[2].textContent.split('/')[1];
    let unitPopulationPercentageValue = (unitCount * unitPopulation / currentPopulationWithoutBuildings) * 100;

    element.children[2].textContent = element.children[2].textContent + " (" + unitPopulationPercentageValue.toPrecision(2) + "%)";
    console.log(element.children[2].textContent);
})
