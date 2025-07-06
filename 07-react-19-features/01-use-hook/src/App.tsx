import { Suspense } from "react";
import FetchTodoWithUse from "./with-use-hook/FetchTodo";
import FetchTodoWithoutUse from "./without-use-hook/FetchTodo";

const App = () => {
	return (
		<>
			<FetchTodoWithoutUse />

			<Suspense fallback={<h4>Loading Todo...</h4>}>
				<FetchTodoWithUse />
			</Suspense>
		</>
	);
};

export default App;
