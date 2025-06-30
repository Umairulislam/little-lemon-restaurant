import { useState } from "react"
import { LogoHeader } from "../assets"
import { AlignRight, X } from "lucide-react"
import { Link } from "react-router"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true)
  const toggleMenu = () => setOpenMenu(!openMenu)

  return (
    <header className="d-flex container py-4 justify-content-start justify-content-lg-between align-items-center gap-10">
      <div>
        <img src={LogoHeader} alt="logo" width={220} />
      </div>
      {openMenu ? (
        <ul className="d-none d-lg-flex justify-content-evenly gap-4 fs-5 fw-semibold">
          <Link to="/">
            <li>Home</li>
          </Link>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#menu">
            <li>Menu</li>
          </a>
          <Link to="/reservation">
            <li>Reservation</li>
          </Link>
          <Link to="/order-online">
            <li className="text-nowrap">Order Online</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      ) : (
        <ul className="d-flex flex-column gap-3 d-lg-none shadow-lg p-4 menubar_position ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#menu">
            <li>Menu</li>
          </a>
          <Link to="reservation">
            <li>Reservations</li>
          </Link>
          <Link to="/order-online">
            <li className="text-nowrap">Order Online</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      )}
      <div
        onClick={toggleMenu}
        className="position-absolute top-1 end-0 translate-middle-x d-block d-lg-none"
      >
        {openMenu ? <AlignRight /> : <X />}
      </div>
    </header>
  )
}

export default Header
