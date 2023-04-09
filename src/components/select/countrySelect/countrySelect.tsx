import React, { FC } from 'react'
import { IFormikSelect } from '../interfaces'
import CustomSelect from '../Select'

const options = [{ label: 'United States', value: 'United States' }]

const CountrySelect: FC<IFormikSelect> = props => <CustomSelect {...props} options={options} />

export default CountrySelect
