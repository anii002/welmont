/* eslint-disable jsx-a11y/anchor-is-valid */
import images from "../assets/images";
import React from "react";

const home = () => {
  return (
    <div>
      {/* first sect */}
      <div className="col-lg-12">
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
          <div className="layer col-lg-12">
            <img src={images.Layer32} alt="design" className="img-fluid" />
          </div>
          <div className="layer_down1">
            <img src={images.vector_smart} alt="vector" className="img-fluid" />
          </div>
          <div className="layer_down2">
            <img
              src={images.vector_smart1}
              alt="vector"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      {/* first sect */}

      {/* second sec */}
      <div className="welcome-section">
        <div className="title-box">
          <h2 className="title">Welcome to Welmont School</h2>
        </div>
        <div className="d-flex flex-wrap align-items-center">
          <div className="col-md-6 left-box">
            <div className="mb-4">
              <p>Welcome to Welmont Preschool, where each new day 
                heralds a journey of exploration with fun & play.</p>

              <p>We, at Welmont, understand the crucial importance of the correct stimulation required during the early years to 
                enhance a child's development intellectually, physically,
                emotionally and socially, to lay down a solid foundation for your child to maximize all future learning abilities.</p>

              <p>As per UNICEF, a child's brain develops fastest in the earliest years of life. These initial experiences are crucial as they 
                are the building blocks for the development of the brain 
                architecture for all the learning to come in the years ahead.</p>
            </div>
            <a href="#" className="theme-btn">Read More</a>
          </div>
          <div className="col-md-6 right-box">
            <div>
              <p>In the ftrst few years of life,
                more than one million neural 
                connections are formed each 
                second in the earliest phase of 
                life– a pace that never
                repeats ever again.
                <span>
                UNICEF’s Global Report on
                Early Childhood Development, 2017
                </span>
              </p>
              </div>
          </div>
        </div>
      </div>

      <div>
        <div className="title-box">
          <h2 className="title">METAMORPHOSIS OF CHILD:<br /> THE PHILOSOPHY OF tWELMONT</h2>
        </div>
      </div>

      <div className="learn-section">
        <div className="learn-box">
          <h3>Children learn as they play.
            Most importantly, in play,
            children learn how to learn.</h3>
            <p>- O. FRED DONALDSON <br/>
              Internationally recognised<br/>
              play specialist
            </p>
        </div>
      </div>
    </div>
  );
};

export default home;
