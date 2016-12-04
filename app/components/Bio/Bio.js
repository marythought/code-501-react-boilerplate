import React from 'react'
import _ from 'lodash'

const Bio = ({ imgSrc, imgAlt, name, age, pronoun, favoriteActivity }) =>
  <div className='Bio'>
    {/* <img src={imgSrc} alt={imgAlt} /> */}
    <p>{name} is {age}.</p>
    <p>{_.capitalize(pronoun.nominative)} enjoys {favoriteActivity}.</p>
  </div>

Bio.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  pronoun: React.PropTypes.object,
  favoriteActivity: React.PropTypes.string
}

export default Bio
