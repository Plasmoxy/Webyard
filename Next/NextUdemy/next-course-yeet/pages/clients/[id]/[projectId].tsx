import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

interface Props {
  
}

export default function client_projectidx({}: Props): ReactElement {
  
  const router = useRouter()
  
  return (
    <div>
      Project with id {router.query.projectId} and client with id {router.query.id}.
    </div>
  )
}
