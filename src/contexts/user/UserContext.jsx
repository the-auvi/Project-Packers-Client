import { createContext, useReducer, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	// initialize state
	const initialState = {
		user: {
			email: null,
			fullName: null,
			id: null,
			role: null,
			access: null,
			avatar: null,
		},
		isLoading: true,
	};

	// reducer
	const UserReducer = (state, action) => {
		switch (action.type) {
			case 'SAVE_USER':
				return {
					user: {
						email: action.payload.email,
						fullName: action.payload.fullName,
						id: action.payload.id,
						role: action.payload.role,
						access: action.payload?.access,
						avatar: action.payload?.avatar,
					},
					isLoading: false,
				};
			case 'REMOVE_USER':
				return {
					user: {
						email: null,
						fullName: null,
						id: null,
						role: null,
						access: null,
						avatar: null,
					},
					isLoading: true,
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(UserReducer, initialState);

	console.log(state);

	return (
		<UserContext.Provider value={{ data: state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};
