const path = require('path')
const fs = require('fs')

const nutrientsData = require('./nutrients.json')

const nutrientAction = (nutrient, result) => nutrient.food.map(food => createFoodRecord(food, result, nutrient))
const createFoodRecord = (foodElement, result, nutrient) => {
  if (result[foodElement]) {
    result[foodElement].push(nutrient.name)
  } else {
    result[foodElement] = [nutrient.name]
  }
}

const processNutrients = nutrients => {
  const result = {}
  nutrients.map(nutrient => nutrientAction(nutrient, result))

  return result
}

const foodResult = processNutrients(nutrientsData.nutrients)
const result = JSON.stringify({ food: foodResult })
const file = path.join(__dirname, 'food.json')
fs.writeFileSync(file, result, 'utf-8')

console.log('\x1b[32m', '-- FOOD DATA: GENERATED.')
