require('@tensorflow/tfjs-node-gpu');

const tf = require('@tensorflow/tfjs');
const loadCSV = require('./load-csv');

let { feature, labels, testFeatures, testLabels } = loadCSV('kc_house_data.csv', {
    shuffle: true,
    splitTest: 10,
    labelColumns: ['lat', 'long'],
    labelColumns: ['price']
});