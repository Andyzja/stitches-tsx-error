import React from 'react'
import { styled } from '../../../stitches.config'

export const FormLabelStyled = styled('label', {
  display: 'flex',
  marginBottom: 8,
  fontSize: '$textMd',
  fontWeight: '$semiBold',
  textTransform: 'uppercase',
  color: '$grey5',
  variants: {
    color: {
      muted: {
        color: '$grey60',
      },
    },
  },
})

const RequiredAsteriks = styled('sup', {
  color: '$danger500',
  fontWeight: '$semibold',
  fontSize: '$textMd',
  marginLeft: '4px',
})

export const FormLabel = React.forwardRef<
  React.ComponentRef<typeof FormLabelStyled>,
  React.ComponentProps<typeof FormLabelStyled>
>((props, forwardedRef) => {
  return (
    <FormLabelStyled {...props} ref={forwardedRef}>
      {props.children}
      {props.required && <RequiredAsteriks>*</RequiredAsteriks>}
    </FormLabelStyled>
  )
})
