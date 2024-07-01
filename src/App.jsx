import React from "react";
import SyntaxHighlighter from "./components/SyntaxHighlighter/SyntaxHighlighter";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>
        React Syntax Highlighter with Prism
      </h1>
      <SyntaxHighlighter />
    </div>
  );
};

export default App;
