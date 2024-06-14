import { Routes, Route, Outlet } from 'react-router-dom';
import Tournaments from './Tournaments';
import Matches from './Matches';
import MatchDetails from './MatchDetails';
import Menu from './Menu'
import Fantasy from './Fantasy';
import Pickem from './Pickem';
import Ladder from './Ladder';
import NoPage from '../NoPage';

function Home() {
  return (
    <div className='w-full h-full m-0'>
      <Routes>
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="tournaments/:tournamentId/menu" element={<Menu />} />
        <Route path="tournaments/:tournamentId/fantasy" element={<Fantasy />} />
        <Route path="tournaments/:tournamentId/pickem" element={<Pickem />} />
        <Route path="tournaments/:tournamentId/leaderboards" element={<Ladder />} />
        <Route path="tournaments/:tournamentId/matches" element={<Matches />} />
        <Route path="tournaments/:tournamentId/matches/:matchId" element={<MatchDetails />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Home;
