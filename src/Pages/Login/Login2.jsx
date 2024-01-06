import "../../styles/login/Login.css";
import {GoogleLoginButton} from "react-social-login-buttons";



const Login2 = () => {
  return (
    <div>
      <div className="login2_wrap">
          <div class="login2_textbox">
            <p><span className="bold_text">몸</span>과 <span className="bold_text">마음</span></p>
            <p>건강하게 챙기는 첫 단계!</p>
          </div>
          <div className="Gloginbox">
            <GoogleLoginButton/>
          </div>
        </div>
      </div>
    
  )
}

export default Login2;
