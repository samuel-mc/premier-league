import { useState, useEffect } from 'react';

const useInitialState = (leagueSelected, setLoadingMatches) => {
    const [ teams, setTeams] = useState({ teams: [] });
    const [ standings, setStandings ] = useState({ standings: []})

    useEffect(() => {
        fetchApi();
    }, [leagueSelected]);

    const fetchApi = async () => {
        await fetch(`http://api.football-data.org/v2/competitions/${leagueSelected}/teams`, {
            headers: {
                'X-Auth-Token': '66bc51aa24db42129bc764442d7f8527'
            }
        })
        .then(response => response.json())
        .then(data => setTeams(data));

        await fetch(`http://api.football-data.org/v2/competitions/${leagueSelected}/standings`, {
                headers: {
                    'X-Auth-Token': '66bc51aa24db42129bc764442d7f8527'
                }
            })
        .then(response => response.json())
        .then(data => {
            setStandings(data);
        });
        // setLoadingMatches(false);
    }

    return {teams, standings };
}

export { useInitialState };