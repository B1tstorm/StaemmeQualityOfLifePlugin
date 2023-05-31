let currentPopulation = document.getElementById("pop_current_label");
let maxPopulation = document.getElementById("pop_max_label");
let currentPopulationPercentage =  (currentPopulation.textContent / maxPopulation.textContent) * 100;
let populationUsedByBuildings = 1594; // Dieser Wert steht im Bauernhof.
let currentPopulationWithoutBuildings = currentPopulation.textContent - populationUsedByBuildings;

maxPopulation.textContent = maxPopulation.textContent + "(" + currentPopulationPercentage.toPrecision(2) + "%)";

///html/body/table/tbody/tr[2]/td[2]/table[3]/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/form/table/tbody/tr[2]/td[3]

let trainTableCollection = document.getElementById("train_form").firstElementChild.firstElementChild.children;

for (let i = 1; i < 11; i++) {
    let unitPopulation = trainTableCollection[i].children[1].firstElementChild.children[3].textContent;
    let unitCount = trainTableCollection[i].children[2].textContent.split('/')[1]
    let unitPopulationPercentageValue = (unitCount * unitPopulation / currentPopulationWithoutBuildings) * 100;

    trainTableCollection[i].children[2].textContent = trainTableCollection[i].children[2].textContent + " (" + unitPopulationPercentageValue.toPrecision(2) + "%)";
}

/** Besser wenn untersch. Einheiten auf untersch. Welten verfügbar sind */

// let aRows = document.querySelectorAll(".row_a");
// console.log(aRows);

// for (let index = 0; index < aRows.length; index++) {
//     console.log("aRow:", aRows[index]);
// };

