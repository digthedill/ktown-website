import React from "react"
import { Link } from "gatsby"

import { FaInstagram, FaTwitter } from "react-icons/fa"

import navbarStyle from "./navbar.module.css"

const SideNav = () => {
  return (
    <nav className={navbarStyle.sidebarMain}>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dgkwrjld1/image/upload/v1607543476/logo/loge_dwwvm9.png"
          className={navbarStyle.logo}
          alt="karaissa-talanian-logo"
        />
      </Link>

      <Link to="/macrame" activeClassName={navbarStyle.active}>
        macrame
      </Link>
      <Link to="/graphicDesign" activeClassName={navbarStyle.active}>
        graphic design
      </Link>
      <Link to="/art" activeClassName={navbarStyle.active}>
        other art
      </Link>
      <Link to="/about" activeClassName={navbarStyle.active}>
        about
      </Link>
      <Link to="/contact" activeClassName={navbarStyle.active}>
        contact
      </Link>

      {/*Social Media ************** */}
      <div className={navbarStyle.icons} id="social-medias">
        <a href="https://www.instagram.com/tagomagospaceritual/" target="blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/amonduulthree" target="blank">
          <FaTwitter />
        </a>
      </div>
    </nav>
  )
}

export default SideNav
