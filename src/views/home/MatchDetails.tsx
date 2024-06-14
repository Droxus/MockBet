import { useLocation } from "react-router-dom";
import BetOptionsList from "../../components/BetOptionsList";
import MatchInfo from "../../components/MatchInfo";
import Loader from "../../components/Loader";
import { getMatch } from "../../fakeDB/matches";
import { useEffect, useState } from "react";

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

function MatchDetails() {
  const [match, setMatch] = useState<MatchProps | null>(null);
  const location = useLocation();

  useEffect(() => {
    const splitPathname = location.pathname.split('/');
    const matchId = splitPathname[splitPathname.length - 1];
    const fetchedMatch = getMatch(matchId) as MatchProps;
    setMatch(fetchedMatch);
  }, [location.pathname]);

  if (!match) {
    return <Loader/>;
  }

  const { id, homeTeam, awayTeam, date } = match;

  return (
    <>
      <MatchInfo id={id} homeTeam={homeTeam} awayTeam={awayTeam} date={date} />
      <BetOptionsList />
    </>
  );
}

export default MatchDetails;
