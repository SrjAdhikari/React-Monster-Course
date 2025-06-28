import type { FC, ReactNode } from "react";

//* =============================================
//* 1. Typing Children Prop with Type Alias
//* =============================================

// type PersonShape = {
// 	children: ReactNode;
// };

// const Person = ({ children }: PersonShape) => {
// 	return (
// 		<div>
// 			<p>{children}</p>
// 		</div>
// 	);
// };

//* =============================================
//* 2. React Functional Component Type with Inline Props
//* =============================================

const Person: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div>
			<h3>{children}</h3>
		</div>
	);
};

export default Person;
