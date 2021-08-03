import React from 'react';
import './SectionContainer.css';

export const SectionContainer = (props) => {

    const { className, children, id } = props;

    return(

        <div className={`app-flex-column w-100 section-container ${className}`} id={id}>
            {children}
        </div>

    );

};