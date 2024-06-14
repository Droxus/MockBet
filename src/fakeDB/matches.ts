// {
//   "matches": {
//     "00001": {
//       "tournamentName": "UPL",
//       "date": "2024-06-09T15:20:00Z",
//       "status": "finished",
//       "teamA": {
//         "name": "Dynamo Kyiv",
//         "icon": "undefined",
//         "score": 12
//       },
//       "teamB": {
//         "name": "Shakhtar Donetsk",
//         "icon": "undefined",
//         "score": 12
//       }
//     },
//     "00002": {
//       "tournamentName": "UPL",
//       "date": "2024-06-10T18:00:00Z",
//       "status": "upcoming",
//       "teamA": {
//         "name": "Zorya Luhansk",
//         "icon": "undefined",
//         "score": 4
//       },
//       "teamB": {
//         "name": "Vorskla Poltava",
//         "icon": "undefined",
//         "score": 7
//       }
//     },
//     "00003": {
//       "tournamentName": "Premier League",
//       "date": "2024-06-11T20:00:00Z",
//       "status": "finished",
//       "teamA": {
//         "name": "Manchester United",
//         "icon": "undefined",
//         "score": 2
//       },
//       "teamB": {
//         "name": "Liverpool",
//         "icon": "undefined",
//         "score": 3
//       }
//     },
//     "00004": {
//       "tournamentName": "Premier League",
//       "date": "2024-06-12T17:00:00Z",
//       "status": "finished",
//       "teamA": {
//         "name": "Chelsea",
//         "icon": "undefined",
//         "score": 1
//       },
//       "teamB": {
//         "name": "Arsenal",
//         "icon": "undefined",
//         "score": 1
//       }
//     },
//     "00005": {
//       "tournamentName": "UPL",
//       "date": "2024-06-13T19:45:00Z",
//       "status": "finished",
//       "teamA": {
//         "name": "Metalist Kharkiv",
//         "icon": "undefined",
//         "score": 0
//       },
//       "teamB": {
//         "name": "Dnipro-1",
//         "icon": "undefined",
//         "score": 2
//       }
//     },
//     "00006": {
//       "tournamentName": "Premier League",
//       "date": "2024-06-14T14:30:00Z",
//       "status": "upcoming",
//       "teamA": {
//         "name": "Manchester City",
//         "icon": "undefined",
//         "score": null
//       },
//       "teamB": {
//         "name": "Tottenham Hotspur",
//         "icon": "undefined",
//         "score": null
//       }
//     },
//     "00007": {
//       "tournamentName": "UPL",
//       "date": "2024-06-15T16:00:00Z",
//       "status": "upcoming",
//       "teamA": {
//         "name": "Kolos Kovalivka",
//         "icon": "undefined",
//         "score": null
//       },
//       "teamB": {
//         "name": "Oleksandriya",
//         "icon": "undefined",
//         "score": null
//       }
//     },
//     "00008": {
//       "tournamentName": "Premier League",
//       "date": "2024-06-16T18:00:00Z",
//       "status": "finished",
//       "teamA": {
//         "name": "Leicester City",
//         "icon": "undefined",
//         "score": 5
//       },
//       "teamB": {
//         "name": "West Ham United",
//         "icon": "undefined",
//         "score": 4
//       }
//     },
//     "00009": {
//       "tournamentName": "UPL",
//       "date": "2024-06-17T21:00:00Z",
//       "status": "finished",
//       "teamA": {
//         "name": "Mariupol",
//         "icon": "undefined",
//         "score": 3
//       },
//       "teamB": {
//         "name": "Minaj",
//         "icon": "undefined",
//         "score": 3
//       }
//     },
//     "00010": {
//       "tournamentName": "Premier League",
//       "date": "2024-06-18T22:00:00Z",
//       "status": "upcoming",
//       "teamA": {
//         "name": "Everton",
//         "icon": "undefined",
//         "score": null
//       },
//       "teamB": {
//         "name": "Southampton",
//         "icon": "undefined",
//         "score": null
//       }
//     }
//   }
// }

export function getMatches() {
  return [
    {
      id: '1',
      homeTeam: { name: 'Dynamo Kyiv', logo: '', score: 5 },
      awayTeam: { name: 'Shakhtar Donetsk', logo: '', score: 12 },
      date: 'June 9th 15:20',
    },
    {
      id: '2',
      homeTeam: { name: 'Dynamo Kyiv', logo: '', score: 12 },
      awayTeam: { name: 'Shakhtar Donetsk', logo: '', score: 5 },
      date: 'June 9th 15:20',
    },
    {
      id: '3',
      homeTeam: { name: 'Dynamo Kyiv', logo: '', score: 12 },
      awayTeam: { name: 'Shakhtar Donetsk', logo: '', score: 12 },
      date: 'June 9th 15:20',
    },
  ];
}

export function getMatch(id: string) {
  const matches = getMatches();

  const match  = matches.find(e => e.id == id)
  
  return match;
}