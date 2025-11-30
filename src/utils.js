import { apiRoutes } from "./api.js";
import { createCardsContries } from "./createPages.js";

export async function captureTotalContries(name, optionSearch = 0, region) {
    let contriesList = [];

    if(optionSearch === 0 || name === "") {
        contriesList = await apiRoutes.searchAllContries();
    } else if(optionSearch === 1) {
        contriesList = await apiRoutes.searchByName(name);
    } else {
        contriesList = await apiRoutes.searchByRegion(region);
    };

    const totalContriesText = document.getElementById('contries-total-text');
    
    let quantContries = contriesList.length;

    if (quantContries === undefined) {
        totalContriesText.innerHTML = 'Nenhum país encontrado.';
    } else {
        totalContriesText.innerHTML = `${contriesList.length} países encontrados`;
    };
};

export function captureCurrencies(currencies) {
    let currenciesText = '';

    for(let i = 0; i < currencies.length; i++) {
        if(currenciesText === '') {
            currenciesText += `<strong>nome:</strong> ${currencies[i].name} <strong>simbolo:</strong> ${currencies[i].symbol}`;
        } else {
            currenciesText += `<br> <strong>nome:</strong> ${currencies[i].name} <strong>simbolo:</strong> ${currencies[i].symbol}`;
        };
    };

    return currenciesText;
};

export function captureLanguages(languages) {
    let languageText = '';

    const languagesLength = languages.length;

    for(let i = 0; i < languagesLength; i++) {
        if(languageText === '') {
            languageText += `<strong>${languages[i]}</strong>`;
        } else {
            languageText += ` <strong>${languages[i]}</strong>`;
        };
    };

    return languageText;
};

export function captureBorders(borders) {
    let contriesBorder = '';

    for(let contrie of borders) {
        contriesBorder += `${contrie} `;
    };

    if (borders.length === 0) {
        return undefined;
    } else {
        return contriesBorder;
    };
};

export function captureDomains(domains) {
    let domainsStr = '';

    for(let domain of domains) {
        domainsStr += `<strong>${domain}</strong>`;
    };

    return domainsStr;
};

export function inputSearch() {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener("input", async () => {
        const nameContrie = searchInput.value;

        const containerContries = document.getElementById('container-contries');
        captureTotalContries(nameContrie, 1);

        containerContries.innerHTML = '';

        const listNamesContries = await apiRoutes.captureNamesContries(nameContrie, 1);
        const listCapitalsContries = await apiRoutes.captureCapitalContries(nameContrie, 1);
        const listRegionsContries = await apiRoutes.captureRegionContries(nameContrie, 1);
        const listPopulationContries = await apiRoutes.capturePopulationContries(nameContrie, 1);
        const listImageContrie = await apiRoutes.captureImageContrie(nameContrie, 1);
        const listContriesAll = await apiRoutes.searchByCompleteName(nameContrie, 1);

        createCardsContries(listNamesContries, listCapitalsContries,listRegionsContries, listPopulationContries,listImageContrie, listContriesAll);
    });
};

export function filterByRegion() {
    const listContrinentBox = document.querySelectorAll('.continent-box');

    for (let continentBox of listContrinentBox) {
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

                case 'Americas':
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
                createCardsContries(await apiRoutes.captureNamesContries(0), await apiRoutes.captureCapitalContries(0), await apiRoutes.captureRegionContries(0), await apiRoutes.capturePopulationContries(0), await apiRoutes.captureImageContrie(0));
            } else {
                createCardsContries(await apiRoutes.captureNamesContries('A', 3, continentTraslate), await apiRoutes.captureCapitalContries('A', 3, continentTraslate), await apiRoutes.captureRegionContries('A', 3, continentTraslate), await apiRoutes.capturePopulationContries('A', 3, continentTraslate), await apiRoutes.captureImageContrie('A', 3, continentTraslate));
            };
        });
    };
};