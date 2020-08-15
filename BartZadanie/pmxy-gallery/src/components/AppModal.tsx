import React, { useRef, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import './AppModal.scss'

interface Props {
  open: boolean
  onClosed: () => any
  onExited?: () => any
}

// Modal component with support for TransitionGroup
export const AppModal: React.FC<Props> = ({
  open, children, onExited, onClosed
}) => {

  const root = useRef<any>()
  const close = () => {
    if (onClosed) onClosed()
  }
  const click = (e: any) => {
    // if outside the content
    if (e.target == root.current) close()
  }

  
  return <CSSTransition
    in={open}
    timeout={2000}
    unmountOnExit
    onExited={onExited}
  >
    <div className="app-modal" ref={root} onClick={click}>
      <div className="app-modal-content">
        <div className="d-flex justify-content-end">
          <span className="app-modal-close-btn" onClick={close}>&times;</span>
        </div>
        {children}
      </div>
    </div>
  </CSSTransition>
}