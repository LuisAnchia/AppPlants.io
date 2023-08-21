import {
    potMaterials,
    potColors,
    soilInformation,
    plantInformation,
    extrasInformation
} from '/js/constants.js';

export default class CustomizeForm {
    constructor(
        potMaterialClay,
        potMaterialCeramic,
        potDecorations,
        potColorCheckbox,
        potColorSelect,
        soilSelect,
        plantSelect,
        extras_moss_pole,
        extras_pebbles,
        extras_small_plants,
        plant
    ) {
        this.potMaterialClay = potMaterialClay;
        this.potMaterialCeramic = potMaterialCeramic;
        this.potDecorations = potDecorations;
        this.potColorCheckbox = potColorCheckbox;
        this.potColorSelect = potColorSelect;
        this.soilSelect = soilSelect;
        this.plantSelect = plantSelect;
        this.extras_moss_pole = extras_moss_pole;
        this.extras_pebbles = extras_pebbles;
        this.extras_small_plants = extras_small_plants;
        this.observer = null;
        this.plant = plant;
    }

    SetObserver(o) {
        this.observer = o;
    }

    ProcessForm() {
        // Pot material.
        this.plant.potMaterial === potMaterials.CLAY_POT
            ? this.potMaterialClay.checked = true
            : this.potMaterialCeramic.checked = true;
        // Pot decorations
        this.potDecorations.checked = this.plant.potDecoration;
        // Pot color.
        this.plant.potColor !== potColors.UNPAINTED
            ? this.potColorCheckbox.checked = true
            : this.potColorCheckbox.checked = false;
        // Selected pot color.
        this.ProcessPotColor();
        // Selected soil.
        if (this.plant.soil === soilInformation.SOIL_COMPOSTED.name) {
            this.soilSelect.selectedIndex = 0;
        } else if (this.plant.soil === soilInformation.SOIL_FERTILIZED.name) {
            this.soilSelect.selectedIndex = 1;
        } else if (this.plant.soil === soilInformation.SOIL_DRAINAGE.name) {
            this.soilSelect.selectedIndex = 2;
        }
        // Selected this.plant.
        if (this.plant.plant === plantInformation.SANSEVIERIA.name) {
            this.plantSelect.selectedIndex = 0;
        } else if (this.plant.plant === plantInformation.BOSTON_FERN.name) {
            this.plantSelect.selectedIndex = 1;
        } else if (this.plant.plant === plantInformation.AGLAONEMA.name) {
            this.plantSelect.selectedIndex = 2;
        } else if (this.plant.plant === plantInformation.MONSTERA.name) {
            this.plantSelect.selectedIndex = 3;
        } else if (this.plant.plant === plantInformation.ALOE_VERA.name) {
            this.plantSelect.selectedIndex = 4;
        } else if (this.plant.plant === plantInformation.CACTUS.name) {
            this.plantSelect.selectedIndex = 5;
        } else if (this.plant.plant === plantInformation.PEACE_LILY.name) {
            this.plantSelect.selectedIndex = 6;
        }
        // Extras.
        if (this.plant.extras.includes(extrasInformation.EXTRA_MINI_PLANTS.nameHTML)) {
            this.extras_small_plants.checked = true;
        }

        if (this.plant.extras.includes(extrasInformation.EXTRA_MOSS_POLE.nameHTML)) {
            this.extras_moss_pole.checked = true;
        }

        if (this.plant.extras.includes(extrasInformation.EXTRA_PEBBLES.nameHTML)) {
            this.extras_pebbles.checked = true;
        }

        this.potMaterialClay.addEventListener('click', () => {
            this.plant.potMaterial = potMaterials.CLAY_POT;
            this.observer.Update();
        });
        this.potMaterialCeramic.addEventListener('click', () => {
            this.plant.potMaterial = potMaterials.CERAMIC_POT;
            this.observer.Update();
        });
        this.potDecorations.addEventListener('click', () => {
            this.plant.potDecoration = this.potDecorations.checked;
            this.observer.Update();
        });
        this.potColorCheckbox.addEventListener('click', () => {
            if (this.potColorCheckbox.checked === true) {
                this.plant.potColor = potColors.PINK;
                this.potColorSelect.selectedIndex = 1;
            } else if (this.potColorCheckbox.checked === false) {
                this.plant.potColor = potColors.UNPAINTED;
                this.potColorSelect.selectedIndex = 4;
            }
            this.observer.Update();
        });
        this.potColorSelect.addEventListener('click', () => {
            this.plant.potColor = this.potColorSelect.value;
            this.observer.Update();
        });
        this.soilSelect.addEventListener('click', () => {
            this.plant.soil = this.soilSelect.value;
            this.observer.Update();
        });
        this.plantSelect.addEventListener('click', () => {
            this.plant.plant = this.plantSelect.value;
            this.observer.Update();
        });
        this.extras_moss_pole.addEventListener('click', () => {
            if (this.extras_moss_pole.checked) {
                this.plant.extras.push(extrasInformation.EXTRA_MOSS_POLE.nameHTML);
            } else {
                this.plant.extras = this.plant.extras.filter(e => e !== extrasInformation.EXTRA_MOSS_POLE.nameHTML);
            }
            this.observer.Update();
        });
        this.extras_pebbles.addEventListener('click', () => {
            if (this.extras_pebbles.checked) {
                this.plant.extras.push(extrasInformation.EXTRA_PEBBLES.nameHTML);
            } else {
                this.plant.extras = this.plant.extras.filter(e => e !== extrasInformation.EXTRA_PEBBLES.nameHTML);
            }
            this.observer.Update();
        });
        this.extras_small_plants.addEventListener('click', () => {
            if (this.extras_small_plants.checked) {
                this.plant.extras.push(extrasInformation.EXTRA_MINI_PLANTS.nameHTML);
            } else {
                this.plant.extras = this.plant.extras.filter(e => e !== extrasInformation.EXTRA_MINI_PLANTS.nameHTML);
            }
            this.observer.Update();
        });
        this.observer.Update();
    }

    ProcessPotColor() {
        if (this.plant.potColor === potColors.BLUE) {
            this.potColorSelect.selectedIndex = 0;
        } else if (this.plant.potColor === potColors.PINK) {
            this.potColorSelect.selectedIndex = 1;
        } else if (this.plant.potColor === potColors.GREEN) {
            this.potColorSelect.selectedIndex = 2;
        } else if (this.plant.potColor === potColors.PURPLE) {
            this.potColorSelect.selectedIndex = 3;
        } else if (this.plant.potColor === potColors.UNPAINTED) {
            this.potColorSelect.selectedIndex = 4;
        }
    }
}
