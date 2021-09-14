import React from 'react';
import { useInitialState } from '../hooks/useInitialState';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SidebarElement } from '../components/SidebarElement';
import { Footer } from '../components/Footer';
import { Home } from '../pages/Home';
import { Matches } from '../pages/Matches';
import '../assets/styles/App.css';

function App() {
  const teams = useInitialState();

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
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/matches/:matchId" component={Matches} />

          </Switch>
        </Router>

        <Footer />
    </div>
  );
}

export default App;
