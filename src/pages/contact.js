import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Title = styled.h1`
  font-family: "Space Text", sans-serif;
  font-size: 3rem;
  color: #333333;
  font-weight: bold;
  margin-bottom: 2rem;
`

const Label = styled.label`
  font-family: "Space Text", sans-serif;
  font-size: 1rem;
  color: #333333;
  margin-bottom: 0.5rem;
  display: inline-block;
`

const Input = styled.input`
  background: none;
  width: 100%;
  font-family: "Space Text", sans-serif;
  font-size: 1rem;
  color: #333333;
  margin-bottom: 2rem;
  display: inline-block;
  border: 0.1rem solid #333333;
`

const TextArea = styled.textarea`
  background: none;
  width: 100%;
  font-family: "Space Text", sans-serif;
  font-size: 1rem;
  color: #333333;
  display: inline-block;
  margin-bottom: 2rem;
  border: 0.1rem solid #333333;
`

const Submit = styled.input`
  background: none;
  color: #333333;
  text-decoration: none;
  font-family: "Space Text", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 0.2rem solid #333333;
  box-shadow: 0.4rem 0.4rem #333333;
  display: inline-block;

  &:active {
    transform: translate(0.4rem, 0.4rem);
    box-shadow: none;
  }
`

const Wrapper = styled.div`
  padding: 1rem;
  @media (min-width: 800px) {
    margin: 0 auto;
    width: 800px;
  }
`

const Contact = () => (
  <Layout>
    <Wrapper>
      <Title>Contact</Title>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" />

        <Label htmlFor="concept">Concept</Label>
        <TextArea id="concept" name="concept" />

        <Submit type="submit" value="Submit" />
      </form>
    </Wrapper>
  </Layout>
)

export default Contact
