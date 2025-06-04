import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const cardStyle = css`
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const textEllipsis = (lines = 1) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const responsive = {
  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (max-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`
};