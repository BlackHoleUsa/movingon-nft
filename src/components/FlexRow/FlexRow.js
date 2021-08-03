import React from 'react';

export const FlexRow = (props) => {

    const { className, children } = props;

    return(
        <div className={`app-flex-row w-100 align-items-center ${className}`} {...props}>
            {children}
        </div>
    );
}