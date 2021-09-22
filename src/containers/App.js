import React from 'react';
import { useInitialState } from '../hooks/useInitialState';
import { useUpdateMatches } from '../hooks/useUpdateMatches';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SidebarElement } from '../components/SidebarElement';
import { PrincipalContainer } from '../components/PrincipalContainer';
import { LoadMatches } from '../components/LoadMatches';
import { Footer } from '../components/Footer';
import '../assets/styles/App.css';

function App() {
  const teams = useInitialState().teams;
  const [ loadingMatches, setLoadingMatches] = React.useState(false);
  const [ teamSelected, setTeamSelected] = React.useState(66);
  const { matches, fetchApi } = useUpdateMatches(teamSelected, setLoadingMatches);

  return (

    <div className="App">
        <Header>
          <p>Choose your team</p>
        </Header>
        <Sidebar className="sideBar">
            <span className="space"></span>
            {
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
          !loadingMatches ? <PrincipalContainer matches={matches}/> : <LoadMatches />
        }
        <Footer />
    </div>
  );
}

export default App;
