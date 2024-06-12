import { Routes, Route, Outlet } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import NoPage from '../NoPage';

function Auth() {
  return (
    <div>
      <h1>Auth</h1>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Auth;
