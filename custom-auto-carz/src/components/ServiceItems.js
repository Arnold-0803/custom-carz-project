import { useEffect, useState } from "react";
import { ServiceData } from "../data/ServiceData";
import "./ServiceItemsStyles.css";
import SkeletonGallarey from "./assets/SkeletonGallarey";

const ServiceProducts = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000)
  }, [])

  return (
    <div className="service-products">
      <h1>Add to the cart</h1>
      <div className="product-wrapper">
        {ServiceData.map((item, index) => 
          <div key={index} className="card-box">
            {isLoading ? (
              <SkeletonGallarey/>
            ) : (
              <div className="card">
                <img src={item.src} alt="" />
                <p>{item.title}</p>
                <div className="star-rating">
                  <i className={item.rating1}></i>
                  <i className={item.rating2}></i>
                  <i className={item.rating2}></i>
                  <i className={item.rating4}></i>
                  <i className={item.rating5}></i>
                </div>
                <button>Add to cart<i className="fa-solid fa-cart-shopping"></i></button>
                <div className="gradient"></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
 
export default ServiceProducts;