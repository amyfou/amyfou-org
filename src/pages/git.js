import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const GitPage = () => (
  <Layout>
    <h1>Github Tutorial</h1>
    <p>Here will be my Github Tutorial</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Github Tutorial" />

export default GitPage
