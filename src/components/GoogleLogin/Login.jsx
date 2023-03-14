import { ReactComponent as GoogleIcon } from '../../img/google-icon.svg';
import { GoogleBtn, UserSection, UserName, UserInfo } from './Login.styled';
import logo from '../../img/logo.png';

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
        <UserInfo>
        <img src={logo} alt="logo"  width={24} height={24}/>
          <UserName>{user}</UserName>
          </UserInfo>
          <GoogleBtn onClick={() => setUser(null)}>LogOut</GoogleBtn>
</>
        
      )}
    </UserSection>
  );
};
