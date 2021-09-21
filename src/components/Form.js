import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Form.css';

export default function Form(props) {
  const [text, updateText] = useState('');

  const upper = () => {
    console.log('button clicked');
    console.log({ text });
    let newText = text.toUpperCase();
    updateText(newText);
    props.showAlert('success', 'Text converted to uppercase');
  };

  const lower = () => {
    console.log('button clicked');
    console.log({ text });
    let newText = text.toLowerCase();
    updateText(newText);
    props.showAlert('success', 'Text converted to lowercase');

  };

  const upper1 = () => {
    console.log('button clicked');
    console.log({ text });
    let newText = text.split(' ');
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);
    }
    console.log(newText.join(' '));
    updateText(newText.join(' '));
    props.showAlert('success', 'first letter of word converted to uppercase');

  };

  const clear = () => {
    updateText('');
    props.showAlert('success', 'Text cleared');

  };

  const change = (event) => {
    console.log('changed');
    updateText(event.target.value);
  };

  return (
    <>
      <div className='container'>
        <div className='container my-3'>
          <h1>{props.title}</h1>
          <textarea className='form-control' id='floatingTextarea2' onChange={change} value={text} style={{ height: '100px' }}></textarea>
          <button className='btn btn-primary m-3' onClick={upper}>
            upper
          </button>
          <button className='btn btn-primary m-3' onClick={lower}>
            lower
          </button>
          <button className='btn btn-primary m-3' onClick={upper1}>
            upper 1st char
          </button>
          <button className='btn btn-primary m-3' onClick={clear}>
            clear
          </button>
        </div>

        <div className='container'>
          <h1>Summary</h1>
          <p>
            {text.split(' ').length - 1} words, {text.length} characters
          </p>
          <p>time to each read = {(text.split(' ').length - 1) * 0.9}</p>
        </div>
      </div>
    </>
  );
}

Form.propTypes = {
  title: PropTypes.string,
};
