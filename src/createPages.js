import { apiRoutes } from "./api.js";

export async function createCardsContries(nameList, capitalList, regionList, populationList, imgList) {

    const containerContries = document.getElementById('container-contries');
    containerContries.innerHTML = '';
    const quantCards = nameList.length;

    for(let i = 0; i < quantCards; i ++) {
        const contrieCard = document.createElement('div');
        contrieCard.classList.add('contrie-card');
        contrieCard.setAttribute('id', `${i}`);
        contrieCard.setAttribute('data-name', nameList[i]);

        const imgCard = document.createElement('img');
        const src = imgList[i].png;
        imgCard.src = src;
        contrieCard.appendChild(imgCard);

        const legendContrie = document.createElement('div');
        legendContrie.classList.add('legend-contrie');
        
        const contrieName = document.createElement('p');
        contrieName.classList.add('contrie-name');
        contrieName.innerHTML = nameList[i];
        legendContrie.appendChild(contrieName);

        const containerInfos = document.createElement('div');
        containerInfos.classList.add('container-infos-card');

        const capitalRegion = document.createElement('span');
        capitalRegion.classList.add('capital-region');
        capitalRegion.innerHTML = `${capitalList[i]}, ${regionList[i]}`;

        const population = document.createElement('span');
        population.innerHTML = `${populationList[i].toLocaleString('pt-BR')} habitantes`;

        containerInfos.appendChild(capitalRegion);
        containerInfos.appendChild(population);

        legendContrie.appendChild(containerInfos);
        contrieCard.appendChild(legendContrie);

        containerContries.appendChild(contrieCard);

        contrieCard.addEventListener('click', async (event) => {
            if(event && typeof event.preventDefault === 'function') event.preventDefault();

            const nameContrie = contrieCard.getAttribute('data-name');

            try {
                const data = await apiRoutes.seachForCompleteName(nameContrie);

                if (!data || data.length === 0) {
                    console.error('País não encontrado:', nameContrie);
                    return;
                }

                localStorage.setItem('selectContrie', JSON.stringify(data[0]));
                window.location.href = "./../public/detailsPage.html";
            } catch(error) {
                console.error('Error ao buscar dados do país', error);
            };
        });
    };
};