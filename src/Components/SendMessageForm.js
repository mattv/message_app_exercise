import React, { createRef } from "react";

class SendMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
        this.formInputRef = createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.formInputRef.current.scrollIntoView();
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.sendMessage(this.state.message);
        this.setState({
            message: ""
        });
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
            >
                <input
                    ref={this.formInputRef}
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type then hit enter to send message text"
                    type="text"
                    autoFocus
                />
            </form>
        );
    }
}

export default SendMessageForm;
