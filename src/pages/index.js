// Import resources
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
    <Layout>
      <div className={styles.textLeft}>
      <h1>
          you have found <b>amyfou.org</b>
      </h1>
      </div>
      <div>
      <StaticImage
          src="../images/gracieNikoPlayBow.jpg"
          loading="eager"
          //width={95}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="two dogs are play bowing at each other"
          style={{ marginBottom: `var(--space-3)` }}
        />
      </div>

    </Layout>
  )


export const Head = () => <Seo title="home | amyfou.org" />

export default IndexPage
