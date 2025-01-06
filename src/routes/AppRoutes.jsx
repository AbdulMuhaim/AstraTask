import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AssetHandoverForm from '../pages/AssetHandoverForm';
import AssetHandoverTable from '../pages/AssetHandoverTable';
import MiddleEastMap from '../pages/Locations';

const AppRoutes = () => (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<AssetHandoverForm />} />
      <Route path="/list" element={<AssetHandoverTable />} />
      <Route path="/locations" element={<MiddleEastMap />} />
  </Routes>
);

export default AppRoutes;
