import React, { useState } from 'react';
// import PropTypes from 'prop-types'

export default function Textform(props) {
  const [text, setText] = useState('Enter your text');

  const handleOnChange = (event)=>{
    console.log('Handle On Change');
    setText(event.target.value);
  }

  const handleUpClick = ()=>{
    console.log('Uppercase clicked');
    // setText('You have clicked on the Uppercase button');
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = ()=>{
    console.log('Lowercase clicked');
    // setText('You have clicked on the Uppercase button');
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = ()=>{
    console.log('ClearButton clicked');
    // setText('You have clicked on the Uppercase button');
    let newText = '';
    setText(newText);
  }



  return (
    <div>
        <div className="container">
        <div className="mb-3">
        <h1 className="my-3">{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button type="button" className="btn btn-primary my-3" onClick={handleUpClick}>Uppercase</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Lowercase</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      {/* Counting words and character */}
      <div className='container my-3'>
          <h1>Your text summary</h1>
          <p>{text.split(' ').length} word and {text.length} characters</p>
          <p>{0.008 * text.split(' ').length} minutes to read</p>
      </div>
        </div>
     
    </div>
  );
}
