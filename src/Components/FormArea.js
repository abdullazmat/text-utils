import React, { useState, useEffect } from 'react';

export default function FormArea(props) {

  const [text, setText] = useState("Set your content here");
  const [isBold, setIsBold] = useState(false);

  const [mode, setMode] = useState({
    backgroundColor: 'white',
    color: "black"
  });

  // useEffect to update mode and body background color based on props.state
  useEffect(() => {
    if (props.state === 'dark') {
      document.body.style.backgroundColor = "#042743"; 
      setMode({
        color: "white"
      });
    } else {
      document.body.style.backgroundColor = "white"; 
      setMode({
        color: "black"
      });
    }
  }, [props.state]); 

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted To Uppercase")
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted To LowerCase")

  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
    props.showalert("Bold Text formatted")
  };

  const handleSpeakClick = () => {
    const toggle = document.getElementById('toggle');
    if (toggle.textContent === "Speak") {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      toggle.textContent = "Stop";
      props.showalert("Word To Speech Started")
    } else {
      window.speechSynthesis.cancel();
      toggle.textContent = "Speak";
      props.showalert("Word To Speech Stopped")
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text)
    props.showalert("Text Copied to Clipboard");
  };


  const handleClearText = () => {
    setText("")
    props.showalert("Text Cleared")
  }
  
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className='container' style={mode}>
        <div className="form-group">
          <h1>{props.heading}</h1>
          <textarea className="form-control my-5 border border-3" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To UpperCase</button>
        <button type="button" className="btn btn-secondary mx-3" onClick={handleDownClick}>Convert To LowerCase</button>
        <button type="button" className="btn btn-success mx-3" onClick={handleBoldClick}>Convert To Bold</button>
        <button type="button" id="toggle" className="btn btn-danger mx-3" onClick={handleSpeakClick}>Speak</button>
        <button type="button" className="btn btn-warning mx-3" onClick={handleCopyText}>Copy text</button>
        <button type="button" className="btn btn-dark mx-3" onClick={handleClearText}>Clear text</button>


      </div>

      <div className="container mt-3" style={mode}>
        <h6 className='mt-5'>Length of Words: {text.length}</h6>
        <h6>Number of Words: {text.split(" ").filter(word => word).length}</h6> {/* Filter to avoid counting empty strings */}
        <h2 className='mt-5'>Preview</h2>
        <textarea className="form-control my-5 border border-3" value={text === 'Set your content here' ? "" : text} style={{ fontWeight: isBold ? 'bold' : 'normal' }} rows="5"/>
        
      </div>
    </>
  );
}
