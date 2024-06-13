import { Card, CardContent, Typography, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

type TournamentCardProps = {
  logo: string;
  name: string;
  dateRange: string;
};

const Tournament: React.FC<TournamentCardProps> = ({ logo, name, dateRange }) => {
  return(
    <Card className="grid gap-0 grid-rows-1 grid-cols-[64px_minmax(100px,_1fr)_80px] h-16 w-full bg-white-400 border-2 border-black w-256 place-items-center">
      <img src={logo} alt="logo" className="w-12 h-12 mr-4" />
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