import * as React from 'react';
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
import Icon from '@mui/material/Icon';
import {Link, NavLink } from 'react-router-dom';
import { AirOutlined, AirplanemodeActive, AirplaneTicket, AirSharp, Flaky } from '@mui/icons-material';

import { useAuthStore } from "../../hooks/useAuthStore"


const pages = [  {id:'1', nombre:'Home' , icon:'home', color:'color1' , colort1:'color1t1' , colort2:'color1t2'  } ,   
                 {id:'2', nombre:'Anuncios' , icon:'hotel',color:'color2', colort1:'color2t1' , colort2:'color2t2'  } ,
                 {id:'3', nombre:'Tablas' , icon:'maps',color:'color3',  colort1:'color3t1' , colort2:'color3t2'  } ,
                 {id:'4', nombre:'Multitablas' , icon:'local_taxi',color:'color4',  colort1:'color4t1' , colort2:'color4t2'  } ,
                 {id:'5', nombre:'Contactanos' , icon:'perm_phone_msg',color:'color5', colort1:'color5t1' , colort2:'color5t2' } ];

const settings = [{id:'1', nombre:'Mi Perfil' , icon:'home', funcion:'color1'  } ]

export const Navbar = () => {

  const { startLogout, user } = useAuthStore();

  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  window.addEventListener("scroll", function(){
    const header = document.getElementById("nav");
    header.classList.toggle("animacionScroll",window.scrollY>0);
 
})

  return (
<AppBar id='nav' position='fixed' style={{backgroundColor:'transparent', boxShadow:'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AirplanemodeActive  sx={{ display: { xs: 'none', md: 'flex'  } , color:'color1', mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'color4',
              textDecoration: 'none',
            }}
          >
            TRAVESIA
          </Typography>


          <Box sx={{  flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:'color1'}}
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
              {pages.map((page) => ( 

                <MenuItem  mx={3} key={page.id} onClick={handleCloseNavMenu}
                 sx={{ ":hover" : {backgroundColor: `${page.colort2}`,    }  }} >
                <NavLink style={{ textDecoration: "none" }} to={page.nombre}    >
                  <Box  sx={{ display:'flex', alignItems:'center',marginInline:'10%' ,height:'80px',  width:'350px'}}>           
                      <Icon   sx={{borderRadius:'50%', padding:'1rem',backgroundColor:`${page.colort2}`,color:`${page.color}`, display:'flex', alignContent:'center', alignItems:'center', height:'50px',  width:'50px' }}>{page.icon}</Icon>
                      <Typography   color={page.color} mx={3} textAlign='center'>{page.nombre}</Typography>
                  </Box> 
                  </NavLink>
                </MenuItem>

              ))}
            </Menu>
          </Box>
          <AirplaneTicket  sx={{ display: { xs: 'flex', md: 'none' }, color:'color2' ,mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'color1',
              textDecoration: 'none',
            }}
          >
            TRAVESIA
          </Typography>
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink  style={{ textDecoration: "none" }} to={page.nombre}   key={page.id}>
                <Button 
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'flex' }}
                >  
                  <Typography  color= 'color2'   textTransform="none" mx={1} >{page.nombre}</Typography>
                </Button>
                </NavLink>  
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 , justifyContent:'around', display:'flex', alignItems:'center'}}>
          <Box sx={{marginInline:'1rem'}} >{ user.name }</Box>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/-CgHBZ5wRDtg/AAAAAAAAAAI/AAAAAAAAAAA/APmPUbFXahIItX0pupqGfv157zpfratwPQ/photo.jpg?sz=46" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} >
                  <Typography  textAlign="center">{setting.nombre} </Typography>

                </MenuItem>
                
              ))}

                <MenuItem 
                onClick={ startLogout }
                > 
                <i className="fas fa-sign-out-alt"></i>
                &nbsp;
                <span>Salir</span>
                </MenuItem>

            </Menu>


          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  




  )
}
