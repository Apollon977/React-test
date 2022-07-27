import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  makeStyles,
  createTheme,
  ThemeProvider,
} from '@material-ui/core';

import { CryptoState } from '../../CryptoContext';

import AuthModal from '../Auth/AuthModal';
import UserSidebar from '../Auth/UserSidebar';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  navbar: {
    justifyContent: 'space-between',
  },
}));

const Header = () => {
  const classes = useStyles();
  const { currency, setCurrency, user } = CryptoState();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar className={classes.navbar}>
            <Link to="/">
              <Typography variant="h6" className={classes.title}>
                Cryptomida
              </Typography>
            </Link>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
                marginLeft: 789,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}>
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'RUB'}>RUB</MenuItem>
            </Select>
            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
