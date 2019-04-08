import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledLink = styled(Link)`
  font-family: "Space Text", sans-serif;
  font-size: 1rem;
  text-decoration: none;
  color: #333333;

  display: flex;
  align-items: center;

  padding: 1rem;
  @media (min-width: 800px) {
    padding: 1.5rem;
    margin-left: 1rem;
  }
`

const Header = () => (
  <header>
    <StyledLink to="/">connordougherty</StyledLink>
  </header>
)

export default Header
