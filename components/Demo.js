import React, { Component } from "react";
import styled from "styled-components";

const FakeLoaderButton = styled.button`
  padding: 10px 20px;
  background: royalblue;
  color: white;
  outline: none;
  border-radius: 5px;
  border-color: dodgerblue;
`;

export default WrappedComponent =>
  class Demo extends Component {
    state = {
      loading: false
    };
    onFakeLoad = () => {
      this.setState({
        loading: true
      });
      this.timeout = setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 1500);
    };
    componentWillUnmount() {
      clearTimeout(this.timeout);
    }
    render() {
      const props = this.state.loading
        ? {}
        : {
            title: "Eren Yeager",
            description: "Attack on Titan protagonist",
            img: "/static/fn-512.png"
          };
      return (
        <>
          <p>
            <FakeLoaderButton onClick={this.onFakeLoad}>
              Load Data
            </FakeLoaderButton>
          </p>
          <WrappedComponent {...props} />
        </>
      );
    }
  };
