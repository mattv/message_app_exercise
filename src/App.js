import React from "react";

import MessageService from "./MessageService";
import MessageList from "./Components/MessageList";
import SendMessageForm from "./Components/SendMessageForm";

function App() {
    const [currentMessages, setMessages] = React.useState([]);
    const [currentUserIndex, setCurrentUser] = React.useState(1);
    const [isLoadingMessages, setIsLoadingMessages] = React.useState(true);

    React.useEffect(() => {
        const messageService = new MessageService();

        messageService.getChatHistory().then((messages) => {
            setMessages((currentMessages) => {
                return [...currentMessages, ...messages];
            });

            setIsLoadingMessages((isLoadingMessages) => {
                return false;
            });
        });
    }, []);

    const sendMessageSuccess = React.useCallback(
        (newMessages, message) => {
            var clonedArray = JSON.parse(JSON.stringify(newMessages));
            clonedArray[message.index].state = "sent";

            setMessages((currentMessages) => {
                return clonedArray;
            });
        }, []
        // ,[currentMessages]
    );

    const sendMessage = React.useCallback((text) => {
        const _userNames = ["mvalerio", "msandman"];

        const currentUserName = _userNames[currentUserIndex];
        const index = currentMessages.length;

        const message = {
            username: currentUserName,
            text: text,
            state: "...sending",
            index: index
        };

        const newMessages = [...currentMessages, message];

        setMessages((currentMessages) => {
            return newMessages;
        });

        setCurrentUser((currentUserIndex) => {
            return currentUserIndex === 0 ? 1 : 0;
        });

        const messageService = new MessageService();
        messageService.sendMessage(message).then((result) => {
            if (result.success) {
                sendMessageSuccess(newMessages, result.message);
            }
        });
    },[currentMessages, currentUserIndex, sendMessageSuccess]);

    return (
        <div className="app>">
            <MessageList isLoading={isLoadingMessages} messages={currentMessages} />
            <SendMessageForm sendMessage={sendMessage} />
        </div>
    );
}

export default App;
