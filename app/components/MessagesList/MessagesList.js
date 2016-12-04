import React from 'react'
import axios from 'axios'

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
    if (this.state.messageList.length > 0){
      return (
        <ul>
          {this.state.messageList.map((message, i) =>
            <li key={i}>
              <p>{message.content}</p>
              <p>Written by {message.author.name} at {message.updated}</p>
            </li>
        )}
        </ul>
      )
    } else {
      return (
        <div>
          >No messages.
        </div>
      )
    }
  }
}

export default MessagesList
