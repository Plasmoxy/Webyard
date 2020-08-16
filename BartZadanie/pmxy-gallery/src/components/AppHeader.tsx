import React from 'react'

export function AppHeader(props: {title: string, subtitle: string}) {
  return <>
    <h1 className="text-light">{props.title}</h1>
    <h2 className="text-light mt-5">{props.subtitle}</h2>
    <hr />
    <div className="mt-4"></div>
  </>
}