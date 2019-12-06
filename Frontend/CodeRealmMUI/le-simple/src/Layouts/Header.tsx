import React, {useState} from "react"

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import {Menu} from "@material-ui/icons"
import { grey } from "@material-ui/core/colors"
import { LoginDialog } from "../Components/LoginDialog"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))


export const Header: React.FC = props => {
  const classes = useStyles()
  const [loginDialogOpen, setLoginDialogOpen] = useState(false)
  const [uname, setUname] = useState("logged off")

  function handleClose(value: string) {
    setUname(value)
    setLoginDialogOpen(false)
  }

  return <>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Typography variant="h6" style={{marginRight: 30}}>
          {uname}
        </Typography>
        <Button onClick={() => {setLoginDialogOpen(true)}} variant="contained" style={{backgroundColor: grey[900], color: 'white'}}>Login</Button>
      </Toolbar>
    </AppBar>

    <LoginDialog open={loginDialogOpen} selectedValue={""} onClose={handleClose}  ></LoginDialog>
  </>
}
