import React, { useEffect, useRef } from 'react'
import Message from './Message'

function MessageList(props) {
    const messageList = useRef(null);

    useEffect(() => {
        if (messageList) {
            messageList.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, [])

    if (props.isLoading) {

        return (
            <div ref={messageList} className="message-list">
                <p>Loading ...</p>
            </div>
        )
    } else {
        return (
            <div ref={messageList} className="message-list">
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
