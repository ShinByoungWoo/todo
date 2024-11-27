/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

/** 모바일 사이즈 크기의 레이아웃 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div css={layout}>
            {children}
        </div>
    );
}

const layout = css`
    width: 572.5px;
    height: 100vh;
    background: rgba(243, 244, 246, 1);
    display: grid;
    justify-content: center;
    padding: 24px;
    margin: 0 auto;
`;
export default Layout;