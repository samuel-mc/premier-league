import React from 'react';
import'../assets/styles/SidebarElement.css'

const SidebarElement = ({title, img}) => {
    return(
        <a className="sidebarElement">
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