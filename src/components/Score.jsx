import React from 'react';
import '../assets/styles/Score.css'


const Score = (props) => {

    return(
        <div className="score">
            <p>{props.awayTeam} vs {props.homeTeam}</p>
            <p>{props.awayTeamScore} - {props.homeTeamScore}</p>
            {/* <img src={props.imgAwayTeam} />
            <img src={props.imgHomeTeam} /> */}
        </div>
    )
}

export { Score };