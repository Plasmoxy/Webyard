import React, { ReactElement } from "react"
import {
  AppBar,
  Badge,
  Box,
  Grid,
  Icon,
  IconButton,
  InputBase,
  makeStyles,
  SvgIcon,
  Toolbar,
} from "@material-ui/core"
import { ChatBubbleOutline, NotificationsNone, PowerSettingsNew, SearchOutlined, Layers } from "@material-ui/icons"


const styles = makeStyles({
  appBar: {
    minHeight: 36,
    backgroundColor: "#fff"
  },
  search: {
     opacity: 1,
     padding: '6px',
     fontSize: '0.8rem',
     borderRadius: '10px',
     backgroundColor: '#f4f4f4',
     transition: 'background-color 0.2s ease-in-out',
     '&:hover': {
       backgroundColor: '#e5e5e5'
     },
     '& .MuiSvgIcon-root': {
       marginRight: '8px',
       opacity: 0.7,
     },
  },
  logo: {
    marginRight: '14px',
  },
})

interface Props {}

export default function Header({}: Props): ReactElement {
  const cs = styles()

  return (
    <AppBar position="static" className={cs.appBar}>
      <Toolbar>
        <Grid container alignItems="center" >
          <Layers className={cs.logo} color="primary" />
          <Grid item>
            <InputBase
              className={cs.search}
              placeholder="Search ..."
              startAdornment={<SearchOutlined fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <ChatBubbleOutline fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
