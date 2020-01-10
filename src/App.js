import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const text1 = "테스트1";
	const int1 = 0;
	let text2 = "결과";

	if (int1 === 0) {
		text2 = "변경";
	}

  let t1 = undefined;
  
  const style1 = {
    backgroundColor:'yellow',
    color:'#000',
    marginTop:'20px',
    padding:20  //단위 생략시 px로 지정
  }

  let classNm = 'indexCss';

	return (
		// jsx 테스트0 = ||(or연산자) undefined 조건부
		t1 || (
			<>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />

					{/* 조건부 연산자 테스트1 */}
					{/* {t1===undefined && text2 ==='변경' ? <h1>리엑트입니다</h1> : '실패'} */}
					{/* result : 리엑트입니다. */}

					{/* 조건부 연산자 테스트2 */}
					{(t1 === undefined && text2 === "변경") || (
						<h1>리엑트입니다</h1>
					)}
					{/* result : null */}

					{/* 스크립트 추가 테스트 */}
					{text1}
					{/* result : 테스트1 */}

					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>

					<a
						// class추가 테스트
						// className="App-link"
						className="test1"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>

          <div style={{
            backgroundColor:'#eee', //jsx : 카멜 표기법으로 사용
            color:'#333'
          }}>태그에 바로 스타일 지정 테스트1</div>

          <div style={style1}>
            스크립트에서 불러오는 인라인 스타일링 테스트
          </div>

          <div className="indexCss test1">
            index.css에서 클래스 스타일 추가해보기 + 여러개 클래스 추가
          </div>

          <div className={'test2 '+classNm}>
            자바스크립트 변수로 class 추가하기
          </div>
				</header>
			</>
		)
	);
}

export default App;
