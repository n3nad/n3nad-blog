/* eslint-disable */
import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../styleguide/global/Layout'
import Title from '../styleguide/components/title/Title'
import SEO from '../components/seo'
import Bio from '../components/bio'
import { rhythm, scale } from '../styleguide/global/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.wordpressPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.excerpt} />
        <Title size="small">{siteTitle}</Title>
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
                fontFamily: `Abril Fatface, serif`,
              }}>
              {post.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
                fontFamily: `Lato, sans-serif`,
              }}>
              {post.date}
            </p>
          </header>
          <section
            style={{ fontFamily: `Lato, sans-serif`, fontSize: '18px' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}>
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wordpressPost(slug: { eq: $slug }) {
      id
      title
      date(formatString: "MMMM DD, YYYY")
      excerpt
      content
    }
  }
`
