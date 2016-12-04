import React from 'react'
import Bio from '../Bio/Bio'

// const portrait = require('../../img/leo.jpg')

class HomePage extends React.Component {
  render () {
    return (
      <Bio
        // imgSrc={portrait}
        // imgAlt='Picture of Mary and son Aurelio'
        name="Mary Dickson Diaz"
        age="too old for this sh*t"
        pronoun={{
          nominative: 'she',
          accusative: 'her',
          possessive: 'hers',
          reflexive: 'herself'
        }}
        favoriteActivity='sleeping'
      />
    )
  }
}

export default HomePage
