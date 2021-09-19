import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ teams, setTeams] = useState({ teams: [] });
    const [ teamSelected, setTeamSelected] = useState(66);

    
    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        await fetch('http://api.football-data.org/v2/competitions/2021/teams', {
            headers: {
                'X-Auth-Token': '66bc51aa24db42129bc764442d7f8527'
            }
        })
        .then(response => response.json())
        .then(data => setTeams(data));

    }

    return {teams, teamSelected};
}

export { useInitialState };