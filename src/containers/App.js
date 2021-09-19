import React from 'react';
import { useInitialState } from '../hooks/useInitialState';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SidebarElement } from '../components/SidebarElement';
import { PrincipalContainer } from '../components/PrincipalContainer';
import { Footer } from '../components/Footer';
import '../assets/styles/App.css';

function App() {
  const teams = useInitialState().teams;

  return (

    <div className="App">
        <Header>
          <p>Choose your team</p>
        </Header>
        <Sidebar className="sideBar">
            <span className="space"></span>
            {
                teams.teams.map( team => 
                <SidebarElement title={team.name} img={team.crestUrl} key={team.id} id={team.id} />
                )
            }
        </Sidebar>
        <PrincipalContainer>
          <p>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</p>
        </PrincipalContainer>

        <Footer />
    </div>
  );
}

export default App;
