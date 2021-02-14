import React, { ReactElement } from 'react'
import PageHeader from '../components/PageHeader'

interface Props {
  
}

export default function EmployeesPage({}: Props): ReactElement {
  return (
    <div>
      <PageHeader title="New Employee" subtitle="" />
    </div>
  )
}
