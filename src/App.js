import React from 'react';
import './style.css';

import CallToAction from './components/Buttons/CallToAction';
import GeoButton from './components/Buttons/GeoButton';
import PreviewPanel from './components/AsidePanel';
import Main from './components/Main';

export default function App() {
  return (
    <div className="app">
        <PreviewPanel />
        <Main />
        
    </div>
  );
}
