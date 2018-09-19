import React, { Component } from "react";
import "./prismjs-utils";
import { Editor } from "react-live";
import styled from "styled-components";

const CodeBlock = styled(p => {
  const language = (p.language || "clike").toLowerCase().trim();
  return <Editor {...p} language={language} />;
}).attrs({
  contentEditable: false
})`
  background: #323232;
  font-size: 0.8rem;
  font-family: monospace;
  font-weight: 300;
  white-space: pre-wrap;
  border-radius: 5px;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  margin: 2rem 0;
  overflow-x: hidden;
`;

export default CodeBlock;
