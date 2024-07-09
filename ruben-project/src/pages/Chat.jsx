import { useState, useEffect } from 'react';
import axios from 'axios';
import { chatWithBot } from '../utils/actions';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
            setIsEmailSubmitted(true);
            fetchConversationHistory(storedEmail);
        }
    }, []);

    const fetchConversationHistory = async (email) => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/conversation-history/${email}`);
            setMessages(res.data);
        } catch (error) {
            console.error("Error fetching conversation history", error);
        }
    };

    const handleEmailSubmit = () => {
        if (email.trim() !== '') {
            localStorage.setItem('email', email);
            setIsEmailSubmitted(true);
            fetchConversationHistory(email);
        }
    };

    const handleSend = async () => {
        if (input.trim() === '') return;

        const newMessage = { email, user_message: input, bot_response: '' };
        setMessages([...messages, newMessage]);
        const userInput = input
        setInput('');
        try {
            const response = await chatWithBot({ email, message: userInput });
            const updatedMessage = { ...newMessage, bot_response: response.data.response };
            setMessages([...messages, updatedMessage]);
        } catch (error) {
            console.error("Error sending message", error);
        }

    };

    const inputHandler = (e) => [
        e.preventDefault()
    ]

    return (
        <div className="flex mt-12 w-[80%] mx-auto rounded-md flex-col h-[70vh] bg-gray-100">
            {!isEmailSubmitted ? (
                <div className="flex flex-col items-center justify-center flex-grow p-4 bg-white border border-gray-300 rounded-md">
                    <h2 className="mb-4 text-xl font-semibold">Enter your email to start the chat</h2>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 mb-4 border border-gray-300 rounded-lg"
                        placeholder="Email"
                    />
                    <button
                        onClick={handleEmailSubmit}
                        className="p-2 bg-blue-500 text-white rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <>
                    <div className="flex-grow p-4 overflow-auto">
                        <div className="flex flex-col">
                            {messages.map((msg, index) => (
                                <div key={index} className=" mb-4">
                                    <div className='flex justify-end'>
                                        <div className="p-2 w-2/3 mb-4 rounded-lg bg-gray-300 text-black">
                                            {msg.user_message}
                                        </div>
                                    </div>
                                    <div className='flex justify-start'>
                                        <div className="p-2 w-2/3  rounded-lg bg-blue-500 text-white">
                                            {msg.bot_response}
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 bg-white border-t border-gray-200 flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-grow p-2 border border-gray-300 rounded-lg mr-2"
                            placeholder="Type a message..."
                        />
                        <button
                            onClick={handleSend}
                            className="p-2 bg-blue-500 text-white rounded-lg"
                        >
                            Send
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ChatBot;


