import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 50px;
  flex-direction: column;
`;

export const Button = styled.button``;

export const Input = styled.input``;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
`;
export const Flex = styled.div<{
  direction?: string;
  gap?: number;
}>`
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : `row`)};
  gap: ${({ gap }) => (gap ? `${gap}px` : `10px`)};
  align-items: center;
`;
