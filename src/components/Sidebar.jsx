import React from "react";
import '../assets/styles/Sidebar.css'

const Sidebar = ({children}) => {
    return (
        <aside className="sideBar">
            {children}
        </aside>
    )
}

export { Sidebar };