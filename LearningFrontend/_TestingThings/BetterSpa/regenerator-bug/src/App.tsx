import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

export const Hooks: React.FC = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        (async () => {
          setText("YOOOOOOOSH")
        })()
    }, [])

    return <div>
        {text}
    </div>
}

const App: React.FC = () => {
  return (
    <div className="App">
      xd
      <Hooks />
    </div>
  );
}

export default App;
