import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '~/styles/global';
import { defaultTheme } from '~/styles/theme';
import AppRoutes from '~/views';
import ModalsContainer from './components/Modal';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router>
          <AppRoutes />
          <ModalsContainer />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
