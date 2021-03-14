import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'))

// import React, { useEffect, useRef } from 'react'
// import ReactDOM from 'react-dom';
// import './index.css';

// function delay(t, v) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve.bind(null, v), t)
//     });
// }
//
// class MessageService {
//     _MESSAGES = [
//         {
//             username: "mvalerio",
//             text: "Beers?"
//         },
//         {
//             username: "msandman",
//             text: "For sure.  What's up"
//         },
//         {
//             username: "mvalerio",
//             text: "Nothing, just need a beer:)"
//         }
//         // ,
//         // {
//         //     username: "mvalerio",
//         //     text: "Beers?"
//         // },
//         // {
//         //     username: "msandman",
//         //     text: "For sure.  What's up"
//         // },
//         // {
//         //     username: "mvalerio",
//         //     text: "Nothing, just need a beer:)"
//         // },
//         // {
//         //     username: "mvalerio",
//         //     text: "Beers?"
//         // },
//         // {
//         //     username: "msandman",
//         //     text: "For sure.  What's up"
//         // },
//         // {
//         //     username: "mvalerio",
//         //     text: "Nothing, just need a beer:)"
//         // },
//         // {
//         //     username: "mvalerio",
//         //     text: "Beers?"
//         // },
//         // {
//         //     username: "msandman",
//         //     text: "For sure.  What's up"
//         // },
//         // {
//         //     username: "mvalerio",
//         //     text: "Nothing, just need a beer:)"
//         // },
//         // {
//         //     username: "mvalerio",
//         //     text: "Beers?"
//         // },
//         // {
//         //     username: "msandman",
//         //     text: "For sure.  What's up"
//         // },
//         // {
//         //     username: "mvalerio",
//         //     text: "Nothing, just need a beer:)"
//         // },
//         // {
//         //     username: "mvalerio",
//         //     text: "Beers?"
//         // },
//         // {
//         //     username: "msandman",
//         //     text: "For sure.  What's up"
//         // },
//         // {
//         //     username: "mvalerio",
//         //     text: "Nothing, just need a beer:)"
//         // }
//     ];
//
//     getChatHistory () {
//         return delay(1000, this._MESSAGES).then((messages) => {
//
//             return messages;
//         })
//     }
//
//     sendMessage(message) {
//         return delay(1000, message).then((message) => {
//             return {
//                 message: message,
//                 success: true
//             };
//         })
//     }
// }

// class App extends React.Component {
//
//     _users =
//         [
//             {
//                 username: "mvalerio",
//             },
//             {
//                 username: "msandman",
//             }
//         ]
//
//     constructor(props) {
//         super(props)
//         this.state = {
//             messages: [],
//             currentUser: 0,
//         }
//         this.sendMessage = this.sendMessage.bind(this)
//         this.messageSent = this.messageSent.bind(this)
//         this.initializeChatMessages = this.initializeChatMessages.bind(this)
//     }
//
//     componentDidMount() {
//         const messageService = new MessageService()
//
//         messageService.getChatHistory()
//             .then((messages) => {
//                 this.initializeChatMessages(messages);
//             })
//     }
//
//     initializeChatMessages(messages) {
//         this.setState({
//             messages: [...this.state.messages, ...messages]
//         })
//     }
//
//     render () {
//         return (
//             <div className="app>">
//                 <MessageList messages={this.state.messages}/>
//                 <SendMessageForm.js sendMessage={this.sendMessage}/>
//             </div>
//         )
//     }
//
//     sendMessage(text) {
//         const messageService = new MessageService()
//         messageService.sendMessage(text)
//
//         const currentUser = this._users[this.state.currentUser]
//
//         const message = {
//             username: currentUser.username,
//             fullName: currentUser.fullName,
//             text: text
//         }
//
//         messageService.sendMessage(message).then((result) => {
//             if (result.success) {
//                 this.messageSent(result.message)
//             }
//         })
//     }
//
//     messageSent(message) {
//         this.setState( {
//             currentUser: this.state.currentUser === 0 ? 1 : 0,
//             messages: [...this.state.messages, message]
//         })
//     }
// }

// function MessageList(props) {
//     const messageList = useRef(null);
//
//     useEffect(() => {
//         if (messageList) {
//             messageList.current.addEventListener('DOMNodeInserted', event => {
//                 const { currentTarget: target } = event;
//                 target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
//             });
//         }
//     }, [])
//
//     return (
//         <div ref={messageList} className="message-list">
//             {props.messages.map((message, index) => {
//                 return (
//                     <Message key={index} username={message.username} text={message.text}/>
//                 )
//             })}
//         </div>
//     )
// }

// function Message(props) {
//     return (
//         <div key={props.index} className="message">
//             <div className="message-username">{props.username}</div>
//             <div className="message-text">{props.text}</div>
//         </div>
//     )
// }

// class SendMessageForm.js extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             message: ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//
//     handleChange(e) {
//         this.setState({
//             message: e.target.value
//         })
//     }
//
//     handleSubmit(e) {
//         e.preventDefault()
//         this.props.sendMessage(this.state.message)
//         this.setState({
//             message: ''
//         })
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}
//                   className="send-message-form">
//                   <input
//                       onChange={this.handleChange}
//                       value={this.state.message}
//                       placeholder="Enter to send message text"
//                       type="text" />
//             </form>
//         )
//     }
// }

// =======================================

// ReactDOM.render(<App />, document.getElementById('root'))

