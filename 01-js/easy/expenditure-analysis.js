/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const object = {};
  for (const transaction of transactions) {
    if (object[transaction.category] > 0) {
      object[transaction.category] += transaction.price;
    }
    else {
      object[transaction.category] = transaction.price;
    };
  }
  result = [];
  for (const expense in object) {
    new_object = {
      category: expense,
      totalSpent: object[expense]
    }
    result.push(new_object)
  };
  return result;
}

module.exports = calculateTotalSpentByCategory;
