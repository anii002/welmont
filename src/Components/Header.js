import Logo from "../assets/images/Logo.png";

function header() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-3">
        <div className="logo">
          <img src={Logo} alt="logo" className="img-fluid" />
        </div>
        <div >
          <ul className="d-flex">
            <li className="list">Discover Welmont</li>
            <li className="list">Programs </li>
            <li className="list">Facilities</li>
            <li className="list">About us</li>
            <li className="list">Blog</li>
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
