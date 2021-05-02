/** @jsx jsx */
import React from 'react'
import { graphql } from 'gatsby'
import { jsx, Styled } from 'theme-ui'
import Layout from '../layout'
import { Header, Container } from '../layout'
import NavLink from '../nav-link'
import Badges from '../badges.md'
import Example from '../example.mdx'
import Logos from '../logos.mdx'
import GettingStarted from '../../getting-started.md'
import Hex from '../logo/hex'
import Button from '../button'
import NavGrid from '../nav-grid'

export const query = graphql`
  query Index {
    site {
      siteMetadata {
        title
        description
        github
        install
        features
        quotes {
          text
          source
          href
        }
      }
    }
  }
`

const Columns = props => (
  <ul
    {...props}
    sx={{
      p: 0,
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
    }}
  />
)

const Banner = ({ meta }) => (
  <>
    <Hex />
    <Container py={5}>
      <h1
        sx={{
          fontSize: [ 4, 4, 5],
          fontWeight: 'bold',
        }}>
        {meta.description}
      </h1>
      <div
        sx={{
          my: 4,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <Button href="/getting-started" mr={3}>
          Documentation
        </Button>
        <NavLink href="https://github.com/styled-system/styled-system" mr={3}>
          GitHub
        </NavLink>
        <Styled.pre
          px={0}
          sx={{
            color: 'inherit',
            bg: 'transparent',
          }}>
          npm i styled-system
        </Styled.pre>
      </div>
      <NavGrid />
    </Container>
    <Container>
      <Badges />
      <div sx={{ py: 4 }}>
        <Example />
      </div>
      <div sx={{ py: 4 }}>
        <Columns sx={{ mx: -3 }}>
          {meta.features.map(feature => (
            <li
              key={feature}
              sx={{
                width: [ '100%', '50%' ],
                p: 3,
                fontSize: 3,
                fontWeight: 'bold',
              }}
            >
              {feature}
            </li>
          ))}
        </Columns>
      </div>
      <Columns sx={{ mx: -3, py: 4 }}>
        {meta.quotes.map(quote => (
          <li
            sx={{
              width: [ '100%', '50%' ],
              p: 3,
              mb: 0,
            }}
            key={quote.text}
            >
            <blockquote
              sx={{
                fontSize: 3,
                fontWeight: 'bold',
                m: 0,
              }}
            >
              “{quote.text}”
            </blockquote>
            <Styled.a href={quote.href}>– {quote.source}</Styled.a>
          </li>
        ))}
      </Columns>
      <div sx={{ py: 4 }}>
        <Logos />
      </div>
    </Container>
  </>
)

export default ({
  data: {
    site: { siteMetadata: meta },
  },
}) => (
  <Layout banner={<Banner meta={meta} />}>
    <div id="getting-started" sx={{ py: 4 }}>
      <GettingStarted />
    </div>
  </Layout>
)
