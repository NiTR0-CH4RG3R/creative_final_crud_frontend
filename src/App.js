import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Books from './Pages/Books';
import Users from './Pages/Users';
import BurrowRequests from './Pages/BurrowRequests';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Books' element={<Books />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/BurrowRequests' element={<BurrowRequests />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
