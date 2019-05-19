module.exports = function() {
  return {
    items: require('./db/items.json'),
    'user-data': require('./db/user-data.json'),
    categories: require('./db/categories.json'),
  }
};