// app.js

// 입력시 실행될 함수
function handleAdd() {
  // input memo 입력 요소
  const memoEl = document.querySelector("#memo");
  // input memo 입력 요소의 값 => memoEl.value

  // li 문서 객체 생성
  const li = document.createElement("li");
  // p 문서 객체 생성
  const p = document.createElement("p");
  // p요소에 입력 값을 추가
  p.textContent = memoEl.value;
  memoEl.value = ""; // 입력 완료 후 내용 초기화
  // 삭제 버튼
  const delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
}

// 입력 버튼
const addBtn = document.querySelector("#addBtn");
// 입력 버클 클릭 이벤트
addBtn.addEventListener("click", () => {
  handleAdd(); // 추가 함수 호출
});
