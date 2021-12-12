import { Box, AppBar, Button, IconButton, Toolbar, Typography, Drawer, Divider, List, ListItemText, ListItem, ListItemIcon, AppBarProps, DrawerProps, useTheme} from '@mui/material'
import LayersIcon from '@mui/icons-material/Layers'
import InboxIcon from '@mui/icons-material/Inbox'
import PersonIcon from '@mui/icons-material/Person'
import React, { FC, useCallback } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface Props {
  
}

export const routesData: {[key: string]: {title: string, icon: any}} = {
  '/': {
    title: 'Home',
    icon: LayersIcon
  },
  '/helo': {
    title: 'Hello',
    icon: InboxIcon
  },
  '/users': {
    title: 'Users',
    icon: PersonIcon
  }
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
  
  const basePath = '/' + router.pathname.split('/')[1]
  const isCurrentPath = useCallback(
    path => basePath === path,
    [basePath]
  )
  const currentPathData = routesData[basePath]
  
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
            <currentPathData.icon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           {currentPathData.title}
          </Typography>
          <Button color="inherit">A</Button>
        </Toolbar>
      </LayoutAppBar>
      
      {/* drawer */}
      <LayoutDrawer variant="permanent" anchor="left">
        <Toolbar>
          <LayersIcon />
          <Typography variant='h6' sx={{ px: 1}}>
            Dashboard
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {Object.entries(routesData).map(([path, data]) => (
            
            <Link key={path} href={path}>
              <ListItem button>
              <ListItemIcon>
                <data.icon color={isCurrentPath(path) ? 'primary' : undefined} />
              </ListItemIcon>
              <Typography color={isCurrentPath(path) ? 'primary' : undefined} >
                {data.title}
              </Typography>
            </ListItem>
            </Link>
            
          ))}
        </List>
      </LayoutDrawer>
      
      {/* content */}
      <main className='container mx-auto max-w-screen-xl p-10'>
        <Toolbar variant='dense' />
        {props.children}
      </main>
      
    </div>
  )
}
