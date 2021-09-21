import React from 'react';
import PropTypes from 'prop-types';

import './Navbar.css';

// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const bgCol = (color) => {
    document.body.style.backgroundColor = color;
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ backgroundColor: `${props.bgCol}` }}>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            {props.hero}
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='/navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              {/* <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li> */}
            </ul>
            {/* <form className='d-flex'>
              <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form> */}
          </div>
          <div className='colorPalette'>
            <div
              className='options options__light'
              onClick={() => {
                bgCol('#ffffff');
              }}
            ></div>
            <div
              className='options options__grey'
              onClick={() => {
                bgCol('#636363');
              }}
            ></div>
            <div
              className='options options__green'
              onClick={() => {
                bgCol('#004509');
              }}
            ></div>
            <div
              className='options options__blue'
              onClick={() => {
                bgCol('#003599');
              }}
            ></div>
            <div
              className='options options__dark'
              onClick={() => {
                bgCol('#3f4650');
              }}
            ></div>
          </div>
          <div className='form-check form-switch'>
            <input className='form-check-input' type='checkbox' id='flexSwitchCheckDefault' onClick={props.toggleMode} />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor='flexSwitchCheckDefault'>
              Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  hero: PropTypes.string,
  link1: PropTypes.string,
};
