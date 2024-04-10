import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServiceProducts from "../components/ServiceItems";
import image from "./images/image20.jpg";

const Service = () => {
  return (
    <div className="service">
      <Navbar/>
      <Hero
        heading="Services"
        image={image}
        className="service"
      />
      <ServiceProducts/>
    </div>
  );
}
 
export default Service;