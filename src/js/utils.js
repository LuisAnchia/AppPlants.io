import { potMaterials, soilInformation, potColors, plantInformation } from '/js/constants.js';
import PlantDirector from '/js/plant/PlantDirector.js';
import PlantBuilder from '/js/plant/PlantBuilder.js';

export function ProcessPlantName(placement, pets) {
    if (placement === 'inside-indirect-light') {
        if (pets === 'yes') {
            return plantInformation.SANSEVIERIA.name;
        } else if (pets === 'no') {
            return plantInformation.BOSTON_FERN.name;
        }
    } else if (placement === 'inside-lot-indirect-light') {
        if (pets === 'yes') {
            return plantInformation.AGLAONEMA.name;
        } else if (pets === 'no') {
            return plantInformation.MONSTERA.name;
        }
    } else if (placement === 'outside') {
        if (pets === 'yes') {
            return plantInformation.ALOE_VERA.name;
        } else if (pets === 'no') {
            return plantInformation.CACTUS.name;
        }
    }
}

export function ProcessPotType(watering) {
    if (watering === 'overwater') {
        return potMaterials.CLAY_POT;
    } else if (watering === 'underwater' ||
        watering === 'neither') {
        return potMaterials.CLAY_POT;
    }
}

export function ProcessPotDecoration(style) {
    if (style === 'minimalism') {
        return false;
    } else {
        return true;
    }
}

export function ProcessSoilType(sunlight, watering) {
    if (watering === 'overwater') {
        return soilInformation.SOIL_DRAINAGE.name;
    }
    return sunlight === 'yes' ? soilInformation.SOIL_COMPOSTED.name : soilInformation.SOIL_FERTILIZED.name;
}

export function ProcessPotColor(style) {
    if (style === 'decorated') {
        return potColors.PINK;
    } else {
        return potColors.UNPAINTED;
    }
}

export function BuildPlantFromRecommendation(formData) {
    // Form values deconstructing.
    const { placement, sunlight, pets, watering, style, extras } = formData;
    // Extracts the fixed information,
    const plantName = ProcessPlantName(placement, pets);
    let potMaterial = watering === 'overwater' ? potMaterials.CLAY_POT : potMaterials.CERAMIC_POT;
    let potDecoration = ProcessPotDecoration(style);
    let potColor = ProcessPotColor(style);
    let soil = ProcessSoilType(sunlight, watering);
    // PlantDirector and PlantBuilder work together to generate the plant.
    const plantDirector = new PlantDirector();
    const plantBuilder = new PlantBuilder();
    plantDirector.setBuilder(plantBuilder);
    plantDirector.MakeDefaultPlant();
    plantBuilder
        .withPlant(plantName)
        .withPotMaterial(potMaterial)
        .withPotDecoration(potDecoration)
        .withPotColor(potColor)
        .withSoil(soil)
        .withExtras(extras);
    // Returns Plant Director and Plant Builder.
    return { plantDirector, plantBuilder };
}

export function CreateDivElementWithContent(content) {
    const div = document.createElement('div');
    div.insertAdjacentHTML('beforeend', content);
    return div;
}
