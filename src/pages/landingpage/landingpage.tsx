import { useState } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';

export const Landingpage = () => {
  const [iframeVisible, setIframeVisible] = useState(false);

  const toggleIframe = () => {
    setIframeVisible(!iframeVisible);
  };

  return (
    <>
      <div className='header1'>
        <div className='header2'>
          <a href="">
            <img src="/images/p2.png" alt="" />
          </a>
          <nav>
            <div className="nav-links">
              <ul>
                <li><Link to={'/defhome'}>Home</Link></li>
                <li><Link to={'/register'}>Sign Up</Link></li>
                <li><Link to={'/login'}>Log In</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/sellpage'}>Sell</Link></li>
              </ul>
            </div>
          </nav>
          <h1>AgriGrow</h1>
          <p>
            Welcome to the AgriGrow Marketplace. Your trusted online agricultural marketplace. 
            We connect farmers, suppliers, and consumers, streamlining the buying and selling of 
            fresh produce and farming equipment. We are committed to quality, transparency, and 
            sustainability. We support the growth of agricultural businesses for a healthier future. 
            Join us in revolutionizing agriculture.
          </p>
        </div>
      </div>

      <div className="iframe">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2bsMa8yE17o?si=FvTeAoYyizT6r6OE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className='text1'>
          <h2>How farmers lose a lot when they are not connected directly to the suppliers.</h2>
          <p>
            Farmers face significant losses when they lack direct connections to their suppliers. 
            Without direct contact, farmers may encounter challenges such as delayed responses to market 
            demands, leading to surplus or scarcity of produce. Moreover, intermediaries often take a 
            substantial portion of profits, reducing the farmers' earnings. Direct connections enable 
            farmers to negotiate fair prices, access timely information on market trends, and establish 
            long-term partnerships for stable income. By bypassing intermediaries, farmers can also 
            ensure the quality and freshness of their products, enhancing consumer trust and satisfaction. 
            Ultimately, direct supplier connections empower farmers with greater control over their livelihoods 
            and economic stability.
          </p>
        </div>
      </div>

      <div className="part1">
        <h1>How can we Help</h1>
        <div className="part2">
          <section className='sec1'>
            <img src="/images/icon2.png" alt="" />
            <h2>Amazing products</h2>
            <p>
              Our agricultural products stand out with exceptional quality and freshness, meticulously cultivated 
              and harvested to exceed industry standards. From vibrant fruits and vegetables bursting with flavor 
              to robust grains and meats, each product embodies our commitment to excellence in agriculture.
            </p>
          </section>
          <section className='sec2'>
            <img src="/images/icon1.png" alt="" />
            <h2>Analytics and reports</h2>
            <p>
              We excel in analytics and reporting, leveraging advanced tools to deliver precise insights. 
              Our data-driven approach optimizes operations and enhances agricultural productivity, ensuring 
              informed decision-making for sustained success.
            </p>
          </section>
          <section className='sec2'>
            <img src="/images/icon3fr.png" alt="" />
            <h2>Support</h2>
            <p>
              Our dedicated team provides robust support, offering expert guidance and responsive assistance 
              for all agricultural needs. With experienced advisors and a committed customer service team, 
              we ensure reliable support to help you achieve your goals efficiently and effectively.
            </p>
          </section>
        </div>
      </div>

      <div className="motto">
        <h1>Our goals and ambitions are to make crop production more profitable, efficient, convenient, and affordable.</h1>
      </div>

      <div className="link1">
        <h2>Assistance</h2>
        <p>
          If you want to receive emails with recent updates about our site and what's new.
          Follow the link below and fill the form :P
        </p>
        <a href="https://forms.gle/XbQjuKhSKNLquRUdA">
          <img src="/images/b4.png" alt="" />
        </a>
      </div>

      <div className="chatbot">
        <img 
          src="/images/bot.png" 
          alt="bot" 
          style={{ cursor: 'pointer' }} 
          onClick={toggleIframe} 
        />
        {iframeVisible && (
          <iframe 
            id="chatbotIframe" 
            src="https://agrigrowbot.streamlit.app/?embed=true" // Add the embed parameter
            title="Agrigrowbot" 
            style={{ width: '100%', height: '600px', border: 'none' }} 
          ></iframe>
        )}
      </div>
    </>
  );
};

