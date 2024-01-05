# Building a movie recommendation system with Tensorflow and PGVector

## Part 1. Core Functionality: Generating embeddings and finding closest vectors

### Step 1. Setup TensorFlow to create a single vector
```
npm install @tensorflow-models/universal-sentence-encoder --save
```

```
npm install @tensorflow/tfjs-node --save
```

```
mkdir core
```

```
cd core
```

```
touch encoder.js
```

```js
const fs = require("fs");
require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');
const moviePlots = require("./movie-plots.json");

use.load().then(async model => {
    const sampleMoviePlot = moviePlots[0];
    const embeddings = await model.embed(sampleMoviePlot['Plot']);
    console.log(embeddings.arraySync());
});
```

```
node encoder.js
```

### Step 2. 

## Part 2. Visual Interface: Integrating into a full-stack web application
