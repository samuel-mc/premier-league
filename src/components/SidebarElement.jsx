import React from 'react';
import { MatchesContext } from '../Context/MatchesContext'
import'../assets/styles/SidebarElement.css'

const SidebarElement = ({title, img, id}) => {

    const { setTeamSelected } = React.useContext(MatchesContext);

    const chooseTeam = async (e) =>{
        const id_team = e.target.id;
        setTeamSelected(id_team);
    }

    return(
        <button 
            id={id}
            className="sidebarElement"
            onClick={chooseTeam}
        >
            <p className="teamTitle">
                {title}
            </p>
            {
                img != null
                    && <img src={img} alt={title} className='iconTeam' />
            }
        </button>
    );
}

export { SidebarElement };