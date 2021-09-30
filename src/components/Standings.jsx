import React from 'react';
import '../assets/styles/Standings.css'

const Standings = ({standings}) => {
    
    return (
        <div className="standings-container">
            <table className="standings-table">
                <thead>
                    <td></td>
                    <td className="standings-team-position">Equipo</td>
                    <td>Puntos</td>
                    <td>GF</td>
                    <td>GC</td>
                    <td>DG</td>
                </thead>
                <tbody>
                {
                    standings.standings[0].table.map(position =>
                    <tr>
                        <td>{`${position.position}.`}</td>
                        <td className="standings-team-position">
                            <p className="standings-team-name">
                                {`${position.team.name}`}
                            </p>
                            <img className="standings-team-icon" src={position.team.crestUrl}/>
                        </td>
                        <td className="standings-team-info">{position.points}</td>
                        <td className="standings-team-info">{position.goalsFor}</td>
                        <td className="standings-team-info">{position.goalsAgainst}</td>
                        <td className="standings-team-info">{position.goalDifference}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export { Standings }