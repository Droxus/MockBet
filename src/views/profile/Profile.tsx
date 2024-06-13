import { Routes, Route, Outlet } from 'react-router-dom';
import Balance from './Balance';
import Bets from './Bets';
import Friends from './Friends';
import NoPage from '../NoPage';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Routes>
        <Route path="/balance" element={<Balance />}/>
        <Route path="/bets" element={<Bets />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="profile/*" element={<NoPage />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Profile;
