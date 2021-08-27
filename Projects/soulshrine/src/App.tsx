import React, { useEffect } from 'react';
import Draggable from 'react-draggable';
import './App.css';

export default function App() {

  return <Draggable
    defaultPosition={{x: -5000, y: -5000}}
    >
    <div style={{width: 10000, height: 10000}} className="flex justify-center align-center" >
      ye
    </div>
  </Draggable>
}
