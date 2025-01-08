import React, { useState } from 'react'
import '../Input.css'

const Textarea = React.forwardRef(
  ({ value: iValue = '', onChange, ...props }, ref) => {
    const [value, setValue] = useState(iValue)

    function handleInput(e) {
      setValue(e.target.value)
      if (onChange) onChange(e)
    }

    return (
      <textarea ref={ref} value={value} {...props} onChange={handleInput} />
    )
  }
)

export default Textarea
