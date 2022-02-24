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
import {AuthContext} from "../../context/authContext";
import {useContext} from "react";


function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate('/auth')
    }

    const ListText = styled(ListItemText)`
   font-size: 28px;
   font-weight: 700;
   }
  `;

    const Item = styled(ListItem)`
   max-width: 205px;
   display: 'block';
   margin: 10px auto;
   &: hover {
   background: #E6F0E6;
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
    width:'17px';
    height:'20px';
  `;

    const drawer = (
        <Box>
            <Toolbar/>
            <List>
                <NavList to='home'>
                <Item sx={{mt: '0'}}>
                    <ListItemIcon>
                        <Img src={home}/>
                    </ListItemIcon>
                    <ListItemText>
                        Главная
                    </ListItemText>
                </Item>
                </NavList>
                <NavList to='orders'>
                <Item >
                    <ListItemIcon>
                        <Img src={orders}/>
                    </ListItemIcon>
                    <ListItemText>
                        Заказы
                    </ListItemText>
                </Item>
                </NavList>
                <NavList to='employers'>
                <Item>
                    <ListItemIcon>
                        <Img src={employers}/>
                    </ListItemIcon>
                    <ListText>
                       Сотрудники
                    </ListText>
                </Item>
               </NavList>
                <NavList to='products'>
                <Item>
                    <ListItemIcon>
                        <Img src={products}/>
                    </ListItemIcon>
                    <ListItemText>
                        Товары
                    </ListItemText>
                </Item>
                </NavList>
                <NavList to='statistics'>
                <Item>
                    <ListItemIcon>
                        <Img src={statistic}/>
                    </ListItemIcon>
                    <ListItemText>
                       Статистка
                    </ListItemText>
                </Item>
                </NavList>
                <NavList to='contacts'>
                <Item>
                    <ListItemIcon>
                        <Img src={contacts}/>
                    </ListItemIcon>
                    <ListItemText>
                       Контакты
                    </ListItemText>
                </Item>
                </NavList>
                <NavList to='#' onClick={logoutHandler}>
                <Item sx={{mt: '100px'}}>
                    <ListItemIcon>
                        <Img src={exist}/>
                    </ListItemIcon>
                    <ListItemText>
                       Выход
                    </ListItemText>
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
                            fontSize='95px'
                            onClick={handleDrawerToggle}
                            sx={{ position: 'absolute', top: '45px', display: { md: 'none' } }}
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


//                <Item sx={{mt: '0'}} >
//                     <ListItemIcon>
//                         <Img src={home}/>
//                     </ListItemIcon>
//                     <ListItemText>
//                         <NavList to='главная'>Главная</NavList>
//                     </ListItemText>
//                 </Item>
//
//                 <Item >
//                     <ListItemIcon>
//                         <Img src={orders}/>
//                     </ListItemIcon>
//                     <ListItemText>
//                         <NavList to='заказы'>Заказы</NavList>
//                     </ListItemText>
//                 </Item>
//                 <Item>
//                     <ListItemIcon>
//                         <Img src={employers}/>
//                     </ListItemIcon>
//                     <ListItemText>
//                         <NavList to='сотрудники'>Сотрудники</NavList>
//                     </ListItemText>
//                 </Item>
//                 <Item>
//                     <ListItemIcon>
//                         <Img src={products}/>
//                     </ListItemIcon>
//                     <ListItemText>
//                         <NavList to='продукты'>Товары</NavList>
//                     </ListItemText>
//                 </Item>
//                 <Item>
//                     <ListItemIcon>
//                         <Img src={statistic}/>
//                     </ListItemIcon>
//                     <ListItemText>
//                         <NavList to='статистика'>Статистка</NavList>
//                     </ListItemText>
//                 </Item>
//                 <Item>
//                     <ListItemIcon>
//                         <Img src={contacts}/>
//                     </ListItemIcon>
//                     <ListItemText>
//                         <NavList to='контакты'>Контакты</NavList>
//                     </ListItemText>
//                 </Item>
//                 <Item sx={{mt: '100px'}}>
//                     <ListItemIcon>
//                         <Img src={exist}/>
//                     </ListItemIcon>
//                     <ListItemText>
//                         <NavList to=''>Выход</NavList>
//                     </ListItemText>
//                 </Item>
//             </List>
//         </Box>
//     );
// export default ResponsiveDrawer;
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
//
// const drawerWidth = 240;
//
// function ResponsiveDrawer(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
//
//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
//
//   const container =
//     window !== undefined ? () => window().document.body : undefined;
//
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Responsive drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': {
//               boxSizing: 'border-box',
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': {
//               boxSizing: 'border-box',
//               width: drawerWidth,
//             },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </Box>
//   );
// }
//
//
// export default ResponsiveDrawer;
