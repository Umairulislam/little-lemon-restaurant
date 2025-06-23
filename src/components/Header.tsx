import { useState } from "react"
import { LogoHeader } from "../assets"
import { AlignRight, X } from "lucide-react"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true)
  const toggleMenu = () => setOpenMenu(!openMenu)

  return (
    <nav className="d-flex container py-4 justify-content-start justify-content-lg-between align-items-center gap-10">
      <div>
        <img src={LogoHeader} alt="logo" width={200} />
      </div>
      {openMenu ? (
        <ul className="d-none d-lg-flex justify-content-evenly gap-4 fs-6">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="">
            <li>About</li>
          </a>
          <a href="">
            <li>Menu</li>
          </a>
          <a href="/reservation">
            <li>Reservations</li>
          </a>
          <a href="">
            <li className="text-nowrap">Order Online</li>
          </a>
          <a href="">
            <li>Login</li>
          </a>
        </ul>
      ) : (
        <ul className="d-flex flex-column gap-3 d-lg-none shadow-lg p-4 menubar_position ">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="">
            <li>About</li>
          </a>
          <a href="">
            <li>Menu</li>
          </a>
          <a href="/reservation">
            <li>Reservations</li>
          </a>
          <a href="">
            <li className="text-nowrap">Order Online</li>
          </a>
          <a href="">
            <li>Login</li>
          </a>
        </ul>
      )}
      <div
        onClick={toggleMenu}
        className="position-absolute top-1 end-0 translate-middle-x d-block d-lg-none"
      >
        {openMenu ? <AlignRight /> : <X />}
      </div>
    </nav>
  )
}

export default Header
