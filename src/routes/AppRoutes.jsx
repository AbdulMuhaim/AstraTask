import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AssetHandoverForm from '../pages/AssetHandoverForm';
import AssetHandoverTable from '../pages/AssetHandoverTable';
// import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<AssetHandoverForm />} />
      <Route path="/list" element={<AssetHandoverTable />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);

export default AppRoutes;
