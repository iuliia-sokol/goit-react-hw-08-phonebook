import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Header,
  Input,
  Label,
  BtnWrapper,
  BtnsWrapper,
  GoBackLinkWrapper,
  FormWrapper,
  Form,
  AuthNotify,
  InputsWrapper,
} from './Login.styled';
import { NavLink } from 'components/NavLink/NavLink';
import { Btn } from 'components/Btn/Btn';
import Animation from '../../images/code.gif';
import { loginUser } from 'redux/authOperations';

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  console.log(location);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInputChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <GoBackLinkWrapper>
        <NavLink to={location.state?.from ?? '/'} text="Go back" />
        <Header>Let's log in</Header>
      </GoBackLinkWrapper>

      <FormWrapper>
        <div>
          <img alt="animation" width="100%" srcSet={Animation} />
        </div>
        <Form onSubmit={handleSubmit}>
          <InputsWrapper>
            <Input
              type="email"
              id="auth-email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="Enter your email"
              onChange={onInputChange}
            />
            <Label htmlFor="auth-email">Email</Label>

            <Input
              type="password"
              id="auth-password"
              name="password"
              required
              minLength="6"
              placeholder="Enter your password"
              onChange={onInputChange}
            />
            <Label htmlFor="auth-password">Name</Label>
          </InputsWrapper>

          <BtnsWrapper>
            <BtnWrapper>
              <Btn type="submit" status="login" text="Log in"></Btn>
              <AuthNotify>Already registered? Log in!</AuthNotify>
            </BtnWrapper>

            <BtnWrapper>
              <NavLink text="Register" status="register" to="/register" />
              <AuthNotify>Newcomer? Create an account!</AuthNotify>
            </BtnWrapper>
          </BtnsWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
