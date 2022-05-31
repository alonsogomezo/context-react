import React, { useContext } from "react";
import Card from "./Card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

//create your first component
const Home = () => {
	const { state, setState } = useContext(Context);
	return (
		<div>
			desde home{state}
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<Card />
			<button onClick={() => setState("azul")}>Cambiar color</button>
		</div>
	);
};

export default Home;
