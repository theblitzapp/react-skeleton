import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

const LinkButton = styled.a`
  padding: 0.5rem 1rem 0.5rem 0;
  margin-right: 1rem;
  border-radius: 2px;
`;

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link href="/" passHref>
          <LinkButton>Home</LinkButton>
        </Link>
        <Link href="/documentation" passHref>
          <LinkButton>Documentation</LinkButton>
        </Link>
      </div>
    );
  }
}

export default Navbar;
