import { useEffect, useState } from 'react';
import { Typography, List, ListItem, Paper } from '@mui/material';
import { formatDateRange } from '../../tool'
import getTournaments from '../../fakeDB/tournaments';
import Loader from '../../components/Loader';
import Tournament from '../../components/Tournament';

const Tournaments = () => {
  const [tournaments, setTournaments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const tournaments = await getTournaments();
        setTournaments(tournaments.tournaments);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  return (
    <div className="">
      <Typography variant="h3" component="h3" gutterBottom>
        Tournaments Page
      </Typography>
      <Paper elevation={3} className="p-1">
        <List>
          {tournaments.map((tournament) => (
            <ListItem key={tournament.id} className="mb-4">
              <Tournament 
                logo={tournament.logo}
                name={tournament.name}
                dateRange={formatDateRange(tournament.date.start, tournament.date.finish)}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default Tournaments;
