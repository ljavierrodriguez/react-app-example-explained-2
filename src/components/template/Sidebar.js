import React from 'react';

const Sidebar = ({ children }) => {
    return (
        <>
            <div className="col-lg-4">
                {children}
            </div>
        </>
    )
}

export default Sidebar;