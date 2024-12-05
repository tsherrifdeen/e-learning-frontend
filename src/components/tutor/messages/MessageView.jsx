import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

// Message component to render each message
const Message = ({ sender, text, time, isOwnMessage }) => {
  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`p-3 max-w-xs rounded-lg ${isOwnMessage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
      >
        {/* Display sender's name */}
        <p className="font-semibold">{sender}</p>
        <p className="text-sm">{text}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

// PropTypes validation for Message component
Message.propTypes = {
  sender: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  isOwnMessage: PropTypes.bool.isRequired,
};

// MessageList component to render the list of messages
const MessageList = ({ messages }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleIconClick = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleOptionClick = (option) => {
    console.log(option); // Perform actions like marking as read or deleting chat here
    setActiveDropdown(null); // Close the dropdown
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.dropdown-container')) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <ul className="space-y-4">
      {messages.map((msg, index) => (
        <li key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 1}`}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm">
              {/* Display sender's name */}
              <p className="font-semibold">{msg.sender}</p>
              <p className="text-gray-500 truncate w-36">{msg.text}</p>
            </div>
          </div>
          <div className="relative dropdown-container">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer"
              onClick={() => handleIconClick(index)}
            >
              <Icon icon="lsicon:more-outline" className="text-3xl" />
            </div>

            {activeDropdown === index && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick('Mark as Read')}
                  >
                    Mark as Read
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                    onClick={() => handleOptionClick('Delete Chat')}
                  >
                    Delete Chat
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

// PropTypes validation for MessageList component
MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      isOwnMessage: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

// Main Messages component
const Messages = () => {
  const [messages, setMessages] = useState([
    { sender: 'Jane Cooper', text: 'Hello, Good Evening. Sani Brother', time: '11:52 AM', isOwnMessage: false },
    { sender: 'You', text: 'Hello, Good Evening.', time: '11:52 AM', isOwnMessage: true },
    { sender: 'You', text: "I'm Zafor", time: '11:52 AM', isOwnMessage: true },
    { sender: 'Jane Cooper', text: "I only have a small doubt about your lecture. Can you give me some time for this?", time: '11:52 AM', isOwnMessage: false },
    { sender: 'You', text: 'Yeah sure, tell me Zafor', time: '11:52 AM', isOwnMessage: true },
  ]);

  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: 'You',
        text: message,
        time: '11:52 AM',
        isOwnMessage: true,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full max-w-xs p-6 bg-white">
        <h2 className="text-xl font-bold">Messages</h2>
        <div className="relative mb-6 mt-10">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Icon
            icon="eva:search-outline"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
          />
        </div>
        <MessageList messages={messages} />
      </div>

      {/* Chat area */}
      <div className="flex flex-col h-screen">
        {/* Chat Header */}
        <div className="flex items-center p-4 bg-white shadow-md">
          <img src="https://i.pravatar.cc/150?img=3" alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-semibold text-lg">Jane Cooper</p>
            <p className="text-sm text-gray-500">Active Now</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
          {messages.map((msg, index) => (
            <Message
              key={index}
              sender={msg.sender}
              text={msg.text}
              time={msg.time}
              isOwnMessage={msg.isOwnMessage}
            />
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center p-4 bg-white shadow-md">
          <input
            type="text"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 p-3 bg-blue-500 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
