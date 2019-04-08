/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"
import { GlobalStyle } from "./globalstyle"

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Grid>
      <Header />
      <main>{children}</main>
      <Footer />
    </Grid>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
