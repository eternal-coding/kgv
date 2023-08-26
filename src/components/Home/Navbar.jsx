import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Menu from './Menu';

export default function Navbar(props) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background:'black', boxShadow:'none', padding:'2% 5%' }}>
        <Toolbar style={{padding:0}}>
          <Typography variant="h5" fontWeight={700} fontFamily={'DM Sans'} component="div" sx={{ flexGrow: 1 }}>
            <a href='.'>KGV</a>
          </Typography>
            <Box sx={{ display: {xs:'none', md:'block'} }}>
              <Stack direction="row" spacing={2} alignItems={'center'}>
                  <a href='/works' className='link'> Works </a>
                  <a href='/aboutme' className='link'> About </a>
                  <HashLink to='/aboutme#g-contact'> 
                    <button className='lite link'> Contact </button>  
                  </HashLink>
              </Stack>
            </Box>
            <Box sx={{ display: {xs:'block', md:'none'} }}>
              <button onClick={handleClickOpen} className='lite'> Menu </button>
              <Menu open={open} handleClose={handleClose} />
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
