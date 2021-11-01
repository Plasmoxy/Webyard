import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

interface Props {
  
}

export default function allcatch({}: Props): ReactElement {
  
  const router = useRouter()
  const params = router.query.params as string[]
  
  if (!params) return <></>
  
  // map params to array of numbers
  const numbers = params.map(param => parseInt(param))
  // sum all numbers
  const total = numbers.reduce((acc, curr) => acc + curr)
  return (
    <div className="text-xl">
      <span className="text-green-500">
       {params.reduce((a, x) => a + (a==='' ? '' : '+') + x, '')}
      </span>
      <span> = </span>
      <span className="text-red-500">{total}</span>
    </div>
  )
}
