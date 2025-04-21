import { Nav } from "./navbar";

export function Start({change}) {
  return (
    <>
      <h3 className="Start-Heading">
        Your Ride Starts Here – Discover and Learn Everything About Bikes.
      </h3>
      <p className="Start-About">
        GetYourRide is the ultimate online destination for motorcycle
        enthusiasts of all kinds. Whether you're a seasoned rider, a weekend
        cruiser, or someone just beginning their journey on two wheels, we’ve
        got everything you need to stay informed, inspired, and ready to ride.
        Explore detailed bike information and specs across all major
        brands—cruisers, sportbikes, touring bikes, dual-sports, and more.Ready to ride with us?
      </p>
      
      <button onClick={change} className="Start-Button">Manufacturers</button>
    </>
  );
}
