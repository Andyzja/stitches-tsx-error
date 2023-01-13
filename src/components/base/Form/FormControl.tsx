import React, { useContext, useState } from 'react'
import { styled } from '../../../stitches.config'
import { FormGroupContext } from './FormGroup'

export const FormControlStyled = styled('input', {
  position: 'relative',
  fontFamily: '$exo2',
  display: 'flex',
  borderTopRightRadius: '2px',
  borderTopLeftRadius: '2px',
  borderBottomRightRadius: '2px',
  borderBottom: '1px solid $grey5',
  borderTopWidth: '1px',
  borderTopColor: 'none',
  boxSizing: 'border-box',
  borderLeft: 'none',
  borderRight: 'none',
  background: '$grey90',
  color: '$grey5',
  caretColor: '$grey5',
  borderTop: 'none',
  '&::placeholder': {
    color: '$grey45',
  },
  '&:hover': {
    borderBottomColor: '$primary400',
  },
  '&:focus': {
    outline: 'none',
  },
  variants: {
    size: {
      md: {
        padding: '11px 16px',
        fontWeight: '$regular',
        fontSize: '$textLg',
        lineHeight: '$textLg',
      },
      xs: {},
      sm: {},
      lg: {},
    },
    disabled: {
      true: {
        color: '$grey60',
        caretColor: '$grey88',
        borderBottomColor: '$grey60',
        cursor: 'not-allowed',
        '&::placeholder': {
          color: '$grey60',
        },
        '&:hover': {
          borderBottomColor: '$grey60',
        },
      },
    },
    color: {
      success: {
        borderBottomColor: '$success500',
        '&:hover': {
          borderBottomColor: '$success500',
        },
      },
      danger: {
        borderBottomColor: '$danger500',
        '&:hover': {
          borderBottomColor: '$danger500',
        },
      },
      default: {

      }
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const Figure = styled('div', {
  display: 'flex',
  borderBottom: `2px solid $grey5`,
  borderLeft: '2px solid transparent',
  borderRight: '2px solid transparent',
  height: 0,
  width: 120,
  WebkitTransform: 'scaleY(-1)',
  transform: 'scaleY(-1)',
  variants: {
    hover: {
      true: {
        borderBottomColor: '$primary400',
      },
    },
    disabled: {
      true: {
        borderBottomColor: '$grey60',
      },
    },
    color: {
      success: {
        borderBottomColor: '$success500',
      },
      danger: {
        borderBottomColor: '$danger500',
      },
      default: {

      }
    },
  },
  compoundVariants: [
    {
      hover: true,
      disabled: true,
      css: {
        borderBottomColor: '$grey60',
      },
    },
  ],
})

export const FormControl = ({controlElementTag, ...props}) => {
  const [isHovered, setIsHovered] = useState(false)
  const validateStatus = useContext(FormGroupContext)

  let color = 'default'
  if (validateStatus === true) color = 'success'
  if (validateStatus === false) color = 'danger'
  if (validateStatus === 'NOT_VALIDATED') color = 'default'
  
  return (
    <>
      <FormControlStyled
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={props.disabled}
        color={color}
        as={controlElementTag ?? 'input'}
        {...props}
      />
      <Figure
        hover={!['success', 'danger'].includes(color) && isHovered}
        disabled={props.disabled}
        color={color}
      />
    </>
  )
}
