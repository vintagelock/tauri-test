import { Route, Routes } from 'react-router-dom';

// Route pages
import DummyPage from '../pages/dummy';
import DashboardPage from '../pages/dashboard';

const RouteSwitcher = () => {
  return (
    <Routes>
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/" element={<DashboardPage />} />
      <Route path="/users" element={<DummyPage />} />

      <Route path="/about" element={<DummyPage />} />
      <Route path="/debug" element={<DummyPage />} />
    </Routes>
  );
};

export default RouteSwitcher;
