import React from 'react'

import NutrientList from 'components/nutrients'

// Rename 'ressources/data/nutrients.sample.json' file to 'ressources/data/nutrients.json'
import nutrientsData from 'ressources/data/nutrients.json'

const Home = () => <NutrientList nutrients={nutrientsData.nutrients}/>

export default Home
