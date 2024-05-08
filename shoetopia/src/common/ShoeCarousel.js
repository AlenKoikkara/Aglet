import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./ShoeCarousel.scss";

function ShoeCarousel({ title, fetchUrl }) {
  const [shoes, setShoes] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data )
      setShoes(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(shoes);
  return (
    <div className="shoeCarouselWrapper">
      <div className="title">{title}</div>
      <div className="shoeRows">
        {shoes?.map((shoe) => (
          <div className="productWrapper">
            <img
              className="shoeimg"
              src={shoe.imageUrl}
              alt={shoe.producName}
            ></img>
            <div className="shoedetails">
              <div className="desc">
                <div className="productname">{shoe.productName}</div>
                <div className="division">{shoe.division}</div>
              </div>
              <div className="price">${shoe.listPrice}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoeCarousel;
