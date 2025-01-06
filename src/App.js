import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      <header className={isHeaderVisible ? '' : 'hidden'}>
        <div className="logo">
          <div className="get-give">
            <span className="get" onClick={handleScrollToTop}>Get</span>
            <span className="give" onClick={handleScrollToTop}>Give</span>
          </div>
          <span className="rides" onClick={handleScrollToTop}>Rides</span>
        </div>
        <nav>
          <a href="#home">Home</a>
          <Link to="/get-ride">Get Ride</Link>
          <Link to="/give-ride">Give Ride</Link>
          <a href="#contact-us">Contact Us</a>
        </nav>
      </header>

      <div className="video-section">
        <video autoPlay muted loop>
          <source src="vedio_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="sections">
        <div className="section" id="get-ride">
          <Link to="/get-ride">
            <img src="get-ride.jpg" alt="Bike and Rider" />
            <h2>Get Ride</h2>  {/* Added text inside Link */}
            <p>Find your perfect ride and explore!</p>
          </Link>
        </div>
        <div className="section" id="give-ride">
          <Link to="/give-ride">
            <img src="give-ride.jpg" alt="Rider giving key" />
            <h2>Give Ride</h2> {/* Added text inside Link */}
            <p>Offer your bike and earn!</p>
          </Link>
        </div>
      </div>

      <div className="contact-us" id="contact-us">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Contact" />
          <input type="email" placeholder="Email" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <footer>
        <p>Customer Support | Contact | Mail</p>
      </footer>
    </div>
  );
}

export default App;
