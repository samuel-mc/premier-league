import React from 'react';
import { Score } from '../components/Score';
import '../assets/styles/Matches.css'


const Matches = (props) => {
    const [ matches, setMatches] = React.useState({ matches: [] });
    const teamSelected = props.match.params.matchId;
    
    React.useEffect(() => {
        fetchApi();
    }, []);
    
    const fetchApi = async () => {
        await fetch(`http://api.football-data.org/v2/teams/${teamSelected}/matches?status=FINISHED`, {
            headers: {
                'X-Auth-Token': '66bc51aa24db42129bc764442d7f8527'
            }
        })
        .then(response => response.json())
        .then(data => setMatches(data));
        
    }
    
    return (
        <div className="matches">
          {
              matches.matches.map(match =>
                <Score
                awayTeam={match.awayTeam.name}
                homeTeam={match.homeTeam.name}
                awayTeamScore={match.score.fullTime.awayTeam}
                homeTeamScore={match.score.fullTime.homeTeam}
                key={match.id}
                />
            )
          }
        </div>
    )
}

export { Matches };