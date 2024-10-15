/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';

function Navigation({
  isOpen = false,
  handleDrawerToggle = () =>
    console.error('no handleDrawerToggle function provided'),
  drawerWidth = 240,
}) {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography component="body" variant="h6" sx={{ my: 2 }}>
            CarsApp
          </Typography>
          <Divider />
          <List>
            <ListItem>
              <ListItemButton
                sx={{ textAlign: 'left' }}
                component={NavLink}
                to="/add"
              >
                <ListItemText primary={'Add Car'} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={{ textAlign: 'left' }}
                component={NavLink}
                to="/"
              >
                <ListItemText primary={'list Car'} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navigation;
