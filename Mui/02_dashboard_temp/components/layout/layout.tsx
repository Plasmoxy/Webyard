

import Head from 'next/head'
import React, { FC } from 'react'

interface Props {
  
}

export const Layout: FC<Props> = (p) => {
  return <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <div className='min-h-screen flex flex-col'>
      
      {p.children}
    </div>
  </>
}
