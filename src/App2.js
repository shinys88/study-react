import React from "react";
import PropsCm1 from "./component/1.MyComponent";
import PropsCm2 from "./component/2.PropsComponent";
import PropsCm3 from "./component/3.NonStructProps";
import PropsCm4 from "./component/4.NonStructParam";
import PropsCm5 from "./component/5.ClassComponent";

const App2 = () => {
	return <PropsCm5 name="ShinYS" testParam = {3} > App2에서 PropsCm으로 보내는 값</PropsCm5>;
};

export default App2;
