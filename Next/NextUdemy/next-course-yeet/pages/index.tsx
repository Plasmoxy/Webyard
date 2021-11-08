import React, { ReactElement } from 'react'
import Link from 'next/link'

interface Props {
  
}

export default function home({}: Props): ReactElement {
  return (
    <div>
      <span className="text-6xl">
        Home
      </span>
      <ul>
        <li><Link href='/portfolio'><button className="btn">Portfolio</button></Link></li>
        <li><Link href='/about'><button className="btn">About</button></Link></li>
        <li><Link href='/clients'><button className="btn">Clients</button></Link></li>
      </ul>
    </div>
  )
}
