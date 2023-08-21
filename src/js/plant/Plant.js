import { potMaterials, soilInformation, plantInformation } from '/js/constants.js';

export default class Plant {
    constructor(plant, potMaterial, potDecoration, potColor, soil, extras) {
        this.plant = plant;
        this.potMaterial = potMaterial;
        this.potDecoration = potDecoration === true ? true : false;
        this.potColor = potColor;
        this.soil = soil;
        this.extras = extras;
    }

    ResolvePotRecommendationImagePath() {
        let _ = '';

        if (this.potMaterial === potMaterials.CLAY_POT) {
            _ += 'clay-';
        } else if (this.potMaterial === potMaterials.CERAMIC_POT) {
            _ += 'ceramic-';
        }

        if (this.potDecoration === false) {
            _ += `simple-${this.potColor}`;
        } else if (this.potDecoration === true) {
            _ += `decorated-${this.potColor}`;
        }
        _ += '.PNG';

        return _;
    }

    ResolvePotApiInfo() {
        let _ = '';

        if (this.potMaterial === potMaterials.CLAY_POT) {
            _ += 'clay-';
        } else if (this.potMaterial === potMaterials.CERAMIC_POT) {
            _ += 'ceramic-';
        }

        if (this.potDecoration === false) {
            _ += `simple-${this.potColor}`;
        } else if (this.potDecoration === true) {
            _ += `decorated-${this.potColor}`;
        }
        
        return _;
    }

    ResolvePlantRecomendationImagePath() {
        let plantname = this.plant;
        plantname = plantname.toUpperCase();
        plantname = plantname.replace(' ', '_');
        return plantInformation[plantname].imgPath;
    }

    ResolveSoilRecommendationImagePath() {
        if (this.soil === soilInformation.SOIL_COMPOSTED.name) {
            return soilInformation.SOIL_COMPOSTED.imgPath;
        } else if (this.soil === soilInformation.SOIL_FERTILIZED.name) {
            return soilInformation.SOIL_FERTILIZED.imgPath;
        } else if (this.soil === soilInformation.SOIL_DRAINAGE.name) {
            return soilInformation.SOIL_DRAINAGE.imgPath;
        }
    }

    // Creates an structure for the plant recommendation view.
    BuildRecommendation() {
        let pot = this.potMaterial;
        if (this.potDecoration === true) {
            pot += ' with decorations';
        }

        const _ = {
            name: this.plant,
            soil: this.soil,
            pot,
            color: this.potColor,
            extras: this.extras
        };

        return _;
    }
}
