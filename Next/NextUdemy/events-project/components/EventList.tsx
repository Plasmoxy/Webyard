import React, { ReactElement } from 'react'
import EventItem from './EventItem'

interface Props {
  items: any[]
}

export default function EventList({items}: Props): ReactElement {
  return (
    <ul>
      {items.map(e =>
        <li>
          <EventItem event={e} />
        </li>
      )}
    </ul>
  )
}
