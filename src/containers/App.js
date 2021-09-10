import '../assets/styles/App.css';
import { MatchesProvider } from '../Context/MatchesContext'
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SidebarElement } from '../components/SidebarElement';
import { Content } from '../components/Content';
import { Score } from '../components/Score';
import { Footer } from '../components/Footer';
import { useInitialState } from '../hooks/useInitialState'
import React from 'react';

function App() {
  const teams = useInitialState();

  return (
    <div className="App">
      <MatchesProvider>
        <Header>
          <p>Choose your team</p>
        </Header>
        <Sidebar className="sideBar">
          <span className="space"></span>
          <SidebarElement title="Estadisticas" img={null} />
          {
            teams.teams.map( team => 
              <SidebarElement title={team.name} img={team.crestUrl} key={team.id} id={team.id} />
            )
          }
        </Sidebar>
        <Content>
          <Score team="manu"/>
        </Content>
        <Footer />
      </MatchesProvider>
    </div>
  );
}

export default App;
