import {
    plantInformation,
    potMaterials,
    potColors,
    soilInformation,
    extrasInformation,
} from '/js/constants.js';

export default class PlantDirector {
    constructor() {
        this.builder = null;
    }

    setBuilder(builder) {
        this.builder = builder;
    }

    MakeDefaultPlant() {
        this.builder.reset();
        this.builder
            .withPlant(plantInformation.SANSEVIERIA.name)
            .withPotMaterial(potMaterials.CLAY_POT)
            .withPotDecoration(false)
            .withPotColor(potColors.UNPAINTED)
            .withSoil(soilInformation.SOIL_COMPOSTED.name)
            .withExtras([]);
    }

    MakeTestsPlant() {
        this.builder.reset();
        this.builder
            .withPlant(plantInformation.PEACE_LILY.name)
            .withPotMaterial(potMaterials.CLAY_POT)
            .withPotDecoration(true)
            .withPotColor(potColors.PINK)
            .withSoil(soilInformation.SOIL_COMPOSTED.name)
            .withExtras(
                [
                    extrasInformation.EXTRA_MINI_PLANTS.nameHTML,
                    extrasInformation.EXTRA_MOSS_POLE.nameHTML,
                    extrasInformation.EXTRA_PEBBLES.nameHTML
                ]
            );
    }
}
