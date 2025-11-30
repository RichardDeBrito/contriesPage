import { apiRoutes } from "./api.js";
import { createCardsContries } from "./createPages.js";
import { captureTotalContries } from "./utils.js";

document.addEventListener('DOMContentLoaded', async () => {
    const listNamesContries = await apiRoutes.captureNamesContries();
    const listRegionContries = await apiRoutes.captureRegionContries();
    const listCapitalContries = await apiRoutes.captureCapitalContries();
    const listPopulationCOntries = await apiRoutes.capturePopulationContries();
    const listImageContrie = await apiRoutes.captureImageContrie();
    
    createCardsContries(listNamesContries,listRegionContries, listCapitalContries,listPopulationCOntries, listImageContrie);
    captureTotalContries();
});