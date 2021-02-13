import { makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface Props {
  
}

const useStyles = makeStyles({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053',
    color: 'white',
  }
})

export default function SideMenu({}: Props): ReactElement {
  
  const css = useStyles();
  
  return (
    <div className={css.sideMenu}>
      <input type="text"></input>
      yeeas
    </div>
  )
}
