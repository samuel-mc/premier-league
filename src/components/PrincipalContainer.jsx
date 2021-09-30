import React from 'react';
import { useInitialState } from '../hooks/useInitialState';

import { Score } from '../components/Score';

import '../assets/styles/PrincipalContainer.css'

const PrincipalContainer =  ({matches }) => {

    const teams = useInitialState().teams;

    // const getIcon = async (id_team) =>{
    //     const url_team = teams.teams.filter(team => team.id === id_team);
    //     console.log(url_team[0].crestUrl);
    //     return(url_team[0].crestUrl);
    // }

    return(
        <main>
            <div className="matches">
            {
                matches.matches.map(match =>
                    <Score
                        // imgAwayTeam={getIcon(match.awayTeam.id)}
                        // imgHomeTeam={getIcon(match.homeTeam.id)}
                        awayTeam={match.awayTeam.name}
                        homeTeam={match.homeTeam.name}
                        awayTeamScore={match.score.fullTime.awayTeam}
                        homeTeamScore={match.score.fullTime.homeTeam}
                        key={match.id}
                    />
                )
            }
            </div>
        </main>
    )
}

export { PrincipalContainer }