/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

/** CSS 초기화 */
function GlobalCss() {
    return (
        <Global
            styles={css`
            /* Reset CSS */
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
      
            html, body {
              height: 100%;
            }
      
            body {
              line-height: 1.5;
              font-family: 'Arial', sans-serif;
              background-color: #f9f9f9;
              color: #333;
            }
      
            a {
              text-decoration: none;
              color: inherit;
            }
      
            ul, ol {
              list-style: none;
            }
      
            img, video {
              max-width: 100%;
              display: block;
            }
          `}
        />

    )
}

export default GlobalCss;
