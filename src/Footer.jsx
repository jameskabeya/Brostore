import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
// { messages, newMessage, setNewMessage, sendMessage }
const Footer = () => {
  const socket = io('http://localhost:4000');

  const [isChatOpen, setIsChatOpen] = useState(false);
  const phoneNumber = '0990777364';
  const emailAddress = 'jamesdanielkabeya@gmail.com';
  const whatsappLink = '0898678891';
  const instagramLink = 'https://www.instagram.com/';
  const facebookLink = 'https://www.facebook.com/';
  const locationAddress = '123 Street, City, Country';

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      socket.emit('message', { text: newMessage });
      setNewMessage('');
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className='flex gap-2'><img src="./src/assets/mail.png" alt="" /><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
          <p className='flex gap-2 mt-2'><img src="./src/assets/phonenumber.png" /><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
          <p className='flex gap-2 mt-2'> <img src="./src/assets/whatsaap.png" alt="" /><a href={whatsappLink} target="_blank" rel="noopener noreferrer">Ouvrir Whatsapp</a>
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-lg font-bold mb-2">Social Media</h3>
          <p className='flex gap-2'><img src="./src/assets/instagram.png" alt="" /><a href={instagramLink} target="_blank" rel="noopener noreferrer">Instagram</a></p>
          <p className='flex gap-2 w-8 mt-4'><img src="./src/assets/facebook.png" alt="" /> <a href={facebookLink} target="_blank" rel="noopener noreferrer">Facebook</a></p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
          <div className='flex gap-2'>
            <img className='w-8' src="./src/assets/Location.png" alt="" />
            <h3 className="text-lg font-bold mb-2">Location</h3>
          </div>
          <p className='mt-4'>{locationAddress}</p>
        </div>
        <div className="w-full">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="overflow-y-auto max-h-64 sm:max-h-96">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`text-left mb-2 p-2 rounded-lg ${message.sender === "me" ? "bg-blue-100 text-blue-800 self-end" : "bg-gray-100 text-gray-800"
                    }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="flex text-black items-center mt-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none"
              />
              <button onClick={sendMessage} className="bg-blue-500 mr-6 text-white p-2 rounded-r-lg sm:px-6 sm:py-3">Send</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
