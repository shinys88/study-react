import React from "react";

// 1. props : Properties 사용
const PropsCm = props => {
	return (
		<div>
			컴포넌트 테스트, 이름은 {props.name}입니다.
			<br />
			children : {props.children}
		</div>
	);
};

// 2. props default 사용
PropsCm.defaultProps = {
	name: "기본 이름 설정"
};

export default PropsCm;
