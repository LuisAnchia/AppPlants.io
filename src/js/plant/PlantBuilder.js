import Plant from '/js/plant/Plant.js';

export default class PlantBuilder {
    constructor(plant, potMaterial, potDecoration, potColor, soil, extras) {
        this.plant = plant;
        this.potMaterial = potMaterial;
        this.potDecoration = potDecoration;
        this.potColor = potColor;
        this.soil = soil;
        this.extras = extras;
    }

    reset() {
        this.plant = undefined;
        this.potMaterial = undefined;
        this.potDecoration = undefined;
        this.potStyle = undefined;
        this.extras = undefined;
    }

    withPlant(plant) {
        this.plant = plant;
        return this;
    }

    withPotMaterial(potMaterial) {
        this.potMaterial = potMaterial;
        return this;
    }

    withPotDecoration(potDecoration) {
        this.potDecoration = potDecoration;
        return this;
    }

    withPotColor(color) {
        this.potColor = color;
        return this;
    }

    withSoil(soil) {
        this.soil = soil;
        return this;
    }

    withExtras(extras) {
        this.extras = extras;
        return this;
    }

    build() {
        const plant = new Plant(
            this.plant,
            this.potMaterial,
            this.potDecoration,
            this.potColor,
            this.soil,
            this.extras
        );
        return plant;
    }
}
