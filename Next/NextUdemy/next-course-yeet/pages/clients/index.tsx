import React, { ReactElement } from 'react'
import Link from 'next/link'

interface Props {
  
}

export default function index({}: Props): ReactElement {
  
  const clients = [
    { id: "max", name: "Max" },
    { id: "manu", name: "Manu" },
    { id: "stephanie", name: "Stephanie" },
    { id: "vicky", name: "Vicky" },
    { id: "jen ny", name: "Jen ny" },
  ]
  
  return (
    <div>
      <h1>Clients page!</h1>
      <ul>
        {clients.map(c => <li key={c.id}>
          <Link href={{
            pathname: '/clients/[id]',
            query: { id: c.id}, // this approach auto parses ! very nice
          }}>{c.name}</Link>
        </li>)}
      </ul>
    </div>
  )
}
