import React from 'react'
import axios from 'axios'
import MessageBox from './MessageBox'
import _ from 'lodash'

class MessagesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messageList: []
    }
  }
  componentDidMount () {
    axios.get('https://message-list.appspot.com/messages?limit=10')
      .then((res) => {
        this.setState({
          messageList: res.data.messages
        })
      })
      .catch((res) => {
        console.error(res)
      })
  }
  render () {
    if (this.state.messageList.length > 0) {
      // _.sortBy(collection, [iteratees=[_.identity]])
      const sortedMessages = _.orderBy(this.state.messageList, (o) => o.updated, 'desc')
      return (
        <div className='MessagesList'>
          <ul>
            {sortedMessages.map((message, i) =>
              <MessageBox
                key={i}
                author={message.author}
                message={message.content}
                date={message.updated}
              />
            )}
          </ul>
        </div>
      )
    } else {
      return (
        <div className='MessagesList'>
          >No messages.
        </div>
      )
    }
  }
}

export default MessagesList
