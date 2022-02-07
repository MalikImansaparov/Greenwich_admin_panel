import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {NavLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import {styled} from "@mui/material/styles";


const drawerWidth = 270;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const Item = styled(ListItem)`
   marginTop: 35px;
   textAlign: center;
   color: 'red'
  `;
    const drawer = (
        <Box position="static" >
            <Toolbar />
            <List>
                    <Item sx={{mt:'35px'}}>
                        <ListItemIcon>
                             <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            <NavLink active to='main'>Главная</NavLink>
                        </ListItemText>
                    </Item>

                <Item>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavLink to=''>Заказы</NavLink>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavLink to=''>Пользователи</NavLink>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavLink to=''>Товары</NavLink>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavLink to=''>Статистка</NavLink>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavLink to=''>Главная</NavLink>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavLink to=''>Контакты</NavLink>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavLink to=''>Выход</NavLink>
                    </ListItemText>
                </Item>
            </List>


        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <PrimarySearchAppBar/>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
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
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
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
