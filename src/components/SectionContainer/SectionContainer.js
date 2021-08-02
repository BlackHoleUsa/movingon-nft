import React from 'react';

export const SectionContainer = ({ className, children }) => {

    return(

        <div className={`app-flex-column w-100 py-5 ${className}`}>
            {children}
        </div>

    );

};