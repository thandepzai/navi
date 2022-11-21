import { NotFound } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import cityApi from './api/cityApi';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  });
  return (
    <div>
      <div>
        <h3 className="text-5xl font-bold text-red-600">{t('Change language')}</h3>
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
