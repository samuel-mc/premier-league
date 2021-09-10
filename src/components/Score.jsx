import React from 'react';


const Score = (props) => {

    return(
        <div>
            <p>{props.awayTeam} vs {props.homeTeam}</p>
            <p>{props.awayTeamScore} - {props.homeTeamScore}</p>
        </div>
    )
}

export { Score };