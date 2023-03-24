import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { colors } from '../../style/colors'
import { IBody, IBodyRow } from './interface'
import { BodyWrapper, TableItem, TableRow } from './style'

const BodyRow: FC<IBodyRow> = ({
    keyTemplate,
    header,
    element,
    onRowClick,
    // onMultyChnge,
    // multy,
    // noMultyAction,
    link,
}) => (
    <TableRow
        className={`body ${onRowClick || link ? 'pointer' : ''}`}
        onClick={() => onRowClick?.(element.id ?? '-')}
    >       
        {header.map(({ propName, align }) => (
            <TableItem
            className={`${
                typeof link?.(element.id) === 'string' ? '' : 'padding'
            }`}
            key={
                keyTemplate
                ? `${element[keyTemplate]}${propName}`
                : `${element.id}${propName}`
            }
            align={align}
            >                
                {link?.(element.id) ? (
                    <Link to={link?.(element.id) ?? ''}>
                        {element[propName]}
                    </Link>
                ) : (
                    element[propName]
                )}
            </TableItem>
        ))}
    </TableRow>
)

const render = ({
    header,
    body,
    loading,
    error,
    onRowClick,
    onMultyChnge,
    multy,
    noMultyAction,
    keyTemplate,
    link,
}: IBody) =>
    loading ? (
        <div>
            <ClipLoader size={30} color={colors.black} />
        </div>
    ) : error ? (
        <div>Error</div>
    ) : !body || body?.length === 0 ? (
        <div>No data</div>
    ) : (
        body?.map(element => (
            <BodyRow
                keyTemplate={keyTemplate}
                key={keyTemplate ? element[keyTemplate] : element.id * Math.random()}
                header={header}
                element={element}
                onRowClick={onRowClick}
                onMultyChnge={onMultyChnge}
                multy={multy}
                link={() => link?.(element.id)}
                noMultyAction={noMultyAction}
            />
        ))
    )

export const Body: FC<IBody> = ({ loading, error, body, ...props }) => (
    <BodyWrapper
        className={
            loading || error || body?.length === 0 || !body ? 'position' : ''
        }
    >
        {render({ loading, error, body, ...props })}
    </BodyWrapper>
)
