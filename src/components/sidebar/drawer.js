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
import employers from '../../assets/img/users.svg'
import contacts from '../../assets/img/userI.svg'
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import IconButton from "@mui/material/IconButton";


const drawerWidth = 260;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const Item = styled(ListItem)`
   width: 205px;
   display: 'block';
   margin: 0 15px 27px 15px;
   padding: 8px 5px 8px 18px;
   &: hover {
   background: #E6F0E6;
   border-radius: 20px;
   }
  `;
    const NavList = styled(NavLink)`
   font-size: 18px;
   font-weight: 500;
   color: #000000;
   text-decoration: none;
   &: hover {
   color: #487349;
   }
  `;
    const Img = styled('img')`
    width:'20';
    height:'23px';
  `;
    const drawer = (
        <Box  >
            <Toolbar />
            <List>
                <Item sx={{mt: '0'}} >
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
                        <NavList to='orders'>Заказы</NavList>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <Img src={employers}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to='employers'>Сотрудники</NavList>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <Img src={products}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to='products'>Товары</NavList>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <Img src={statistic}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to='statistics'>Статистка</NavList>
                    </ListItemText>
                </Item>
                <Item>
                    <ListItemIcon>
                        <Img src={contacts}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to='contacts'>Контакты</NavList>
                    </ListItemText>
                </Item>
                <Item sx={{mt: '140px'}}>
                    <ListItemIcon>
                        <Img src={exist}/>
                    </ListItemIcon>
                    <ListItemText>
                        <NavList to='exist'>Выход</NavList>
                    </ListItemText>
                </Item>
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
                            font-size='95px'
                            onClick={handleDrawerToggle}
                            sx={{ position: 'absolute', top: '45px', display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                <Box
                    component="nav"
                    sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
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


//
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
