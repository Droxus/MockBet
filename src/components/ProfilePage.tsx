import { Button, Card, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

type ProfilePageProps = {
  username: string;
  id: number;
  friends: number;
  bets: number;
  won: number;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ username, id, friends, bets, won }) => {
  const navigate = useNavigate();

  const onProfileBtnClick = (path: string) => {
    path = "/profile" + path;
    navigate(path);
  }

  return (
    <div className="flex flex-col items-center bg-white-200 min-h-screen h-full w-full p-4">
      <Card className="p-4 w-full h-full max-w-md bg-peach-500">
        <div className="flex items-center justify-center mb-4">
          <AccountCircleIcon className='w-24 h-24'/>
        </div>
        <Typography variant="h6" className="text-center mb-2">{username}</Typography>
        <Typography className="text-center mb-2">ID: {id}</Typography>
        <Typography className="text-center mb-2">Friends: {friends}</Typography>
        <Typography className="text-center mb-2">Bets: {bets}</Typography>
        <Typography className="text-center mb-2">Won: {won}</Typography>
        <div className="flex flex-col items-center mt-4">
          <Button onClick={() => {onProfileBtnClick("/edit")}} variant="contained" className="w-full my-2 bg-gray-400">Edit</Button>
          <Button onClick={() => {onProfileBtnClick("/friends")}} variant="contained" className="w-full my-2 bg-gray-400">Friends</Button>
          <Button onClick={() => {onProfileBtnClick("/bets")}} variant="contained" className="w-full my-2 bg-gray-400">Bets</Button>
          <Button onClick={() => {onProfileBtnClick("/balance")}} variant="contained" className="w-full my-2 bg-gray-400">Balance</Button>
          <Button onClick={() => {onProfileBtnClick("/logout")}} variant="contained" className="w-full my-2 bg-gray-400">Log out</Button>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
