import React, { FC } from "react";
import { IHead } from "./interface";
import { HeaderWrapper, TableItem, TableRow } from "./style";

// const filtermulty = (noMultyAction: IHead['noMultyAction']) => (element: any) =>
//     noMultyAction?.filter(
//         ({ key, regExp, equal, noEqual }) =>
//             ((regExp && regExp.test(element[key])) || !regExp) &&
//             ((equal && element[key] === equal) || !equal) &&
//             ((noEqual && element[key] !== noEqual) || !noEqual),
//     ).length === noMultyAction?.length

export const Header: FC<IHead> = ({
  header
  // fullBody,
  // multy,
  // onMultyChnge,
  // noMultyAction,
}) => (
  <HeaderWrapper>
    <TableRow className="head padding">
      {header.map(({ label, propName, align, width }) => (
        <TableItem className="padding" key={propName} width={width} align={align}>
          {label}
        </TableItem>
      ))}
    </TableRow>
  </HeaderWrapper>
);
