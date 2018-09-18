import React, { Component } from "react";
// Components to be used as renderers
import Code from "./mdx-renderers/Code";
import LiveEdit from "./mdx-renderers/LiveEdit";
import CodeBlock from "./mdx-renderers/CodeBlock";

class Heading extends Component {
  render() {
    return <h1 {...this.props} />;
  }
}

const components = {
  p({ children }) {
    return <p>{children}</p>;
  },
  inlineCode({ children }) {
    return <Code>{children}</Code>;
  },
  code({ children, className = "" }) {
    const language = className.replace(/language-/, "");
    if (language === "react") {
      return <LiveEdit code={children} noInline />;
    } else if (language === "sh") {
      return <CodeBlock code={children} language="bash" />;
    }
    return <CodeBlock code={children} language={language} />;
  }
};
export default components;
