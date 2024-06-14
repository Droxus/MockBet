// import React from 'react';

// const MatchInfo: React.FC = () => {
//   return (
//     <h1>Hello</h1>
//   );
// };

// export default MatchInfo;


import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Card, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

type MatchProps = {
  id: string;
  homeTeam: {
    name: string;
    logo: string;
    score: number;
  };
  awayTeam: {
    name: string;
    logo: string;
    score: number;
  };
  date: string;
};

const MatchInfo: React.FC<MatchProps> = ({ id, homeTeam, awayTeam, date }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const onMatchClick = (name: string) => {
    const path = location.pathname + "/" + name.toLowerCase()
    navigate(path);
  }

  const renderLogo = (logo: string) => {
    return logo ? (
      <img src={logo} alt="logo" className="w-8 h-8" />
    ) : (
      <EmojiEventsIcon className="w-8 h-8" />
    );
  };

  return (
    <Card onClick={() => {onMatchClick(id)}}
     className="w-full max-w-lg h-40 p-1 bg-white-200 border-2 rounded-lg shadow-md my-2">
      <div className="flex items-center h-28 justify-between">
        <div className="flex items-center w-2/4">
          {renderLogo(homeTeam.logo)}
          <div className="ml-1 w-full">
            <Typography className="text-center text-black-500 text-sm" variant="h6">{homeTeam.name}</Typography>
          </div>
        </div>
        <div className="flex items-center text-center">
          <Typography variant="h5" className="text-red-500 text-base w-16">
            {homeTeam.score} - {awayTeam.score}
          </Typography>
        </div>
        <div className="flex items-center w-2/4">
          <div className="mr-1 text-right w-full">
            <Typography className="text-center text-black-500 text-sm" variant="h6">{awayTeam.name}</Typography>
          </div>
          {renderLogo(awayTeam.logo)}
        </div>
      </div>
      <div className="w-full text-center">
        <Typography className="text-black-500 text-xs" variant="body2" color="textSecondary">
          {date}
        </Typography>
      </div>
    </Card>
  );
};

export default MatchInfo;
