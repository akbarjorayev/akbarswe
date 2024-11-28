import React, { useState } from 'react'
import '../Input.css'

const Input = React.forwardRef(
  ({ value: iValue = '', onChange, ...props }, ref) => {
    const [value, setValue] = useState(iValue)

    function handleInput(e) {
      setValue(e.target.value)
      if (onChange) onChange(e)
    }

    return (
      <input
        ref={ref}
        type="text"
        value={value}
        {...props}
        onChange={handleInput}
      />
    )
  }
)

export default Input
