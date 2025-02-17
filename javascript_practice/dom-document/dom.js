
//div태그 

const div = document.createElement("div")
const divId = document.createElement("div")
const divPw = document.createElement("div")
const divPwc = document.createElement("div")
const divEmail = document.createElement("div")
const divAgree = document.createElement("div")
const divAlready = document.createElement("div")
const divBtn = document.createElement("div")

// 해더 태그 
const header = document.createElement("header")
const nav = document.createElement("nav")

// 바디 태그 

const section = document.createElement("section")
const aLogin = document.createElement("a")


// 바디 요소 
const article = document.createElement("article")
const form = document.createElement("form")

// A 태그
const homeA = document.createElement("a")
const commuA = document.createElement("a")
const newsA = document.createElement("a")
const blogA = document.createElement("a")


//p 태그 
const p = document.createElement("p")
const alreadyP = document.createElement("p")

// label 태그
const label = document.createElement("label")
const labelId = document.createElement("label")
const labelPw = document.createElement("label")
const labelPwC = document.createElement("label")
const labelEmail = document.createElement("label")

// span 태그
const idSpan = document.createElement("span")
const pwSpan = document.createElement("span")
const pwcSpan = document.createElement("span")
const emailSpan = document.createElement("span")

// input 태그
const inputId = document.createElement("input")
const inputPw = document.createElement("input")
const inputPwc = document.createElement("input")
const inputEmail = document.createElement("input")
const inputAgree = document.createElement("input")
// 버튼 
const button = document.createElement("button")

// 푸터

const footer = document.createElement("footer")


//Header

document.body.append(header)

header.append(nav)
nav.append(homeA)
homeA.setAttribute("href", "/")
homeA.textContent = "홈"
nav.append(commuA)
commuA.setAttribute("href", "/menu2")
commuA.textContent = "커뮤니티"
nav.append(newsA)
newsA.setAttribute("href", "/menu3")
newsA.textContent = "뉴스"
nav.append(blogA)
blogA.setAttribute("href", "/menu")
blogA.textContent = "블로그"



//body


document.body.append(section)

section.append(article)
article.append(p)
p.textContent = "회원가입"

article.append(form)
form.setAttribute("id", "signupForm")
form.setAttribute("method", "post")

//아이디
form.append(divId)
divId.setAttribute("class", "input-group")
divId.append(labelId)
labelId.setAttribute("for", "userId")
labelId.textContent = "아이디"
divId.append(inputId)
inputId.setAttribute("type","text")
inputId.setAttribute("maxlength","12")
inputId.setAttribute("id","userId")
inputId.setAttribute("name","userId")
inputId.setAttribute("placeholder","사용할 아이디 입력")
divId.append(idSpan)
idSpan.textContent = "아이디에는 특수문자를 사용할 수 없습니다."
idSpan.setAttribute("class", "error")
idSpan.setAttribute("id", "userIdError")
idSpan.setAttribute("style", "display:none")







// 이메일
form.append(divEmail)
divEmail.setAttribute("class", "input-group")
divEmail.append(labelEmail)
labelEmail.setAttribute("for", "userEmail")
labelEmail.textContent = "이메일"
divEmail.append(inputEmail)
inputEmail.setAttribute("type","email")
inputEmail.setAttribute("name","userEmail")
inputEmail.setAttribute("id","userEmail")
inputEmail.setAttribute("placeholder","사용할 이메일 입력")
divEmail.append(emailSpan)
emailSpan.textContent = "올바른 이메일 형식을 입력하세요."
emailSpan.setAttribute("class", "error")
emailSpan.setAttribute("id", "emailError")
emailSpan.setAttribute("style", "display:none")





//패스워드
form.append(divPw)
divPw.setAttribute("class", "input-group")
divPw.append(labelPw)
labelPw.setAttribute("for", "userPassword")
labelPw.textContent = "비밀번호"
divPw.append(inputPw)
inputPw.setAttribute("type","password")
inputPw.setAttribute("name","userPw")
inputPw.setAttribute("id","userPw")
inputPw.setAttribute("placeholder","비밀번호")
divPw.append(pwSpan)
pwSpan.textContent = "비밀번호는 특수문자 포함 9자 이상이어야 합니다."
pwSpan.setAttribute("id", "passwordError")
pwSpan.setAttribute("class", "error")
pwSpan.setAttribute("style", "display:none")



// 패스워드 체크 
form.append(divPwc)
divPwc.setAttribute("class", "input-group")
divPwc.append(labelPwC)
labelPwC.setAttribute("for", "userPwCheck")
labelPwC.textContent = "비밀번호 확인"
divPwc.append(inputPwc)
inputPwc.setAttribute("type","password")
inputPwc.setAttribute("id","passwordCheck")
inputPwc.setAttribute("name","passwordCheck")
inputPwc.setAttribute("placeholder","비밀번호 확인")
divPwc.append(pwcSpan)
pwcSpan.textContent = "비밀번호가 일치하지 않습니다."
pwcSpan.setAttribute("class", "error")
pwSpan.setAttribute("id", "PwCheckError")
pwcSpan.setAttribute("style", "display:none")




//개인정보 수집 동의

form.append(divAgree)
divAgree.setAttribute("id", "agree")
divAgree.textContent = "개인정보 수집 동의 (필수)"
divAgree.append(inputAgree)
inputAgree.setAttribute("type", "checkbox")
inputAgree.setAttribute("name", "agree")
inputAgree.setAttribute("id", "personal")

// 가입하기버튼 

form.append(divBtn)
divBtn.setAttribute("class", "button")
divBtn.append(button)
button.setAttribute("type", "submit")
button.textContent = "가입하기"

//이미 가입했다면

form.append(divAlready)
divAlready.setAttribute("class","already")
divAlready.append(alreadyP)

alreadyP.textContent = "이미 가입했다면?"

alreadyP.append(aLogin)
aLogin.setAttribute("href", "#")
aLogin.textContent = "로그인"


// 유효성 
const signupForm = document.getElementById("signupForm");
const userId = document.getElementById("userId");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPw");
const passwordCheck= document.getElementById("passwordCheck");
const checkbox = document.getElementById("personal")



const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const passwordCheckError = document.getElementById("PwCheckError")
const uesrIdError = document.getElementById("userIdError")



signupForm.addEventListener("submit", function (e){
  let isValid = true;

  const idRegex = /[ \{\}\[\]\/?.,;:|\)*~`!^\_+┼<>@\#$%&\'\"\\\(\=]/gi; 

  if(idRegex.test(userId.value)){
    uesrIdError.style.display = "block";
    isValid = false;

  } else{
    uesrIdError.style.display = "none";
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
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{8,}$/;
  if (!passwordRegex.test(password.value)) {
    pwSpan.setAttribute("style", "display:block")
    
    // passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  // password Check

  if(password.vaule !== passwordCheck.value){
    pwcSpan.setAttribute("style", "display:block")
    isValid = false;
  } else{
    passwordCheckError.style.display = "none";
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