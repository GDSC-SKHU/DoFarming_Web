import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login/Login.css";

const Login4 = () => {
  const [Nickname, setNickname] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState(""); 

  const btn_disabled = !Nickname || !Age || !Gender;

  let spc = /[~!@#$%^&*()_+|<>?:{}]/;
  let kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  let eng = /[a-zA-Z]/;
  let num = /[0-9]/;

  const NicknameCheck = (e) => {
    const input = e.target.value;
    if (input.length >= 0 && input.length <= 12 && (eng.test(input) || kor.test(input) || num.test(input) || !spc.test(input))) {
      setNickname(input);
    } else {
      alert("닉네임은 영문, 한글, 숫자를 포함한 12글자 이하여야 하며 특수기호를 포함하지 않아야 합니다.");
    }
  };

  const AgeCheck = (e) => {
    const input = e.target.value;
    if (isNaN(input)) {
      alert("숫자만 입력하세요");
    } else {
      setAge(input);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
        <div className="Login4_text">
          <p><span className="bold_text">좋아요!</span></p>
          <p>이제 시작해 볼까요?</p>
        </div>
        <div className="Login4_input">
          <form id="myInfo">
            <div className="wrap">
              <input type="text" placeholder="닉네임" value={Nickname} onChange={NicknameCheck} onBlur={NicknameCheck} />
            </div>
            <div className="wrap">
            <input type="text" placeholder="나이" value={Age} onChange={AgeCheck} />
            </div>
          </form>
          
          <select id="gender" value={Gender} onChange={handleGenderChange}>
            <option value="">- - - 성별 선택 - - - </option> 
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="no_select">밝히고 싶지 않음</option>
          </select>
          <div className="wrap">
          <Link to="/Home">
            <button type="submit" className="StartBtn" disabled={btn_disabled}>좋아</button>
          </Link>
          </div>
        </div>
      </div>
  );
};

export default Login4;
