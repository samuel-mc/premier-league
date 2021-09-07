import '../assets/styles/App.css';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SidebarElement } from '../components/SidebarElement';
import { Content } from '../components/Content';
import { useInitialState } from '../hooks/useInitialState'
import React from 'react';

function App() {
  const teams = useInitialState();
  console.log(teams)

  return (
    <div className="App">
      <Header>
        <p>Chido</p>
      </Header>
      <Sidebar className="sideBar">
        <span className="space"></span>
        <SidebarElement title="Estadisticas" img={null} />
        {
          teams.teams.map( team => 
            <SidebarElement title={team.name} img={team.crestUrl} key={team.id}  />
          )
        }
      </Sidebar>
      <Content>
        <p>Proof</p>
      </Content>
    </div>
  );
}

export default App;
