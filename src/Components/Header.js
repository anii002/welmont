/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../assets/images/Logo.png";

function header() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-3">
        <div className="logo">
          <img src={Logo} alt="logo" className="img-fluid" />
        </div>
        <div>
          <ul className="d-flex">
            <li className="list_1" >
              <a href="#" className="text-black">
                Discover Welmont
              </a>
            </li>
            <li className="list_1">
              <a  href="#" className="text-black">
                Programs
              </a>
            </li>
            <li className="list_1">
              <a className="text-black" href="#" >
                Facilities
              </a>
            </li>
            <li className="list_1">
              <a  href="#" className="text-black">
                About us
              </a>
            </li>
            <li className="list_1">
              <a className="text-black" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="d-flex">
            <li className="Contact rounded-4 px-3">Contact Us</li>
            <li className="Admissions rounded-4 px-3 mx-3">Admissions</li>
            <li className="Franchise rounded-4 px-3">Franchise</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default header;
