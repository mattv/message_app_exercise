import React from 'react'
import Message from './Message'

function MessageList(props) {

    if (props.isLoading) {

        return (
            <div className="message-list">
                <p>Loading ...</p>
            </div>
        )
    } else {
        return (
            <div className="message-list">
                {props.messages.map((message, index) => {
                    return (
                        <Message state={message.state} key={index} username={message.username} text={message.text}/>
                    )
                })}
            </div>
        )
    }
}

export default MessageList
