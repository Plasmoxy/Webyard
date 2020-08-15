import React, { ComponentProps } from 'react'
import './AppModal.scss'

export const AppModal: React.FC = props => {
  
  
  return <div className="app-modal">
    <div className="app-modal-content">
      <span className="app-modal-close-btn">&times;</span>
      {props.children}
    </div>
  </div>
}