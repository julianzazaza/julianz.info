import styled from 'styled-components';

interface Props {
  minimized?: boolean;
}
export const StyledBody = styled.div<Props>`
  display: flex;
  visibility: ${(p) => (p.minimized ? 'hidden' : 'inherit')};
  height: ${(p) => (p.minimized ? '0px' : 'inherit')};
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 24px 0 24px;
  border-top: 1px solid black;
`;
