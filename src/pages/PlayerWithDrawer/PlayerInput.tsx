import { Input } from '@chakra-ui/react'
import { forwardRef } from 'react'

export type PlayerInputProps = {
  value: string | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  isInvalid?: boolean
  autoFocus?: boolean
}

export const PlayerInput = forwardRef(
  (
    { value, onChange, placeholder, isInvalid, autoFocus }: PlayerInputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Input
        ref={ref}
        autoFocus={autoFocus}
        isInvalid={isInvalid}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size="lg"
        variant="filled"
      />
    )
  },
)
