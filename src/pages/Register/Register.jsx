// import { useSelector } from 'react-redux';
// import { getLogStatus, getUserName } from 'redux/selectors';
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
} from './Register.styled';
import { NavLink } from 'components/NavLink/NavLink';
import { useLocation } from 'react-router-dom';
import { Btn } from 'components/Btn/Btn';
import Animation from '../../images/code.gif';

const Register = () => {
  const location = useLocation();
  //   const isLoggedIn = useSelector(getLogStatus);

  return (
    <Container>
      <GoBackLinkWrapper>
        <NavLink to={location.state?.from ?? '/'} text="Go back" />
        <Header>Let's register</Header>
      </GoBackLinkWrapper>

      <FormWrapper>
        <div class="logo-container auth-logo-container">
          <img alt="movie camera" width="100%" srcset={Animation} />
        </div>
        <Form>
          <InputsWrapper>
            <Input type="email" id="auth-email" />
            <Label for="auth-email">Email</Label>

            <Input type="password" id="auth-password" />
            <Label for="auth-password">Password</Label>
          </InputsWrapper>
          <BtnWrapper>
            <Btn type="button" status="register" text="Create account">
              Create account
            </Btn>
            <AuthNotify>Newcomer? Create an account!</AuthNotify>
          </BtnWrapper>

          <BtnsWrapper>
            <BtnWrapper>
              <NavLink text="Log in" status="login" to="register"></NavLink>
              <AuthNotify>Already registered? Log in!</AuthNotify>
            </BtnWrapper>
          </BtnsWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
