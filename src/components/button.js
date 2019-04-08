import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: #333333;
  text-decoration: none;
  font-family: "Space Text", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  margin-top: 1rem;
  border: 0.2rem solid #333333;
  box-shadow: 0.4rem 0.4rem #333333;
  display: inline-block;

  &:active {
    transform: translate(0.4rem, 0.4rem);
    box-shadow: none;
  }
`

const Button = ({ children }) => (
  <StyledLink to="/contact">{children}</StyledLink>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
