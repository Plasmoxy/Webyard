import React from 'react'

interface Props {
  
}

export const CenteredLayout: React.FC<Props> = (props) => {
  return (
    <div className='min-h-screen min-w-full flex justify-center items-center'>
      {props.children}
    </div>
  )
}
