import React from 'react';
import './layouts.css';

export const Layout2Cols = ({ wleft = '50%', wright = '50%', children }) => (
    <div className="Layout2Cols">
        {children.length === 2 && <>
            <div style={{ width: wleft }}>{children[0]}</div>
            <div style={{ width: wright }}>{children[1]}</div>
        </>}
    </div>
);