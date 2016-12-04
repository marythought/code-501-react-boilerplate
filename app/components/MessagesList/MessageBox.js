import React from 'react'
import format from 'date-fns/format'

const MessageBox = ({ author, message, date }) =>
  <li className='MessageBox'>
    <div className='message-header'>
      <img src={`https://message-list.appspot.com/${author.photoUrl}`} alt={author.name} />
      <h4>{author.name}</h4>
    </div>
    <div>
      <p>{format(date, 'D MMMM YYYY, h:mm a')}</p>
    </div>
    <div className='message-body'>
      <p>{message}</p>
    </div>
  </li>

const propTypes = {
  author: React.PropTypes.object,
  message: React.PropTypes.string,
  date: React.PropTypes.date
}

export default Object.assign(MessageBox, propTypes)
