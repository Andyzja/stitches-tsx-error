import React, { useContext } from 'react'
import { styled } from '../../../stitches.config'
import { FormGroupContext } from './FormGroup'

export const FormControlCaptionStyled = styled('span', {
  display: 'flex',
  marginTop: 6,
  color: '$grey25',
  fontWeight: '$regular',
  fontSize: '$textMd',
  variants: {
    color: {
      success: {
        color: '$success500',
      },
      danger: {
        color: '$danger500',
      },
    },
  },
})

export const FormControlCaption = React.forwardRef(({ children, ...props}, forwardedRef) => {
  const validationStatus = useContext(FormGroupContext)

  let color = 'default'
  if (validationStatus === true) color = 'success'
  if (validationStatus === false) color = 'danger'
  if (validationStatus === 'NOT_VALIDATED') color = 'default'

  return <FormControlCaptionStyled {...props} ref={forwardedRef} color={color}>
    {children}
  </FormControlCaptionStyled>
})
