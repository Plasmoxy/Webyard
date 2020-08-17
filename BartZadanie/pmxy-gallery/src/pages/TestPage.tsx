import React from 'react'
import { PageHeader } from '../components/PageHeader'

export function TestPage() {

  return <>
    <PageHeader title="Test" backButton={true} />
    <div className="text-light">
      TOTO JEST TEST PAGE XDXDXDXD
    </div>
  </>
}