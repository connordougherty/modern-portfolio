import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Title = styled.h1`
  font-family: "Space Text", sans-serif;
  font-size: 3rem;
  color: #333333;
  font-weight: bold;
  margin-bottom: 1rem;
`

const Wrapper = styled.div`
  padding: 1rem;
  @media (min-width: 800px) {
    margin: 0 auto;
    width: 800px;
  }
`

const Work = () => (
  <Layout>
    <Wrapper>
      <Title>Coming soon...</Title>
    </Wrapper>
  </Layout>
)

export default Work
