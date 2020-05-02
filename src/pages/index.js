/* eslint-disable */
import React from 'react'
import { Link, graphql } from 'gatsby'

// import Bio from '../components/bio'
import Layout from '../styleguide/global/Layout'
import Title from '../styleguide/components/title/Title'
import SEO from '../components/seo'
// import { rhythm } from '../styleguide'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allWordpressPage.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Title>n3nad.com</Title>
        {/*<Bio />*/}
        {/*{posts.map(({ node }) => {*/}
        {/*const title = node.title*/}
        {/*return (*/}
        {/*<article key={node.slug}>*/}
        {/*<header>*/}
        {/*<h3*/}
        {/*style={{*/}
        {/*marginBottom: rhythm(1 / 4),*/}
        {/*fontFamily: `Abril Fatface, serif`,*/}
        {/*fontSize: '32px',*/}
        {/*}}>*/}
        {/*<Link style={{ boxShadow: `none` }} to={node.slug}>*/}
        {/*{title}*/}
        {/*</Link>*/}
        {/*</h3>*/}
        {/*<small>{node.date}</small>*/}
        {/*</header>*/}
        {/*<section>*/}
        {/*<p*/}
        {/*dangerouslySetInnerHTML={{*/}
        {/*__html: node.excerpt,*/}
        {/*}}*/}
        {/*/>*/}
        {/*</section>*/}
        {/*</article>*/}
        {/*)*/}
        {/*})}*/}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPage(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          slug
          excerpt
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
