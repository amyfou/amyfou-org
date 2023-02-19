import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"

const TutorialsPage = ({ data }) => {
  return (
    <Layout pageTitle="Tutorials">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }`

export const Head = () => <Seo title="tutorals | amyfou.org" />

export default TutorialsPage
