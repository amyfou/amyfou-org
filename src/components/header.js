import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText
} from "./layout.module.css"


const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <div className={container}>
      <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/git" className={navLinkText}>
                github tutorial
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <StaticImage
          src="../images/canis1.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="logo"
          style={{ marginBottom: `var(--space-3)` }}
        /> 

  </header>
)

export default Header
