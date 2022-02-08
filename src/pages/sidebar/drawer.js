import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import {NavLink} from 'react-router-dom'
import {styled} from "@mui/material/styles";
import home from '../../assets/img/home.svg'
import orders from '../../assets/img/shop.svg'
import statistic from '../../assets/img/busines.svg'
import exist from '../../assets/img/exist.svg'
import products from '../../assets/img/media.svg'
import users from '../../assets/img/statistic.svg'
import employers from '../../assets/img/users.svg'
import contacts from '../../assets/img/userI.svg'

const drawerWidth = 260;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const Item = styled(ListItem)`
   display: 'block';
   margin-top: 37px;
   margin-left: 28px;
   padding: 0;

  `;
    const NavList = styled(NavLink)`
   font-size: 18px;
   font-weight: 500;
   color: #000000;
   text-decoration: none;
  `;
    const Img = styled('img')`
    width:'20';
    height:'23px';
  `;
    const drawer = (
        <Box  >
            <Toolbar />
            <List>
                <Item sx={{mt: 0}} >
                    <ListItemIcon>
                        <Img src={home}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to='main'>Главная</NavList>
                    </ListItemText>
                </Item>

                <Item >
                    <ListItemIcon>
                        <Img src={orders}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to=''>Заказы</NavList>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <Img src={employers}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to=''>Сотрудники</NavList>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <Img src={users}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to=''>Пользователи</NavList>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <Img src={products}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to=''>Товары</NavList>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <Img src={statistic}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to=''>Статистка</NavList>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <Img src={contacts}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to=''>Контакты</NavList>
                    </ListItemText>
                </Item>
                <Item sx={{mt: '80px'}}>
                    <ListItemIcon>
                        <Img src={exist}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to=''>Выход</NavList>
                    </ListItemText>
                </Item>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
