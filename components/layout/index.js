import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body{
        font-family: sans-serif;
        background: lightskyblue;
    }
    body{     
        padding: 4rem 0;   
    }
`;

const Container = styled.div`
  max-width: 780px;
  margin: auto;
  box-shadow: 0 2px 6px -2px black;
  background: #eee;
  padding: 2rem;
`;

class Layout extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;
