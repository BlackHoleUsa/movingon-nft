import React from 'react';

const BorderBox = ({ children, className, adjust, feature }) => {
    
    return(

        <div className={`${ !adjust ? 'p-2' : ''  } ${className}`} style={{ 
            border: !adjust ? '3px solid var(--lightPurple)' : 'none'
        }}>

            <div className={`rounded app-flex-column ${ feature ? 'bg-secondary' : 'bg-lightSecondary' } `}>
                { children }
            </div>

        </div>

    );

}
 
export default BorderBox;