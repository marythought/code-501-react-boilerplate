import React from 'react'
import _ from 'lodash'

class Bio extends React.Component {
  render () {
    return (
      <div className='Bio'>
        {/* <img src={this.props.imdSrc} alt={this.props.imgAlt} /> */}
        <p>{this.props.name} is {this.props.age}.</p>
        <p>{_.capitalize(this.props.pronoun.nominative)} enjoys {this.props.favoriteActivity}.</p>
      </div>
    )
  }
}

export default Bio
