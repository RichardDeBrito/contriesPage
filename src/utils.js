import { apiRoutes } from "./api.js";

export async function captureTotalContries(name, optionSearch = 0, region) {
    let contriesList = [];

    if(optionSearch === 0 || name === "") {
        contriesList = await apiRoutes.searchAllContries();
    } else if(optionSearch === 1) {
        contriesList = await apiRoutes.searchForName(name);
    } else {
        contriesList = await apiRoutes.seachForRegion(region);
    };

    const totalContriesText = document.getElementById('contries-total-text');
    
    let quantContries = contriesList.length;

    if (quantContries === undefined) {
        totalContriesText.innerHTML = 'Nenhum país encontrado.';
    } else {
        totalContriesText.innerHTML = `${contriesList.length} países encontrados`;
    };
};