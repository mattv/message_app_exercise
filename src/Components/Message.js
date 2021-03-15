import React, { createRef } from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.messageRef = createRef();
    }

    componentDidMount() {
        this.messageRef.current.scrollIntoView();
    }

    render() {
        if (this.props.state === "sent") {
            return (
                <div ref={this.messageRef} key={this.props.index} className="message">
                    <div className="message-username">{this.props.username}</div>
                    <div className="message-text">{this.props.text}</div>
                </div>
            );
        }
        return (
            <div ref={this.messageRef} key={this.props.index} className="message">
                <div className="message-username">{this.props.username}</div>
                <div>
                    <span className="message-text">{this.props.text}</span>
                    <span> {this.props.state}</span>
                </div>
            </div>
        );
    }
}

export default Message;
