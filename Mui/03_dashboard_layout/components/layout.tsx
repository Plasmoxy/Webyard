import React, { FC } from 'react'

interface Props {
  
}

export const Layout: FC<Props> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
