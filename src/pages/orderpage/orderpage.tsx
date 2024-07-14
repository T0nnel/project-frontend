import { useState } from "react";
import "./orderpage.css"
import { Navigation } from "../../components/navigation";
/* import { Footer } from "../../components/Footer"; */


export const Orderpage = () => {
  const [harvestTime, setHarvestTime] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleTrack = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ harvestTime }),
    });

    const data = await response.json();
    setStatusMessage(data.status);
  };


  return (
    <>
    <Navigation />
{/*   <div className="weather">
    <h2>Meru</h2>
    <img className="pic1"  src="../../public/images/icon4.png" alt="" />
    <img className="pic2" src="../../public/images/icon6.png" alt="" />
    <img className="pic3" src="../../public/images/icon5.png" alt="" />
    <h3>June 9th</h3>
    <h4>23 Degrees</h4>
    <h5>Strong winds</h5>
  </div> */}
  <div className="harvests">
        <div className="harvest1">
          <form onSubmit={handleTrack}>
            <h2>Details</h2>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" required />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" required />
            <div className="flex">
              <label className="C" htmlFor="price">Harvest time</label>
              <label className="D" htmlFor="harvesttime">Price</label>
            </div>
            <input
              className="E"
              type="datetime-local"
              id="harvesttime"
              name="harvesttime"
              required
              onChange={(e) => setHarvestTime(e.target.value)}
            />
            <input className="F" type="text" id="price" name="price" required />
            <label htmlFor="contact">Contact</label>
            <input type="tel" id="contact" name="contact" required />
            <button className="track" type="submit">Track</button>
            <h4>{statusMessage}</h4>
          </form>
        </div>
      </div>
    
  </>
  )
}
