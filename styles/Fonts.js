import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Gordita';
      src: url('/fonts/Gordita Regular.woff');
      src:
        local('Gordita Regular'),
        url('/fonts/Gordita Regular.woff') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Gordita';
      src: url('/fonts/Gordita Medium.woff');
      src:
        local('Gordita Medium'),
        url('/fonts/Gordita Medium.woff') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Gordita';
      src: url('/fonts/Gordita Bold.woff');
      src:
        local('Gordita Bold'),
        url('/fonts/Gordita Bold.woff') format('truetype');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    `}
  />
);

export default Fonts;
