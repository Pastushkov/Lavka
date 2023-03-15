import { SelectArrow } from '../../../assets/images/svgs'
import { IconWrapper } from './style'
import React, { FC, Fragment, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { colors } from '../../../style/colors'
import { IBody, IBodyRow } from '../interface'
import {
    BodyWrapper,
    CheckTableItem,
    InfoBox,
    InfoBoxLink,
    TableItem,
    TableRow,
} from './style'

const BodyRow: FC<IBodyRow> = ({
    header,
    element,
    onRowClick,
    onMultyChnge,
    multy,
    parseHeader,
    noMultyAction,
    link,
}) => {
    const [openInfo, setOpenInfo] = useState(false)

    return (
        <TableRow
            className={`body ${onRowClick || link ? 'pointer' : ''}`}
            onClick={() => setOpenInfo(!openInfo)}
        >            
            {parseHeader?.map(({ propName, width, align }) => {
                return (
                    <TableItem
                        key={element.id + propName}
                        width={width}
                        align={align}
                    >
                        <div className='smallTitle'>
                            <div className='smallTitle__text'>
                                {element[propName]}
                            </div>
                            <IconWrapper isOpen={openInfo}>
                                <SelectArrow />
                            </IconWrapper>
                        </div>

                        {openInfo ? (
                            link?.(element.id) ? (
                                <InfoBoxLink to={link?.(element.id) ?? ''}>
                                    {header?.map(
                                        item =>
                                            item.label.toString().length >
                                                0 && (
                                                <Fragment
                                                    key={
                                                        element.id +
                                                        item.propName
                                                    }
                                                >
                                                    <p>{item.label}: </p>
                                                    <div>
                                                        {element[item.propName]}
                                                    </div>
                                                </Fragment>
                                            ),
                                    )}
                                </InfoBoxLink>
                            ) : (
                                <InfoBox
                                    onClick={() =>
                                        onRowClick?.(element.id ?? '-')
                                    }
                                >
                                    {header?.map(
                                        item =>
                                            item.label.toString().length >
                                                0 && (
                                                <Fragment
                                                    key={
                                                        element.id +
                                                        item.propName
                                                    }
                                                >
                                                    <p>{item.label}: </p>
                                                    <div>
                                                        {element[item.propName]}
                                                    </div>
                                                </Fragment>
                                            ),
                                    )}
                                </InfoBox>
                            )
                        ) : null}
                    </TableItem>
                )
            })}
        </TableRow>
    )
}

const render = ({
    header,
    body,
    loading,
    error,
    onRowClick,
    onMultyChnge,
    multy,
    parseHeader,
    noMultyAction,
    link,
}: IBody) =>
    loading ? (
        <TableRow className='body'>
            <TableItem align='center'>
                <ClipLoader size={30} color={colors.black} />
            </TableItem>
        </TableRow>
    ) : error ? (
        <TableRow className='body'>
            <TableItem align='center'>Error</TableItem>
        </TableRow>
    ) : !body || body?.length === 0 ? (
        <TableRow className='body'>
            <TableItem align='center'>No data</TableItem>
        </TableRow>
    ) : (
        body?.map(element => (
            <BodyRow
                key={element.id}
                header={header}
                element={element}
                onRowClick={onRowClick}
                onMultyChnge={onMultyChnge}
                multy={multy}
                parseHeader={parseHeader}
                noMultyAction={noMultyAction}
                link={link}
            />
        ))
    )

export const Body: FC<IBody> = props => (
    <BodyWrapper>{render(props)}</BodyWrapper>
)
