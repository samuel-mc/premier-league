import React from 'react';
import { useInitialState } from '../hooks/useInitialState';

import { Score } from '../components/Score';

import '../assets/styles/PrincipalContainer.css'

const PrincipalContainer =  (props) => {

    const teams = useInitialState().teams;
    const teamSelected = useInitialState().teamSelected;

    console.log(teamSelected)

    const [ matches, setMatches] = React.useState({ matches: [] });
    
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

    const getIcon = async (id_team) =>{
        const url_team = teams.teams.filter(team => team.id == id_team);
        console.log(url_team[0].crestUrl);
        return(url_team[0].crestUrl);
    }

    return(
        <main>
            <div className="matches">
                <p>Partidos</p>
            {
                // matches.matches.map(match =>
                //     <Score
                //         // imgAwayTeam={getIcon(match.awayTeam.id)}
                //         // imgHomeTeam={getIcon(match.homeTeam.id)}
                //         awayTeam={match.awayTeam.name}
                //         homeTeam={match.homeTeam.name}
                //         awayTeamScore={match.score.fullTime.awayTeam}
                //         homeTeamScore={match.score.fullTime.homeTeam}
                //         key={match.id}
                //     />
                // )
            }
            </div>
        </main>
    )
}

export { PrincipalContainer }