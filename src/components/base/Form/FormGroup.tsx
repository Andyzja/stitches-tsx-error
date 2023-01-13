import React, { useState } from 'react'
import { styled } from '../../../stitches.config'

const FormGroupStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

type FormGroupContextData = boolean | 'NOT_VALIDATED'

export const FormGroupContext =
  React.createContext<FormGroupContextData>('NOT_VALIDATED')

export const FormGroup = React.forwardRef(
  ({ children, validateStatus = 'NOT_VALIDATED', ...props }, forwardedRef) => {
    return (
      <FormGroupContext.Provider value={validateStatus}>
        <FormGroupStyled ref={forwardedRef}>{children}</FormGroupStyled>
      </FormGroupContext.Provider>
    )
  }
)

FormGroup.displayName = 'FormGroup'
