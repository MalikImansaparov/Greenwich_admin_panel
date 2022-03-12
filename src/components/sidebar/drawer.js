import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import {NavLink, useNavigate} from 'react-router-dom'
import {styled} from "@mui/material/styles";
import home from '../../assets/img/home.svg'
import orders from '../../assets/img/shop.svg'
import statistic from '../../assets/img/busines.svg'
import exist from '../../assets/img/exist.svg'
import products from '../../assets/img/media.svg'
import employers from '../../assets/img/users.svg'
import contacts from '../../assets/img/userI.svg'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from 'react';
import {useDispatch} from "react-redux";
import {logoutAdmins} from "../../store/asyncAction/asyncAuth/logout";

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [isSuperAdmin, setSuperAdmin] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('role') !== 'Админ') {
      setSuperAdmin('суперадмин');
    }
  }, []);

  function logoutHandler(){
    dispatch(logoutAdmins())
    navigate('/auth')
  };

  const ListText = styled(ListItemText)`
   font-size: 20px;
   font-weight: 700;
  `;

  const Item = styled(ListItem)`
    max-width: 205px;
    display: 'block';
    margin: 10px auto;
    &: hover {
      background: #e6f0e6;
      border-radius: 20px;
    };
    &: active {
      background: main;
      border-radius: 20px;
    }
  `;
  const NavList = styled(NavLink)`
    display: flex;
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    &: hover {
      color: #487349;
    }
  `;
  const Img = styled('img')`
    width: 30px;
    height: 40px;
  `;

  const drawer = (
      <Box>
        <Toolbar />
        <List>
          <NavList to="home">
            <Item sx={{ mt: '0' }}>
              <ListItemIcon>
                <Img src={home} />
              </ListItemIcon>
              <ListText>Главная</ListText>
            </Item>
          </NavList>
          <NavList to="orders">
            <Item>
              <ListItemIcon>
                <Img src={orders} />
              </ListItemIcon>
              <ListText>Заказы</ListText>
            </Item>
          </NavList>
          <NavList to="employers">
            <Item>
              <ListItemIcon>
                <Img src={employers} />
              </ListItemIcon>
              <ListText>Сотрудники</ListText>
            </Item>
          </NavList>
          <NavList to="products">
            <Item>
              <ListItemIcon>
                <Img src={products} />
              </ListItemIcon>
              <ListText>Товары</ListText>
            </Item>
          </NavList>
          <NavList to="statistics">
            <Item>
              <ListItemIcon>
                <Img src={statistic} />
              </ListItemIcon>
              <ListItemText>Статистика</ListItemText>
            </Item>
          </NavList>
          <NavList to="contacts">
            <Item>
              <ListItemIcon>
                <Img src={contacts} />
              </ListItemIcon>
              <ListText>Контакты</ListText>
            </Item>
          </NavList>
          <NavList to="/auth" onClick={logoutHandler}>
            <Item sx={{ mt: '150px' }}>
              <ListItemIcon>
                <Img src={exist} />
              </ListItemIcon>
              <ListText>Выход</ListText>
            </Item>
          </NavList>
        </List>
      </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              fontSize="95px"
              onClick={handleDrawerToggle}
              sx={{ position: 'absolute', top: '45px', right: '15px', display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Box
            component="nav"
            sx={{ width: { md: '180px' }, flexShrink: { md: 0 } }}
            position="static"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { md: 'block', lg: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '230px' },
              }}
          >
            {drawer}
          </Drawer>
          <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', md: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '230px' },
              }}
              open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
  );
}
export default ResponsiveDrawer;
