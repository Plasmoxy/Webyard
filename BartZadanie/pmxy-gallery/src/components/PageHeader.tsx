import React from 'react'
import backSvg from '../icons/back.svg'

export function PageHeader(props: {title: string, backButton: boolean}) {
  return <>
    <div className="mt-5 d-flex justify-content-start">
      <span className="d-flex align-items-center">
        <img src={backSvg} style={{marginBottom: "2px"}}/>
        <h2 className="my-0 mx-3 text-light">{props.title}</h2>
      </span>
    </div>
    <hr />
    <div className="mt-4"></div>
  </>
}