import React from 'react';

export const FlexRow = ({ className, children }) => {
    return(
        <div className={`app-flex-row w-100 align-items-center ${className}`}>
            {children}
        </div>
    );
}