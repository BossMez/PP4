import {useState} from 'react';
import Box from '@mui/material/Box'

import Navigation from './Navigation';
import HeaderBar from './HeaderBar';

 function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Box sx={{display: "flex"}}>
    <HeaderBar handleDrawerToggle={handleDrawerToggle} />
<Navigation isOpen={isOpen} handleDrawerToggle ={handleDrawerToggle } />
    </Box>
    
  )
}

export default Header;