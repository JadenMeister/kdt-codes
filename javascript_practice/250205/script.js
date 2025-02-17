// ### **2.3. 문항 3: DOM 조작 및 동적 리스트 생성 (25점)**

// - 구현 내용:
//     - Subject.1의 폼 구조를 활용한 동적 DOM 생성
//     - 데이터 기반 리스트 렌더링
// - 요구사항:
//     - 폼 입력값을 활용한 동적 리스트 생성
//     - 유틸리티 클래스를 활용한 스타일 적용
//     - 리스트 아이템 추가/삭제 기능

const tbody = document.querySelector("tbody");

const userIdError = document.getElementById("userIdError");
const emailError = document.getElementById("emailError");

const userId = document.getElementById("userId");
const email = document.getElementById("userEmail");
const button = document.querySelector("button");
const input = document.getElementsByTagName("input");
const section = document.querySelector("section");
const article = document.querySelector("article");
const body = document.querySelector("body");
const footer = document.querySelector("footer");

const inputs = document.querySelectorAll("input");

const labels = document.querySelectorAll("labels");
const p = document.querySelector("p");

const spans = document.querySelectorAll("span");

const btn = document.querySelector("button");

const table = document.querySelector("table");

const ths = document.querySelectorAll("th");

const tds = document.querySelectorAll("td");

tds.forEach((td) => {
  td.classList.add("bd-black");
});

table.classList.add("bd-black");

ths.forEach((th) => {
  th.classList.add("bd-black");
});

body.classList.add("margin0");

section.classList.add("flex", "justify-center", "align-center", "height-80vh");

article.classList.add(
  "flex",
  "fdc",
  "justify-center",
  "align-center",
  "width-50vw",
  "height-auto",
  "pd-20",
  "bt-lightgray",
  "br-10",
  "bg-white",
  "shadow"
);

footer.classList.add(
  "flex",
  "justify-center",
  "align-center",
  "bt-gray",
  "height-5vh"
);

p.classList.add("fs-1_5", "bold", "mb-20", "text-center");

inputs.forEach((input) => {
  input.classList.add("flex", "fdc", "width-100", "mb-15");
});

labels.forEach((label) => {
  label.classList.add("mb-5", "fs-0_9", "black");
});

spans.forEach((span) => {
  span.classList.add("red", "fs-0_9", "mt-5", "none");
});

btn.classList.add(
  "flex",
  "fdc",
  "align-center",
  "text-center",
  "pt-12",
  "width-100",
  "heigt-40px",
  "mb-10",
  "borderX",
  "br-5",
  "bg-blue",
  "white",
  "fs-1",
  "pointer",
  "pb-5"
);

function buttonClicked(e) {
  btn.classList.toggle("clicked");
  e.preventDefault();
}

btn.addEventListener("click", buttonClicked);

const newMember = [];
let isAdded = true;
let isValid = true;

function btnClick(e) {
  const idRegex = /[ \{\}\[\]\/?.,;:|\)*~`!^\_+┼<>@\#$%&\'\"₩\\\(\=]/gi;
  const valueCheck = { id: userId.value, email: email.value };

  if (valueCheck.id === "" || valueCheck.email === "") {
    alert("추가사항이 없습니다.");
    isAdded = false;
    return;
  }

  if (idRegex.test(userId.value)) {
    userIdError.style.display = "block";
    isValid = false;
    alert("다시 확인해주세요");
    return;
  } else {
    userIdError.style.display = "none";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.style.display = "block";
    isValid = false;
    alert("다시 확인해주세요");
    return;
  } else {
    emailError.style.display = "none";
  }

  const value = { id: userId.value, email: email.value };

  // 행
  const tr = document.createElement("tr");

  // 이름칸
  const tdName = document.createElement("td");
  tdName.textContent = value.id;
  tr.appendChild(tdName);
  tdName.classList.add("bd-black");

  // 이메일칸
  const tdEmail = document.createElement("td");
  tdEmail.textContent = value.email;
  tr.appendChild(tdEmail);
  tdEmail.classList.add("bd-black");

  // 삭제 버튼 들어가는 칸
  const tdBtnPos = document.createElement("td");
  const delBtn = document.createElement("button");
  delBtn.textContent = "회원삭제";
  delBtn.addEventListener("click", () => {
    if (confirm("삭제하시겠습니까?") === true) {
      tbody.removeChild(tr);
    } else {
      return false;
    }
  });
  tdBtnPos.appendChild(delBtn);
  tr.appendChild(tdBtnPos);
  tdBtnPos.classList.add("bd-black");

  tbody.appendChild(tr);
  tbody.classList.add("bd-black");

  userId.value = "";
  email.value = "";
  isAdded = "true";

  console.log(value);
  alert("추가되었습니다.");
}

button.addEventListener("click", btnClick);
