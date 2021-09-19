import React from 'react';
import'../assets/styles/SidebarElement.css'

const SidebarElement = ({title, img, id}) => {

    const chooseTeam = async (e) =>{
        const id_team = e.target.id;
    }

    return(
        <a 
            id={id}
            className="sidebarElement"
            href={`/matches/${id}`}
            // onClick={chooseTeam}
        >
            <p className="teamTitle">
                {title}
            </p>
            {
                img != null
                    && <img src={img} alt={title} className='iconTeam' />
            }
        </a>
    );
}

export { SidebarElement };