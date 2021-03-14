import React from 'react'

import MessageService from './MessageService'
import MessageList from './Components/MessageList'
import SendMessageForm from './Components/SendMessageForm'

class App extends React.Component {

    _users =
        [
            {
                username: "mvalerio",
            },
            {
                username: "msandman",
            }
        ]

    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            currentUser: 0,
            isLoadingMessages: true,
            isSendingMessage: false
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.sendMessageSuccess = this.sendMessageSuccess.bind(this)
        this.initializeChatMessages = this.initializeChatMessages.bind(this)
    }

    componentDidMount() {
        const messageService = new MessageService()

        messageService.getChatHistory()
            .then((messages) => {
                this.initializeChatMessages(messages);
            })
    }

    initializeChatMessages(messages) {
        this.setState({
            messages: [...this.state.messages, ...messages],
            isLoadingMessages: false
        })
    }

    render () {
        return (
            <div className="app>">
                <MessageList isLoading={this.state.isLoadingMessages} messages={this.state.messages}/>
                <SendMessageForm sendMessage={this.sendMessage}/>
            </div>
        )
    }

    sendMessage(text) {
        const currentUser = this._users[this.state.currentUser]

        const index = this.state.messages.length;

        const message = {
            username: currentUser.username,
            text: text,
            state: "...sending",
            index: index
        }

        this.setState( {
            currentUser: this.state.currentUser === 0 ? 1 : 0,
            messages: [...this.state.messages, message]
        })

        const messageService = new MessageService()
        messageService.sendMessage(message).then((result) => {
            if (result.success) {
                this.sendMessageSuccess(result.message)
            }
        })
    }

    sendMessageSuccess(message) {
        var clonedArray = JSON.parse(JSON.stringify(this.state.messages))
        clonedArray[message.index].state='sent';

        this.setState( {
            messages: clonedArray
        })
    }
}

export default App
