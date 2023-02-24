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
    <Link to="/">
      {siteTitle}
    </Link>
    <Link to="/tutorials">
      tutorials
    </Link>
    <StaticImage
        src="../images/canis1.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="dog silhouettes"
        style={{ marginBottom: `var(--space-3)` }}
      /> 
    <StaticImage
        src="../images/canis2.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <StaticImage
        src="../images/canis3.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />  
      <StaticImage
        src="../images/canis4.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> 
    <StaticImage
        src="../images/canis5.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> 
  </header>
)

export default Header
