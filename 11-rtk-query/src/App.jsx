// import AllProducts from "./components/AllProducts";
import AddNewProduct from "./components/AddNewProduct";
import DeleteProduct from "./components/DeleteProduct";
import SpecificProduct from "./components/SpecificProduct";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
	return (
		<div>
			{/* <AllProducts /> */}
			<SpecificProduct />
			<AddNewProduct />
			<UpdateProduct productId={4} />
			<DeleteProduct productId={2} />
		</div>
	);
};

export default App;
