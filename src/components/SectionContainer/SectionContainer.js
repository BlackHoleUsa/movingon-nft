import React from 'react';
import './SectionContainer.css';

export const SectionContainer = ({ className, children }) => {

    return(

        <div className={`app-flex-column w-100 section-container ${className}`}>
            {children}
        </div>

    );

};