import StoreElements from '/js/store/StoreElements.js';
import { storeElementsHTMLIds, plantInformation, apiStoreTypes, soilInformation, svgs } from '/js/constants.js';

export default class StoreMediator {
    constructor(plant) {
        this.info = null;
        this.containerInfo = document.getElementById('container-info');
        this.storeElementsReferences = [];
        this.plant = plant;
        this.apiInfo = null;
        this.ProcessInfo();
    }

    ProcessInfo() {       
        this.apiInfo = {
            plant: {
                info: {
                    api: `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/info/${Object.values(plantInformation).find(n => n.name === this.plant.plant).apiName}`,
                    info: null
                },
                inventory: {
                    api: `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/${apiStoreTypes.PLANT}/${Object.values(plantInformation).find(n => n.name === this.plant.plant).apiName}`,
                    info: null
                }
            },
            soil: {
                api:`https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/${apiStoreTypes.SOIL}/${Object.values(soilInformation).find(n => n.name === this.plant.soil).apiName}`,
                info: null
            },
            pot: {
                api: `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/${apiStoreTypes.POT}/${this.plant.ResolvePotApiInfo()}`,
                info: null
            },
        };

        const requests = [
            this.apiInfo.plant.info.api,
            this.apiInfo.plant.inventory.api,
            this.apiInfo.soil.api,
            this.apiInfo.pot.api
        ];

        const promises = requests.map(url => fetch(url));
        Promise.all(promises)
            .then(_fetchs => {
                return Promise.all(_fetchs.map(_fetch => _fetch.json()));
            })
            .then(data => {
                // Retrieves information from the APIs and stores it into a variable.
                this.info = data;

                // Sets the retrieved information into the controller of the information.
                this.apiInfo.plant.info.info = this.info[0];
                this.apiInfo.plant.inventory.info = this.info[1];
                this.apiInfo.soil.info = this.info[2];
                this.apiInfo.pot.info = this.info[3];

                // Initiates and renders the div containers.
                const priceBreakdown = this.ProcessPriceBreakdown();
                this.storeElementsReferences.push(priceBreakdown);
                this.AppendToContainerInfo(priceBreakdown.GetDiv());

                const inventoryAlerts = this.ProcessInventoryAlerts();
                this.storeElementsReferences.push(inventoryAlerts);
                this.AppendToContainerInfo(inventoryAlerts.GetDiv());

                const plantDescription = this.ProcessPlantDescription();
                this.storeElementsReferences.push(plantDescription);
                this.AppendToContainerInfo(plantDescription.GetDiv());

                const caringTips = this.ProcessCaringTips();
                this.storeElementsReferences.push(caringTips);
                this.AppendToContainerInfo(caringTips.GetDiv());

                // Adds click behavior on the arrow button to hide or show information.
                for (const e of this.storeElementsReferences) {
                    document.querySelector(`#${e.arrowImgId}`).addEventListener('click', () => {
                        if (e.show === true) {
                            e.show = false;
                            document.querySelector(`#${e.contentId}`).classList.add('invisible');
                            document.querySelector(`#${e.arrowImgId}`).classList.add('arrow-down');
                            document.querySelector(`#${e.arrowImgId}`).classList.remove('arrow-up');
                        } else if (e.show === false) {
                            e.show = true;
                            document.querySelector(`#${e.contentId}`).classList.remove('invisible');
                            document.querySelector(`#${e.arrowImgId}`).classList.add('arrow-up');
                            document.querySelector(`#${e.arrowImgId}`).classList.remove('arrow-down');
                        }
                    });
                }


            })
            .catch(error => { 
                // eslint-disable-next-line no-console
                console.error(error); 
            });
    }

    ProcessCaringTips() {
        const content = `<img src="${svgs.LIGHT}" alt="light svg"/><b>Light</b><br><br>${this.apiInfo.plant.info.info.care.light}<br><br>
        <img src="${svgs.WATER}" alt="light svg"/><b>Water</b><br><br>${this.apiInfo.plant.info.info.care.water}<br><br>
        <img src="${svgs.HUMIDITY}" alt="light svg"/><b>Humidity</b><br><br>${this.apiInfo.plant.info.info.care.humidity}<br><br>
        <img src="${svgs.TEMPERATURE}" alt="light svg"/><b>Temperature</b><br><br>${this.apiInfo.plant.info.info.care.temperature}<br><br>`;
        return new StoreElements(
            'Caring tips',
            content,
            true,
            storeElementsHTMLIds.CARING_TIPS
        );
    }

    ProcessPlantDescription() {
        return new StoreElements(
            'Plant description',
            `${this.apiInfo.plant.info.info.description}`,
            false,
            storeElementsHTMLIds.PLANT_DESCRIPTION
        );
    }

    ProcessInventoryAlerts() {
        return new StoreElements(
            'Inventory alerts',
            'inventory alrerts example text',
            false,
            storeElementsHTMLIds.INVENTORY_ALERTS
        );
    }

    ProcessPriceBreakdown() {
        return new StoreElements(
            'Price breakdown',
            'price brakdown example thingy',
            false,
            storeElementsHTMLIds.PRICE_BREAKDOWN
        );
    }

    AppendToContainerInfo(child) {
        this.containerInfo.appendChild(child);
    }
}
