import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { UserContext } from './UserContext';





const pages = ['Home','About','Contact', 'Products'];
const pagesPaths = ['/','/about','/contact', '/products'];

const settings = ['Profile', 'Account', 'Dashboard'];
const settingsPath = ['/profile', '/account', '/dashboard']





function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { avatar, loggedIn, logoutUser } = React.useContext(UserContext)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="sticky" style={{backgroundColor: "#33691e", color:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuBookOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dubai Books
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            {
            pages.map(
              (page, i) => (
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    component={ReactLink}
                    to={pagesPaths[i]}
                    key={page}
                  >
                    {page}
                  </MenuItem>
                )
              )
            }
            </Menu>
          </Box>
          <MenuBookOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: '',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dubai Books
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
            
            pages.map(
              (page, i) => (
                  <Button
                    component={ReactLink}
                    to={pagesPaths[i]}
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                )
              )
            }
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {
                settings.map(
                  (setting, i) => (
                    <Button
                    component={ReactLink}
                    to={settingsPath[i]}
                    key={setting}
                    sx={{ display:'block', textAlign:'center', color:'black'}}
                  >
                    {setting}
                  </Button>
                  )
                )
              }
              
              {
                loggedIn ? 
                  <MenuItem onClick={logoutUser}>
                    <Typography display='block' textAlign="center">Logout</Typography>
                  </MenuItem> :
               

                  <MenuItem
                  to={'/register'}
                  component={ReactLink}
                  onClick={handleCloseUserMenu}
                  >
                    <Typography my='2' color='black' display='block'>Register</Typography>
                  </MenuItem>
                  

              }
              {
               loggedIn ? 
               <MenuItem onClick={logoutUser}>
                 <Typography textAlign="center"></Typography>
               </MenuItem> :
                <MenuItem
                to={'/login'}
                component={ReactLink}
                onClick={handleCloseUserMenu}
                >
                  <Typography >Login</Typography>
                </MenuItem>
              }

              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;