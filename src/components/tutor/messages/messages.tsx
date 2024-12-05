import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

// Move MessageList outside
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
              <p className="font-semibold">{msg.name}</p>
              <p className="text-gray-500 truncate w-36">{msg.title}</p>
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

const Messages = () => {
  const messages = Array(8).fill({
    name: "Savannah Nguyen",
    title: "How to write Better",
    time: "11:52 AM",
  });

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
      <div className="flex-1 flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center border-4 border-blue-500 p-8 rounded-lg w-3/4 max-w-md h-[600px]">
          <div className="flex flex-col items-center justify-center h-full">
            <Icon icon="ion:chatbubble-outline" className="text-6xl text-blue-500 mb-4" />
            <div className="text-center">
              <h2 className="text-xl font-semibold">Select Message</h2>
              <p className="text-gray-500">
                Click on a message to see your existing conversations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
