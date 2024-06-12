import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './views/home/Home';
import Ladder from './views/ladder/Ladder';
import Favorite from './views/favorite/Favorite';
import Auth from './views/auth/Auth'
import Profile from './views/profile/Profile';
import NoPage from './views/NoPage';
import Navigator from './components/Navigator'


function App() {
  return (
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/" element={<Navigator />}>
          <Route path="/*" element={<Home />} />
          <Route path="/ladder" element={<Ladder />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  );
}

export default App
