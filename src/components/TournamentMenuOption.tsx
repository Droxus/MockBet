import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Card, CardContent, Typography } from '@mui/material';

type TournamentMenuOptionProps = {
  title: string;
  description: string;
};

const TournamentMenuOption: React.FC<TournamentMenuOptionProps> = ({title, description}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onMenuOptionClick = (name: string) => {
    const splitedPath = location.pathname.split("/")
    splitedPath.pop()
    const joinedPath = splitedPath.join("/");
    const path = joinedPath + "/" + name.toLowerCase()
    navigate(path);
  }

  return (
    <Card
    onClick={() => {onMenuOptionClick(title)}}
    className="flex items-center w-full max-w-lg p-4 bg-gray-200 rounded-lg shadow-md"
  >
    <EmojiEventsIcon className="w-12 h-12 mr-4" />
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
  );
}

export default TournamentMenuOption