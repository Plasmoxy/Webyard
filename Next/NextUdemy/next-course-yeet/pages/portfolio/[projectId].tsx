import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

interface Props {
  
}

export default function portfolio_proj({}: Props): ReactElement {
  
  const router = useRouter()
  
  return (
    <div>
      Proj id: {router.query.projectId}
    </div>
  )
}
