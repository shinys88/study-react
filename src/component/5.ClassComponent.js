import React, { Component } from "react";
//propTypes 검증
import PropTypes from "prop-types";

// 객체 파라미터 비구조화 사용
class PropsCm extends Component{
	//클래스 내부에 default 값 지정
	static defaultProps = {
		name: "기본 이름 설정"
	};
	//클래스 내부에 prop Type 지정
	static propTypes = {
		name: PropTypes.string,
		testParam: PropTypes.number.isRequired
		// isRequired : 필수 적용
	};

	render(){
		const {name, testParam, children} = this.props;	//비구조화 할당
		return (
			<div>
				클래스 컴포넌트 테스트, 이름은 {name}입니다.
				<br />
				children : {children}
				<br />
				testParam : {testParam}
			</div>
		);
	}
}


// 2. props default 사용 ==> class 내부에서 지정
// PropsCm.defaultProps = {
// 	name: "기본 이름 설정"
// };

// PropsCm.propTypes = {
// 	name: PropTypes.string,
// 	testParam: PropTypes.number.isRequired
// 	// isRequired : 필수 적용
// };

export default PropsCm;
