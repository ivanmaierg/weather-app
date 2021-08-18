import React from 'react';
import './style.css';
import AsidePanel from './components/AsidePanel';
import Main from './components/Main';
import response from './utils/resMock.json'
export default function App() {
  console.log(response)
  return (
    <div className="app">
        <AsidePanel />
        <Main />
    </div>
  );
}
