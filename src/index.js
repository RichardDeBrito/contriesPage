import { apiRoutes } from "./api.js";
import { createCardsContries } from "./createPages.js";
import { captureTotalContries, inputSearch } from "./utils.js";

document.addEventListener('DOMContentLoaded', async () => {
    const listNamesContries = await apiRoutes.captureNamesContries();
    const listCapitalContries = await apiRoutes.captureCapitalContries();
    const listRegionContries = await apiRoutes.captureRegionContries();
    const listPopulationCOntries = await apiRoutes.capturePopulationContries();
    const listImageContrie = await apiRoutes.captureImageContrie();
    
    createCardsContries(listNamesContries,listCapitalContries,listRegionContries,listPopulationCOntries, listImageContrie);
    captureTotalContries();
    inputSearch();

});