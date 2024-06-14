import * as React from 'react';
import TournamentMenuOption from '../../components/TournamentMenuOption';

const menuOptions = [
  {
    id: '1',
    title: 'Matches',
    description: 'Place bets on your favorite team without losing money',
  },
  {
    id: '2',
    title: 'Fantasy',
    description: 'Create your dream team for this gaming weekend',
  },
  {
    id: '3',
    title: 'Pickem',
    description: 'Make your predictions for the final standings',
  },
  {
    id: '4',
    title: 'Leaderboards',
    description: 'Find yourself among friends and other players',
  },
];

const Menu: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {menuOptions.map(({id, title, description}) => (
        <TournamentMenuOption key={id} title={title} description={description}/>
      ))}
    </div>
  );
};

export default Menu;
