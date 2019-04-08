import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  font-family: "Space Text", sans-serif;
  font-size: 1rem;
  text-decoration: none;
  color: #333333;
  line-height: 0;

  &[aria-current] {
    font-weight: bold;
  }
`
const Item = styled.li`
  padding: 1rem 0.5rem 1rem 0.5rem;

  @media (min-width: 800px) {
    padding: 1.5rem;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: space-around;

  @media (min-width: 800px) {
    justify-content: flex-end;
    margin-right: 1rem;
  }
`

const Header = () => (
  <footer>
    <nav>
      <List>
        <Item>
          <StyledLink to="/">home</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/about">about</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/work">work</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/contact">contact</StyledLink>
        </Item>
      </List>
    </nav>
  </footer>
)

export default Header
