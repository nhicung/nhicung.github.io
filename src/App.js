import React, { Suspense } from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Work from './pages/MyWork';
import Contact from './pages/Contact';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ResponsiveMenu from './components/ResponsiveMenu.js';

const theme = createMuiTheme({

});

function Page() {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">

        <HashRouter basename='/'>
          <ResponsiveMenu />
          <Route exact path={'/'} component={Home} />
          <Route path={'/about-me'} component={About} />
          <Route path={'/my-work'} component={Work} />
          <Route path={'/contact'} component={Contact} />
        </HashRouter>
      </div>
      <div>
 
      </div>
      
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <Suspense fallback="loading">
      <Page />
    </Suspense>
  );
}
