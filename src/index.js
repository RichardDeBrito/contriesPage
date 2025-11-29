import { apiRoutes } from "./api.js";
import { createCardsContries } from "./createCards.js";
import { captureTotalContries } from "./utils.js";

document.addEventListener('DOMContentLoaded', async () => {
    createCardsContries(await apiRoutes.captureNamesContries(), await apiRoutes.captureRegionContries(), 
    await apiRoutes.captureCapitalContries(), await apiRoutes.capturePopulationContries(), await apiRoutes.captureImageContrie());
    captureTotalContries();
});

const input = document.getElementById('search-input');

input.addEventListener("input", async () => {
    const nameContrie = input.value;

    const containerContries = document.getElementById('container-contries');
    captureTotalContries(nameContrie, 1);

    containerContries.innerHTML = '';

    createCardsContries(await apiRoutes.captureNamesContries(nameContrie, 1), await apiRoutes.captureRegionContries(nameContrie, 1),
     await apiRoutes.captureCapitalContries(nameContrie, 1), await apiRoutes.capturePopulationContries(nameContrie, 1), 
     await apiRoutes.captureImageContrie(nameContrie, 1));

});

const listContinentBox = document.querySelectorAll('.continent-box');

for (let continentBox of listContinentBox) {
    continentBox.addEventListener('click', async () => {
        const containerContries = document.getElementById('container-contries');
        const filterActive = document.getElementById('active');
        filterActive.removeAttribute('id');
        
        continentBox.setAttribute('id', 'active');

        containerContries.innerHTML = '';

        let continent = continentBox.innerHTML;
        let continentTraslate = '';

        switch (continent) {
            case 'Todos':
                continentTraslate = 'nada';
                captureTotalContries(0);
                break;

            case 'África':
                continentTraslate = 'africa';
                captureTotalContries('A', 3, continentTraslate);
                break;
            case 'Américas':
                continentTraslate = 'americas';
                captureTotalContries('A', 3, continentTraslate);
                break;
            case 'Ásia':
                continentTraslate = 'asia';
                captureTotalContries('A', 3, continentTraslate);
                break;
            case 'Europa':
                continentTraslate = 'europe';
                captureTotalContries('A', 3, continentTraslate);
                break;
            case 'Oceania':
                continentTraslate = 'oceania';
                captureTotalContries('A', 3, continentTraslate);
                break;

            default:
                break;
        }

        if (continentTraslate === 'nada') {
            createCardsContries(await apiRoutes.captureNamesContries(0), await apiRoutes.captureRegionContries(0), 
            await apiRoutes.captureCapitalContries(0), await apiRoutes.capturePopulationContries(0), await apiRoutes.captureImageContrie(0));    
        } else {
            createCardsContries(await apiRoutes.captureNamesContries('A', 3, continentTraslate), 
            await apiRoutes.captureRegionContries('A', 3, continentTraslate), await apiRoutes.captureCapitalContries('A', 3, continentTraslate), 
            await apiRoutes.capturePopulationContries('A', 3, continentTraslate), await apiRoutes.captureImageContrie('A', 3, continentTraslate));
        }
    }); 
}