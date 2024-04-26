#!/bin/node
const path = require('path');

module.exports = {
 entry: "./src/jegi.js",
 output: {
  filename: "bundle.js",
  path: path.resolve(__dirname, 'dist')
 }

}
