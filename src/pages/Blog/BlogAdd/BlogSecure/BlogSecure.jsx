import { useState } from 'react'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input/Input'
import { checkAuth } from '../../../../module/blog/checkAuth'

export default function BlogSecure({ setSecure }) {
  const [password, setPassword] = useState('')

  async function check() {
    const secure = await checkAuth(password)
    setSecure(secure)
  }

  return (
    <>
      <div className="list_y">
        <Input
          autoFocus={true}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={check}>Check</Button>
      </div>
    </>
  )
}
