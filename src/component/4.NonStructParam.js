import React from "react";
//propTypes 검증
import PropTypes from "prop-types";

// 객체 파라미터 비구조화 사용
const PropsCm = ({ name, children, testParam }) => {
	return (
		<div>
			컴포넌트 테스트, 이름은 {name}입니다.
			<br />
			children : {children}
			<br />
			testParam : {testParam}
		</div>
	);
};

// 2. props default 사용
PropsCm.defaultProps = {
	name: "기본 이름 설정"
};

PropsCm.propTypes = {
	name: PropTypes.string,
	testParam: PropTypes.number.isRequired
	// isRequired : 필수 적용
};

export default PropsCm;
