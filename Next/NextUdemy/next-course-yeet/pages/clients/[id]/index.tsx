import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

interface Props {
  
}

export default function index({}: Props): ReactElement {
  
  const router = useRouter()
  
  return (
    <div>
      <h1>Projects of client with id {router.query.id}</h1>
    </div>
  )
}
