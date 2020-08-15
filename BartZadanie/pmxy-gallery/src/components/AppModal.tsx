import React, { ComponentProps } from 'react'
import './AppModal.scss'

interface Props {
  visible?: boolean,
  onClose?: () => any,
}

export const AppModal: React.FC<Props> = ({
  visible = false, children, onClose
}) => {
  return <div className={`app-modal ${visible ? "d-flex" : ""}`}>
    <div className="app-modal-content">
      <div className="d-flex justify-content-end">
        <span className="app-modal-close-btn" onClick={onClose}>&times;</span>
      </div>
      {children}
    </div>
  </div>
}