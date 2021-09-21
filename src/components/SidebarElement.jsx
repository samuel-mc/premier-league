import React from 'react';
import'../assets/styles/SidebarElement.css'

const SidebarElement = ({title, img, id}) => {

    const chooseTeam = async (e) =>{
        const id_team = e.target.id;
        console.log(id_team);
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
                    && <img id={id} src={img} alt={title} className='iconTeam' />
            }
        </button>
    );
}

export { SidebarElement };