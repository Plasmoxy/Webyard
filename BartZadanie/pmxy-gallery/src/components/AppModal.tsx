import React, { useRef, useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import './AppModal.scss'

interface Props {
  visible?: boolean,
  onClose?: () => any,
}

export const AppModal: React.FC<Props> = ({
  visible = false, children, onClose
}) => {
  
  const ANIM_DURATION = 200
  const [rootSpring, setRootSpring ] = useSpring(() => ({
    config: {
      duration: ANIM_DURATION,
    },
    opacity: 0,
  }))
  const [displayed, setDisplayed] = useState(false)
  const root = useRef<any>()
  const cls = `app-modal ${displayed ? 'd-flex' : ""}`
  
  useEffect(() => {
    console.log("triggered")
    setRootSpring({opacity: visible ? 1 : 0})
    
    if (visible) {
      setDisplayed(visible)
    } else {
      setTimeout(() => setDisplayed(false), ANIM_DURATION)
    }
  }, [visible])
  
  const close = () => {
    if (onClose) onClose()
  }
  
  const click = (e: any) => {
    // if outside the content
    if (e.target == root.current) close()
  }
  
  return <animated.div style={rootSpring} ref={root} className={cls} onClick={click}>
    <div className="app-modal-content">
      <div className="d-flex justify-content-end">
        <span className="app-modal-close-btn" onClick={close}>&times;</span>
      </div>
      {children}
    </div>
  </animated.div>
}