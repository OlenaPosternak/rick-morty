import { ReactComponent as GoogleIcon } from '../../img/google-icon.svg';
import { GoogleBtn, UserSection, UserName } from './Login.styled';

export const User = ({ googleLogin, user, setUser }) => {
  return (
    <UserSection>
      {user === null && (
        <GoogleBtn onClick={googleLogin}>
          <GoogleIcon />
          Google Login
        </GoogleBtn>
      )}
      {user && (
        <>
          <UserName>{user}</UserName>
          <GoogleBtn onClick={() => setUser(null)}>LogOut</GoogleBtn>
        </>
      )}
    </UserSection>
  );
};
