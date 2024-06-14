import * as React from 'react';
import Match from '../../components/Match';
import { getMatches } from '../../fakeDB/matches';

const matches = getMatches();

const Matches: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-1">
      {matches.map(({id, homeTeam, awayTeam, date}) => (
        <Match
          key={id}
          id={id}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          date={date}
        />
      ))}
    </div>
  );
};

export default Matches;
