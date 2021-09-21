import './App.css';

import { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Form from './components/Form';
// import About from './components/About.js';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('success', 'DarkMode');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('success', 'LightMode');
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar hero='react' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Switch> */}
          {/* <Route exact path='/about'>
            <About />
          </Route> */}
          {/* <Route exact path='/'> */}
            <Form title='Enter' showAlert={showAlert} />
          {/* </Route> */}
        {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
