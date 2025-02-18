import styled from 'styled-components';

interface Props {
  top: string;
  left: string;
  bottom: string;
  right: string;
}
export const Wrapper = styled.div<Props>`
  width: 700px;
  background-color: #ffffff;
  border: 1px solid #cecefb;
  outline: 1px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  position: absolute;
  top: ${(p) => p.top};
  left: ${(p) => p.left};
  bottom: ${(p) => p.bottom};
  right: ${(p) => p.right};
`;

export default Wrapper;
