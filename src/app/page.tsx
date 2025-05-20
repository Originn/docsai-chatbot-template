'use client';

import { useState } from 'react';

export default function ChatbotPage() {
  // These environment variables will be set during deployment
  const chatbotName = process.env.NEXT_PUBLIC_CHATBOT_NAME || 'DocsAI Chatbot';
  const chatbotId = process.env.NEXT_PUBLIC_CHATBOT_ID || 'default';
  
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your DocsAI assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages([...messages, { role: 'user', content: inputValue }]);
    
    // Reset input
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `I'm a template chatbot for "${chatbotName}" (ID: ${chatbotId}). This is a placeholder response. In the real implementation, I would connect to your DocsAI API.` 
      }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-24">
      <div className="w-full max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary-700">{chatbotName}</h1>
          <p className="text-sm text-gray-500 mt-2">
            Powered by DocsAI • Chatbot ID: {chatbotId}
          </p>
        </header>
        
        <div className="border rounded-lg shadow-md bg-white overflow-hidden">
          <div className="p-4 bg-primary-50 border-b">
            <div className="flex justify-between items-center">
              <p className="font-medium text-primary-800">Chat Assistant</p>
              <button 
                className="text-sm text-gray-500 hover:text-gray-700"
                onClick={() => setMessages([messages[0]])}
              >
                Clear chat
              </button>
            </div>
          </div>
          
          <div className="p-4 h-[60vh] overflow-y-auto flex flex-col space-y-4" id="chat-container">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`
                    max-w-[80%] p-3 rounded-lg 
                    ${message.role === 'user' 
                      ? 'bg-primary-100 text-primary-900' 
                      : 'bg-gray-100 text-gray-800'}
                  `}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex items-center">
              <input 
                type="text" 
                placeholder="Type your question..." 
                className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={handleKeyPress}
              />
              <button 
                className="bg-primary-600 hover:bg-primary-700 text-white p-2 px-4 rounded-r-lg transition-colors"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        
        <footer className="mt-8 text-center text-sm text-gray-500">
          This is a template for DocsAI chatbots. Replace this with your own branded content.
        </footer>
      </div>
    </main>
  );
}