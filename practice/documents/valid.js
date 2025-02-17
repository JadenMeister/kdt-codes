const signupForm = document.getElementById("signupForm");
const userId = document.getElementById("userId");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPw");
const passwordCheck= document.getElementById("userPwCheck");
const checkbox = document.getElementById("personal")



const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const passwordCheckError = document.getElementById("PwCheckError")
const uesrIdError = document.getElementById("userIdError")


//signupForm에 이벤트를 부여, e: event라는 뜻

signupForm.addEventListener("submit", function (e){
  let isValid = true;

  const idRegex = /[ \{\}\[\]\/?.,;:|\)*~`!^\_+┼<>@\#$%&\'\"\\\(\=]/gi;   //js 정규식 패턴 정의 gi = 대소문자 구별없이 검색, 문자열 내 모든 패턴 검색

  if(idRegex.test(userId.value)){         // id input 창의 값이 id 정규식 패턴에 해당된다면 
    uesrIdError.style.display = "block";    // error로 지정한 style이 보여지게됨
    isValid = false;                        // isValid : 유효성이 false로 값을 변경

  } else{
    uesrIdError.style.display = "none";         // 해당되지 않는다면 넘어가기
  }




  //email Validation

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email.value)){
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
    
  }


  // password Validation
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{8,}$/;   // 패스워드 정책에 의한 정규식 패턴 정의
  if(!passwordRegex.test(password.value)){          // 패스워드의 값이 패스워드 정규식 패턴이 들어가지 않는다면 
    passwordError.style.display = "block";          // 정의한 에러 핸들링을 실행
    isValid = false;                                // 유효성 검사 실패
  } else {
    passwordError.style.display = "none";           // 통과
  }

  // password Check

  if(password.vaule !== passwordCheck.value){       // 패스워드의 값과 패스워드 확인의 값이 일치하지 않으면
    passwordCheckError.style.display ="block";      // 정의한 에러 핸들링을 실행
    isValid = false;                                // 유효성 실패
  } else{
    passwordCheckError.style.display = "none";      // 통과
  }


    //checkbox

    if(checkbox.checked) {

    } else{
      alert("개인정보 수집에 동의해주세요")
      isValid = false;
    }
  

  if (!isValid) {
    e.preventDefault()
  }



});






