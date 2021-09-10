import React from 'react';
import { MatchesContext } from '../Context/MatchesContext';
import { useInitialState } from '../hooks/useInitialState';
import { Score } from './Score';
import '../assets/styles/Content.css';


const Content = () => {

    const [ matches, setMatches] = React.useState({ matches: [] });
    const { teamSelected } = React.useContext(MatchesContext);

    const teams = useInitialState();

    let index = teams.teams.filter(team => team.id === 64)
    index = index[0].crestUrl;


    console.log("Indice:", index);
    
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
        <div className="content">
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

export { Content };