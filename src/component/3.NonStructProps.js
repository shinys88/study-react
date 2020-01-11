import React from "react";

// 1. props : Properties 사용
// const PropsCm = props => {
// 	return (
// 		<div>
// 			컴포넌트 테스트, 이름은 {props.name}입니다.
// 			<br />
// 			children : {props.children}
// 		</div>
// 	);
// };

// 비정형화 할당 문법을 통해 props 내부 값 추출
const PropsCm = props => {
	const { name, children } = props;
	return (
		<div>
			컴포넌트 테스트, 이름은 {name}입니다.
			<br />
			children : {children}
		</div>
	);
};

// 2. props default 사용
PropsCm.defaultProps = {
	name: "기본 이름 설정"
};

export default PropsCm;
