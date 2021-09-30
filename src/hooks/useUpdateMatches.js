import React from 'react';

const useUpdateMatches = (teamSelected, setLoadingMatches) => {
    const [ matches, setMatches] = React.useState({ matches: [] });
    const [ standings, setStandings ] = React.useState({ standings: []});

    React.useEffect(() => {
        fetchApi(teamSelected);
    }, []);

    const fetchApi = async (teamSelected) => {
        if (teamSelected === "standings") {
                await fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {
                headers: {
                    'X-Auth-Token': '66bc51aa24db42129bc764442d7f8527'
                }
            })
            .then(response => response.json())
            .then(data => {
                setStandings(data);
                console.log(data.standings[0].table);
                console.log(teamSelected);
                setLoadingMatches(false);
            });
        } else {
            await fetch(`http://api.football-data.org/v2/teams/${teamSelected}/matches?status=FINISHED`, {
                headers: {
                    'X-Auth-Token': '66bc51aa24db42129bc764442d7f8527'
                }
            })
            .then(response => response.json())
            .then(data => {
                setMatches(data);
                setLoadingMatches(false);
            });
        }
    }

    

    return {
        matches,
        standings,
        fetchApi
    }
}

export { useUpdateMatches }