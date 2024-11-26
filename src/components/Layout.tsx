/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div css={layout}>
            {children}
        </div>
    );
}

const layout = css`
    width: 620.5px;
    background: rgba(243, 244, 246, 1);
`;
export default Layout;