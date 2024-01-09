import "../../styles/login/Login.css";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";

function Login3() {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    const updatedOptions = [...selectedOptions];

    if (updatedOptions.includes(option)) {
      updatedOptions.splice(updatedOptions.indexOf(option), 1);
    } else {
      updatedOptions.push(option);
    }

    setSelectedOptions(updatedOptions);
  };

  const handleButtonClick = () => {
    const selectedOptionsString = selectedOptions
      .map(encodeURIComponent)
      .join(",");
    navigate("/Routine", { state: { userData: selectedOptionsString } });
  };

  const BtnDisabled = () => {
    return selectedOptions.length === 0;
  };

  return (
    <div className="container">
      <p className="Login3_txt1">
        <strong>어떤 고민</strong>이 있으세요?
      </p>
      <div className="options" id="options">
        <div
          className={`option ${
            selectedOptions.includes("학업") ? "selected" : ""
          }`}
          onClick={() => toggleOption("학업")}
        >
          학업
        </div>
        <div
          className={`option ${
            selectedOptions.includes("취업") ? "selected" : ""
          }`}
          onClick={() => toggleOption("취업")}
        >
          취업
        </div>
        <div
          className={`option ${
            selectedOptions.includes("직장생활") ? "selected" : ""
          }`}
          onClick={() => toggleOption("직장생활")}
        >
          직장생활
        </div>
        <div
          className={`option ${
            selectedOptions.includes("인간관계") ? "selected" : ""
          }`}
          onClick={() => toggleOption("인간관계")}
        >
          인간관계
        </div>
        <div
          className={`option ${
            selectedOptions.includes("사랑") ? "selected" : ""
          }`}
          onClick={() => toggleOption("사랑")}
        >
          사랑
        </div>
        <div
          className={`option ${
            selectedOptions.includes("스트레스") ? "selected" : ""
          }`}
          onClick={() => toggleOption("스트레스")}
        >
          스트레스
        </div>
        <div
          className={`option ${
            selectedOptions.includes("미래에 대한 불안감") ? "selected" : ""
          }`}
          onClick={() => toggleOption("미래에 대한 불안감")}
        >
          미래에 대한
          <br />
          불안감
        </div>
        <div
          className={`option ${
            selectedOptions.includes("건강") ? "selected" : ""
          }`}
          onClick={() => toggleOption("건강")}
        >
          건강
        </div>
      </div>
      <Link to="/Login4">
        <button
          id="SelectclearBtn"
          onClick={handleButtonClick}
          disabled={BtnDisabled()}
        >
          선택 완료
        </button>
      </Link>
    </div>
  );
}

export default Login3;
