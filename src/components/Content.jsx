import React from 'react';
import '../assets/styles/Content.css';


const Content = ({children}) => {
    return (
        <div className="content">
            {children}
        </div>
    )
}

export { Content };