const { MODE } = require("./blendMode.js");
const description =
  "This sure is one silly square!";
const baseUri = "ipfs://QmRxRGDgkzQURnNmmjnKHQ5jQW3wjXvW2vkoWXEweRyzJ1";

const layerConfigurations = [
  {
    growEditionSizeTo: 250,
    layersOrder: [
      { name: "Background" },
      { name: "Square" },
      { name: "Face" },
      { name: "Hat" }
    ],
  },
];

const format = {
  width: 3000,
  height: 3000,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
