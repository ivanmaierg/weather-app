import React from 'react';
import './style.css';

import CallToAction from './components/Buttons/CallToAction';
import GeoButton from './components/Buttons/GeoButton';
import PreviewPanel from './components/PreviewPanel';
export default function App() {
  return (
    <div className="app">
      <main>
        <PreviewPanel />
      </main>
    </div>
  );
}
