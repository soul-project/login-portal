import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Login from './pages/login';
import Register from './pages/register';
import EmailConfirmation from './pages/email-confirmation';
import ResetPassword from './pages/reset-password';
import RequestPasswordReset from './pages/requesst-password-reset';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<EmailConfirmation />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/request-password-reset"
            element={<RequestPasswordReset />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
