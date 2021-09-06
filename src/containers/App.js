import '../assets/styles/App.css';
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
      <Sidebar className="sideBar">
        <span className="space"></span>
        {/* Todo: Hacer asincrona esta mmda */}
        <SidebarElement title="Estadisticas" img={null} />
        {
          teams.teams.map( team => 
            <SidebarElement title={team.name} img={team.crestUrl}  />
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
