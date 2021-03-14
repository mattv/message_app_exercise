function delay(t, v) {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, v), t)
    });
}

class MessageService {
    _MESSAGES = [
        {
            username: "mvalerio",
            text: "Beers?",
            state: "sent"
        },
        {
            username: "msandman",
            text: "For sure.  What's up",
            state: "sent"
        },
        {
            username: "mvalerio",
            text: "Nothing, just need a beer:)",
            state: "sent"
        }
        // ,
        // {
        //     username: "mvalerio",
        //     text: "Beers?"
        // },
        // {
        //     username: "msandman",
        //     text: "For sure.  What's up"
        // },
        // {
        //     username: "mvalerio",
        //     text: "Nothing, just need a beer:)"
        // },
        // {
        //     username: "mvalerio",
        //     text: "Beers?"
        // },
        // {
        //     username: "msandman",
        //     text: "For sure.  What's up"
        // },
        // {
        //     username: "mvalerio",
        //     text: "Nothing, just need a beer:)"
        // },
        // {
        //     username: "mvalerio",
        //     text: "Beers?"
        // },
        // {
        //     username: "msandman",
        //     text: "For sure.  What's up"
        // },
        // {
        //     username: "mvalerio",
        //     text: "Nothing, just need a beer:)"
        // },
        // {
        //     username: "mvalerio",
        //     text: "Beers?"
        // },
        // {
        //     username: "msandman",
        //     text: "For sure.  What's up"
        // },
        // {
        //     username: "mvalerio",
        //     text: "Nothing, just need a beer:)"
        // },
        // {
        //     username: "mvalerio",
        //     text: "Beers?"
        // },
        // {
        //     username: "msandman",
        //     text: "For sure.  What's up"
        // },
        // {
        //     username: "mvalerio",
        //     text: "Nothing, just need a beer:)"
        // }
    ];

    getChatHistory () {
        return delay(1000, this._MESSAGES).then((messages) => {

            return messages;
        })
    }

    sendMessage(message) {
        return delay(1000, message).then((message) => {
            return {
                message: message,
                success: true
            };
        })
    }
}

export default MessageService
