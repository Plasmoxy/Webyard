import { Box, AppBar, Button, IconButton, Toolbar, Typography, Drawer, Divider, List, ListItemText, ListItem, ListItemIcon, AppBarProps, DrawerProps, useTheme} from '@mui/material'
import LayersIcon from '@mui/icons-material/Layers'
import InboxIcon from '@mui/icons-material/Inbox'
import MailIcon from '@mui/icons-material/Mail'
import React, { FC } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface Props {
  
}

export const routesData = {
  '/': {
    title: 'Home',
    icon: LayersIcon
  },
  '/helo': {
    title: 'Hello',
    icon: LayersIcon
  },
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
  
  const router = useRouter()
  const theme = useTheme()
  console.log(router.pathname)
  
  return (
    <div className='flex'>
      
      
      {/* appbar */}
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
      
      {/* drawer */}
      <LayoutDrawer variant="permanent" anchor="left" >
        <Toolbar variant='dense'/>
        <Divider />
        <List>
          {Object.entries(routesData).map(([path, data]) => (
            
            <Link key={path} href={path}>
              <ListItem button>
              <ListItemIcon>
                <data.icon color={router.pathname == path ? 'primary' : undefined} />
              </ListItemIcon>
              <Typography color={router.pathname == path ? 'primary' : undefined} >
                {data.title}
              </Typography>
            </ListItem>
            </Link>
            
          ))}
        </List>
      </LayoutDrawer>
      
      {/* content */}
      <main className='p-5'>
        <Toolbar variant='dense' />
        {props.children}
      </main>
      
    </div>
  )
}
