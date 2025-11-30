export class apiRoutes {
    static baseURL = 'https://restcountries.com/v3.1/';

    static async searchAllContries() {
        try {
            const response = await fetch(`${apiRoutes.baseURL}all?fields=name,capital,currencies,flags,region,population`);
            const data = await response.json();

            const contriesList = [];

            for(let i = 0; i < data.length; i++) {
                contriesList.push(data[i]);
            }

            return contriesList;

        } catch (error) {
            console.error('Erro ao buscar países:', error);
        }
    }

    static async searchByName(name = 'A') {
        try {
            const response = await fetch(`${this.baseURL}name/${name}?fields=name,capital,currencies,flags,region,population`);
            const data = await response.json();

            return data;

        } catch(error) {
            console.error('Erro ao buscar país pelo nome.', error);
        };
    }

    static async searchByRegion(region) {
        try {
            const response = await fetch(`${this.baseURL}region/${region}?fields=name,capital,currencies,flags,region,population`);
            const data = await response.json();

            return data;

        } catch (error) {
            console.error('Erro ao buscar países pelo continente.', error);
        };
    }

    static async searchByCompleteName(name) {
        try {
            const response = await fetch(`${this.baseURL}name/${name}?fields=name,capital,currencies,flags,region,population,tld,borders,area,languages,subregion,latlng,maps`);
            const data = await response.json(); 

            return data;

        } catch(error) {
            console.error('Erro ao buscar informações do país', error);
        }
    }

    static async captureNamesContries(name = 'A', optionSearch = 0, region = 'Americas') {
        try {
            let contriesList = [];

            if (optionSearch === 0 || name === "") {
                contriesList = await this.searchAllContries();
            } else if(optionSearch === 1) {
                contriesList = await this.searchByName(name);
            } else {
                contriesList = await this.searchByRegion(region);
            };

            const contriesNameList = [];
    
            for (let i = 0; i < contriesList.length; i++) {
                contriesNameList.push(contriesList[i].name.common);
            };
            
            return contriesNameList;
            
        } catch (error) {
            console.error('Erro ao buscar nome do pais', error);
        }
    }

    static async captureRegionContries(name = 'A', optionSearch = 0, region = 'Americas') {
        try {
            let contriesList = [];
            const contriesRegionsList = [];

            if (optionSearch === 0 || name === "") {
                contriesList = await this.searchAllContries();
            } else if(optionSearch === 1) {
                contriesList = await this.searchByName(name);
            } else {
                contriesList = await this.searchByRegion(region);
            }
    
            for (let i = 0; i < contriesList.length; i++) {
                contriesRegionsList.push(contriesList[i].region);
            };
    
            return contriesRegionsList;
            
        } catch (error) {
            console.error('Erro ao buscar região do país', error);
        }
    }

    static async captureCapitalContries(name = 'A', optionSearch = 0, region = 'Americas') {
        try {
            let contriesList = [];

            if (optionSearch === 0 || name === "") {
                contriesList = await this.searchAllContries();
            } else if(optionSearch === 1){
                contriesList = await this.searchByName(name);
            } else {
                contriesList = await this.searchByRegion(region);
            }

            const contriesCapitalsList = [];
    
            for (let i = 0; i < contriesList.length; i++) {
                contriesCapitalsList.push(contriesList[i].capital[0]);
            };
    
            return contriesCapitalsList;

        } catch (error) {
            console.error('Erro ao buscar capital do país', error);
        }
    }

    static async capturePopulationContries(name = 'A', optionSearch = 0, region = 'Americas') {
        try {
            let contriesList = [];

            if (optionSearch === 0 || name === "") {
                contriesList = await this.searchAllContries();
            } else if(optionSearch === 1){
                contriesList = await this.searchByName(name);
            } else {
                contriesList = await this.searchByRegion(region);    
            }

            const contriesPopulationList = [];
    
            for (let i = 0; i < contriesList.length; i++) {
                contriesPopulationList.push(contriesList[i].population);
            };
    
            return contriesPopulationList;

        } catch (error) {
            console.error('Erro ao buscar capital do país', error);
        }
    }

    static async captureImageContrie(name = 'A', optionSearch = 0, region = 'Americas') {
        try {
            let contriesList = [];

            if (optionSearch === 0 || name === "") {
                contriesList = await this.searchAllContries();
            } else if(optionSearch === 1){
                contriesList = await this.searchByName(name);
            } else {
                contriesList = await this.searchByRegion(region);
            };

            const contriesFlagsList = [];

            for (let i = 0; i < contriesList.length; i++) {
                contriesFlagsList.push(contriesList[i].flags);
            }

            return contriesFlagsList;

        } catch (error) {
            console.error('Erro ao buscar bandeira do pais', error);
        };
    }
}