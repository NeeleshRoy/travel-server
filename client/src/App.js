import React from 'react';
import './sass/app.scss';

import { CookiesProvider } from 'react-cookie';

import Landing from './components/Landing';

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <Landing />
      </div>
    </CookiesProvider>
  );
}

export default App;
