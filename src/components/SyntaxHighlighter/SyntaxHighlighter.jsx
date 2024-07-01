import React, { useState, useRef, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import "./SyntaxHighlighter.css";

const SyntaxHighlighter = () => {
  const [code, setCode] = useState("");
  const textareaRef = useRef(null);
  const highlightRef = useRef(null);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    const highlight = highlightRef.current;

    if (textarea && highlight) {
      const handleScroll = () => {
        highlight.scrollTop = textarea.scrollTop;
        highlight.scrollLeft = textarea.scrollLeft;
      };
      textarea.addEventListener("scroll", handleScroll);
      return () => {
        textarea.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <textarea ref={textareaRef} value={code} onChange={handleChange} />
        <div ref={highlightRef} aria-hidden="true" className="highlight">
          <Highlight theme={themes.dracula} code={code} language="javascript">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={{ ...style, margin: 0 }}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};

export default SyntaxHighlighter;
