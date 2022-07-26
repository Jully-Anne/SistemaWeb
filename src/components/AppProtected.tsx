import React from 'react'
import { Box, CssBaseline, Toolbar, IconButton, Typography, Button, Avatar, Drawer, Divider, CSSObject, styled, Theme, useTheme, AppBarProps, AppBar, ListItemIcon, ListItemText, ListItemButton, Paper, List } from '@mui/material'
import { ChevronLeft, ChevronRight, DashboardOutlined, Menu, Person, PrecisionManufacturing } from '@mui/icons-material'
import SettingsIcon from '@mui/icons-material/Settings';
import { useAuth } from 'react-oidc-context'
import { Route, Routes, useNavigate } from 'react-router-dom'
import CustomizedAccordions from './GeneralComponents/AcordeonMenu';
import Dashboard from './Pages/Dashboard/index'
import Sectors from './Pages/SectorsRealTimeAnalysis'
import ResourceRealTimeAnalysis from './Pages/ResourceRealTimeAnalysis/Index'
import ResourceHistoricalAnalysis from './Pages/ResourceHistoricalAnalysis/Index'
import FurnaceRealTimeAnalysis from './Pages/FurnaceRealTimeAnalysis/Index'
import FurnaceHistoricalAnalysis from './Pages/FurnaceHistoricalAnalysis/Index'
import FurnaceHistoricalAlarms from './Pages/FurnaceHistoricalAlarms/Index'
import FurnaceTemperatureLimits from './Pages/FurnaceTemperatureLimits/Index'
import Settings from './Pages/Settings/index'
import Profile from './Profile'


const drawerWidth = 200

const stringToColor = (string: string) => {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}
//Avatar de Login de usuário
const stringAvatar = (name: string) => {
  const names = name.split(' ')
  const firstLetter = name.split(' ')[0][0]
  const secondLetter = name.split(' ')[names.length - 1][0]
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${firstLetter}${secondLetter}`
  }
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

interface EosAppBarProps extends AppBarProps {
  open?: boolean;
}

const EosAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<EosAppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const EosDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  })
)

const AppProtected = () => {
  const auth = useAuth()
  const theme = useTheme()
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)

  const name: string = auth.user?.profile.name || 'no name'

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  interface AppMenuItemProps {
    to: string;
    label: string;
    icon: React.ReactNode;
                           
  }

  const AppMenuItem = (props: AppMenuItemProps) => {
    return (
      <ListItemButton onClick={() => navigate(props.to)}>
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.label} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    )
  }

  const AppMenu = () => {
    return (
      <Paper sx={{ width: '20rem', maxWidth: '100%'}}>
        <List> 
          <AppMenuItem to="/dashboard" label="Dashboard"  icon={<DashboardOutlined sx={{color: '#1976D2'}}/>} />
          <Divider />
          <AppMenuItem to="/sectors" label="Setores"  icon={<PrecisionManufacturing sx={{color: '#1976D2'}}/>} />
          <CustomizedAccordions />
          <AppMenuItem to="/settings" label="Configurações"  icon={<SettingsIcon sx={{color: '#1976D2'}}/>} />
          <Divider />
          <AppMenuItem to="/login" label="Login" icon={<Person sx={{color: '#1976D2'}}/>} />
       </List>
      </Paper>
    )
  }

  return (
  <Box sx={{backgroundColor: '#000000'}}>
    <Box sx={{ display: 'flex', backgroundColor: '#F8F9FA' }}>
      <CssBaseline />
      <EosAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}
          >   
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Sistema Supervisório</Typography>
          <Button onClick={() => { auth.signoutRedirect() }}>
            <Avatar {...stringAvatar(name)} />
          </Button>
        </Toolbar>
      </EosAppBar>
      <EosDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <AppMenu />
      </EosDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path='/resourceRealTimeAnalysis' element={<ResourceRealTimeAnalysis />} />
          <Route path='/resourceHistoricalAnalysis' element={<ResourceHistoricalAnalysis />} />
          <Route path='/furnaceRealTimeAnalysis' element={<FurnaceRealTimeAnalysis />} />
          <Route path='/furnaceHistoricalAnalysis' element={<FurnaceHistoricalAnalysis />} />
          <Route path='/furnaceHistoricalAlarms' element={<FurnaceHistoricalAlarms />} />
          <Route path='/furnaceTemperatureLimits' element={<FurnaceTemperatureLimits />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Profile />} />

        </Routes>
      </Box>
    </Box>
  </Box>
  )
}

export default AppProtected
