import * as utils from '/js/utils.js';
import views from '/js/views/index.js';
import CustomizeForm from '/js/customize/CustomizeForm.js';
import CustomizeView from '/js/customize/CustomizeView.js';

import StoreMediator from '/js/store/StoreMediator.js';

const app = document.getElementById('app');

// Builds recommendation view.
app.innerHTML = views.recommendation;

let plantBuilder = null;
let plant = null;

function ResolveRecommendationView(plant) {
  const recommendation = plant.BuildRecommendation();
  // Cleans div.
  const recommendationDiv = document.getElementById('recommendation');
  recommendationDiv.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = recommendation.name;
  recommendationDiv.appendChild(title);

  const imagesContainer = document.createElement('div');
  imagesContainer.classList.add('images-container');

  // Images
  const plantImage = document.createElement('img');
  plantImage.src = plant.ResolvePlantRecomendationImagePath();

  const potImage = document.createElement('img');
  potImage.src = '/assets/' + plant.ResolvePotRecommendationImagePath();

  const soilImage = document.createElement('img');
  soilImage.src = plant.ResolveSoilRecommendationImagePath();

  if (recommendation.extras.includes('moss-pole')) {
    const mossPoleImage = document.createElement('img');
    mossPoleImage.src = '/assets/moss-pole.png';
    imagesContainer.appendChild(mossPoleImage);
  }

  imagesContainer.appendChild(potImage);

  recommendationDiv.appendChild(imagesContainer);
  imagesContainer.appendChild(soilImage);

  if (recommendation.extras.includes('pebbles')) {
    const pebblesImage = document.createElement('img');
    pebblesImage.src = '/assets/pebbles.png';
    imagesContainer.appendChild(pebblesImage);
  }

  if (recommendation.extras.includes('mini-plants')) {
    const miniPlantsImage = document.createElement('img');
    miniPlantsImage.src = '/assets/mini-plants.png';
    imagesContainer.appendChild(miniPlantsImage);
  }

  imagesContainer.appendChild(plantImage);

  // Information
  const infoList = document.createElement('ul');
  infoList.innerHTML = `
    <li>Name: ${recommendation.name}</li>
    <li>Soil: ${recommendation.soil}</li>
    <li>Pot: ${recommendation.pot}</li>
    <li>Extras: ${recommendation.extras}</li>
  `;
  recommendationDiv.appendChild(infoList);
  // Shows customize button.
  document.getElementById('customizeButton').classList.remove('invisible');

  // Testing click button
  //document.getElementById('customizeButton').click();
}

// Entry point to generate plant recommendation.
document.getElementById('plantForm').addEventListener('submit', function (event) {
  try {
    event.preventDefault();
    // Saves information into a temporal object.
    const formData = {
      placement: document.querySelector('input[name="placement"]:checked').value,
      sunlight: document.querySelector('input[name="sunlight"]:checked').value,
      pets: document.querySelector('input[name="pets"]:checked').value,
      watering: document.querySelector('input[name="watering"]:checked').value,
      style: document.querySelector('input[name="style"]:checked').value,
      extras: Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(
        (input) => input.value
      ),
    };
    // Builds recomendation and sets it into the dom.
    const plantBuilderAndPlantDirector = utils.BuildPlantFromRecommendation(formData);
    plantBuilder = plantBuilderAndPlantDirector.plantBuilder;
    plant = plantBuilder.build();
    ResolveRecommendationView(plant);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Faltan campos.');
    // eslint-disable-next-line no-console
    console.error(error);
  }
});

document.getElementById('clearButton').addEventListener('click', function () {
  document.getElementById('plantForm').reset();
  document.getElementById('recommendation').innerHTML = '';
});

document.getElementById('customizeButton').addEventListener('click', function (e) {
  e.preventDefault();
  // Renders Customize view.
  app.innerHTML = views.customize;

  function GetElement(id) {
    return document.getElementById(id);
  }
  // Sets dom elements to CustomizeForm object to handle the form.
  // This is also de observable object.
  const customizeForm = new CustomizeForm(
    GetElement('pot_material_clay'),
    GetElement('pot_material_ceramic'),
    GetElement('pot_decorations'),
    GetElement('pot_color_checkbox'),
    GetElement('pot_color_select'),
    GetElement('soilSelection'),
    GetElement('plantSelection'),
    GetElement('moss_pole'),
    GetElement('pebbles'),
    GetElement('small_plants'),
    plant
  );
  // Sets the object that handles the view of the plant.
  // This is also the observer object.
  const customizeView = new CustomizeView(
    GetElement('customizeYourPlantPreview'),
    customizeForm
  );
  customizeForm.SetObserver(customizeView);
  // Resolves the initial form view and initializes the Click
  // events on the form elements.
  customizeForm.ProcessForm();

  document.getElementById('buttonCheckStoreAcailability').addEventListener('click', StoreMain);
  // Testing click.
  //document.getElementById('buttonCheckStoreAcailability').click();
  document.getElementById('buttonBackToCustomization').addEventListener('click', function () {
    app.innerHTML = views.customize;
    customizeForm.ProcessForm();
  });
});

function StoreMain() {
  // Renders store view.
  app.innerHTML = views.store;
  // Sets the store middleware.
  new StoreMediator(plant);
}

// Test prop.
/* const plantDirector = new PlantDirector();
plantBuilder = new PlantBuilder();
plantDirector.setBuilder(plantBuilder);
plantDirector.MakeTestsPlant();
plant = plantBuilder.build();
ResolveRecommendationView(plant); */
