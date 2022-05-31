import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Card = () => {
	const { state, setState } = useContext(Context);
	return <div>desde card{state}</div>;
};

export default Card;
