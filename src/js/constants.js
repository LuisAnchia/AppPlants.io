export const ASSETS_PATH = '/assets/';

export const assets = {
    PLANT_AGLAONEMA: `${ASSETS_PATH}plant-aglaonema.png`,
    PLANT_ALOE: `${ASSETS_PATH}plant-aloe.png`,
    PLANT_CACTUS: `${ASSETS_PATH}plant-cactus.png`,
    PLANT_FERN: `${ASSETS_PATH}plant-fern.png`,
    PLANT_MONSTERA: `${ASSETS_PATH}plant-monstera.png`,
    PLANT_PEACE_LILY: `${ASSETS_PATH}plant-peace-lily.png`,
    PLANT_SANSEVIERIA: `${ASSETS_PATH}plant-sansevieria.png`,

    SOIL_COMPOSTED: `${ASSETS_PATH}soil-composted.png`,
    SOIL_DRAINAGE: `${ASSETS_PATH}soil-drainage.png`,
    SOIL_FERTILIZED: `${ASSETS_PATH}soil-fertilized.png`,

    EXTRA_MINI_PLANTS: `${ASSETS_PATH}mini-plants.png`,
    EXTRA_MOSS_POLE: `${ASSETS_PATH}moss-pole.png`,
    EXTRA_PEBBLES: `${ASSETS_PATH}pebbles.png`
};

export const plantInformation = {
    SANSEVIERIA: { name: 'Sansevieria', imgPath: assets.PLANT_SANSEVIERIA, apiName: 'sansevieria', price: 5.75 },
    BOSTON_FERN: { name: 'Boston Fern', imgPath: assets.PLANT_FERN, apiName: 'fern', price: 10.25 },
    AGLAONEMA: { name: 'Aglaonema', imgPath: assets.PLANT_AGLAONEMA, apiName: 'aglaonema', price: 12.99 },
    MONSTERA: { name: 'Monstera', imgPath: assets.PLANT_MONSTERA, apiName: 'monstera', price: 18.00 },
    ALOE_VERA: { name: 'Aloe Vera', imgPath: assets.PLANT_ALOE, apiName: 'aloe', price: 5.25 },
    CACTUS: { name: 'Cactus', imgPath: assets.PLANT_CACTUS, apiName: 'cactus', price: 8.25 },
    PEACE_LILY: { name: 'Peace Lily', imgPath: assets.PLANT_PEACE_LILY, apiName: 'peaceLily', price: 8.75 },
};

// Pot types.
export const potMaterials = {
    CLAY_POT: 'Clay pot',
    CERAMIC_POT: 'Ceramic pot'
};

// Pot colors.
export const potColors = {
    BLUE: 'blue',
    PINK: 'pink',
    PURPLE: 'purple',
    GREEN: 'green',
    UNPAINTED: 'unpainted',
};

// Soil types.
export const soilInformation = {
    SOIL_COMPOSTED: { name: 'Soil composted', imgPath: assets.SOIL_COMPOSTED, apiName: 'composted' },
    SOIL_FERTILIZED: { name: 'Soil fertilized', imgPath: assets.SOIL_FERTILIZED, apiName: 'fertilized' },
    SOIL_DRAINAGE: { name: 'Soil drainage', imgPath: assets.SOIL_DRAINAGE, apiName: 'drainage' },
};

// Extras.
export const extrasInformation = {
    EXTRA_MINI_PLANTS: { name: 'Mini plants', nameHTML: 'mini-plants', imgPath: assets.EXTRA_MINI_PLANTS, price: 3.75 },
    EXTRA_MOSS_POLE: { name: 'Moss pole', nameHTML: 'moss-pole', imgPath: assets.EXTRA_MOSS_POLE, price: 2.25 },
    EXTRA_PEBBLES: { name: 'Pebbles', nameHTML: 'pebbles', imgPath: assets.EXTRA_PEBBLES, price: 2.00 }
};

// SVGs.
export const svgs = {
    ARROW: `${ASSETS_PATH}arrow.svg`,
    LIGHT: `${ASSETS_PATH}light.svg`,
    WATER: `${ASSETS_PATH}water.svg`,
    HUMIDITY: `${ASSETS_PATH}humidity.svg`,
    TEMPERATURE: `${ASSETS_PATH}temperature.svg`
};

// Store titles.
export const storeTitles = {
    PRICE_BREAKDOWN: 'Price breakdown',
    INVENTORY_ALERTS: 'Invetory alerts',
    PLANT_DESCRIPTION: 'Plant description',
    CARING_TIPS: 'Caring tips'
};

// Store HTML id flags.
export const storeElementsHTMLIds = {
    PRICE_BREAKDOWN: 'store-price-breakdown',
    INVENTORY_ALERTS: 'store-inventory-alerts',
    PLANT_DESCRIPTION: 'store-plant-description',
    CARING_TIPS: 'store-caring-tips'
};

// Api product types.
export const apiStoreTypes = {
    PLANT: 'plant',
    SOIL: 'soil',
    POT: 'pot'
};
