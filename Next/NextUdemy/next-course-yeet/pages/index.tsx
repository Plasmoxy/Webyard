import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  
}

export default function home({}: Props): ReactElement {
  
  
  const router = useRouter()
   
  function navigateAfterDelay() {
    setTimeout(async () => {
      await router.push({
        pathname: '/clients/[id]/[proj]',
        query: {id: 'Max', proj: 'Projjj'}
      })
    }, 1000)
  }
  
  return (
    <div>
      <span className="text-6xl">
        Home
      </span>
      <ul>
        <li><Link href='/portfolio'><button className="btn">Portfolio</button></Link></li>
        <li><Link href='/about'><button className="btn">About</button></Link></li>
        <li><Link href='/clients'><button className="btn">Clients</button></Link></li>
        
        <button className="btn"  onClick={navigateAfterDelay}>Navig after delay</button>
        
      </ul>
    </div>
  )
}
