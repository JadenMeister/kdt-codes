

let root = document.getElementById("root")

// * root.innerHTML = "<h1>하이</h1>"


//DOM API 의 특정 property를 응용함 
// innerHTML은 문자열을 요구한다.



// let h1 = document.createElement('h1')
// h1.textContent = "하이헬로우"

// root.appendChild(h1)




let obj = {
  openTag: "<h1>",
  content: "하이헬로우에브리원",
  closeTag: "</h1>",
  makeHtml: function () {
    return obj.openTag + obj.content + obj.closeTag;
  }
}

root.innerHTML = obj.makeHtml()


// 함수로 만들어보기
// 메소드로 만들어보기
// 여러개의 메서드를 묶어서 사용 
// API(문서가 아니더라도)는 대부분 비슷함