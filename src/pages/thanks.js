import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Title = styled.h1`
  font-family: "Space Text", sans-serif;
  font-size: 3rem;
  color: #333333;
  font-weight: bold;
  margin-bottom: 1rem;
`

const Paragraph = styled.p`
  font-family: "Space Text", sans-serif;
  font-size: 1rem;
  color: #333333;
`

const Wrapper = styled.div`
  padding: 1rem;
  @media (min-width: 800px) {
    margin: 0 auto;
    width: 800px;
  }
`

const Thanks = () => (
  <Layout>
    <SEO title="Thanks" />
    <Wrapper>
      <Title>Thanks</Title>
      <Paragraph>
        I've received your message and I will be in contact shortly!
      </Paragraph>
    </Wrapper>
  </Layout>
)

export default Thanks
