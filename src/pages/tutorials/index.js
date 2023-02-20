import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const TutorialsPage = ({ data }) => {
  return (
    <Layout pageTitle="Tutorials">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/tutorials/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>Excerpt: {node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { title: ASC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`
export const Head = () => <Seo title="tutorals | amyfoudotorg" />

export default TutorialsPage
