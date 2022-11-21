import { NotFound } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import cityApi from './api/cityApi';

function App() {
  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  });
  return (
    <div>
      <div>
        <h3 className="bg-slate-700">Than</h3>
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
