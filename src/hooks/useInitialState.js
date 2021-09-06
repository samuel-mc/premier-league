import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ teams, setTeams] = useState();

    useEffect(() => {
        fetch('http://api.football-data.org/v2/competitions/2021/teams', {
            headers: {
                'X-Auth-Token': '66bc51aa24db42129bc764442d7f8527'
            }
        })
        .then(response => response.json())
        .then(data => setTeams(data));
    }, []);
    return teams;
}

export { useInitialState };