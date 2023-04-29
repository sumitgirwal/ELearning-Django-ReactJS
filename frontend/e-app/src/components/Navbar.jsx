import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import {Link as Lnk} from 'react-router-dom';

 function Navbar() {
  return (
    <div>
         <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            ELearn
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
               
              sx={{ my: 1, mx: 1.5 }}
            >
               <Lnk to='/'>Home</Lnk>
            </Link>
            <Link
              variant="button"
              color="text.primary"
               
              sx={{ my: 1, mx: 1.5 }}
            >
              <Lnk to='/about'>About</Lnk>
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Cources
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Instructor
            </Link>

         
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Signup
          </Button>
          <Button href="#" variant="contained" sx={{ my: 1, mx: 0 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
