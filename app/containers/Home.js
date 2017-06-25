import React from 'react'
import PropTypes from 'prop-types'

import NutrientList from 'components/list/NutrientList'

const Home = ({ nutrients }) => <NutrientList nutrients={nutrients}/>

Home.propTypes = {
  nutrients: PropTypes.array.isRequired,
}

export default Home
