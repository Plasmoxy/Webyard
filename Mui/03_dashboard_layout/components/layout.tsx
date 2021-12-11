import { Box, AppBar, Button, IconButton, Toolbar, Typography, Drawer, Divider, List, ListItemText, ListItem, ListItemIcon, AppBarProps, DrawerProps} from '@mui/material'
import LayersIcon from '@mui/icons-material/Layers'
import InboxIcon from '@mui/icons-material/Inbox'
import MailIcon from '@mui/icons-material/Mail'
import React, { FC } from 'react'
import styled from '@emotion/styled'

interface Props {
  
}

const drawerWidth = 200

const LayoutAppBar = styled(AppBar)(({theme}) => ({
  width: `calc(100% - ${drawerWidth}px)`
}))

const LayoutDrawer = styled(Drawer)(({theme}) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}))

export const Layout: FC<Props> = (props) => {
  return (
    <div className='flex'>
      <LayoutAppBar>
        <Toolbar variant='dense'>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LayersIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </LayoutAppBar>
      <LayoutDrawer variant="permanent" anchor="left" >
        <Toolbar variant='dense'/>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </LayoutDrawer>
      
      <main className='p-5'>
        <Toolbar variant='dense' />
        {props.children}
      </main>
      
    </div>
  )
}
