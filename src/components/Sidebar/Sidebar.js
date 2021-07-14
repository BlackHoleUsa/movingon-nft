import React from 'react';
import './Sidebar.css';
import { sidebarContent } from '../../Assets/Data';
import { Avatar } from '../Avatar/Avatar';
import { Images } from '../../Assets/Images';
import { SidebarItem } from './SidebarItem';

const Sidebar = () => {

    return(

        <div className="sidebar py-4 text-white">
            
            <div className="mx-4 mb-3">
                Logo Here
            </div>

            <span className="mx-4 py-3">Menu</span>

            <div className="app-flex-column">
                {
                    sidebarContent.map((sidebar, index) => (
                        <SidebarItem key={index} nav={sidebar} />
                    ))
                }
            </div>

        </div>

    );

}

export default Sidebar;