import './App.css';
import Home from './pages/admin/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/admin__dashboard/Dashboard';
import Users from './pages/admin__users/Users';
import UserDetail from './pages/admin__users/UserDetail';
import Settings from './pages/admin__settings/Settings';
import NotFound from './pages/admin__notfound/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserDetail />} />
          <Route path='setting' element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
