import React, { ReactElement } from 'react'
import { getFeaturedEvents } from '../dummydata'

interface Props {
  
}

export default function IndexPage(p: Props): ReactElement {
  
  const featuredEvents = getFeaturedEvents()
  
  return (
    <div>
      Main apge
    </div>
  )
}
