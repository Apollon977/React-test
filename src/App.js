import React from 'react'
import { Routes, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Home from './Pages/Home';
import CoinPage from './Pages/CoinPage';
import Page404 from './Pages/Page404';

import './App.css';

import Alert from './components/Alert';

function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  }))
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Header />

      <Routes>
         <Route path="/Home" element={<Home  />}/>
          <Route path="/" element={<Home  />}/>
          <Route path="/coins/:id" element={<CoinPage />}/>
          <Route path="*" element={<Page404 />}/>
      </Routes>
      <Alert />
    </div>
  );
}

export default App;
