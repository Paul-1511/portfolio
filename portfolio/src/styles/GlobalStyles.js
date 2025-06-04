import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    transition: background 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primaryDark};
    }
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
  }

  /* Animaciones básicas */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-out;
  }
`;
