import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import Background from "../components/background"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"

const flip = keyframes`
  from {
    transform: rotateX(-180deg);
  }
  to {
    transform: translateX(0);
  }
`

const BackgroundWrapper = styled.div`
  width: 50%;
  max-width: 700px;
  opacity: 1;

  @media (orientation: portrait) {
    width: 75%;
  }
`

const Title = styled.h1`
  font-family: "Space Text", sans-serif;
  font-size: 3rem;
  color: #333333;

  @media (min-width: 800px) {
    animation: ${flip} 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  @media (min-width: 800px) {
    font-size: 5rem;
  }
`

const Bold = styled.strong`
  font-weight: bold;
`

const Wrapper = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <div style={{ position: `absolute` }}>
        <Title>
          I bring <Bold>concepts</Bold> to life.
        </Title>
        <Button>What's your concept?</Button>
      </div>
    </Wrapper>
  </Layout>
)

export default Index
