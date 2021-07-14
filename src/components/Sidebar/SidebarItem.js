import { React } from "react";
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

export const SidebarItem = ({ nav }) => {

    return(

        <NavLink to={`/${nav.route}`} className="nav-item" activeClassName="active-nav-item">

            <div className="app-flex-row align-items-center sidebar-padding px-4 py-3">

                <span className="mr-2 text-blue">{nav.icon}</span>
                <p>{nav.item}</p>

            </div>

        </NavLink>

    );
}