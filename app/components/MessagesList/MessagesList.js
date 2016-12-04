import React from 'react'
import axios from 'axios'
import MessageBox from './MessageBox'

class MessagesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messageList: []
    }
  }
  componentDidMount () {
    axios.get('https://message-list.appspot.com/messages')
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
      return (
        <div className='MessagesList'>
          <ul>
            {this.state.messageList.map((message, i) =>
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
