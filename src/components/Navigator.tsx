import * as React from 'react';
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import GradeIcon from '@mui/icons-material/Grade';

export default function Navigator() {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = React.useState(location.pathname);

  React.useEffect(() => {
    if (location.pathname == "/") {
      navigate("/tournaments");
    }
    
    setValue(location.pathname);
  }, [location]);


  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <>
      <BottomNavigation 
        sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }} 
        value={value} 
        onChange={handleChange}
        >
        <BottomNavigationAction
          label="Home"
          value="/tournaments"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Ladder"
          value="/ladder"
          icon={<LeaderboardIcon />}
        />
        <BottomNavigationAction
          label="Favorite"
          value="/favorite"
          icon={<GradeIcon />}
        />
        <BottomNavigationAction label="Profile" value="/profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
      <Outlet />
    </>
  );
}