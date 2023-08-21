import { potColors, soilInformation, plantInformation } from '/js/constants.js';

const views = {};

views.recommendation = /* html */ `<h1>Let us find the perfect plant for you</h1>
<div class="flex">
<form id="plantForm">
  <div class="question">
    <label>Where will you place your plant?</label>
    <div>
      <input type="radio" name="placement" value="inside-indirect-light">Inside with some indirect light
      <br>
      <input type="radio" name="placement" value="inside-lot-indirect-light">Inside with a lot of indirect light
      <br>
      <input type="radio" name="placement" value="outside">Outside
    </div>
  </div>
  <div class="question">
    <label>Will it receive direct sunlight?</label>
    <div>
      <input type="radio" name="sunlight" value="yes">Yes
      <br>
      <input type="radio" name="sunlight" value="no">No
    </div>
  </div>
  <div class="question">
    <label>Do you have pets (cats or dogs)?</label>
    <div>
      <input type="radio" name="pets" value="yes">Yes
      <br>
      <input type="radio" name="pets" value="no">No
    </div>
  </div>
  <div class="question">
    <label>Do you tend to overwater or underwater?</label>
    <div>
      <input type="radio" name="watering" value="overwater">Overwater
      <br>
      <input type="radio" name="watering" value="underwater">Underwater
      <br>
      <input type="radio" name="watering" value="neither">Neither / I don’t know
    </div>
  </div>
  <div class="question">
    <label>How do you define your style?</label>
    <div>
      <input type="radio" name="style" value="minimalism">I like minimalism and material colors
      <br>
      <input type="radio" name="style" value="simple">I like some decoration and simple colors
      <br>
      <input type="radio" name="style" value="decorated">I like a lot of decoration and bright colors
    </div>
  </div>
  <div class="question">
    <label>Do you want to add any extra elements to your plant?</label>
    <div>
      <input type="checkbox" name="extras" value="moss-pole">Moss pole
      <br>
      <input type="checkbox" name="extras" value="pebbles">Pebbles
      <br>
      <input type="checkbox" name="extras" value="mini-plants">Smaller plants
    </div>
  </div>
  <div>
  <input type="submit" value="Get your plant!" id="submitButton">
  <button type="button" id="clearButton">Clear</button>
  </div>
  <span id="customizeButtonContainer">
    <button class="invisible" id="customizeButton">Customize</button>
  </span>
</form>

<div>
<div id="recommendation">
<!-- Plant recommendation will be displayed here -->
</div>
</div>
</div>`;


views.customize = /* html */ `<h1>Customize your plant!</h1>
<div class="container-customize-plant">
  <div class="customize-your-plant-form">
    <br>
    <label>Choose your pot:</label>
    <br>
    Pot material
    <br>
    <input type="radio" name="pot_material" id="pot_material_clay">
    Clay
    <input type="radio" name="pot_material" id="pot_material_ceramic">
    Ceramic
    <br>
    <br>
    <input type="checkbox" name="pot_decorations" id="pot_decorations">
    Pot decorations
    <br>
    <br>
    <input type="checkbox" name="pot_color" id="pot_color_checkbox">
    Pot color
    <br>
    <br>
    <select name="" id="pot_color_select">
      <option value="${potColors.BLUE}">Blue</option>
      <option value="${potColors.PINK}">Pink</option>
      <option value="${potColors.GREEN}">Green</option>
      <option value="${potColors.PURPLE}">Purple</option>
      <option value="${potColors.UNPAINTED}">No color</option>
    </select>
    <br>
    <br>
    <label for="">Choose your soil:</label>
    <select name="" id="soilSelection">
      <option value="${soilInformation.SOIL_COMPOSTED.name}">Basic composted soil</option>
      <option value="${soilInformation.SOIL_FERTILIZED.name}">Premium fertilized soil</option>
      <option value="${soilInformation.SOIL_DRAINAGE.name}">Easy drainage soil</option>
    </select>
    <br>
    <br>
    <label for="">Choose your plant:</label>
    <select name="" id="plantSelection">
      <option value="${plantInformation.SANSEVIERIA.name}">Sansevieria</option>
      <option value="${plantInformation.BOSTON_FERN.name}">Boston Fern</option>
      <option value="${plantInformation.AGLAONEMA.name}">Aglaonema Silver Bay</option>
      <option value="${plantInformation.MONSTERA.name}">Monstera Deliciosa</option>
      <option value="${plantInformation.ALOE_VERA.name}">Aloe Vera</option>
      <option value="${plantInformation.CACTUS.name}">Cactus</option>
      <option value="${plantInformation.PEACE_LILY.name}">Peace Lily</option>
    </select>
    <br>
    <br>
    <label>Choose your extras:</label>
    <input type="checkbox" name="moss_pole" id="moss_pole">
    Moss pole
    <br>
    <input type="checkbox" name="Pebbles" id="pebbles">
    Pebbles
    <br>
    <input type="checkbox" name="small_plants" id="small_plants">
    Smaller decorative plants
    <br>
    <br>
    <button class="button-blue" id="buttonCheckStoreAcailability">Check store availability</button>
  </div>

  <div class="customize-your-plant-preview" id="customizeYourPlantPreview"></div>
</div>
`;

views.store = /* html */ `<div class="container-store">
  <div class="container-store-preview">
    Preview
  </div>
  <div class="container-store-information">
    <h1>Plant with custom pot and special soil</h1>
    <br>
    <label>$9999999.99</label>
    <br><br>
    <button class="button-green">In Stock</button>
    <br><br>
    <button class="button-blue">Order now!</button>
    <br><br><br>
    <div id="container-info"></div>
  </div>
</div>
<button id="buttonBackToCustomization">Back to customization</button>`;

export default views;