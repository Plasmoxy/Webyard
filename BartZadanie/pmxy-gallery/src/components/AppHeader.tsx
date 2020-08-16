import React from 'react'

export function AppHeader(props: {title: string}) {
  return <>
    <h2 className="text-light mt-5">{props.title}</h2>
    <hr />
    <div className="mt-4"></div>
  </>
}