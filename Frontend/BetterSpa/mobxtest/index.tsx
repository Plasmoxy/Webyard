import React, { useState } from 'react'
import { render } from 'react-dom'
import { Hooks } from './Hooks';
import { Mobx } from './Mobx';

export const App: React.FC = () => {
    
    
    return <div>
        AYYYYYYYYYYYYYYYYYy
        <div>Hooks... <Hooks /></div>
        <div>Mobx... <Mobx /></div>
    </div>
}

render(<App />, document.getElementById("root"))