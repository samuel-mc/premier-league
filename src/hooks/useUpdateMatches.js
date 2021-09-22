import React from 'react';

const useUpdateMatches = (teamSelected, setLoadingMatches) => {
    const [ matches, setMatches] = React.useState({ matches: [] });
    
    React.useEffect(() => {
        fetchApi(teamSelected);
    }, []);

    const fetchApi = async (teamSelected) => {
        await fetch(`http://api.football-data.org/v2/teams/${teamSelected}/matches?status=FINISHED`, {
            headers: {
                'X-Auth-Token': '66bc51aa24db42129bc764442d7f8527'
            }
        })
        .then(response => response.json())
        .then(data => {
            setMatches(data);
            console.log(data.matches);
            setLoadingMatches(false);
        });
    }

    

    return {
        matches,
        fetchApi
    }
}

export { useUpdateMatches }