module.exports = function() {
  return {
    myItems: require('./db/myItems.json'),
    items: require('./db/items.json'),
    'user-data': require('./db/user-data.json'),
    categories: require('./db/categories.json'),
    'item-ownership': require('./db/item-ownership.json'),
  }
};