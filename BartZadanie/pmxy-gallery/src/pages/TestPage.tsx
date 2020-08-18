import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { useHistory } from 'react-router-dom'

export function TestPage() {

  const { location } = useHistory()
  
  console.log(location.state)
  
  return <>
    <PageHeader title="Test" backButton={true} />
    <div className="text-light">
      TOTO JEST TEST PAGE XDXDXDXD<br />
    </div>
  </>
}