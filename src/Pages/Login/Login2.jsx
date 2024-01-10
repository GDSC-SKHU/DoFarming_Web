import "../../styles/login/Login.css";
import { GoogleLoginButton } from "react-social-login-buttons";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase-config";
import { useNavigate } from "react-router-dom"; 
const Login2 = () => {
  const navigate = useNavigate(); 

  function GoogleLoginBox() {
    let We_love_Google = new GoogleAuthProvider();
    signInWithPopup(auth, We_love_Google)
      .then((data) => {
        if (data) {
          console.log(data);
          navigate('/Login3'); 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="login2_wrap">
        <div className="login2_textbox">
          <p>
            <span className="bold_text">몸</span>과{" "}
            <span className="bold_text">마음</span>
          </p>
          <p>건강하게 챙기는 첫 단계!</p>
        </div>
        <div className="Gloginbox">
          <GoogleLoginButton onClick={GoogleLoginBox} />
        </div>
      </div>
    </div>
  );
};

export default Login2;
