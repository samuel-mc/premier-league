import React from 'react';
import { useInitialState } from '../hooks/useInitialState';
import { useUpdateMatches } from '../hooks/useUpdateMatches';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SidebarElement } from '../components/SidebarElement';
import { Standings } from '../components/Standings'
import { PrincipalContainer } from '../components/PrincipalContainer';
import { LoadMatches } from '../components/LoadMatches';
import { Footer } from '../components/Footer';
import '../assets/styles/App.css';

function App() {
  const [ loadingMatches, setLoadingMatches] = React.useState(true);
  const [ leagueSelected, setLeagueSelected ] = React.useState(2021);
  const [ teamSelected, setTeamSelected] = React.useState(66);
  const { matches, fetchApi } = useUpdateMatches(leagueSelected, teamSelected, setLoadingMatches);

  const { teams, standings } = useInitialState(leagueSelected, setLoadingMatches);

  return (

    <div className="App">
        <Header
          leagueSelected={leagueSelected}
          setLeagueSelected={setLeagueSelected}
          setLoadingMatches={setLoadingMatches}
        />
        <Sidebar className="sideBar">
            <span className="space"></span>
            <SidebarElement
              title={"Posiciones"}
              id={"standings"}
              setTeamSelected={setTeamSelected}
              key={"0"}
              teamSelected={teamSelected}
              fetchApi={fetchApi}
              setLoadingMatches={setLoadingMatches}
            />

            {!loadingMatches &&
                teams.teams.map( team => 
                  <SidebarElement 
                    title={team.name}
                    img={team.crestUrl}
                    key={team.id}
                    id={team.id}
                    setTeamSelected={setTeamSelected}
                    teamSelected={teamSelected}
                    fetchApi={fetchApi}
                    setLoadingMatches={setLoadingMatches}
                  />
                )
            }
        </Sidebar>
        {
          !loadingMatches
            ?
              teamSelected === "standings"
                ? <Standings standings={standings}/>
                : <PrincipalContainer matches={matches} teamSelected={teamSelected}/>
            : <LoadMatches />
        }
        <Footer />
    </div>
  );
}

export default App;
