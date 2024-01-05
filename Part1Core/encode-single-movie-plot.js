// Step 1. Use TensorFlow to create a single vector

require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');
const moviePlots = require("./movie-plots.json");
use.load().then(async model => {
    // Select a movie plot that you want to encode
    const sampleMoviePlot = moviePlots[0];

    // Request embedding
    const embeddings = await model.embed(sampleMoviePlot['Plot']);

    // Print out the vector
    console.log(embeddings.arraySync());
});
