import React, { useState, createContext } from "react";

export const Context = createContext(null);

const UserProvider = ({ children }) => {
	const [state, setState] = useState("no hay color");
	return (
		<Context.Provider value={{ state, setState }}>
			{children}
		</Context.Provider>
	);
};

export default UserProvider;
