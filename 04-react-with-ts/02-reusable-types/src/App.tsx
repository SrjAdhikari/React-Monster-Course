import Admin_Info from "./with-reusable-types/Admin_Info";
import User_Info from "./with-reusable-types/User_Info";

import AdminInfo from "./without-reusable-types/AdminInfo";
import UserInfo from "./without-reusable-types/UserInfo";

import AdminInformation from "../exercises/components/AdminInformation";
import UserInformation from "../exercises/components/UserInformation";

const App = () => {
	return (
		<>
			<div>
				<h2>Without Reusable Types</h2>
				<UserInfo
					username="Suraj"
					email="suraj@gmail.com"
					age={25}
					location={["Earth", "JPN"]}
				/>

				<AdminInfo
					username="Srj"
					email="srj@gmail.com"
					age={26}
					location={["Mars", "Unknown"]}
					admin="yes"
				/>
			</div>

			<div>
				<h2>With Reusable Types</h2>
				<User_Info
					username="Suraj"
					email="suraj@gmail.com"
					age={25}
					location={["Earth", "JPN"]}
				/>

				<Admin_Info
					username="Srj"
					email="srj@gmail.com"
					age={26}
					location={["Mars", "Unknown"]}
					admin="yes"
				/>
			</div>

			<div>
				{/* 👇 Exercises */}
				<h2
					style={{
						textDecoration: "underline",
						color: "Red",
					}}
				>
					Reusable Types Exercises
				</h2>
				<UserInformation id={1} name="John" email="john@gmail.com" />

				<AdminInformation
					id={2}
					name="Jane"
					email="jane@gmail.com"
					role="admin"
					lastLogin={new Date()}
				/>
			</div>
		</>
	);
};

export default App;
