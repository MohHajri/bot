import React from 'react';
import './App.css';

import chat1 from './chat1.webp';
import chat2 from './chat2.webp';
import chat3 from './chat3.webp';
import Logo1 from './logo1.svg';
import Logo2 from './logo2.svg';
import Logo3 from './logo3.svg';
import chat4 from './chat4.png';



const sections = [
  { title: 'AI chatbot for Facebook', description: 'Connect Chatsimple to your Facebook business and automate customer support in one click. Increase touch points to sell, boost engagement and brand credibility, and get to your customers quicker than ever', image: chat1, logo: Logo1 },
  { title: 'AI chatbot for Instagram', description: 'Connect Chatsimple to your Instagram audience and automate customer support in one click. Be accessible for your diverse audience and increase engagement. ', image: chat2, logo: Logo2 },
  { title: 'AI chatbot for WhatsApp  ', description: 'Help out your customers, right in their phones. Quicker, more accurate responses lead to happier customers', image: chat3, logo: Logo3 },
];

function App() {
  return (
    <div className="App">
      <div className="content" >
        {/* <img src={chat4} className="chat4" alt="logo" /> */}
        <div className="content-text">
          <h1>AI sales agent to generate and convert leads</h1>
          <p>Sophia is the ultimate AI chatbot platform for businesses. Automate customer support on Facebook, Instagram, WhatsApp, and more. Get started in minutes.</p>
          <button className='cta-button'>Contact Us Now</button>
        </div>
        <img src={chat4} className="content-image" alt="" />
      </div>
      {sections.map((section, index) => (
        <div className={`content ${index % 2 === 0 ? '' : 'reverse'}`} key={index}>
          <img src={section.image} className="content-image" alt={section.title} />
          <div className="content-text">
            <img src={section.logo} className="logo" alt="logo" />
            <h2> {section.title}</h2>
            <p>{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;