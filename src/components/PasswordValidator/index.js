// Write your code here
import {useState} from 'react'
import {
  Container,
  Heading,
  PasswordText,
  Input,
  Error,
  PasswordContainer,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(
    'Your password must be at least 8 characters',
  )

  const changePassword = event => {
    setPassword(event.target.value)
    if (password.length < 8) {
      setError('Your password must be at least 8 characters')
    } else {
      setError('')
    }
  }

  return (
    <Container>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <PasswordText>
          Check how strong and secure is your password
        </PasswordText>
        <Input type="password" value={password} onChange={changePassword} />
        <Error>{error}</Error>
      </PasswordContainer>
    </Container>
  )
}

export default PasswordValidator
