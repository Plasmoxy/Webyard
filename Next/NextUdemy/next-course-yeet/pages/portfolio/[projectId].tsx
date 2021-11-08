import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

interface Props {
  
}

export default function portfolio_proj({}: Props): ReactElement {
  
  const router = useRouter()
  console.log(router)
  
  return (
    <div>
      Proj id: {router.query.projectId}
    </div>
  )
}
