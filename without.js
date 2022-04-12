const without = function (source, itemToRemove) {
    for ( let i = 0; i < itemToRemove.length; i++) {
      source = source.filter( item => item !== itemToRemove[i]);
    }
  return source;
};

module.exports = without;
