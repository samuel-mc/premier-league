import React from 'react';
import '../assets/styles/LoadMatches.css'


const LoadMatches = () => {

    return(
        <div className="loadingContainer">
            <p className="text-charging"> Cargando </p>
            <div class="donut"></div>
        </div>
    )
}

export { LoadMatches };