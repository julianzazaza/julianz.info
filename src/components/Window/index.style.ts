import styled from 'styled-components';

interface Props {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  zIndex?: string;
}
export const Wrapper = styled.div<Props>`
  width: fit-content;
  height: fit-content;
  background-color: #ffffff;
  border: 1px solid #cecefb;
  outline: 1px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  position: absolute;
  top: ${(p) => p?.top ?? 'inherit'};
  left: ${(p) => p?.left ?? 'inherit'};
  bottom: ${(p) => p?.bottom ?? 'inherit'};
  right: ${(p) => p?.right ?? 'inherit'};
  z-index: ${(p) => p?.zIndex ?? 'inherit'};
`;

export default Wrapper;
