/* eslint-disable jsx-a11y/anchor-is-valid */
import images from "../assets/images";

function footer() {
  return (
    <footer className="footer pb-5">
      <div className="green">
        <img src={images.Layer_23} alt="layer23" className="img-fluid" />
      </div>
      <div className="red">
        <img src={images.Layer_24} alt="layer23" className="img-fluid" />
      </div>
      <div className="blue">
        <img src={images.Layer_25} alt="layer23" className="img-fluid" />
      </div>
      <div className="logo_2 mb-5">
        <img src={images.Logo_2} alt="img" className="img-fluid" />
      </div>
      <div className="container  content  d-flex">
        <ul className="list">
          <li className="head">
            <a href="#" className="text-black">
              Discover Welmont
            </a>
          </li>
          <li className="sub_content mt-3">
            <a href="#" className="text-black">
              Introduction
            </a>
          </li>
          <li className="sub_content mt-1">
            <a href="#" className="text-black">
              The Philosophy
            </a>
          </li>
          <li className="sub_content mt-1">
            <a href="#" className="text-black">
              The Welmont Way
            </a>
          </li>
          <li className="sub_content mt-1">
            <a href="#" className="text-black">
              {" "}
              Evolutionary Curriculum
            </a>
          </li>
        </ul>
        <ul className="list">
          <li className="head">
            <a href="#" className="text-black">
              Programs
            </a>
          </li>
          <li className="sub_content mt-3">
            <a href="#" className="text-black">
              Play group
            </a>
          </li>
          <li className="sub_content mt-1">
            <a href="#" className="text-black">
              Nursey
            </a>
          </li>
          <li className="sub_content mt-1">
            <a href="#" className="text-black">
              Senior kg
            </a>
          </li>
          <li className="sub_content mt-1">
            <a href="#" className="text-black">
              Junior kg
            </a>
          </li>
          <li className="sub_content mt-1">
            <a href="#" className="text-black">
              Day care
            </a>
          </li>
        </ul>
        <ul className="list">
          <li className="head">
            <a href="#" className="text-black">
              Facilities
            </a>
          </li>
          <li className="sub_content mt-3">
            <a href="#" className="text-black">
              Learning Center
            </a>
          </li>
          <li className="sub_content mt-1">
            <a href="#" className="text-black">
              Safety & Hygiene
            </a>
          </li>
          <li className="sub_content mt-1">
            <a href="#" className="text-black">
              Outdoor Play
            </a>
          </li>
        </ul>

        <ul className="list">
          <li className="head">
            <a href="#" className="text-black">
              About Us
            </a>
          </li>
          <li className="sub_content mt-3">
            <a href="#" className="text-black">
              Vision
            </a>
          </li>
          <li className="sub_content mt-1">
            <a href="#" className="text-black">
              Founders
            </a>
          </li>
          <li className="sub_content mt-1">
            <a href="#" className="text-black">
              Team
            </a>
          </li>
        </ul>

        <ul className="list">
          <li className="head">
            <a href="#" className="text-black">
              blog
            </a>
          </li>
        </ul>
      </div>
      <div className="container mt-3">
        <input
          className="input rounded-2 py-2 px-3"
          placeholder="Enter your email to subscribe to our news letter "
        />
      </div>
      <div className="container  d-flex justify-content-center">
        <button className="btn btn-warning rounded-5 px-4 mt-4">
          SUBSCRIBE
        </button>
      </div>
      <div className="design">
        <img src={images.Vector_2} alt="vector" className="img-fluid"/>
      </div>
      <div className="container text-center">
        <div className="row justify-content-center align-item-center">
          <div className="col-auto">
            <div className="circle-icon bg-primary text-black  mx-auto mt-5 mb-4">
              T
            </div>
            <p className="info">info@myemail.please-check.com</p>
          </div>
          <div className="col-auto">
            <div className="circle-icon bg-danger text-black  mx-auto mt-5 mb-4">
              E
            </div>
            <p className="info">info@myemail.please-check.com</p>
          </div>
          <div className="col-auto text-center align-item-center">
            <div className="circle-icon bg-success text-black  mx-auto mt-5 mb-4">
              A
            </div>
            <p className="info">WEDOMONT ADVENTURES PVT. LTD.</p>
            <p className="info">C-57 Jaganath, Udaipur - 342001</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
