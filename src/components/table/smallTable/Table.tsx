import React, { FC, useEffect, useState } from 'react'
import { Body } from './Body'
import { IBody } from '../interface'
import { TableWrapper } from './style'

export const SmallTable: FC<IBody> = ({
  header,
  onMultyChnge,
  body,
  fullBody,
  ...props
}) => {
  const [multy, setMulty] = useState<any[]>([])

  useEffect(() => {
    setMulty([])
  }, [fullBody])

  const handleMulty = (obj: any, str?: string) => {
    if (str === 'all') {
      setMulty(obj)
      onMultyChnge?.(obj)
      return
    }
    setMulty((state) => {
      let newSate = []
      if (state.find(({ id }) => obj.id === id)) {
        newSate = state.filter(({ id }) => obj.id !== id)
      } else {
        newSate = [...state, obj]
      }
      onMultyChnge?.(newSate)
      return newSate
    })
  }

  const parseHeader = [{
    label: 'Order number',
    propName: 'smallTitle',
  }]

  return (
    <TableWrapper>
      <div className='limit'>       
        <Body
          header={header}
          parseHeader={parseHeader}
          body={body}
          multy={multy}
          onMultyChnge={onMultyChnge ? handleMulty : undefined}
          {...props}
        />
      </div>
    </TableWrapper>
  )
}

export default SmallTable
