import { LogoFooter } from "../assets"

const Footer = () => {
  return (
    <section className="bg-secondary text-white py-5 fs-6 mt-7 mt-lg-0">
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              aria-label="Bootstrap"
            >
              <img src={LogoFooter} alt="Logo Footer" width="100" />
            </a>
          </div>
          <div className="col mb-3">
            <h5 className="text-primary fw-bold">Quick Links</h5>
            <ul className="nav flex-column ">
              <li className="nav-item mb-2 ">
                <a href="#" className="nav-link p-0 text-white">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Menu
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Reservations
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Order online
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className="text-primary fw-bold">Contact</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  <i className="bi bi-geo-alt-fill"></i> Little Lemon, 123 Main
                  Street,Chicago
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  <i className="bi bi-telephone-fill"></i> (555) 123-4567
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  <i className="bi bi-envelope-fill"></i> info@littlelemon.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3 social_icons">
            <h5 className="text-primary fw-bold">Social Links</h5>
            <ul className="nav gap-2">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white ">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white ">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white ">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white ">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
