import './App.css';

import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import ConfirmMemo from './Confirm';

const App: React.FC = ({ }, __State) => {

  const [state, setState] = useState<__State>({
    confirmOpen: true,
    confirmMessage: "Please hit the confirm button"
  });

  useEffect(() => {
    console.log('effect log')
  }, [])

  const handleOK = () => {
    setState({
      confirmOpen: false,
      confirmMessage: "Cool"
    })
    console.log("OK Clicked from Parent");
  }
  const handleCancel = () => {
    setState({
      confirmOpen: false,
      confirmMessage: "Sorry"
    })
    console.log("Cancel clicked from Parent")
  }

  const handleConfirmClick = () => {
    setState({
      confirmOpen: false,
      confirmMessage: ""
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>{state.confirmMessage}</p>
      <button onClick={handleConfirmClick}>Confirm</button>
      <ConfirmMemo open={state.confirmOpen} title="abcd" content="" okCaption="Yes" onOkClick={handleOK} onCancelClick={handleCancel} />
    </div>
  );
}

type __State = {
  confirmOpen: boolean;
  confirmMessage: string;
}

export default App;
