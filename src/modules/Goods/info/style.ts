import styled from "styled-components";

export const MainImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 800px;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-top: 60px;

  padding-bottom: 60px;
`;

export const ImageWrap = styled.div`
  cursor: pointer;
`;

export const InformationBlock = styled.div<{
  width?: number;
}>`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: ${({ width }) => (width ? `${width}px` : `auto`)};
`;

export const Line = styled.div`
  display: flex;
  gap: 60px;
  width: 100%;
`;

export const FormWrapper = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  max-width: 1400px;
  width: 100%;
  justify-content: center;
  gap: 70px;
  .form {
    width: 100%;
  }
`;
