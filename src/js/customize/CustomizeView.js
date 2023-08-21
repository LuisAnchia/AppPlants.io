import {
    ASSETS_PATH,
    soilInformation,
    plantInformation,
    extrasInformation
}
    from '/js/constants.js';
import { CreateDivElementWithContent } from '/js/utils.js';

export default class CustomizeView {
    constructor(
        container,
        observable
    ) {
        this.container = container;
        this.observable = observable;
    }

    Update() {
        this.ProcessView();
    }

    ProcessView() {
        this.ProcessContainer();
        this.ProcessText();
        this.ProcessPotImage();
        this.ProcessSoil();
        this.ProcessExtraMossPole();
        this.ProcessExtraPebbles();
        this.ProcessExtraMiniPlants();
        this.ProcessPlantImage();
    }

    ProcessContainer() {
        this.container.innerHTML = '';
        // Container for the basic plant information.
        const divInfo = CreateDivElementWithContent('');
        divInfo.id = 'text';
        // Container for the plant image.
        const divImage = CreateDivElementWithContent('');
        divImage.id = 'image';
        divImage.classList.add('images-container');
        // Set div elements to the container.
        this.container.appendChild(divInfo);
        this.container.appendChild(divImage);
    }

    ProcessText() {
        let name = this.observable.plant.plant;
        let soil = this.observable.plant.soil;
        let pot = this.observable.plant.potMaterial;
        let color = this.observable.plant.potColor;
        let extras = this.observable.plant.extras;

        let _ = `Name:${name}<br>Soil: ${soil}<br>Pot: ${pot}<br>Color: ${color}<br>Extras: ${extras}`;

        const div = CreateDivElementWithContent(_);
        this.container.querySelector('#text').appendChild(div);
    }

    ProcessPotImage() {
        let img = ASSETS_PATH;

        img += this.observable.plant.ResolvePotRecommendationImagePath();
        const _ = `<img src="${img}" alt="pot-image"></img>`;

        const div = CreateDivElementWithContent(_);
        this.container.querySelector('#image').appendChild(div);
    }

    ProcessSoil() {
        const info = {
            imgPath: null,
            alt: null
        };
        if (this.observable.plant.soil === soilInformation.SOIL_COMPOSTED.name) {
            info.imgPath = soilInformation.SOIL_COMPOSTED.imgPath;
            info.alt = soilInformation.SOIL_COMPOSTED.name;
        } else if (this.observable.plant.soil === soilInformation.SOIL_FERTILIZED.name) {
            info.imgPath = soilInformation.SOIL_FERTILIZED.imgPath;
            info.alt = soilInformation.SOIL_FERTILIZED.name;
        } else if (this.observable.plant.soil === soilInformation.SOIL_DRAINAGE.name) {
            info.imgPath = soilInformation.SOIL_DRAINAGE.imgPath;
            info.alt = soilInformation.SOIL_DRAINAGE.name;
        }

        const _ = `<img src="${info.imgPath}" alt="${info.alt}"></img>`;
        const div = CreateDivElementWithContent(_);
        this.container.querySelector('#image').appendChild(div);
    }

    ProcessPlantImage() {
        const info = {
            imgPath: null,
            alt: null
        };
        if (this.observable.plant.plant === plantInformation.SANSEVIERIA.name) {
            info.imgPath = plantInformation.SANSEVIERIA.imgPath;
            info.alt = plantInformation.SANSEVIERIA.name;
        } else if (this.observable.plant.plant === plantInformation.BOSTON_FERN.name) {
            info.imgPath = plantInformation.BOSTON_FERN.imgPath;
            info.alt = plantInformation.BOSTON_FERN.name;
        } else if (this.observable.plant.plant === plantInformation.AGLAONEMA.name) {
            info.imgPath = plantInformation.AGLAONEMA.imgPath;
            info.alt = plantInformation.AGLAONEMA.name;
        } else if (this.observable.plant.plant === plantInformation.MONSTERA.name) {
            info.imgPath = plantInformation.MONSTERA.imgPath;
            info.alt = plantInformation.MONSTERA.name;
        } else if (this.observable.plant.plant === plantInformation.ALOE_VERA.name) {
            info.imgPath = plantInformation.ALOE_VERA.imgPath;
            info.alt = plantInformation.ALOE_VERA.name;
        } else if (this.observable.plant.plant === plantInformation.CACTUS.name) {
            info.imgPath = plantInformation.CACTUS.imgPath;
            info.alt = plantInformation.CACTUS.name;
        } else if (this.observable.plant.plant === plantInformation.PEACE_LILY.name) {
            info.imgPath = plantInformation.PEACE_LILY.imgPath;
            info.alt = plantInformation.PEACE_LILY.name;
        }

        const _ = `<img src="${info.imgPath}" alt="${info.alt}"></img>`;
        const div = CreateDivElementWithContent(_);
        this.container.querySelector('#image').appendChild(div);
    }

    ProcessExtraMossPole() {
        if (this.observable.plant.extras.includes(extrasInformation.EXTRA_MOSS_POLE.nameHTML)) {
            const _ = `<img src="${extrasInformation.EXTRA_MOSS_POLE.imgPath}" alt="${extrasInformation.EXTRA_MOSS_POLE.name}"></img>`;
            const div = CreateDivElementWithContent(_);
            this.container.querySelector('#image').appendChild(div);
        }
    }

    ProcessExtraPebbles() {
        if (this.observable.plant.extras.includes(extrasInformation.EXTRA_PEBBLES.nameHTML)) {
            const _ = `<img src="${extrasInformation.EXTRA_PEBBLES.imgPath}" alt="${extrasInformation.EXTRA_PEBBLES.name}"></img>`;
            const div = CreateDivElementWithContent(_);
            this.container.querySelector('#image').appendChild(div);
        }
    }

    ProcessExtraMiniPlants() {
        if (this.observable.plant.extras.includes(extrasInformation.EXTRA_MINI_PLANTS.nameHTML)) {
            const _ = `<img src="${extrasInformation.EXTRA_MINI_PLANTS.imgPath}" alt="${extrasInformation.EXTRA_MINI_PLANTS.name}"></img>`;
            const div = CreateDivElementWithContent(_);
            this.container.querySelector('#image').appendChild(div);
        }
    }
}
