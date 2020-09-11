import { AppBar, Button, IconButton, Snackbar, Toolbar, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/core/styles"
import { Close as CloseIcon, Menu as MenuIcon } from "@material-ui/icons"
import React, { useContext, useState } from "react"
import { LoginDialog } from "../Components/LoginDialog"
import { MovieContext } from "../Context/MovieContext"


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
  
  const [uname, setUname] = useState("logged off")
  const [movies] = useContext(MovieContext)!!

  const [loginDialogOpen, setLoginDialogOpen] = useState(false)
  function handleDialogClose(value: string) {
    setUname(value)
    setLoginDialogOpen(false)
  }

  const [snackbarOpen, setSnackbarOpen] = useState(false)
  function handleSnackbarClose() {
    setSnackbarOpen(false)
  }

  return <>
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => setSnackbarOpen(true)}
        > <MenuIcon /> </IconButton>

        <Typography variant="h6" className={classes.title}>
          Simple
        </Typography>

        <Typography variant="subtitle1" style={{marginRight: 30}}>
          L={movies.length}
        </Typography>

        <Typography variant="subtitle2" style={{marginRight: 30}}>
          {uname}
        </Typography>

        <Button onClick={() => {setLoginDialogOpen(true)}} variant="contained" style={{backgroundColor: grey[900], color: 'white'}}>Login</Button>
      </Toolbar>
    </AppBar>

    <LoginDialog open={loginDialogOpen} selectedValue={""} onClose={handleDialogClose}  ></LoginDialog>

    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">NENI MENU ZIADNE :((</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}>
            <CloseIcon/>
          </IconButton>,
        ]}
      />
  </>
}
