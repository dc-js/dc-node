var globals = ["document", "window", "d3"],
    globalValues = {};

globals.forEach(function(g) {
  if (g in global) globalValues[g] = global[g];
});

require("./globals");
dc = require("dc");
module.exports = dc;

globals.forEach(function(g) {
  if (g in globalValues) global[g] = globalValues[g];
  else delete global[g];
});
