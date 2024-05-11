import images from "../assets/images";
import React from "react";

const home = () => {
  return (
    <section>
      <div className="design">
        <img
          src={images.vector_smart3}
          alt="vector_image"
          className="img-fluid "
        />
      </div>
      <div className="main-sec">
        <div className="vector d-flex">
          <div className="poster">
            <img
              src={images.Vector}
              alt="vector"
              className="img-fluid poster"
            />
          </div>
          <div className="mx-5 mt-5 bird">
            <img src={images.bird} alt="poster" className="img-fluid" />
            <div className="content">
              <p className="nurturing">Nurturing</p>
              <p className="Little mx-2">Little</p>
              <p className="champs">Champs</p>
            </div>
          </div>
        </div>

        <div className="layer">
          <img src={images.Layer32} alt="design" className="img-fluid" />
        </div>
        <div className="layer_down1">
          <img src={images.vector_smart} alt="vector" className="img-fluid" />
        </div>
        <div className="layer_down2">
          <img src={images.vector_smart1} alt="vector" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default home;
