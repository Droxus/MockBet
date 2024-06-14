import { Routes, Route, Outlet } from 'react-router-dom';
import Balance from './Balance';
import Bets from './Bets';
import Friends from './Friends';
import NoPage from '../NoPage';
import ProfilePage from '../../components/ProfilePage';

function Profile() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProfilePage username="Droxus288337" id={628348273} friends={9999} bets={9999} won={4444}  />}/>
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
