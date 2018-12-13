import * as React from 'react'

const Greeter = (p: {children: string}) => <div>
    Hello, {p.children}!
</div>


export default () => <div>
    <h1> Greeter </h1>
    <Greeter>Sebu</Greeter>
    <Greeter>Filip</Greeter>
</div>