import React from 'react';
import '../assets/styles/LoadMatches.css'


const LoadMatches = () => {

    return(
        <div className="loadingContainer">
            <div className="scoreLoading">
                <p> Cargando ... </p>
            </div>
        </div>
    )
}

export { LoadMatches };