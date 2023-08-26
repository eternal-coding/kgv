import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { HashLink } from 'react-router-hash-link';
import { Stack } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Menu(props) {

  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={()=>{props.handleClose()}}
        TransitionComponent={Transition}
      >
        <button className='lite close' onClick={()=>{props.handleClose()}}> Close </button>
        <div style={{background:'black', height:'100%', width:'100%', display:'flex', alignItems:'end', justifyContent:'start'}}>
            <Stack direction="column" spacing={2} alignItems={'left'} padding={'5%'}>
                <Typography variant='h1' fontWeight={700} color={'white'}> K G V </Typography>
                <a href='/works' className='link large'> Works &#8599; </a>
                <a href='/aboutme' className='link large'> About &#8599; </a>
                <HashLink to='/aboutme#g-contact' className='large'>  Contact &#8599; </HashLink>  
            </Stack>
        </div>
        
      </Dialog>
    </div>
  );
}