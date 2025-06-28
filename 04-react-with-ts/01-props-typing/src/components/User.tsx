//* =============================================
//* 1. Basic Inline Props Typing
//*=============================================

/*
  const User = (props: { name: string; age: number }) => {
    return (
      <div>
        <p>Name is: {props.name}</p>
        <p>Age is: {props.age}</p>
      </div>
    );
  };
*/

//* =============================================
//* 2. Destructured Props with Inline Typing
//* =============================================

/*
  const User = ({ name, age }: { name: string; age: number }) => {
    return (
      <div>
        <p>Name is: {name}</p>
        <p>Age is: {age}</p>
      </div>
    );
  };
*/

//* =============================================
//* 3. Type Alias for Props
//* =============================================

/*
  type UserShape = {
    name: string;
    age: number;
  };

  const User = ({ name, age }: UserShape) => {
    return (
      <div>
        <p>Name is: {name}</p>
        <p>Age is: {age}</p>
      </div>
    );
  };
*/

//* =============================================
//* 4. Interface for Props
//* =============================================

/*
  interface UserShape {
    name: string;
    age: number;
  }

  const User = ({ name, age }: UserShape) => {
    return (
      <div>
        <p>Name is: {name}</p>
        <p>Age is: {age}</p>
      </div>
    );
  };
*/

//* =============================================
//* 5. React Functional Component with Explicit Type
//* =============================================

import type { FC } from "react";

type UserShape = {
	name: string;
	age: number;
};

const User: FC<UserShape> = ({ name, age }) => {
	return (
		<div>
			<p>Name is: {name}</p>
			<p>Age is: {age}</p>
		</div>
	);
};

export default User;
