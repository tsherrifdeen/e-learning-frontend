import React from "react";
import { Icon } from '@iconify/react';

const Messages = () => {
  const messages = Array(8).fill({
    name: "Savannah Nguyen",
    title: "How to write Better",
    time: "11:52 AM",
  });

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full max-w-xs p-6 bg-white ">
        <h2 className="text-xl font-bold ">Messages</h2>
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
        <ul className="space-y-4">
          {messages.map((msg, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  {/* Replace with actual image src */}
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
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-500">{msg.time}</p>
                <div className="flex items-center justify-center w-12 h-12  rounded-full">
                         <Icon icon="lsicon:more-outline" className="text-3xl" />
                </div>



              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white ">
        <div className="text-center">
          <Icon icon="ion:chatbubble-outline" className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold">Select Message</h2>
          <p className="text-gray-500">Click on a message to see your existing conversations</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
