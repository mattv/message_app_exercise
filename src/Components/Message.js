import React from 'react'

function Message(props) {
    if (props.state==="sent") {
        return (
            <div key={props.index} className="message">
                <div className="message-username">{props.username}</div>
                <div className="message-text">{props.text}</div>
            </div>
        )
    }
    return (
        <div key={props.index} className="message">
            <div className="message-username">{props.username}</div>
            <div ><span className="message-text">{props.text}</span><span>  {props.state}</span></div>
        </div>
    )
}

export default Message
