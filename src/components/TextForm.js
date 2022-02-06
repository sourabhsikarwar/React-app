import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let upText = text.toUpperCase(text);
    setText(upText);
    props.showAlert("Text changed to Uppercase", "success");
  };

  const handleLowClick = () => {
    let lowText = text.toLowerCase(text);
    setText(lowText);
    props.showAlert("Text changed to Lowercase", "success");
  };
  const handleClear = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Text Cleared", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // setText("Heading"); // correct way to change the text

  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3"
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "#7f8fa6" : "#ffffff",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onChange={handleOnChange}
          id="myBox"
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
      <div className="py-3 my-3">
        <h2>Your Text Summary</h2>
        <p>Total Characters : {text.length}</p>
        <p>Total Words : {text.split(" ").length}</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above box to preview"}
        </p>
      </div>
    </>
  );
}
