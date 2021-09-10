import React from 'react';

const MatchesContext = React.createContext('');

const MatchesProvider = (props) => {
    const [teamSelected, setTeamSelected] = React.useState(66);
    const [searchValue, setSearchValue] = React.useState('');

    return(
        <MatchesContext.Provider value = {{
                teamSelected,
                setTeamSelected
        }}>
            {props.children}
        </MatchesContext.Provider>
    )
}

export { MatchesContext, MatchesProvider };