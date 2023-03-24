import styled from "styled-components";
import { Link } from "react-router-dom";
import { widthSize } from "../../../style/sizes";
import { colors } from "../../../style/colors";
import { TAlign } from "../interface";

export interface IsSelectOpen {
  isOpen: boolean;
  disabled?: boolean;
}

export const TableWrapper = styled.div`
  width: 100%;
  box-shadow: 0px 4px 30px #edf0f1;
  color: ${colors.black};
  border: 1px solid ${colors.grey.grey20};
  overflow: auto;

  ::-webkit-scrollbar-track {
    background-color: ${colors.white};
  }

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.grey.grey30};
  }

  .limit {
    min-width: 1300px;
  }
  @media screen and (${widthSize.w_850}) {
    .limit {
      min-width: 100%;
    }
  }
`;

export const HeaderWrapper = styled.div``;

export const BodyWrapper = styled.div``;

export const TableRow = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;

  &.body {
    border-top: 1px solid ${colors.grey.grey30};
    font-weight: 400;
  }
  &.body.pointer {
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
  &.head {
    font-weight: 500;
  }
  .info {
    padding: 0;
    padding-bottom: 10px;
  }
`;

export const TableItem = styled.div<{
  width?: number;
  align?: TAlign;
  flex?: string;
}>`
  padding: 16px;
  width: ${({ width }) => width ?? 100}%;
  display: ${({ flex }) => flex ?? "block"};
  justify-content: ${({ align }) => align ?? "left"};
  align-items: center;
  text-align: ${({ align }) => align ?? "left"};
  overflow: hidden;
  .smallTitle {
    display: flex;
    justify-content: space-between;
    &__text {
      text-overflow: ellipsis;
      max-width: 90%;
      overflow: hidden;
    }
  }
`;

export const CheckTableItem = styled(TableItem)`
  width: 34px;
  padding-right: 0;
  overflow: visible;
`;

export const InfoBox = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 8px;
  font-size: 14px;
  max-width: 100%;
  overflow-x: hidden;
  line-height: 1.5;
  padding-left: 10px;
  & > * {
    padding: 4px 0;
  }
  & p {
    font-weight: 500;
  }
`;
export const InfoBoxLink = styled(Link)`
  margin-top: 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 8px;
  font-size: 14px;
  max-width: 100%;
  overflow-x: hidden;
  line-height: 1.5;
  padding-left: 10px;
  color: ${colors.black};
  text-decoration: none;
  & > * {
    padding: 4px 0;
  }
  & p {
    font-weight: 500;
  }
`;

export const IconWrapper = styled.div<IsSelectOpen>`
  width: fit-content;
  display: flex;
  align-items: center;
  transition: 0.3s;
  transform: ${({ isOpen }) => (isOpen ? `rotate(180deg)` : ``)};

  &.mode-input {
    transform: ${({ isOpen }) => (isOpen ? `translate(0, -50%) rotate(180deg)` : `translate(0, -50%)`)};
    position: absolute;
    top: 50%;
    right: 15px;
  }
`;
