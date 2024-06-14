import { Card, CardContent, Typography, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

type TournamentCardProps = {
  logo: string;
  name: string;
  dateRange: string;
};

const Tournament: React.FC<TournamentCardProps> = ({ logo, name, dateRange }) => {
  return(
    <Card
      className="grid gap-0 grid-rows-1 grid-cols-[64px_minmax(100px,_1fr)_80px] h-16 w-full max-w-lg bg-white-400 border-2 border-black place-items-center">
      {logo ? (
        <img src={logo} alt="logo" className="w-10 h-10 mr-4" />
      ) : (
        <EmojiEventsIcon className="w-10 h-10 mr-4" />
      )}
      <CardContent className="grid grid-rows-[36px_24px] p-0">
        <Typography className="text-m">{name}</Typography>
        <Typography color="textSecondary">{dateRange}</Typography>
      </CardContent>
      <CardContent className="grid grid-rows-[36px_24px] p-0">
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <Typography className="text-sm">Favorite</Typography>
      </CardContent>
    </Card>
  );
}

export default Tournament